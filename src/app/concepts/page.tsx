export default function ConceptsIndexPage() {
	return (
		<article className="space-y-8">
			<header>
				<p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
					Concepts
				</p>
				<h1 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">
					Operating System Concepts for kernel-er
				</h1>
				<p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
					This section holds narrative explanations of ideas that power the
					kernel-er project.
				</p>
			</header>

			<section className="border border-neutral-800 bg-neutral-900/40 p-4 md:p-5">
				<h2 className="mb-2 text-sm font-semibold text-neutral-100">
					Getting started
				</h2>
				<ol className="list-decimal space-y-1 pl-5 text-xs text-neutral-300 md:text-sm">
					<li>OS Fundamentals (`/concepts/os-intro`)</li>
				</ol>
			</section>

		</article>
	);
}

