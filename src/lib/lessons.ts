import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { allLessons } from "@/data/course";

const CONTENT_DIR = path.join(process.cwd(), "content", "lessons");

export type Lesson = {
  slug: string;
  title: string;
  minutes: number;
  summary: string;
  html: string;
};

marked.use({
  gfm: true,
});

export function getLesson(slug: string): Lesson | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    minutes: data.minutes ?? 5,
    summary: data.summary ?? "",
    html: marked.parse(content) as string,
  };
}

export function getAllLessonSlugs(): string[] {
  return allLessons.map((l) => l.slug);
}

export function getTotalMinutes(): number {
  return allLessons.reduce((acc, l) => acc + l.minutes, 0);
}