"use client";

import { useSyncExternalStore } from "react";
import { getDoneSlugs, subscribeToProgress } from "@/lib/progress";

export default function ProgressBar({ total }: { total: number }) {
  const doneCount = useSyncExternalStore(
    subscribeToProgress,
    () => getDoneSlugs().length,
    () => 0,
  );

  const pct = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-ink/70">
        <span>Tiến độ của bạn</span>
        <span className="tabular-nums">
          {doneCount}/{total} bài · {pct}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-cream">
        <div
          className="h-full rounded-full bg-leaf transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}