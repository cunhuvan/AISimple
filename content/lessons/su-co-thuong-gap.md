---
title: "Xử lý sự cố thường gặp"
minutes: 8
summary: "Màn hình trắng, website chậm, bị hack... bình tĩnh, đây là cách xử lý."
---

Website sẽ có lúc gặp sự cố. Điều quan trọng không phải là không bao giờ gặp — mà là **bình tĩnh và xử lý đúng quy trình**. Bài này là "tủ thuốc" cho những sự cố phổ biến nhất.

## Nguyên tắc chung khi gặp sự cố

1. **Bình tĩnh.** Hầu hết sự cố đều sửa được, và bạn có bản sao lưu (bài 9.1).
2. **Xác định phạm vi:** chỉ một trang lỗi hay toàn website? Chỉ bạn thấy hay ai cũng thấy?
3. **Nhớ lại thay đổi gần nhất:** vừa cập nhật gì, cài gì, sửa gì? 90% sự cố đến từ thay đổi gần nhất.
4. **Hoàn tác thay đổi đó** — thường là hết lỗi.

## Sự cố 1: Màn hình trắng (White Screen of Death)

Website hiện trang trắng trơn, không lỗi gì.

**Nguyên nhân phổ biến:** plugin/theme vừa cập nhật bị lỗi.

**Xử lý:**
1. Vào **Plugin → Đã cài đặt**.
2. **Vô hiệu hóa** plugin vừa cập nhật/cài gần nhất.
3. Nếu không vào được trang quản trị: vào bảng điều khiển hosting → quản lý file → thư mục `wp-content/plugins/` → **đổi tên** thư mục plugin nghi ngờ (thêm chữ `_off`).
4. Website hoạt động lại → plugin đó là thủ phạm, xóa hoặc cập nhật lại.

## Sự cố 2: Website chậm đột ngột

**Xử lý theo thứ tự:**
1. Kiểm tra **hình ảnh** vừa tải lên có quá nặng không.
2. Vô hiệu hóa từng plugin mới cài xem hết chậm không.
3. Xem hosting có thông báo quá tải không.
4. Bật cache nếu chưa bật (bài 8.4).

## Sự cố 3: Không vào được trang quản trị

**Xử lý:**
1. Kiểm tra mật khẩu — dùng tính năng "Quên mật khẩu".
2. Kiểm tra email — có thể bạn bị khóa vì nhập sai nhiều lần (plugin bảo mật), chờ hết giờ khóa.
3. Kiểm tra website công khai có hoạt động không — nếu có, vấn đề ở tài khoản, không phải website.

## Sự cố 4: Website bị hack

**Dấu hiệu:** nội dung bị thay đổi, chuyển hướng sang trang lạ, cảnh báo của Google, plugin bảo mật báo mã độc.

**Xử lý:**
1. **Khôi phục bản sao lưu sạch** (bài 9.1) — nhanh nhất và an toàn nhất.
2. **Đổi ngay tất cả mật khẩu:** quản trị, hosting, email.
3. Bật 2FA (bài 9.2).
4. Cập nhật mọi thứ lên bản mới nhất.
5. Nếu không tự xử lý được: liên hệ nhà hosting — họ có dịch vụ dọn mã độc.

## Sự cố 5: Email không gửi được từ website

Form liên hệ không gửi email về hộp thư của bạn.

**Xử lý:**
1. Kiểm tra thư rác (spam) trước — thường bị rơi vào đó.
2. Cài plugin **WP Mail SMTP** và cấu hình gửi qua Gmail (miễn phí).
3. Kiểm tra lại form.

## Khi nào cần gọi hỗ trợ?

Tự xử lý trong **30 phút** không xong → gọi **hỗ trợ hosting** (miễn phí, 24/7 với hầu hết nhà cung cấp). Chuẩn bị sẵn:

- Địa chỉ website, tên tài khoản hosting.
- Sự cố xảy ra khi nào, sau thay đổi gì.
- Ảnh chụp màn hình lỗi.

## Lập "sổ tay sự cố"

Tạo một file ghi lại: ngày, sự cố, nguyên nhân, cách xử lý. Lần sau gặp lại, bạn xử lý trong 5 phút thay vì 30.

> **Điểm mấu chốt:** 90% sự cố bắt nguồn từ thay đổi gần nhất — hoàn tác là hết. Còn lại: sao lưu để khôi phục, hosting để hỗ trợ. Bạn không cần giỏi kỹ thuật, chỉ cần bình tĩnh và làm đúng quy trình.