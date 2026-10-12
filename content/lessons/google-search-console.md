---
title: "Google Search Console và Bing"
minutes: 7
summary: "Khai báo website với Google để được lập chỉ mục nhanh hơn."
---

Ở bài 8.2 bạn biết Google phải "biết" website thì mới xếp hạng. **Google Search Console** là công cụ chính thức để bạn nói với Google: "Website của tôi đây, đến mà xem." Nó miễn phí và cực kỳ quan trọng.

## Search Console là gì?

Google Search Console (GSC) là bảng điều khiển cho thấy Google **nhìn website của bạn như thế nào**:

- Google đã lập chỉ mục bao nhiêu trang?
- Khách tìm từ khóa gì để đến website?
- Trang nào xuất hiện trên Google, ở vị trí nào?
- Google có gặp lỗi gì khi truy cập website không?

## Cài đặt trong 4 bước

### Bước 1: Truy cập
Vào `search.google.com/search-console`, đăng nhập bằng tài khoản Google.

### Bước 2: Thêm website
Bấm **Thêm tài sản (Add property)**, chọn loại **Miền (Domain)** và nhập tên miền của bạn. (Cách này bao trùm cả `www` và không `www`.)

### Bước 3: Xác minh quyền sở hữu
Google yêu cầu chứng minh bạn sở hữu website. Cách dễ nhất:

1. Cài plugin **Site Kit by Google** (đã cài ở bài 9.3).
2. Trong Site Kit, kết nối Search Console — tự động xác minh.

Hoặc làm thủ công: tải file HTML xác minh, upload lên hosting qua trình quản lý file.

### Bước 4: Gửi sơ đồ trang (Sitemap)
Sitemap là "bản đồ" liệt kê mọi trang của website — giúp Google tìm thấy nhanh hơn:

1. Cài plugin SEO (Rank Math — bài 4.6) — nó tự tạo sitemap.
2. Vào GSC → **Sitemaps**.
3. Nhập `sitemap_index.xml` (hoặc `sitemap.xml`).
4. Bấm Gửi.

## Những việc làm sau khi cài

### 1. Yêu cầu lập chỉ mục
Mỗi khi đăng bài mới:

- Vào GSC → **Kiểm tra URL** (URL Inspection).
- Dán địa chỉ bài viết.
- Bấm **Yêu cầu lập chỉ mục** (Request Indexing).

Google sẽ ghé thăm nhanh hơn nhiều so với chờ tự nhiên.

### 2. Xem báo cáo hằng tuần
- **Hiệu suất (Performance):** từ khóa nào mang khách về, vị trí xếp hạng.
- **Chỉ mục (Indexing):** trang nào chưa được lập chỉ mục.
- **Trải nghiệm (Experience):** Google chấm website của bạn thế nào trên điện thoại.

### 3. Sửa lỗi được báo
GSC báo lỗi (trang 404, trang không lập chỉ mục được...) — đọc và sửa dần. Đây là "bác sĩ" miễn phí cho website.

## Bing: đừng bỏ qua

Bing (và Yahoo, DuckDuckGo — đều dùng dữ liệu Bing) vẫn chiếm một phần tìm kiếm đáng kể. Đăng ký **Bing Webmaster Tools** (`bing.com/webmasters`) — bạn có thể **nhập dữ liệu từ Google Search Console** chỉ với vài cú bấm, không cần làm lại từ đầu.

> **Điểm mấu chốt:** Search Console là công cụ quan trọng nhất sau khi website chạy. Cài qua Site Kit mất 10 phút, rồi mỗi tuần dành 15 phút xem báo cáo và yêu cầu lập chỉ mục cho bài mới. Google sẽ "nuôi" website của bạn tốt hơn hẳn.