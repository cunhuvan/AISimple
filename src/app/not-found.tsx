import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-28 text-center">
      <p className="font-display text-7xl font-bold text-sage">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-pine">
        Trang này không tồn tại
      </h1>
      <p className="mt-3 text-ink/65">
        Có thể bạn đã gõ nhầm địa chỉ, hoặc trang đã được chuyển đi nơi khác.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-leaf px-7 py-3 text-sm font-semibold text-paper transition-colors hover:bg-leaf-dark"
      >
        Về trang chủ
      </Link>
    </div>
  );
}