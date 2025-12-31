## kernel-er-docs

Minimal docs UI for the **kernel-er** operating-system project.

This app is built with Next.js and Tailwind CSS and is meant to be a focused place to read documentation, the project README, and long‑form philosophy/manifesto content.

**Visit**:**https://kernel-er.utsabadhikari.me**


### Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- `remark` + `remark-gfm` + `remark-html` for Markdown
- `github-markdown-css` for GitHub‑like README rendering


### Main pages & flow

- `/` – landing page with primary CTAs to docs, README, manifesto, and philosophy.
- `/content` – main documentation section with a responsive sidebar.
- `/readme` – renders a GitHub README using GitHub‑flavored Markdown.
	- Optional: `?src=<github-blob-url>` to point at a different README.
- `/manifesto` – long‑term intent and guiding principles.
- `/philosophy` – engineering & documentation philosophy behind kernel‑er.


### Notes

- Documentation and code should evolve together; this repo is intentionally small and focused on reading experience, not heavy UI chrome.

