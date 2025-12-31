import "./globals.css";
import React from "react";

export const metadata = {
  title: "kernel-er",
  description: "A lifelong kernel & OS engineering journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-mono">
        <div className="flex flex-col min-h-screen">
          <header className="border-b border-neutral-800">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-lg font-bold tracking-tight">
                kernel<span className="text-neutral-400">-er</span>
              </h1>
              <nav className="space-x-6 text-sm text-neutral-300">
                <a href="/" className="hover:text-white">Home</a>
                <a href="/content" className="hover:text-white">Docs</a>
                <a href="https://github.com/utsabadhikari/kernel-er" target="_blank">
                  GitHub
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-neutral-800 text-xs text-neutral-400">
            <div className="max-w-6xl mx-auto px-4 py-6">
              © {new Date().getFullYear()} kernel-er · Utsab Adhikari
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
