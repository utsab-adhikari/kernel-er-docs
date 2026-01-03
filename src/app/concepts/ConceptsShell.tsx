"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CONCEPT_LINKS = [
  { title: "Overview", href: "/concepts" },
  { title: "OS Fundamentals", href: "/concepts/os-intro" },
];

export default function ConceptsShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-dvh bg-neutral-950">
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close concepts navigation"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-neutral-800 bg-neutral-900/95 backdrop-blur-sm transition-transform duration-200 ease-out md:static md:h-dvh md:w-60 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="shrink-0 border-b border-neutral-800 px-4 py-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              Concepts
            </p>
            <h1 className="text-sm font-semibold text-neutral-100">
              kernel<span className="text-neutral-400">-er</span>
              <span className="text-neutral-500"> / </span>
              <span className="text-neutral-200">Explanations</span>
            </h1>
          </div>

          <nav
            className="flex-1 overflow-y-auto px-2 py-3 text-sm"
            aria-label="Concept topics"
            id="concepts-nav"
          >
            <p className="mb-3 px-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              Topics
            </p>

            <ul className="space-y-[2px]">
              {CONCEPT_LINKS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`relative block rounded px-3 py-2 transition-colors ${
                        isActive
                          ? "bg-neutral-800/60 text-white"
                          : "text-neutral-300 hover:bg-neutral-800/40 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-4 -translate-y-1/2 rounded-r bg-neutral-300/80 w-[2px]" />
                      )}
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium text-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500/40"
            aria-label="Open concepts navigation"
            aria-controls="concepts-nav"
            aria-expanded={open}
          >
            <span className="mr-2 flex flex-col gap-[3px]">
              <span className="h-px w-4 bg-neutral-300" />
              <span className="h-px w-4 bg-neutral-300" />
            </span>
          </button>
          <span className="text-xs text-neutral-400">Concepts</span>
        </div>

        <main
          className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 md:px-8 md:py-10 lg:px-10"
          role="main"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
