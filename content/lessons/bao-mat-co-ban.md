---
title: "Bảo mật cơ bản"
minutes: 9
summary: "Mật khẩu mạnh, cập nhật đúng cách và những thói quen chống hacker."
---

"Hacker" nghe đáng sợ, nhưng 90% website bị hack không phải vì hacker siêu đẳng — mà vì chủ website bỏ quên những việc cơ bản. Làm đúng các bước dưới đây, website của bạn an toàn hơn 95% website khác.

## 1. Mật khẩu mạnh (quan trọng nhất)

Mật khẩu yếu là cánh cửa mở cho hacker. Mật khẩu mạnh là:

- **12 ký tự trở lên**, gồm chữ hoa, chữ thường, số, ký tự đặc biệt.
- **Không dùng lại** mật khẩu ở nơi khác.
- **Không phải** tên bạn, tên công ty, ngày sinh, "123456".

**Mẹo:** dùng một câu dài làm mật khẩu: `PhoBo@HaNoi2026!` — dễ nhớ, khó đoán.

**Công cụ:** dùng trình quản lý mật khẩu (Bitwarden, Google Password Manager) để sinh và lưu mật khẩu.

## 2. Cập nhật đúng cách

WordPress, theme, plugin thường xuyên phát hành bản vá lỗi bảo mật. Không cập nhật = để cửa sổ mở.

**Quy trình cập nhật an toàn:**

1. **Sao lưu trước** (bài 9.1).
2. Cập nhật từng phần: plugin → theme → WordPress.
3. Kiểm tra website sau mỗi lần cập nhật.
4. Nếu lỗi: khôi phục bản sao lưu.

## 3. Bật xác thực 2 lớp (2FA)

2FA yêu cầu thêm một mã xác nhận khi đăng nhập — kể cả khi hacker biết mật khẩu, họ vẫn không vào được.

- Cài plugin **Wordfence** hoặc **Solid Security**, bật 2FA cho tài khoản quản trị.
- Dùng app xác thực (Google Authenticator) trên điện thoại.

## 4. Đổi tên đăng nhập mặc định

Tài khoản tên "admin" là mục tiêu dễ nhất. Khi cài WordPress (bài 4.1), đừng đặt tên "admin". Nếu đã đặt, tạo tài khoản quản trị mới tên khác rồi xóa tài khoản "admin".

## 5. Giới hạn lần thử đăng nhập

Plugin bảo mật cho phép giới hạn số lần đăng nhập sai (ví dụ 5 lần/giờ). Hacker thử mật khẩu hàng nghìn lần sẽ bị chặn.

## 6. Thói quen hàng ngày

- **Không đăng nhập từ wifi công cộng** khi không cần thiết.
- **Không cài plugin/theme lạ** (nhắc lại bài 4.6).
- **Cẩn thận email lạ** — "email từ hosting nói tài khoản sắp hết hạn, bấm vào đây" có thể là lừa đảo. Luôn vào thẳng trang quản trị để kiểm tra.
- **Đăng xuất** khi dùng máy công cộng.

## Checklist bảo mật tháng này

- [ ] Mật khẩu quản trị đã đổi sang mật khẩu mạnh?
- [ ] Đã bật 2FA?
- [ ] Tài khoản "admin" đã được thay thế?
- [ ] Plugin bảo mật đã cài và cấu hình?
- [ ] Mọi thứ đã cập nhật bản mới nhất?

> **Điểm mấu chốt:** Bảo mật không phải kỹ thuật cao siêu — là những thói quen cơ bản làm đúng: mật khẩu mạnh, cập nhật, 2FA, cảnh giác. Làm checklist trên một lần, website của bạn sẽ an toàn trong nhiều năm.