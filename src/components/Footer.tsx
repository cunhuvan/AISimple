import Link from "next/link";
import { chapters } from "@/data/course";
import { SproutIcon } from "./Header";

export default function Footer() {
  return (
    <footer className="mt-24 bg-pine text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-leaf text-paper">
                <SproutIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold">Mầm Web</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
              Khóa học tiếng Việt giúp người không chuyên hiểu và tự tay tạo,
              vận hành một website từ đầu tới cuối — không cần biết lập trình.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
              Khóa học
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
              {chapters.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/khoa-hoc#chuong-${c.number}`}
                    className="transition-colors hover:text-gold-light"
                  >
                    Chương {c.number}. {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
              Liên kết
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-light">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/khoa-hoc"
                  className="transition-colors hover:text-gold-light"
                >
                  Chương trình khóa học
                </Link>
              </li>
              <li>
                <Link
                  href="/khoa-hoc"
                  className="transition-colors hover:text-gold-light"
                >
                  Bắt đầu học
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Mầm Web. Học làm website cho người
            không chuyên.
          </p>
          <p>Trồng một trang web, tưới nước mỗi tuần.</p>
        </div>
      </div>
    </footer>
  );
}