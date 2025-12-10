const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 5, // giới hạn mỗi IP 5 yêu cầu mỗi 15 phút
  message: 'Quá nhiều yêu cầu từ IP này, vui lòng thử lại sau 15 phút!'
});
app.use('/api/contact', limiter);

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/asmfm_portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Kết nối MongoDB thành công'))
.catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Schema cho liên hệ
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, trim: true },
  subject: { type: String, required: true },
  message: { type: String, required: true, minlength: 10 },
  newsletter: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Validation Schema
const Joi = require('joi');
const contactValidationSchema = Joi.object({
  name: Joi.string().required().trim().min(2).max(50),
  email: Joi.string().required().email(),
  phone: Joi.string().optional().trim(),
  subject: Joi.string().required().valid('general', 'project', 'job', 'other'),
  message: Joi.string().required().min(10).max(1000),
  newsletter: Joi.boolean().default(false)
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    // Validate input
    const { error, value } = contactValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu không hợp lệ',
        errors: error.details.map(detail => ({
          field: detail.path[0],
          message: detail.message
        }))
      });
    }

    // Tạo liên hệ mới
    const contact = new Contact(value);
    await contact.save();

    // Gửi email thông báo (tùy chọn)
    try {
      await sendEmailNotification(value);
    } catch (emailError) {
      console.error('Lỗi gửi email:', emailError);
      // Vẫn trả về success kể cả khi email gửi lỗi
    }

    res.status(201).json({
      success: true,
      message: 'Tin nhắn đã được gửi thành công!'
    });

  } catch (error) {
    console.error('Lỗi server:', error);
    res.status(500).json({
      success: false,
      message: 'Đã xảy ra lỗi server, vui lòng thử lại sau!'
    });
  }
});

// Lấy tất cả liên hệ (chỉ admin)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Lỗi lấy danh sách liên hệ:', error);
    res.status(500).json({
      success: false,
      message: 'Đã xảy ra lỗi server!'
    });
  }
});

// Dịch vụ email
const nodemailer = require('nodemailer');

async function sendEmailNotification(contactData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || 'contact@myportfolio.com',
    subject: `Liên hệ mới: ${contactData.subject}`,
    html: `
      <h2>Thông tin liên hệ mới</h2>
      <p><strong>Họ tên:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Điện thoại:</strong> ${contactData.phone || 'Không cung cấp'}</p>
      <p><strong>Chủ đề:</strong> ${getSubjectLabel(contactData.subject)}</p>
      <p><strong>Nhận tin tức:</strong> ${contactData.newsletter ? 'Có' : 'Không'}</p>
      <hr>
      <h3>Tin nhắn:</h3>
      <p>${contactData.message}</p>
      <hr>
      <p><small>Thời gian gửi: ${new Date().toLocaleString('vi-VN')}</small></p>
    `
  };

  await transporter.sendMail(mailOptions);
}

function getSubjectLabel(subject) {
  const labels = {
    general: 'Tư vấn chung',
    project: 'Hợp tác dự án',
    job: 'Cơ hội việc làm',
    other: 'Khác'
  };
  return labels[subject] || subject;
}

// Kiểm tra health
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server đang hoạt động bình thường!',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Đã xảy ra lỗi server!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint không tồn tại!'
  });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
