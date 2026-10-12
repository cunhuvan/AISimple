export type LessonMeta = {
  slug: string;
  title: string;
  minutes: number;
  summary: string;
};

export type Chapter = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  lessons: LessonMeta[];
};

export const chapters: Chapter[] = [
  {
    id: "khoi-dong",
    number: 1,
    title: "Khởi động",
    tagline: "Nhìn tổng thể bức tranh trước khi bắt tay vào làm.",
    lessons: [
      {
        slug: "trang-web-la-gi",
        title: "Trang web là gì và nó hoạt động thế nào",
        minutes: 6,
        summary:
          "Hiểu bản chất của một trang web bằng ví dụ đời thường, không cần kiến thức kỹ thuật.",
      },
      {
        slug: "lo-trinh-khoa-hoc",
        title: "Lộ trình khóa học: bạn sẽ học được gì",
        minutes: 4,
        summary:
          "Bản đồ 11 chương của khóa học và cách học hiệu quả cho người bận rộn.",
      },
      {
        slug: "tu-vung-co-ban",
        title: "Từ vựng cơ bản: domain, hosting, URL, trình duyệt",
        minutes: 7,
        summary:
          "Những thuật ngữ bạn sẽ gặp suốt quá trình, giải thích bằng ngôn ngữ đời thường.",
      },
    ],
  },
  {
    id: "internet-hoat-dong",
    number: 2,
    title: "Internet và website hoạt động ra sao",
    tagline: "Nắm nguyên lý, mọi thứ sau đó trở nên dễ hiểu.",
    lessons: [
      {
        slug: "client-va-server",
        title: "Máy tính nói chuyện với nhau thế nào",
        minutes: 7,
        summary:
          "Mô hình khách - chủ (client - server) và hành trình của một trang web đến màn hình bạn.",
      },
      {
        slug: "ten-mien-la-gi",
        title: "Tên miền (domain) là gì và cách chọn",
        minutes: 8,
        summary:
          "Địa chỉ nhà trên internet, cách chọn tên hay, ngắn gọn và đáng nhớ.",
      },
      {
        slug: "hosting-la-gi",
        title: "Hosting là gì và các loại hosting",
        minutes: 8,
        summary:
          "Nơi ở của website: shared, VPS, cloud... nên chọn loại nào cho người mới.",
      },
      {
        slug: "dns-la-gi",
        title: "DNS: cuốn sổ địa chỉ của internet",
        minutes: 6,
        summary:
          "Vì sao gõ tên miền mà máy tính tìm được đúng máy chủ của bạn.",
      },
      {
        slug: "http-va-ssl",
        title: "HTTP, HTTPS và ổ khóa SSL",
        minutes: 6,
        summary:
          "Vì sao địa chỉ web bắt đầu bằng https và tại sao nó quan trọng với khách hàng.",
      },
    ],
  },
  {
    id: "chuan-bi",
    number: 3,
    title: "Chuẩn bị và chọn nền tảng",
    tagline: "Quyết định đúng ở bước này giúp bạn tiết kiệm hàng năm trời.",
    lessons: [
      {
        slug: "chuan-bi-gi",
        title: "Trước khi bắt đầu: cần chuẩn bị những gì",
        minutes: 5,
        summary:
          "Ý tưởng, tên website, nội dung tối thiểu và ngân sách dự kiến.",
      },
      {
        slug: "chon-nen-tang",
        title: "Chọn nền tảng: WordPress, no-code hay thuê lập trình viên",
        minutes: 9,
        summary:
          "So sánh ba con đường phổ biến nhất và lời khuyên cho từng trường hợp.",
      },
      {
        slug: "mua-ten-mien",
        title: "Mua tên miền: hướng dẫn từng bước",
        minutes: 8,
        summary:
          "Chọn nhà đăng ký uy tín, kiểm tra tên còn trống và hoàn tất thanh toán.",
      },
      {
        slug: "mua-hosting",
        title: "Mua hosting: hướng dẫn từng bước",
        minutes: 8,
        summary:
          "Đọc hiểu thông số hosting và chọn gói phù hợp với nhu cầu thật sự.",
      },
      {
        slug: "tro-ten-mien-ve-hosting",
        title: "Trỏ tên miền về hosting",
        minutes: 7,
        summary:
          "Nối tên miền với hosting bằng bản ghi DNS - bước kỹ thuật duy nhất bạn cần làm.",
      },
    ],
  },
  {
    id: "xay-website",
    number: 4,
    title: "Xây website đầu tiên (không cần code)",
    tagline: "Từ trang trắng đến website hoạt động trong một buổi chiều.",
    lessons: [
      {
        slug: "cai-dat-wordpress",
        title: "Cài đặt WordPress",
        minutes: 8,
        summary:
          "Cài WordPress bằng trình cài đặt 1 click của nhà hosting - đơn giản hơn bạn nghĩ.",
      },
      {
        slug: "chon-va-cai-theme",
        title: "Chọn và cài giao diện (theme)",
        minutes: 8,
        summary:
          "Tiêu chí chọn theme đẹp, nhanh và cách cài đặt an toàn.",
      },
      {
        slug: "tao-trang-va-bai-viet",
        title: "Tạo trang và bài viết",
        minutes: 9,
        summary:
          "Phân biệt trang tĩnh và bài viết, cách dùng trình soạn thảo khối.",
      },
      {
        slug: "menu-va-cau-truc",
        title: "Menu, tiêu đề và cấu trúc website",
        minutes: 7,
        summary:
          "Sắp xếp menu hợp lý để khách truy cập tìm thấy thứ họ cần trong 3 giây.",
      },
      {
        slug: "hinh-anh-va-video",
        title: "Hình ảnh và video",
        minutes: 7,
        summary:
          "Tối ưu ảnh để trang tải nhanh và cách nhúng video YouTube.",
      },
      {
        slug: "plugin-can-thiet",
        title: "Plugin thiết yếu cho người mới",
        minutes: 8,
        summary:
          "Danh sách plugin nên cài ngay và danh sách nên né xa.",
      },
    ],
  },
  {
    id: "html-css",
    number: 5,
    title: "Hiểu chút về HTML và CSS",
    tagline: "Không cần thành lập trình viên, chỉ cần hết bỡ ngỡ.",
    lessons: [
      {
        slug: "html-la-gi",
        title: "HTML: bộ xương của trang web",
        minutes: 9,
        summary:
          "Nhìn vào mã nguồn mà không sợ hãi: thẻ, phần tử và cấu trúc cơ bản.",
      },
      {
        slug: "css-la-gi",
        title: "CSS: quần áo của trang web",
        minutes: 8,
        summary:
          "Vì sao cùng nội dung mà trang này đẹp, trang kia xấu - vai trò của CSS.",
      },
      {
        slug: "thuc-hanh-chinh-sua",
        title: "Thực hành: tinh chỉnh nhỏ an toàn",
        minutes: 10,
        summary:
          "Bài tập đầu tiên: đổi màu, sửa chữ trong WordPress mà không làm hỏng gì.",
      },
    ],
  },
  {
    id: "vibe-coding",
    number: 6,
    title: "Vibe coding: làm web bằng AI",
    tagline:
      "Xu hướng nóng nhất hiện nay — dùng AI tạo website bằng câu chữ, không cần gõ code.",
    lessons: [
      {
        slug: "vibe-coding-la-gi",
        title: "Vibe coding là gì — làm web bằng trò chuyện với AI",
        minutes: 7,
        summary:
          "Hiểu xu hướng làm web bằng AI, vì sao nó hot và nó phù hợp (hay không) với bạn.",
      },
      {
        slug: "tao-website-bang-ai",
        title: "Thực hành: tạo một trang web bằng AI",
        minutes: 10,
        summary:
          "Quy trình 5 bước từ ý tưởng đến website thật, kèm prompt mẫu dùng được ngay.",
      },
      {
        slug: "vibe-coding-an-toan",
        title: "Vibe coding an toàn: rủi ro và cách kiểm tra",
        minutes: 8,
        summary:
          "Những cạm bẫy của code do AI sinh ra và quy tắc bảo vệ website của bạn.",
      },
    ],
  },
  {
    id: "thiet-ke",
    number: 7,
    title: "Thiết kế đẹp cho người không chuyên",
    tagline: "Website đẹp không cần tốn triệu đô.",
    lessons: [
      {
        slug: "nguyen-tac-thiet-ke",
        title: "Nguyên tắc thiết kế cơ bản",
        minutes: 8,
        summary:
          "Bốn nguyên tắc giúp mọi trang web trông chuyên nghiệp hơn ngay lập tức.",
      },
      {
        slug: "mau-sac-va-chu-viet",
        title: "Màu sắc và chữ viết",
        minutes: 8,
        summary:
          "Chọn bảng màu và font chữ phù hợp với thương hiệu của bạn.",
      },
      {
        slug: "responsive-la-gi",
        title: "Hiển thị đẹp trên điện thoại (responsive)",
        minutes: 7,
        summary:
          "Vì sao hơn một nửa khách truy cập của bạn đến từ điện thoại.",
      },
      {
        slug: "kiem-tra-da-thiet-bi",
        title: "Kiểm tra trang trên nhiều thiết bị",
        minutes: 6,
        summary:
          "Tự kiểm tra nhanh bằng điện thoại, máy tính bảng và máy tính để bàn.",
      },
    ],
  },
  {
    id: "noi-dung-va-seo",
    number: 8,
    title: "Nội dung và SEO",
    tagline: "Có website rồi, làm sao để người khác tìm thấy?",
    lessons: [
      {
        slug: "viet-noi-dung",
        title: "Viết nội dung người đọc muốn đọc",
        minutes: 8,
        summary:
          "Công thức viết bài cho người không phải nhà văn: giải quyết vấn đề của khách.",
      },
      {
        slug: "seo-la-gi",
        title: "SEO là gì và Google hoạt động ra sao",
        minutes: 9,
        summary:
          "Cách Google xếp hạng trang web và những điều bạn có thể làm ngay.",
      },
      {
        slug: "toi-uu-tieu-de",
        title: "Tối ưu tiêu đề, mô tả và từ khóa",
        minutes: 8,
        summary:
          "Viết tiêu đề và mô tả khiến người ta muốn bấm vào.",
      },
      {
        slug: "toc-do-tai-trang",
        title: "Tốc độ tải trang và tối ưu hình ảnh",
        minutes: 8,
        summary:
          "Trang tải chậm 1 giây là mất khách - cách kiểm tra và cải thiện.",
      },
    ],
  },
  {
    id: "van-hanh",
    number: 9,
    title: "Vận hành và bảo trì",
    tagline: "Website như cái cây: trồng xong phải tưới.",
    lessons: [
      {
        slug: "sao-luu-dinh-ky",
        title: "Sao lưu định kỳ",
        minutes: 7,
        summary:
          "Quy tắc 3-2-1 và cách bật sao lưu tự động để không bao giờ mất dữ liệu.",
      },
      {
        slug: "bao-mat-co-ban",
        title: "Bảo mật cơ bản",
        minutes: 9,
        summary:
          "Mật khẩu mạnh, cập nhật đúng cách và những thói quen chống hacker.",
      },
      {
        slug: "analytics",
        title: "Theo dõi lượt truy cập (Analytics)",
        minutes: 8,
        summary:
          "Biết ai đang ghé thăm, họ xem gì - cài Google Analytics không hề khó.",
      },
      {
        slug: "su-co-thuong-gap",
        title: "Xử lý sự cố thường gặp",
        minutes: 8,
        summary:
          "Màn hình trắng, website chậm, bị hack... bình tĩnh, đây là cách xử lý.",
      },
    ],
  },
  {
    id: "phat-trien",
    number: 10,
    title: "Phát triển và kết nối người đọc",
    tagline: "Biến website thành kênh kinh doanh thật sự.",
    lessons: [
      {
        slug: "quang-ba-mang-xa-hoi",
        title: "Giới thiệu website qua mạng xã hội",
        minutes: 7,
        summary:
          "Đưa website lên Facebook, Zalo, TikTok... một cách tự nhiên không phản cảm.",
      },
      {
        slug: "email-marketing",
        title: "Email marketing cơ bản",
        minutes: 8,
        summary:
          "Xây danh sách email ngay từ ngày đầu - tài sản quý giá nhất của bạn.",
      },
      {
        slug: "google-search-console",
        title: "Google Search Console và Bing",
        minutes: 7,
        summary:
          "Khai báo website với Google để được lập chỉ mục nhanh hơn.",
      },
      {
        slug: "khi-nao-thue-chuyen-gia",
        title: "Khi nào cần thuê chuyên gia",
        minutes: 6,
        summary:
          "Biết giới hạn của mình để thuê đúng người, đúng việc, đúng thời điểm.",
      },
    ],
  },
  {
    id: "ket-thuc",
    number: 11,
    title: "Vượt mốc: những bước tiếp theo",
    tagline: "Tổng kết hành trình và con đường phía trước.",
    lessons: [
      {
        slug: "tong-ket-va-buoc-tiep-theo",
        title: "Ôn tập và các bước tiếp theo",
        minutes: 6,
        summary:
          "Nhìn lại toàn bộ hành trình và lộ trình phát triển sau khi website lên sóng.",
      },
    ],
  },
];

export const allLessons: LessonMeta[] = chapters.flatMap((c) =>
  c.lessons.map((l) => ({ ...l, chapterId: c.id, chapterNumber: c.number })),
);

export function getChapterByLessonSlug(slug: string): Chapter {
  const chapter = chapters.find((c) =>
    c.lessons.some((l) => l.slug === slug),
  );
  if (!chapter) throw new Error(`Không tìm thấy chương chứa bài "${slug}"`);
  return chapter;
}

export function getLessonIndex(slug: string): number {
  return allLessons.findIndex((l) => l.slug === slug);
}

export function getAdjacentLessons(
  slug: string,
): { prev: LessonMeta | null; next: LessonMeta | null } {
  const idx = getLessonIndex(slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? allLessons[idx - 1] : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
  };
}
