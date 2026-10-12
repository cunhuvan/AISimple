"use client";

import { useSyncExternalStore } from "react";
import { isDone, subscribeToProgress } from "@/lib/progress";

export default function LessonCheck({ slug }: { slug: string }) {
  const done = useSyncExternalStore(
    subscribeToProgress,
    () => isDone(slug),
    () => false,
  );

  if (!done) return null;
  return (
    <span
      className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-leaf text-[9px] font-bold text-paper"
      title="Đã học"
    >
      ✓
    </span>
  );
}