---
title: "Sao lưu định kỳ"
minutes: 7
summary: "Quy tắc 3-2-1 và cách bật sao lưu tự động để không bao giờ mất dữ liệu."
---

Tưởng tượng: một sáng thức dậy, website của bạn biến mất. Bị hack, hosting sập, hoặc bạn lỡ tay xóa nhầm. Nếu không có bản sao lưu, toàn bộ công sức bay hơi.

Sao lưu là **bảo hiểm rẻ nhất** cho website — và nó gần như miễn phí.

## Sao lưu là gì?

Sao lưu (backup) là tạo **bản sao** toàn bộ website: nội dung, hình ảnh, cài đặt, dữ liệu. Khi website gặp sự cố, bạn khôi phục từ bản sao — như tua ngược thời gian.

## Quy tắc 3-2-1

Quy tắc kinh điển của giới chuyên nghiệp:

- **3** bản sao dữ liệu (1 bản gốc + 2 bản sao lưu).
- **2** nơi lưu trữ khác nhau (ví dụ: hosting + Google Drive).
- **1** bản lưu ở nơi khác với website (ngoài hosting).

## Cách bật sao lưu tự động

### Cách 1: Dùng plugin (dễ nhất)
1. Cài plugin **UpdraftPlus** (bài 4.6).
2. Vào **Cài đặt → UpdraftPlus Backups**.
3. Bấm **Cài đặt** → chọn lịch sao lưu: **hàng ngày** cho dữ liệu, **hàng tuần** cho toàn bộ.
4. Kết nối **Google Drive** (hoặc Dropbox) làm nơi lưu trữ.
5. Bấm **Lưu** — xong. Plugin tự động chạy.

### Cách 2: Dùng tính năng của hosting
Nhiều nhà hosting có sao lưu tự động sẵn. Kiểm tra trong bảng điều khiển hosting, bật nếu chưa bật.

## Kiểm tra: bản sao lưu có dùng được không?

Bản sao lưu không kiểm tra = bản sao lưu không tồn tại. Mỗi tháng một lần:

1. Vào UpdraftPlus → **Hiện có** (Existing backups).
2. Chọn bản sao gần nhất → **Khôi phục** (Restore).
3. Chọn "Khôi phục vào website hiện tại" — website sẽ được khôi phục từ bản sao.
4. Kiểm tra website hoạt động bình thường.

Việc này an toàn vì bạn khôi phục **đúng bản sao mới nhất** — không mất gì. Nó giống như tập dượt chữa cháy trước khi cháy thật.

## Khi nào cần khôi phục?

- Website bị hack, nội dung bị thay đổi.
- Lỡ tay xóa trang, bài viết, hoặc cài đặt hỏng.
- Cập nhật plugin/theme gây lỗi nặng.

## Lưu ý quan trọng

- **Sao lưu phải nằm NGOÀI hosting.** Nếu hosting sập, bản sao trong hosting cũng mất theo.
- **Ghi lịch kiểm tra vào lịch của bạn** — mỗi tháng một lần, 10 phút.
- **Trước khi cập nhật lớn** (đổi theme, cập nhật WordPress): chạy sao lưu thủ công trước.

> **Điểm mấu chốt:** Sao lưu tự động + lưu ngoài hosting + kiểm tra hàng tháng = bạn có thể ngủ ngon. Chi phí: 10 phút mỗi tháng. Chi phí không sao lưu: mất website và toàn bộ công sức.