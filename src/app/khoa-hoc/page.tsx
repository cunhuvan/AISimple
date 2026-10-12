import Link from "next/link";
import { chapters, allLessons } from "@/data/course";
import { getTotalMinutes } from "@/lib/lessons";
import ProgressBar from "@/components/ProgressBar";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Chương trình khóa học",
  description:
    "Toàn bộ chương trình khóa học Mầm Web: 11 chương, 42 bài học giúp người không chuyên tạo và vận hành website từ đầu tới cuối.",
};

export default function CoursePage() {
  const totalMinutes = getTotalMinutes();

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24">
      {/* Header */}
      <section className="py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay">
          Chương trình khóa học
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-pine sm:text-5xl">
          Từ trang trắng đến website chạy thật
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
          {chapters.length} chương · {allLessons.length} bài học ·{" "}
          {totalMinutes} phút. Học tuần tự, làm theo từng bước — mỗi bài chỉ
          4–10 phút.
        </p>
        <div className="mt-8 max-w-md">
          <ProgressBar total={allLessons.length} />
        </div>
      </section>

      {/* Curriculum */}
      <div className="space-y-10">
        {chapters.map((chapter, i) => (
          <Reveal key={chapter.id} delay={Math.min(i * 40, 200)}>
            <section
              id={`chuong-${chapter.number}`}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-line bg-paper"
            >
              <div className="flex flex-col gap-4 border-b border-line bg-cream/50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div className="flex items-center gap-4">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-xl font-bold ${
                      i === 0
                        ? "bg-gold text-pine"
                        : "bg-leaf text-paper"
                    }`}
                  >
                    {chapter.number}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-pine sm:text-2xl">
                      {chapter.title}
                    </h2>
                    <p className="mt-0.5 text-sm text-ink/60">
                      {chapter.tagline}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-sm font-medium text-ink/55">
                  {chapter.lessons.length} bài ·{" "}
                  {chapter.lessons.reduce((a, l) => a + l.minutes, 0)} phút
                </span>
              </div>

              <ul className="divide-y divide-line">
                {chapter.lessons.map((lesson, j) => (
                  <li key={lesson.slug}>
                    <Link
                      href={`/bai-hoc/${lesson.slug}`}
                      className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-leaf/5 sm:px-8"
                    >
                      <span className="mt-0.5 w-8 shrink-0 text-sm font-semibold tabular-nums text-ink/35">
                        {j + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[15px] font-semibold text-pine transition-colors group-hover:text-leaf-dark">
                          {lesson.title}
                        </h3>
                        <p className="mt-0.5 text-sm leading-relaxed text-ink/60">
                          {lesson.summary}
                        </p>
                      </div>
                      <span className="mt-1 flex shrink-0 items-center gap-1.5 text-xs font-medium text-ink/45">
                        <svg
                          viewBox="0 0 20 20"
                          className="h-3.5 w-3.5"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M10 5.5V10l3 2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        {lesson.minutes} phút
                      </span>
                      <span
                        className="mt-0.5 hidden shrink-0 text-leaf transition-transform duration-200 group-hover:translate-x-1 sm:block"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-16 rounded-3xl bg-pine px-8 py-12 text-center text-paper">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Bắt đầu từ bài học đầu tiên
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-paper/75">
          Không cần chuẩn bị gì — chỉ cần 6 phút rảnh rỗi.
        </p>
        <Link
          href="/bai-hoc/trang-web-la-gi"
          className="mt-7 inline-block rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-pine shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
        >
          Học bài 1: Trang web là gì
        </Link>
      </section>
    </div>
  );
}