"use client";

import { useSyncExternalStore } from "react";
import { isDone, setDone, subscribeToProgress } from "@/lib/progress";

export default function ProgressToggle({ slug }: { slug: string }) {
  const done = useSyncExternalStore(
    subscribeToProgress,
    () => isDone(slug),
    () => false,
  );

  const toggle = () => setDone(slug, !done);

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-2.5 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all ${
        done
          ? "border-leaf bg-leaf text-paper shadow-sm"
          : "border-leaf/40 bg-transparent text-leaf-dark hover:border-leaf hover:bg-leaf/10"
      }`}
    >
      <span
        className={`grid h-5 w-5 place-items-center rounded-full border-2 text-[11px] font-bold transition-colors ${
          done ? "border-paper bg-paper text-leaf" : "border-current"
        }`}
      >
        {done ? "✓" : ""}
      </span>
      {done ? "Đã hoàn thành bài này" : "Đánh dấu đã học xong"}
    </button>
  );
}