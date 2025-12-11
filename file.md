Luồng xử lý chính theo từng trang (chi tiết)
============================================

Home (`src/views/Home.vue`)
---------------------------
- Dữ liệu: Khai báo tĩnh/mocked ngay trong file (aboutParagraphs, skills, education, workExperience, hardSkills, softSkills, blogPosts). Không gọi API.
- Luồng render: Hero (avatar, tên, mô tả) → Thông tin cá nhân (`PersonalInfoCard`) + giới thiệu ngắn (`AboutCard`) → Học vấn (`EducationSection`) → Kinh nghiệm (`WorkExperience`) → Kỹ năng cứng/mềm (`TechnicalSkills`) → Bài viết nổi bật (map `blogPosts` → `BlogCard`).
- Chỉ đọc dữ liệu tại chỗ, không side-effect.

About (`src/views/About.vue`)
-----------------------------
- Dùng các component con: `HeroSection`, `PersonalInfoCard`, `AboutCard`, `GallerySection`, `TimelineSection`.
- Dữ liệu paragraphs, skills, galleryImages, timelineEvents khai báo trong file và truyền xuống props.
- Hiển thị tĩnh, không gọi API.

Skills (`src/views/Skills.vue`)
-------------------------------
- Mock data: education, hardSkills, softSkills, workExperience, projects.
- Render tuần tự: `HeroSection` → `EducationSection` → `TechnicalSkills` → `WorkExperience` → `ProjectsSection`.
- Không side-effect, không fetch.

Blog (`src/views/Blog.vue`)
---------------------------
- State: `searchQuery`, `selectedCategory`, `currentPage`, `postsPerPage`.
- Data: `blogPosts` mock, có import ảnh (vue3, tj, css).
- Computed: `categories` (All + set category), `filteredPosts` (lọc theo category & keyword), `totalPages`, `paginatedPosts`.
- Handlers: `filterPosts` (reset về trang 1 khi đổi filter/search), `changePage`.
- Render: `BlogHero`, `BlogSearchFilter` (two-way bind), `BlogList` (posts đã phân trang), `BlogPagination`, `Newsletter`.
- Tất cả logic lọc/phân trang chạy client, không gọi API.

BlogDetail (`src/views/BlogDetail.vue` + `components/BlogDetail/*`)
-------------------------------------------------------------------
- Giả lập nhận một `post` rồi truyền vào các block: `BlogDetailHero`, `BlogDetailMeta`, `BlogDetailContent`, `BlogDetailShare`, `BlogDetailAuthor`, `BlogDetailComments`, `BlogDetailRelated`.
- `BlogDetailMeta`: hiển thị avatar từ `post.image`, fallback `assets/imgs/avatar.jpg`, emit sự kiện share/copyLink cho nút mạng xã hội.
- Comments/reactions hiện tĩnh, không call API.

Contact (`src/views/Contact.vue`)
---------------------------------
- State: `form`, `errors`, `isSubmitting`; hàm `validateForm` cục bộ.
- Submit flow:
  - Gửi fetch POST `http://localhost:5000/api/contact` với JSON body.
  - Parse JSON nếu header đúng; nếu không, fallback text.
  - Nếu `response.ok` và `data.success !== false`: mở modal Bootstrap (`ContactModal`) nếu có, hoặc alert; reset form.
  - Nếu backend trả `errors`: map vào `errors`; nếu không, alert message.
  - `catch`: log lỗi và alert thông báo kết nối.
- Sections: `ContactHero`, `ContactInfo`, `ContactForm`, `ContactSocial`, `ContactFAQ`, `ContactModal`.

Header/Footer (`src/components/Header.vue`, `Footer.vue`)
---------------------------------------------------------
- Header: điều hướng qua router-link đến các route chính, có toggle menu mobile nếu được định nghĩa.
- Footer: thông tin liên hệ, social links tĩnh.

Backend (`backend/server.js`) cho Contact
----------------------------------------
- Stack: Express + MongoDB (Mongoose) + Joi validation.
- Middleware: helmet, cors (cho localhost:3000/5173), rate limit 5 req/15 phút cho `/api/contact`, JSON body limit 10MB.
- POST `/api/contact`: validate body (Joi), lưu MongoDB, thử gửi email (nodemailer), vẫn trả success dù gửi email lỗi, nếu validation sai trả 400 kèm danh sách errors.
- GET `/api/contacts`: trả danh sách liên hệ (sort mới nhất).
- `/api/health`: trả trạng thái server.
- Error/404 handlers.

Ghi chú chung
-------------
- Frontend Vite, backend Node tách thư mục; dữ liệu trang đa số mock/tĩnh, chỉ Contact gọi API backend.