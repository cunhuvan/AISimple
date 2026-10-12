import Link from "next/link";
import { chapters, allLessons } from "@/data/course";
import ProgressBar from "./ProgressBar";
import LessonCheck from "./LessonCheck";

export default function LessonSidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 pb-8">
        <div className="mb-5 rounded-2xl border border-line bg-cream/60 p-4">
          <ProgressBar total={allLessons.length} />
        </div>

        <nav aria-label="Danh mục khóa học">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="mb-5">
              <Link
                href={`/khoa-hoc#chuong-${chapter.number}`}
                className="group mb-1.5 flex items-baseline gap-2 px-1"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-clay">
                  Chương {chapter.number}
                </span>
                <span className="text-xs font-semibold text-ink/60 transition-colors group-hover:text-leaf-dark">
                  {chapter.title}
                </span>
              </Link>
              <ul className="space-y-0.5 border-l border-line pl-3">
                {chapter.lessons.map((lesson) => {
                  const active = lesson.slug === currentSlug;
                  return (
                    <li key={lesson.slug}>
                      <Link
                        href={`/bai-hoc/${lesson.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] leading-snug transition-colors ${
                          active
                            ? "bg-leaf/10 font-semibold text-leaf-dark"
                            : "text-ink/70 hover:bg-cream hover:text-pine"
                        }`}
                      >
                        <span
                          className={`w-4 shrink-0 text-right text-[11px] tabular-nums ${
                            active ? "text-leaf" : "text-ink/40"
                          }`}
                        >
                          {lesson.minutes}
                        </span>
                        <span className="flex-1">{lesson.title}</span>
                        <LessonCheck slug={lesson.slug} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}