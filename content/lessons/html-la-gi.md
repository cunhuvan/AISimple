---
title: "HTML: bộ xương của trang web"
minutes: 9
summary: "Nhìn vào mã nguồn mà không sợ hãi: thẻ, phần tử và cấu trúc cơ bản."
---

Đến giờ bạn có thể đã nghe nói "HTML" và thấy nó đáng sợ. Thật ra HTML là thứ **đơn giản nhất** trong thế giới web — và bạn không cần thành thạo nó, chỉ cần hiểu để hết bỡ ngỡ.

## HTML là gì?

HTML (HyperText Markup Language) là ngôn ngữ mô tả **cấu trúc** của trang web: đâu là tiêu đề, đâu là đoạn văn, đâu là hình ảnh. Nó là **bộ xương** — quyết định các bộ phận nằm ở đâu.

## Thẻ (tag): viên gạch cơ bản

HTML dùng các **thẻ** để đánh dấu nội dung. Một thẻ có dạng:

```html
<tên-thẻ>Nội dung</tên-thẻ>
```

Ví dụ:

```html
<h1>Đây là tiêu đề lớn</h1>
<p>Đây là một đoạn văn.</p>
<img src="anh.jpg" alt="Mô tả ảnh" />
```

- `<h1>` → tiêu đề cấp 1 (lớn nhất).
- `<p>` → đoạn văn.
- `<img>` → hình ảnh (thẻ này không có phần đóng).
- `<a href="...">` → liên kết.

## Cấu trúc một trang HTML

Mọi trang web đều có khung giống nhau:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tiêu đề hiện trên tab trình duyệt</title>
  </head>
  <body>
    <h1>Chào thế giới</h1>
    <p>Nội dung hiển thị trên trang.</p>
  </body>
</html>
```

- **`<head>`** — "hậu trường": tiêu đề tab, mô tả, cài đặt. Khách không nhìn thấy.
- **`<body>`** — "sân khấu": mọi thứ khách nhìn thấy.

## Vì sao bạn cần biết điều này?

### 1. Hết sợ khi gặp lỗi
Khi website lỗi, bạn sẽ phải nhìn vào mã nguồn. Biết đọc sơ qua giúp bạn không hoảng và biết mô tả vấn đề cho người hỗ trợ.

### 2. Hiểu cách WordPress hoạt động
WordPress lưu nội dung của bạn và tự sinh HTML. Khi bạn dùng trình soạn thảo khối, thật ra bạn đang tạo HTML mà không biết.

### 3. Giao tiếp với chuyên gia
Khi thuê người sửa website, bạn nói "thẻ h1 bị trùng" thay vì "cái chữ to to bị lặp" — chuyên gia hiểu bạn ngay.

## Thử nghiệm an toàn

Bạn có thể xem HTML của bất kỳ website nào:

1. Mở website bất kỳ trong trình duyệt.
2. Bấm chuột phải → **Xem mã nguồn trang** (View Page Source).
3. Nhìn qua — bạn sẽ thấy các thẻ quen thuộc: `<h1>`, `<p>`, `<img>`...

Đừng lo nếu nhìn thấy hàng trăm dòng mã — 90% là cấu trúc lặp lại. Bạn chỉ cần nhận ra vài thẻ quen thuộc là đã "biết đọc" HTML rồi.

> **Điểm mấu chốt:** HTML là bộ xương — dùng thẻ để đánh dấu nội dung. Bạn không cần viết nó, chỉ cần đọc được sơ qua. Đó là đủ để bạn tự tin bước vào thế giới web.