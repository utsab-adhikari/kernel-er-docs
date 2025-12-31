
import "github-markdown-css/github-markdown.css";

import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import Link from "next/link";

function githubToRaw(url: string) {
  return url
    .replace("https://github.com/", "https://raw.githubusercontent.com/")
    .replace("/blob/", "/");
}

function isValidGithubMdUrl(url: string) {
  return url.startsWith("https://github.com/") && url.endsWith(".md");
}

async function loadMarkdown(mdUrl: string) {
  if (!isValidGithubMdUrl(mdUrl)) {
    throw new Error("Invalid GitHub markdown URL");
  }

  const rawUrl = githubToRaw(mdUrl);

  const res = await fetch(rawUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Unable to fetch markdown file");
  }

  return res.text();
}

async function renderMarkdown(markdown: string) {
  const processed = await remark().use(gfm).use(html).process(markdown);

  return processed.toString();
}

export default async function ReadmePage({
  searchParams,
}: {
  searchParams: { src?: string };
}) {
  const mdSource ="https://github.com/utsab-adhikari/kernel-er/blob/main/README.md";

  let content = "";

  try {
    const markdown = await loadMarkdown(mdSource);
    content = await renderMarkdown(markdown);
  } catch (err: any) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-sm text-red-400">
        Failed to load README markdown.
        <div className="mt-2 text-xs text-neutral-500">{err.message}</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
      <header className="mb-6 border-b border-neutral-800 pb-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-lg font-semibold tracking-tight sm:text-2xl">
            <Link href="/">
              <span className="text-neutral-100">kernel</span>
              <span className="text-neutral-400">-er</span>
            </Link>
            <span className="text-neutral-500"> / </span>
            <span className="text-neutral-100">README.md</span>
          </h1>

          <span className="inline-flex w-fit items-center border border-neutral-700 px-2 py-0.5 text-[11px] text-neutral-500">
            Rendered from GitHub
          </span>
        </div>

        <p className="mt-3 break-all text-[11px] text-neutral-500">
          Source: {mdSource}
        </p>
      </header>

      <article
        className="
          markdown-body
          mx-auto
          border
          border-neutral-300
          bg-white
          px-5
          py-6
          text-neutral-900
          shadow-sm
          sm:px-8
          sm:py-8
        "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
