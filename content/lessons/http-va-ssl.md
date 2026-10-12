---
title: "HTTP, HTTPS và ổ khóa SSL"
minutes: 6
summary: "Vì sao địa chỉ web bắt đầu bằng https và tại sao nó quan trọng với khách hàng."
---

Nhìn lên thanh địa chỉ trình duyệt, bạn sẽ thấy mỗi trang web bắt đầu bằng `http://` hoặc `https://`. Chữ "s" nhỏ bé đó thật ra là một trong những thứ quan trọng nhất với website của bạn.

## HTTP là gì?

HTTP là "ngôn ngữ" mà máy khách và máy chủ dùng để nói chuyện. Nó quy định: bên xin gửi yêu cầu thế nào, bên cho trả lời ra sao.

Vấn đề: HTTP truyền dữ liệu **không mã hóa**. Giống như gửi thư tay không bọc phong bì — ai dọc đường cũng đọc được nội dung.

## HTTPS và SSL: chiếc phong bì niêm phong

**SSL/TLS** là công nghệ mã hóa dữ liệu giữa trình duyệt và máy chủ. Khi website dùng SSL, địa chỉ trở thành **HTTPS** và trình duyệt hiện biểu tượng **ổ khóa** 🔒.

Hãy hình dung:

- **HTTP:** gửi thư trần, ai cũng đọc được.
- **HTTPS:** gửi thư trong phong bì niêm phong, chỉ người nhận mở được.

Khi khách hàng nhập thông tin trên website của bạn — tên, số điện thoại, địa chỉ, thẻ tín dụng — HTTPS đảm bảo dữ liệu đó không bị đọc trộm trên đường truyền.

## Vì sao HTTPS bắt buộc với mọi website?

### 1. Bảo vệ khách hàng
Ngay cả website không bán hàng cũng thu thập thông tin qua biểu mẫu liên hệ. Dữ liệu của khách phải được bảo vệ.

### 2. Tạo lòng tin
Trình duyệt hiện cảnh báo "Không an toàn" với website HTTP. Bạn có dám nhập thông tin vào trang bị cảnh báo đó không?

### 3. Được Google ưu tiên
Google xếp hạng website HTTPS cao hơn website HTTP cùng chất lượng. Đây là một phần của SEO.

## Tin tốt: HTTPS giờ là miễn phí

Trước đây, chứng chỉ SSL phải mua (vài triệu đồng/năm). Ngày nay:

- Hầu hết nhà hosting đều **tặng kèm SSL miễn phí** (qua dịch vụ Let's Encrypt).
- Nhiều nền tảng như WordPress.com, Wix, Shopify tự động bật HTTPS cho bạn.
- Bạn chỉ cần kiểm tra: website của mình có hiện ổ khóa không. Nếu không, bật SSL trong bảng điều khiển hosting — thường chỉ là một nút bấm.

## Cách kiểm tra nhanh

Mở website của bạn trong trình duyệt và nhìn thanh địa chỉ:

- 🔒 + `https://` → an toàn, tốt.
- ⚠️ + `http://` → cần bật SSL ngay.

> **Điểm mấu chốt:** HTTPS là tiêu chuẩn tối thiểu của mọi website hiện đại. May mắn là nó đã miễn phí và chỉ mất một nút bấm để bật. Đừng để website của bạn là trang duy nhất trên internet còn "gửi thư trần".