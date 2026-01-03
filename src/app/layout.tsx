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
