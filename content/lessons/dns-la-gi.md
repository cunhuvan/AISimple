---
title: "DNS: cuốn sổ địa chỉ của internet"
minutes: 6
summary: "Vì sao gõ tên miền mà máy tính tìm được đúng máy chủ của bạn."
---

Bạn gõ `tencongty.com` vào trình duyệt. Nhưng máy tính không hiểu chữ — nó chỉ hiểu các dãy số như `123.45.67.89`. Vậy làm sao nó tìm đúng máy chủ của bạn?

Câu trả lời nằm ở **DNS** — một hệ thống được ví như cuốn sổ địa chỉ của internet.

## DNS là gì?

DNS (Domain Name System) là hệ thống **dịch tên miền sang địa chỉ số**. Giống như bạn không cần nhớ số điện thoại của bạn bè vì đã lưu tên trong danh bạ — máy tính không cần nhớ dãy số dài vì có DNS "tra cứu" giúp.

Mỗi máy chủ trên internet có một **địa chỉ IP** — dãy số duy nhất như `203.113.130.66`. DNS ghi lại: "tên miền này ↔ địa chỉ IP này".

## Hành trình tra cứu trong tích tắc

Khi bạn gõ tên miền:

1. Trình duyệt hỏi máy chủ DNS: "IP của `tencongty.com` là bao nhiêu?"
2. DNS tìm trong "danh bạ" và trả lời: "Nó ở `203.113.130.66`."
3. Trình duyệt đến thẳng địa chỉ đó và tải website.

Toàn bộ diễn ra trong vài phần nghìn giây. Bạn không hề nhận ra.

## Vì sao bạn cần biết về DNS?

Vì khi tạo website, bạn sẽ phải làm một việc gọi là **trỏ tên miền về hosting** — tức là thêm một "trang danh bạ" ghi: "tên miền của tôi ↔ máy chủ của nhà hosting". Bài 3.5 sẽ hướng dẫn chi tiết.

Có vài loại "trang danh bạ" (bản ghi DNS) bạn sẽ gặp:

- **A record:** nối tên miền với địa chỉ IP của máy chủ.
- **CNAME:** nối tên miền với một tên miền khác (ví dụ `www` trỏ về tên chính).
- **MX record:** nối tên miền với máy chủ email (để có email `ban@tencongty.com`).

## Những điều cần biết khi sửa DNS

- **Thay đổi không có hiệu lực ngay.** Sau khi sửa, thế giới cần vài giờ đến 48 giờ để cập nhật — gọi là "thời gian lan truyền DNS". Đừng hoảng nếu website chưa hoạt động ngay.
- **Sửa đúng chỗ.** Bản ghi DNS được quản lý ở nơi bạn **đăng ký tên miền** (hoặc nơi bạn trỏ nameserver về).
- **Ghi lại cẩn thận.** Mỗi lần sửa DNS, hãy chụp màn hình lại — phòng khi cần khôi phục.

> **Điểm mấu chốt:** DNS là "cuốn sổ địa chỉ" giúp máy tính tìm website. Khi mua tên miền và hosting, bạn chỉ cần làm đúng một lần thao tác "trỏ" — và chờ lan truyền. Không có gì đáng sợ cả.