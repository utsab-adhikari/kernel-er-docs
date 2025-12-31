import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mb-16 sm:mb-20">
        <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          kernel-er
        </h2>
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
  Started • 31 Dec 2025
</p>

        <p className="max-w-2xl text-base text-neutral-300 sm:text-lg">
          kernel-er is a lifelong operating system & kernel engineering project.
          Every line of code is written with understanding — nothing copied,
          nothing rushed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <Link
            href="/content"
            className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Read Documentation →
          </Link>

          <a
            href="https://github.com/utsabadhikari/kernel-er"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-neutral-700 px-6 py-3 text-sm text-neutral-200 transition hover:border-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500/40"
          >
            View Repository
          </a>
        </div>
      </div>

      <div className="mb-16 sm:mb-20 grid gap-4 sm:gap-5 md:grid-cols-3">

        <Link
          href="/readme"
          className="group border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-neutral-500 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500/40"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Entry Point
          </p>

          <h3 className="mt-2 flex items-center justify-between text-sm font-semibold text-neutral-100">
            Project README
            <span className="text-xs text-neutral-500 transition group-hover:text-neutral-300">
              →
            </span>
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-neutral-400">
            High-level overview, goals, and current status of the project.
          </p>
        </Link>

        <Link
          href="/manifesto"
          className="group border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-neutral-500 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500/40"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Why This Exists
          </p>

          <h3 className="mt-2 flex items-center justify-between text-sm font-semibold text-neutral-100">
            Manifesto
            <span className="text-xs text-neutral-500 transition group-hover:text-neutral-300">
              →
            </span>
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-neutral-400">
            Principles, constraints, and long-term intent behind kernel-er.
          </p>
        </Link>

        <Link
          href="/philosophy"
          className="group border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-neutral-500 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500/40"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            How It’s Done
          </p>

          <h3 className="mt-2 flex items-center justify-between text-sm font-semibold text-neutral-100">
            Philosophy
            <span className="text-xs text-neutral-500 transition group-hover:text-neutral-300">
              →
            </span>
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-neutral-400">
            Documentation-first, no-blind-commit mindset for the project.
          </p>
        </Link>
      </div>

      <div className="mb-16 sm:mb-20 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-neutral-100">
            No Blind Commits
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400">
            If a concept is not fully understood, it is not committed.
            Documentation comes before code.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-neutral-100">
            Timestamped Growth
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400">
            Git history reflects real learning over years, not tutorial speedruns.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-neutral-100">
            Kernel Mindset
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400">
            Focus on fundamentals: memory, scheduling, syscalls, filesystems.
          </p>
        </div>
      </div>
      
      <div className="border border-neutral-800 p-6 sm:p-8">
        <h3 className="mb-4 text-lg font-semibold text-neutral-100">
          Long-Term Vision
        </h3>

        <ul className="space-y-2 text-sm text-neutral-300">
          <li>• Bootstrapping & bare-metal understanding</li>
          <li>• Custom kernel modules</li>
          <li>• Minimal userspace</li>
          <li>• Documentation-first OS design</li>
        </ul>
      </div>
    </section>
  );
}
