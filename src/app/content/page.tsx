export default function ContentHomePage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">
          Documentation
        </h1>
        <p className="text-neutral-400">
          This section documents the kernel-er project from first principles.
          Every topic here corresponds to real implementation work in the repository.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">How to read this documentation</h2>
        <p className="text-neutral-300 text-sm leading-relaxed">
          The documentation follows the same philosophy as the codebase:
          nothing is assumed, nothing is skipped. If a concept is not understood
          deeply, it is documented before being implemented.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Structure</h2>
        <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
          <li>Boot process and system startup</li>
          <li>Memory management fundamentals</li>
          <li>Process scheduling</li>
          <li>File systems and I/O</li>
        </ul>
      </section>

      <section className="border border-neutral-800 p-6">
        <h3 className="font-semibold mb-2">Commit Discipline</h3>
        <p className="text-sm text-neutral-400">
          Documentation updates are committed alongside code changes.
          No artificial progress, no filler commits.
        </p>
      </section>
    </article>
  );
}
