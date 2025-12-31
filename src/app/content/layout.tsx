"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { title: "Introduction", href: "/content" },
  { title: "Getting Started", href: "/content/getting-started" },
  { title: "Boot Process", href: "/content/boot" },
  { title: "Memory Management", href: "/content/memory" },
  { title: "Scheduling", href: "/content/scheduling" },
  { title: "File System", href: "/content/fs" },
];

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-neutral-950">
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-neutral-900 border-r border-neutral-800 transform transition-transform duration-200 ease-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-800">
          <div>
            <h2 className="text-sm font-semibold tracking-wide">
              kernel<span className="text-neutral-400">-er</span>
            </h2>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Documentation
            </p>
          </div>
          <span className="hidden rounded-full border border-neutral-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-400 md:inline-flex">
            Docs
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 pt-2 text-sm">
          <p className="mb-3 px-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Sections
          </p>
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <div className="md:hidden border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-200"
            aria-label="Open documentation navigation"
          >
            <span className="mr-2 flex flex-col gap-[3px]">
              <span className="h-px w-4 bg-neutral-300" />
              <span className="h-px w-4 bg-neutral-300" />
            </span>
            Menu
          </button>
          <span className="text-xs text-neutral-400">Documentation</span>
        </div>

        <main className="w-full max-w-4xl flex-1 px-4 py-8 md:px-8 md:py-10 lg:px-10 mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
