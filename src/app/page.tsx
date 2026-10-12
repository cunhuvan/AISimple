import Link from "next/link";
import { chapters, allLessons } from "@/data/course";
import { getTotalMinutes } from "@/lib/lessons";
import Roadmap from "@/components/Roadmap";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  const totalMinutes = getTotalMinutes();

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 50% at 85% 10%, rgba(233,196,106,0.18), transparent 60%), radial-gradient(50% 45% at 10% 90%, rgba(107,158,127,0.16), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-leaf/25 bg-leaf/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-leaf-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Khóa học tiếng Việt · Cho người không chuyên
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-pine sm:text-5xl md:text-6xl">
              Từ con số 0 đến một{" "}
              <span className="relative whitespace-nowrap text-leaf">
                website chạy thật
                <svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-1 left-0 w-full text-gold"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9 C 60 3, 160 3, 217 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Hiểu và tự tay tạo, vận hành một website từ đầu tới cuối — không
              cần biết lập trình. {allLessons.length} bài học ngắn gọn, dễ hiểu,
              làm theo từng
              bước.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/khoa-hoc"
                className="rounded-full bg-leaf px-7 py-3.5 text-base font-semibold text-paper shadow-lg shadow-leaf/25 transition-all hover:-translate-y-0.5 hover:bg-leaf-dark"
              >
                Bắt đầu học miễn phí
              </Link>
              <Link
                href="#lo-trinh"
                className="rounded-full border-2 border-ink/15 px-7 py-3.5 text-base font-semibold text-pine transition-colors hover:border-leaf hover:text-leaf-dark"
              >
                Xem lộ trình
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
              {[
                [String(chapters.length), "chương"],
                [String(allLessons.length), "bài học"],
                [`≈${Math.round(totalMinutes / 60)}h`, "học"],
                ["0", "yêu cầu code"],
              ].map(([num, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-3xl font-bold text-pine">
                    {num}
                  </dd>
                  <dd className="text-sm text-ink/60">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <Roadmap />
            <p className="mt-2 text-center text-xs text-ink/50">
              {chapters.length} chương · một con đường · từ trang trắng đến website
            thật
            </p>
          </div>
        </div>
      </section>

      {/* ===== Lộ trình (journey) ===== */}
      <section id="lo-trinh" className="scroll-mt-24 border-t border-line bg-cream/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-clay">
              Lộ trình khóa học
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-pine sm:text-4xl">
              Một con đường rõ ràng, đi từng bước nhỏ
            </h2>
            <p className="mt-4 max-w-2xl text-ink/70">
              Mỗi chương xây trên nền chương trước. Học tuần tự, làm theo ngay —
              sau {chapters.length} chương bạn sẽ có một website thật sự đang chạy.
            </p>
          </Reveal>

          <ol className="relative mt-14 space-y-0">
            <span
              className="absolute bottom-6 left-[22px] top-6 w-px bg-line"
              aria-hidden="true"
            />
            {chapters.map((chapter, i) => (
              <li key={chapter.id} className="relative pb-10 pl-16 last:pb-0">
                <span
                  className={`absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border-2 font-display text-base font-bold ${
                    i === 0
                      ? "border-gold bg-gold text-pine"
                      : "border-leaf bg-paper text-leaf-dark"
                  }`}
                >
                  {chapter.number}
                </span>
                <Reveal delay={i * 40}>
                  <div className="group">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-bold text-pine">
                        {chapter.title}
                      </h3>
                      <span className="text-xs font-medium text-ink/50">
                        {chapter.lessons.length} bài ·{" "}
                        {chapter.lessons.reduce((a, l) => a + l.minutes, 0)}{" "}
                        phút
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink/65">
                      {chapter.tagline}
                    </p>
                    <Link
                      href={`/khoa-hoc#chuong-${chapter.number}`}
                      className="mt-2 inline-block text-sm font-semibold text-leaf-dark underline-offset-4 transition-colors hover:text-clay hover:underline"
                    >
                      Xem bài học →
                    </Link>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Cách học ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-clay">
              Cách học
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-pine sm:text-4xl">
              Học bằng cách làm, không học lý thuyết suông
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Hiểu",
                desc: "Mỗi bài giải thích một khái niệm bằng ngôn ngữ đời thường — ví dụ, không thuật ngữ khó nuốt.",
              },
              {
                num: "02",
                title: "Làm theo",
                desc: "Mỗi chương có việc thực hành cụ thể trên website thật của bạn: cài đặt, tạo trang, tối ưu, sao lưu...",
              },
              {
                num: "03",
                title: "Vận hành",
                desc: "Kết thúc khóa học, bạn tự tin chăm sóc website: nội dung, bảo mật, tốc độ và thu hút khách.",
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-paper p-7 transition-shadow hover:shadow-lg hover:shadow-leaf/10">
                  <span className="font-display text-4xl font-bold text-sage">
                    {step.num}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-pine">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Dành cho ai ===== */}
      <section className="border-y border-line bg-pine py-20 text-paper">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Khóa học này dành cho
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Những người có website trong đầu, nhưng chưa biết bắt đầu từ đâu
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Chủ cửa hàng, tiểu thương muốn bán hàng online",
                  "Người làm nghề tự do muốn xây thương hiệu cá nhân",
                  "Nhân viên được giao «quản lý website» của công ty",
                  "Sinh viên, người đi làm muốn học một kỹ năng mới",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-[11px] font-bold text-pine">
                      ✓
                    </span>
                    <span className="leading-relaxed text-paper/85">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-paper/15 bg-paper/5 p-7">
                <h3 className="font-display text-lg font-bold text-gold-light">
                  Bạn không cần
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "Biết lập trình hay viết code",
                    "Bằng cấp công nghệ thông tin",
                    "Ngân sách lớn — chỉ khoảng 1–4 triệu đồng cho năm đầu",
                    "Thời gian rảnh nhiều — mỗi bài chỉ 4–10 phút",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-paper/25 text-[11px] font-bold text-paper/60">
                        ✕
                      </span>
                      <span className="leading-relaxed text-paper/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-clay">
              Câu hỏi thường gặp
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-pine sm:text-4xl">
              Vẫn còn phân vân?
            </h2>
          </Reveal>

          <div className="mt-10 space-y-3">
            {[
              {
                q: "Tôi không biết gì về máy tính, học được không?",
                a: "Được. Khóa học được viết cho người không chuyên, dùng ví dụ đời thường, không thuật ngữ khó. Nếu bạn dùng được Zalo và Facebook, bạn đủ khả năng làm theo khóa học.",
              },
              {
                q: "Học xong tôi có website thật không?",
                a: "Có. Bạn sẽ mua tên miền và hosting thật (khoảng 1–4 triệu đồng cho năm đầu), cài WordPress, tạo nội dung và đưa website lên internet. Không phải mô phỏng.",
              },
              {
                q: "Mỗi ngày cần học bao lâu?",
                a: "Mỗi bài chỉ 4–10 phút. Học 2–3 buổi mỗi tuần, bạn sẽ có website chạy thật trong 2–3 tuần.",
              },
              {
                q: "Khóa học có tốn phí không?",
                a: "Khóa học miễn phí. Chi phí duy nhất là tên miền và hosting — những thứ bạn phải trả cho bất kỳ website nào.",
              },
              {
                q: "Tôi muốn website bán hàng thì có học được không?",
                a: "Được. Khóa học dạy nền tảng cho mọi loại website. Với shop online, bạn có thể bổ sung plugin WooCommerce sau khi hoàn thành — kiến thức nền ở đây sẽ giúp bạn tự làm được.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-line bg-paper px-5 py-4 open:bg-cream/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-pine [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-leaf/30 text-leaf transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA cuối ===== */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-leaf px-8 py-14 text-center text-paper sm:px-14">
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(70% 90% at 15% 0%, rgba(242,212,143,0.25), transparent 55%), radial-gradient(60% 80% at 90% 100%, rgba(243,236,217,0.18), transparent 55%)",
                }}
              />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Website của bạn đang chờ
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-paper/85">
                  Không cần chờ «đủ điều kiện». Bắt đầu từ bài học đầu tiên hôm
                  nay — 6 phút, và bạn đã hiểu trang web thật sự là gì.
                </p>
                <Link
                  href="/khoa-hoc"
                  className="mt-8 inline-block rounded-full bg-paper px-8 py-3.5 text-base font-semibold text-leaf-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
                >
                  Vào khóa học ngay
                </Link>
                <p className="mt-4 text-xs text-paper/60">
                  {allLessons.length} bài học · {getTotalMinutes()} phút · miễn
                  phí
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
