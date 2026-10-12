---
title: "Vibe coding an toàn: rủi ro và cách kiểm tra"
minutes: 8
summary: "Những cạm bẫy của code do AI sinh ra và quy tắc bảo vệ website của bạn."
---

AI viết code nhanh, nhưng nhanh không đồng nghĩa với đúng và an toàn. Bài này dạy bạn nhận diện rủi ro và kiểm tra code do AI sinh ra — để vibe coding không biến website của bạn thành "quả bom hẹn giờ".

## 5 rủi ro phổ biến

### 1. Code sai mà trông có vẻ đúng
AI rất tự tin, kể cả khi sai. Nó có thể sinh code chạy được nhưng làm sai chức năng — ví dụ nút "Đặt bàn" không gửi thông tin đi đâu cả.

### 2. Lỗ hổng bảo mật
Code AI thường bỏ qua bảo mật: không kiểm tra dữ liệu nhập vào, lộ thông tin, dễ bị tấn công. Website nhận thông tin khách hàng mà không bảo vệ là nguy hiểm.

### 3. "Bịa" những thứ không tồn tại
AI có thể giới thiệu thư viện, tính năng, địa chỉ không có thật. Kiểm tra mọi thứ nó khẳng định.

### 4. Rò rỉ thông tin nhạy cảm
Khi bạn dán code hoặc dữ liệu vào AI, bạn đang gửi nó cho bên thứ ba. **Không bao giờ** dán mật khẩu, thẻ tín dụng, thông tin khách hàng vào chatbot.

### 5. Phụ thuộc mù quáng
Nếu bạn không hiểu gì về website của mình, khi AI "bỏ cuộc" hoặc công cụ đổi chính sách, bạn bế tắc.

## Quy tắc vàng khi vibe coding

### 1. Không đưa bí mật vào AI
Mật khẩu, API key, thông tin khách hàng, số tài khoản — **tuyệt đối không dán vào chatbot**. Che hoặc thay bằng chữ giữ chỗ: "mật_khẩu_ở_đây".

### 2. Không dùng cho thứ liên quan tiền bạc
Website thanh toán, ví điện tử, thu thập dữ liệu nhạy cảm — không phải việc của vibe coding. Thuê chuyên gia (bài 10.4).

### 3. Sao lưu trước khi thử
Trước khi dán code mới vào website thật, hãy sao lưu (bài 9.1). Code AI có thể làm hỏng website đang chạy tốt.

### 4. Thử trên "sân tập" trước
Đừng chỉnh thẳng website thật. Tạo bản thử (staging) hoặc thử trên máy tính trước, ưng rồi mới áp dụng.

## Cách kiểm tra code AI (không cần giỏi kỹ thuật)

### 1. Chạy thử từng chức năng
Bấm thử mọi nút, mọi form: nút có hoạt động không? Form có gửi được không? Thông tin có đến đúng chỗ không?

### 2. Yêu cầu AI giải thích
Hỏi: "Giải thích từng phần code này làm gì, đơn giản thôi." Nếu AI không giải thích được rõ ràng, hãy nghi ngờ.

### 3. Hỏi AI tự kiểm tra
Yêu cầu: "Soát lại code, tìm lỗi bảo mật và chỗ có thể hỏng." AI tự soát thường tìm ra vấn đề tốt hơn viết lần đầu.

### 4. Dùng công cụ kiểm tra miễn phí
- **Google PageSpeed Insights:** kiểm tra tốc độ (bài 8.4).
- **Kiểm tra trên điện thoại:** đảm bảo hiển thị đẹp (bài 7.4).
- **Kiểm tra HTTPS:** website có ổ khóa không (bài 2.5).

### 5. Nhờ mắt người khác
Người không quen thuộc với website sẽ thấy lỗi bạn bỏ sót. Nhờ 1–2 người thử và góp ý.

## Khi nào KHÔNG nên vibe coding

- Website xử lý **thanh toán, tiền bạc, hợp đồng**.
- Website thu thập **thông tin nhạy cảm** của khách hàng.
- Website là **bộ mặt chính** của doanh nghiệp lớn.
- Bạn **không có thời gian** kiểm tra và bảo trì.

Trong những trường hợp này, hãy dùng WordPress (chương 4) hoặc thuê chuyên gia — an toàn hơn nhiều.

> **Điểm mấu chốt:** Vibe coding là công cụ tuyệt vời cho website cá nhân, thử nghiệm ý tưởng, tăng tốc công việc — khi bạn kiểm tra kỹ và giữ nó tránh xa tiền bạc và dữ liệu nhạy cảm. Nền tảng bạn học trong khóa học này chính là "hệ miễn dịch" giúp bạn dùng AI an toàn.