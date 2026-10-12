---
title: "Máy tính nói chuyện với nhau thế nào"
minutes: 7
summary: "Mô hình khách - chủ (client - server) và hành trình của một trang web đến màn hình bạn."
---

Khi bạn bấm vào một liên kết, có hai "nhân vật" tham gia cuộc trò chuyện: **máy khách** và **máy chủ**. Hiểu được cuộc trò chuyện này, bạn sẽ hiểu vì sao website đôi khi chậm, đôi khi lỗi, và vì sao một số thứ lại quan trọng đến vậy.

## Hai vai diễn trong cuộc trò chuyện

**Máy khách (client)** là thiết bị bạn đang dùng: điện thoại, laptop, máy tính bảng. Nó "đi xin" thông tin.

**Máy chủ (server)** là máy tính luôn bật, chứa website. Nó "đáp ứng" yêu cầu.

Hãy tưởng tượng bạn gọi món trong nhà hàng:

1. Bạn (máy khách) giơ tay gọi: "Cho tôi một ly trà đá."
2. Người phục vụ ghi yêu cầu và chuyển xuống bếp.
3. Bếp (máy chủ) chuẩn bị trà.
4. Trà được mang lên bàn của bạn.

Trang web cũng vậy:

1. Trình duyệt của bạn gửi một **yêu cầu (request)**: "Gửi cho tôi trang chủ của tenmien.com."
2. Yêu cầu đi qua internet đến máy chủ.
3. Máy chủ tìm các tập tin cần thiết và gửi lại một **phản hồi (response)**.
4. Trình duyệt nhận phản hồi và vẽ trang web lên màn hình.

## Vì sao hiểu điều này giúp ích cho bạn?

### 1. Hiểu vì sao website chậm
Nếu máy chủ ở xa hoặc quá tải, "bếp" làm chậm, bạn chờ lâu hơn. Nếu hình ảnh quá nặng, "món ăn" to quá, vận chuyển cũng lâu hơn. Chương 8 sẽ dạy bạn cách làm "món ăn" gọn nhẹ.

### 2. Hiểu vì sao website lỗi
Khi bạn thấy "không thể truy cập trang web này", có thể là:
- Máy chủ đang tắt hoặc gặp sự cố (bếp đóng cửa).
- Tên miền chưa được nối đúng với máy chủ (địa chỉ sai).
- Internet của bạn bị gián đoạn (điện thoại hết pin).

### 3. Hiểu vì sao cần hosting tốt
Máy chủ là nền móng. Nhà hàng có bếp tốt mới phục vụ được nhiều khách. Website của bạn cũng cần một máy chủ đáng tin cậy.

## Một chi tiết thú vị

Máy chủ không chỉ phục vụ một người. Mỗi giây, nó có thể nhận hàng nghìn yêu cầu từ hàng nghìn máy khách khác nhau trên khắp thế giới. Vì vậy, khi bạn thuê hosting, bạn thật ra đang thuê một phần công suất của một cỗ máy rất lớn.

> **Điểm mấu chốt:** Mọi thứ trên web đều là một cuộc trò chuyện "xin - cho" giữa máy khách và máy chủ. Khi gặp sự cố, hãy tự hỏi: "Bên nào đang gặp vấn đề — bên xin hay bên cho?"