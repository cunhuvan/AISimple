import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters, getChapterByLessonSlug } from "@/data/course";
import { getLesson, getAllLessonSlugs } from "@/lib/lessons";
import LessonSidebar from "@/components/LessonSidebar";
import ProgressToggle from "@/components/ProgressToggle";
import PrevNext from "@/components/PrevNext";

export function generateStaticParams() {
  return getAllLessonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Không tìm thấy bài học" };
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const chapter = getChapterByLessonSlug(slug);
  const lessonIndex =
    chapter.lessons.findIndex((l) => l.slug === slug) + 1;

  return (
    <div className="mx-auto flex max-w-6xl gap-10 px-5 pb-24 pt-10">
      <LessonSidebar currentSlug={slug} />

      <article className="min-w-0 max-w-3xl flex-1">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-ink/55"
        >
          <Link
            href="/khoa-hoc"
            className="transition-colors hover:text-leaf-dark"
          >
            Khóa học
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/khoa-hoc#chuong-${chapter.number}`}
            className="transition-colors hover:text-leaf-dark"
          >
            Chương {chapter.number}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink/75">
            Bài {lessonIndex}
          </span>
        </nav>

        {/* Title */}
        <header className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay">
            Chương {chapter.number} · {chapter.title}
          </p>
          <h1 className="mt-2.5 font-display text-3xl font-bold leading-tight tracking-tight text-pine sm:text-4xl">
            {lesson.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink/55">
            <span className="inline-flex items-center gap-1.5">
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
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
              {lesson.minutes} phút đọc
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 6.5V10l2.2 1.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              {lessonIndex}/{chapter.lessons.length} trong chương
            </span>
          </div>
        </header>

        {/* Progress toggle */}
        <div className="mt-6">
          <ProgressToggle slug={slug} />
        </div>

        {/* Mobile chapter nav */}
        <details className="group mt-6 rounded-2xl border border-line bg-cream/40 lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-sm font-semibold text-pine [&::-webkit-details-marker]:hidden">
            Danh mục khóa học
            <span className="text-leaf transition-transform duration-200 group-open:rotate-180">
              ▾
            </span>
          </summary>
          <div className="border-t border-line px-5 py-4">
            {chapters.map((c) => (
              <div key={c.id} className="mb-4 last:mb-0">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-clay">
                  Chương {c.number} · {c.title}
                </p>
                <ul className="space-y-0.5 border-l border-line pl-3">
                  {c.lessons.map((l) => {
                    const active = l.slug === slug;
                    return (
                      <li key={l.slug}>
                        <Link
                          href={`/bai-hoc/${l.slug}`}
                          aria-current={active ? "page" : undefined}
                          className={`block rounded-lg px-2.5 py-1.5 text-[13px] leading-snug ${
                            active
                              ? "bg-leaf/10 font-semibold text-leaf-dark"
                              : "text-ink/70 hover:bg-paper"
                          }`}
                        >
                          {l.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </details>

        {/* Body */}
        <div
          className="lesson-body mt-8"
          dangerouslySetInnerHTML={{ __html: lesson.html }}
        />

        {/* Bottom progress */}
        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-8">
          <ProgressToggle slug={slug} />
          <Link
            href={`/khoa-hoc#chuong-${chapter.number}`}
            className="text-sm font-medium text-ink/55 transition-colors hover:text-leaf-dark"
          >
            ← Về danh sách chương {chapter.number}
          </Link>
        </div>

        <PrevNext slug={slug} />
      </article>
    </div>
  );
}