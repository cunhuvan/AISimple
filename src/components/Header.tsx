import Link from "next/link";

export function SproutIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21v-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13c0-4.5-3.2-7.8-8-8 0 4.6 3.2 8 8 8Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M12 10.5c0-3.4 2.4-5.9 6-6 0 3.5-2.4 6-6 6Z"
        fill="currentColor"
        opacity="0.72"
      />
      <circle cx="12" cy="20.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-leaf text-paper transition-transform duration-300 group-hover:-translate-y-0.5">
            <SproutIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-pine">
            Mầm Web
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-cream hover:text-pine"
          >
            Trang chủ
          </Link>
          <Link
            href="/khoa-hoc"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-cream hover:text-pine"
          >
            Khóa học
          </Link>
          <Link
            href="/khoa-hoc"
            className="ml-1 hidden rounded-full bg-leaf px-4 py-2 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-leaf-dark sm:inline-block"
          >
            Bắt đầu ngay
          </Link>
        </nav>
      </div>
    </header>
  );
}