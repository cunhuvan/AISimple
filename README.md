# Mầm Web

Khóa học tiếng Việt dành cho người không chuyên: hiểu và tự tay tạo, vận hành một website từ đầu tới cuối — không cần biết lập trình.

## Nội dung

- **11 chương, 42 bài học** (mỗi bài 4–10 phút) đi theo lộ trình: hiểu internet → chuẩn bị domain/hosting → xây website với WordPress → HTML/CSS căn bản → vibe coding (làm web bằng AI) → thiết kế → SEO → vận hành → phát triển.
- **Đánh dấu tiến độ học** lưu trên trình duyệt (localStorage).
- Trang chủ có roadmap 11 chương, trang khóa học liệt kê toàn bộ chương trình, trang bài học có sidebar điều hướng và nút bài trước/sau.

## Công nghệ

- [Next.js](https://nextjs.org) 16 (App Router, static export `output: "export"`)
- Tailwind CSS v4
- Nội dung bài học viết bằng Markdown trong `content/lessons/`, chương trình học khai báo trong `src/data/course.ts`
- Font: Be Vietnam Pro (nội dung) + Source Serif 4 (tiêu đề), hỗ trợ tiếng Việt đầy đủ

## Cấu trúc thư mục

```
content/lessons/        # 42 bài học dạng Markdown (frontmatter: title, minutes, summary)
src/data/course.ts      # Chương trình khóa học: chương + danh sách bài
src/lib/lessons.ts      # Đọc + render Markdown thành HTML
src/lib/progress.ts     # Store tiến độ học (localStorage + useSyncExternalStore)
src/components/         # Header, Footer, Sidebar, Roadmap, ProgressToggle, ...
src/app/                # Trang chủ, /khoa-hoc, /bai-hoc/[slug], 404
```

## Chạy và build

```bash
pnpm install
pnpm dev        # dev server
pnpm build      # build static export vào out/
pnpm lint       # ESLint
```

## Preview

Preview chạy qua podman-compose (`podman-compose.preview.vibeflow.yaml` + `nginx.preview.conf`) phục vụ bản static export trên cổng 5173. Dùng nút Run Preview trong VibeFlow để xem.
