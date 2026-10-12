import Link from "next/link";
import { getAdjacentLessons } from "@/data/course";

export default function PrevNext({ slug }: { slug: string }) {
  const { prev, next } = getAdjacentLessons(slug);

  return (
    <nav
      aria-label="Điều hướng bài học"
      className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/bai-hoc/${prev.slug}`}
          className="group rounded-2xl border border-line bg-paper p-5 transition-all hover:border-leaf/40 hover:bg-leaf/5"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-ink/45">
            ← Bài trước
          </span>
          <span className="mt-1.5 block font-display text-base font-bold leading-snug text-pine transition-colors group-hover:text-leaf-dark">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/bai-hoc/${next.slug}`}
          className="group rounded-2xl border border-line bg-paper p-5 text-right transition-all hover:border-leaf/40 hover:bg-leaf/5"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-ink/45">
            Bài tiếp theo →
          </span>
          <span className="mt-1.5 block font-display text-base font-bold leading-snug text-pine transition-colors group-hover:text-leaf-dark">
            {next.title}
          </span>
        </Link>
      ) : (
        <Link
          href="/khoa-hoc"
          className="group rounded-2xl border border-line bg-paper p-5 text-right transition-all hover:border-gold/50 hover:bg-gold/5"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-ink/45">
            Hoàn thành khóa học 🎉 →
          </span>
          <span className="mt-1.5 block font-display text-base font-bold leading-snug text-pine transition-colors group-hover:text-clay">
            Xem lại toàn bộ chương trình
          </span>
        </Link>
      )}
    </nav>
  );
}