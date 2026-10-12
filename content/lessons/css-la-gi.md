---
title: "CSS: quần áo của trang web"
minutes: 8
summary: "Vì sao cùng nội dung mà trang này đẹp, trang kia xấu - vai trò của CSS."
---

HTML quyết định **có gì** trên trang. CSS quyết định **trông như thế nào**. Cùng một bộ xương, CSS khác nhau tạo ra những trang web hoàn toàn khác nhau — giống như cùng một người, mặc áo khác nhau trông khác hẳn.

## CSS là gì?

CSS (Cascading Style Sheets) là ngôn ngữ mô tả **kiểu dáng**: màu sắc, kích thước, khoảng cách, font chữ, vị trí.

Ví dụ, với cùng đoạn HTML:

```html
<h1>Chào thế giới</h1>
```

CSS có thể làm nó thành:

```css
h1 {
  color: #dfa83c;
  font-size: 56px;
  text-align: center;
}
```

→ Tiêu đề màu vàng, to, căn giữa.

## Cú pháp CSS rất dễ nhớ

```css
chọn-gì {
  thuộc-tính: giá-trị;
}
```

- **Chọn gì:** thẻ HTML (`h1`, `p`) hoặc lớp (`class`).
- **Thuộc tính:** thứ bạn muốn đổi (màu, cỡ chữ, khoảng cách...).
- **Giá trị:** con số hoặc tên màu.

## Một số thuộc tính thông dụng

| Thuộc tính | Làm gì |
| --- | --- |
| `color` | Màu chữ |
| `background-color` | Màu nền |
| `font-size` | Cỡ chữ |
| `margin` | Khoảng cách ngoài (đẩy các phần tử ra xa nhau) |
| `padding` | Khoảng cách trong (tạo đệm bên trong) |
| `border-radius` | Bo góc (làm nút tròn) |
| `text-align` | Căn chữ trái/phải/giữa |

## Vì sao bạn cần biết CSS?

### 1. Hiểu vì sao website đẹp/xấu
Vẻ đẹp của website không phải phép màu — nó là hàng trăm quyết định nhỏ về màu, chữ, khoảng cách. Biết điều này giúp bạn đánh giá và chỉnh sửa website của mình có chủ đích.

### 2. Tinh chỉnh nhỏ không cần thuê người
Đổi màu nút, bo góc, chỉnh khoảng cách... nhiều việc nhỏ bạn có thể tự làm bằng "CSS bổ sung" trong WordPress (bài sau).

### 3. Hiểu theme hoạt động ra sao
Theme WordPress thật ra là một bộ CSS khổng lồ. Khi bạn đổi màu trong Tùy chỉnh, bạn đang thay giá trị trong CSS.

## Thử nghiệm an toàn

Trong WordPress, vào **Giao diện → Tùy chỉnh → CSS bổ sung** (Additional CSS). Thử:

```css
h2 {
  color: #3e7c58;
}
```

Lưu lại và xem — tất cả tiêu đề cấp 2 của bạn chuyển màu xanh lá. Muốn quay lại thì xóa dòng đó. Không làm hỏng gì cả.

> **Điểm mấu chốt:** CSS là "quần áo" của website: màu sắc, chữ nghĩa, khoảng cách. Cú pháp chỉ có 3 phần: chọn gì, đổi gì, thành gì. Biết chút CSS, bạn tự tin chỉnh sửa website mà không sợ làm hỏng.