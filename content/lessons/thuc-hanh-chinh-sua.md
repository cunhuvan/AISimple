---
title: "Thực hành: tinh chỉnh nhỏ an toàn"
minutes: 10
summary: "Bài tập đầu tiên: đổi màu, sửa chữ trong WordPress mà không làm hỏng gì."
---

Đây là bài thực hành đầu tiên. Mục tiêu: tự tay thay đổi website của bạn mà **không có rủi ro** — vì mọi thứ đều có thể hoàn tác.

## Nguyên tắc an toàn tuyệt đối

Trước khi làm bất cứ điều gì, hãy nhớ:

- **CSS bổ sung chỉ ảnh hưởng đến giao diện**, không đụng vào dữ liệu.
- **Mọi thay đổi đều có thể xóa** — chỉ cần xóa đoạn mã đã thêm.
- **Làm từng bước một**, lưu và kiểm tra sau mỗi bước.

## Bài tập 1: Đổi màu tiêu đề

1. Vào **Giao diện → Tùy chỉnh**.
2. Tìm mục **CSS bổ sung** (Additional CSS).
3. Dán đoạn này:

```css
h1, h2 {
  color: #3e7c58;
}
```

4. Bấm **Xuất bản**.
5. Mở website xem — tiêu đề chuyển màu xanh lá. Muốn quay lại màu cũ, xóa đoạn mã.

## Bài tập 2: Bo góc nút bấm

1. Vẫn ở CSS bổ sung, thêm:

```css
.wp-block-button__link {
  border-radius: 9999px;
}
```

2. Xuất bản và xem — các nút bấm trở nên tròn trịa hơn.

## Bài tập 3: Chỉnh khoảng cách

Thêm:

```css
.wp-block-image img {
  border-radius: 16px;
}
```

→ Ảnh trong bài viết có góc bo mềm mại. Đây là kiểu "chạm khéo" làm website trông chuyên nghiệp hơn hẳn.

## Bài tập 4: Sửa lỗi chính tả

1. Vào **Trang → Tất cả trang**.
2. Mở trang "Giới thiệu".
3. Bấm vào đoạn văn có lỗi, sửa chữ, bấm **Cập nhật**.

## Kiểm tra sau khi thực hành

- [ ] Website vẫn hiển thị bình thường?
- [ ] Trên điện thoại có ổn không?
- [ ] Nút bấm vẫn hoạt động?

## Khi gặp lỗi: bình tĩnh

Nếu website "vỡ" sau khi thêm CSS (hiếm gặp với các đoạn trên):

1. Vào **Giao diện → Tùy chỉnh → CSS bổ sung**.
2. **Xóa toàn bộ** đoạn mã vừa thêm.
3. Xuất bản — website trở lại bình thường.

Không có gì bị mất, vì CSS không đụng vào nội dung.

> **Điểm mấu chốt:** Bạn vừa làm điều mà nhiều người tưởng "phải là lập trình viên mới làm được". Hãy nhớ cảm giác này — nó sẽ tiếp thêm tự tin cho bạn trong các chương sau. Thực hành là cách học nhanh nhất.