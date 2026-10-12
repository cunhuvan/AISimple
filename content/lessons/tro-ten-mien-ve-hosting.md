---
title: "Trỏ tên miền về hosting"
minutes: 7
summary: "Nối tên miền với hosting bằng bản ghi DNS - bước kỹ thuật duy nhất bạn cần làm."
---

Bạn đã có tên miền (địa chỉ) và hosting (ngôi nhà). Giờ cần "nối" hai thứ lại với nhau — bước kỹ thuật duy nhất trong toàn bộ khóa học, và nó dễ hơn bạn nghĩ.

## Có hai cách trỏ

### Cách 1: Trỏ nameserver (đơn giản nhất)

Mỗi nhà hosting có hai "địa chỉ quản lý" gọi là **nameserver**, ví dụ:

```
ns1.tennha.com
ns2.tennha.com
```

Bạn chỉ cần vào nơi quản lý **tên miền**, tìm mục "Nameservers" và thay bằng hai địa chỉ trên. Sau đó, nhà hosting tự lo phần còn lại.

**Khi nào dùng:** tên miền và hosting mua ở hai nơi khác nhau.

### Cách 2: Sửa bản ghi A (khi mua cùng nơi)

Nếu mua tên miền và hosting cùng một nhà cung cấp, họ thường **tự động nối** cho bạn. Nếu không, bạn vào quản lý DNS và thêm:

| Loại | Tên | Giá trị |
| --- | --- | --- |
| A | `@` (hoặc để trống) | Địa chỉ IP của hosting |
| CNAME | `www` | `tenmiencuaban.com` |

Địa chỉ IP và hướng dẫn cụ thể nằm trong email kích hoạt hosting của bạn.

## Thứ tự thực hiện

1. Đăng nhập nơi quản lý **tên miền**.
2. Tìm mục **DNS / Nameservers**.
3. Nhập nameserver (hoặc bản ghi A) theo hướng dẫn của hosting.
4. Lưu lại và **kiên nhẫn chờ**.

## Điều quan trọng: chờ lan truyền DNS

Sau khi sửa, thay đổi **không có hiệu lực ngay**. Mất từ 30 phút đến 48 giờ để toàn thế giới cập nhật. Trong thời gian này:

- Người này truy cập được, người kia chưa — đó là bình thường.
- Đừng sửa đi sửa lại — mỗi lần sửa lại đặt lại đồng hồ chờ.
- Kiểm tra bằng công cụ "DNS checker" trên web nếu muốn xem tiến trình.

## Cách kiểm tra đã trỏ thành công chưa

Mở trình duyệt, gõ tên miền của bạn. Nếu thấy:

- **Trang "đang cài đặt" hoặc trang mặc định của hosting** → đã trỏ thành công. Chúc mừng, website của bạn đã "có địa chỉ"!
- **Lỗi "không tìm thấy"** → chưa lan truyền xong hoặc nhập sai. Kiểm tra lại, chờ thêm vài giờ.

> **Điểm mấu chốt:** Trỏ tên miền chỉ là điền hai dòng chữ vào đúng ô. Việc khó nhất là... chờ. Hãy làm đúng một lần, chụp màn hình lại, và dành thời gian chờ đó để đọc chương tiếp theo.