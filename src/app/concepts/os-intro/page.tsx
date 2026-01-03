export default function OsIntroPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          OS Intro — Foundations
        </p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          OS Intro — Foundations
        </h1>
        <p className="text-xs text-neutral-500 italic">
          Phase 0.0.0 · kernel-er
        </p>
      </header>

      <section className="space-y-4 text-sm leading-relaxed text-neutral-300">
        <h2 className="text-base font-semibold text-neutral-100">
          What is an Operating System?
        </h2>

        <p>
          An <strong>Operating System (OS)</strong> is a collection of{" "}
          <strong>system-level software programs</strong> that acts as a{" "}
          <strong>vital interface between computer hardware and the end user</strong>.
        </p>

        <p>In simple terms, the OS:</p>

        <ul className="list-disc space-y-1 pl-5">
          <li>
            Sits between <strong>hardware</strong> and <strong>applications</strong>
          </li>
          <li>
            Controls and coordinates the <strong>entire computer system</strong>
          </li>
          <li>
            Manages physical resources such as:
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <strong>CPU (processor)</strong>
              </li>
              <li>
                <strong>Main memory (RAM)</strong>
              </li>
              <li>
                <strong>Secondary storage (disk space)</strong>
              </li>
            </ul>
          </li>
        </ul>

        <p>
          Without an OS, application software would need to directly deal with
          hardware complexity—which is inefficient, error-prone, and unrealistic.
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-neutral-300">
        <h2 className="text-base font-semibold text-neutral-100">
          Primary Goals of an Operating System
        </h2>

        <p>The core purposes of an OS are:</p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Ease of Use</strong>
            <div>
              Make the computer system simple and convenient for users and programmers.
            </div>
          </li>
          <li>
            <strong>Efficiency</strong>
            <div>
              Use hardware resources effectively to maximize performance.
            </div>
          </li>
          <li>
            <strong>Problem Solving</strong>
            <div>
              Provide abstractions and services that allow programs to be written
              and executed easily.
            </div>
          </li>
        </ol>

        <p>
          An OS is not just about control—it is about{" "}
          <strong>making powerful hardware usable</strong>.
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-neutral-300">
        <h2 className="text-base font-semibold text-neutral-100">
          The Most Important Concept: Virtualization
        </h2>

        <p>
          At the heart of modern operating systems lies the concept of{" "}
          <strong>virtualization</strong>.
        </p>

        <p>
          <strong>Virtualization</strong> means:
        </p>

        <blockquote className="border-l-2 border-neutral-700 pl-3">
          The OS takes <strong>physical hardware resources</strong> and transforms
          them into <strong>virtual, easier-to-use abstractions</strong>.
        </blockquote>

        <p>
          Instead of forcing programs to deal with raw hardware, the OS presents a{" "}
          <strong>clean, powerful illusion</strong> of resources.
        </p>
      </section>

      <section className="space-y-6 text-sm leading-relaxed text-neutral-300">
        <h2 className="text-base font-semibold text-neutral-100">
          Types of Virtualization
        </h2>

        <div className="space-y-2">
          <h3 className="font-semibold text-neutral-100">
            1. CPU Virtualization
          </h3>

          <ul className="list-disc space-y-1 pl-5">
            <li>
              A computer may have <strong>one physical CPU</strong>, but the OS
              creates the illusion of <strong>multiple virtual CPUs</strong>.
            </li>
            <li>
              This allows the system to run{" "}
              <strong>multiple programs at the same time</strong>.
            </li>
            <li>
              The OS rapidly switches the CPU between tasks, making them appear
              to execute simultaneously.
            </li>
          </ul>

          <p className="text-xs text-neutral-400">
            Result: <strong>Concurrency on a single processor</strong>.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-neutral-100">
            2. Memory Virtualization
          </h3>

          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Physical memory model</strong>: a simple array of bytes in RAM.
            </li>
            <li>
              <strong>Virtualization effect</strong>:
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>
                  Each process is given its{" "}
                  <strong>own private virtual address space</strong>.
                </li>
                <li>Processes are isolated from one another.</li>
              </ul>
            </li>
          </ul>

          <p>This ensures:</p>

          <ul className="list-disc space-y-1 pl-5">
            <li>Safety (one process cannot corrupt another)</li>
            <li>Simplicity (programs can assume contiguous memory)</li>
            <li>Efficient memory management</li>
          </ul>

          <p className="text-xs text-neutral-400">
            Result: <strong>Illusion of private memory for every process</strong>.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-neutral-100">
            3. System Calls and APIs
          </h3>

          <p>Applications do <strong>not</strong> directly access hardware.</p>

          <p>Instead:</p>

          <ul className="list-disc space-y-1 pl-5">
            <li>
              Programs use <strong>Application Programming Interfaces (APIs)</strong>.
            </li>
            <li>
              APIs internally invoke <strong>system calls</strong>.
            </li>
          </ul>

          <p>System calls allow programs to:</p>

          <ul className="list-disc space-y-1 pl-5">
            <li>Create and execute processes</li>
            <li>Access files and devices</li>
            <li>Request memory</li>
            <li>Communicate with the OS kernel</li>
          </ul>

          <p className="text-xs text-neutral-400">
            Result: Applications remain{" "}
            <strong>hardware-independent</strong>, while the OS handles
            low-level details.
          </p>
        </div>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-neutral-300">
        <h2 className="text-base font-semibold text-neutral-100">
          OS as a Layered System
        </h2>

        <p>The OS acts as a <strong>layer</strong>:</p>

        <pre className="overflow-x-auto rounded border border-neutral-800 bg-neutral-950 p-3 text-xs text-neutral-200">
{`Applications
────────────
Operating System
────────────
Hardware`}
        </pre>

        <p>
          It manages this relationship using several architectural features:
        </p>

        <h3 className="font-semibold text-neutral-100">
          Key Architectural Components
        </h3>

        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Kernel</strong>
            <div>
              The core of the OS that runs in privileged mode and controls system
              resources.
            </div>
          </li>
          <li>
            <strong>Dual Mode Operation</strong>
            <div>
              User Mode: limited access
              <br />
              Kernel Mode: full hardware access
            </div>
          </li>
          <li>
            <strong>Traps and System Calls</strong>
            <div>
              Controlled entry points from user mode to kernel mode.
            </div>
          </li>
          <li>
            <strong>Device Drivers and Controllers</strong>
            <div>
              Software components that manage hardware devices.
            </div>
          </li>
          <li>
            <strong>Interrupts</strong>
            <div>
              Mechanism for hardware and software to signal the CPU for immediate
              attention.
            </div>
          </li>
        </ol>

        <p>
          An Operating System is not just software—it is a{" "}
          <strong>resource manager, illusion maker, and protector</strong> of the system.
        </p>
      </section>

      <footer className="border-t border-neutral-800 pt-4 text-xs text-neutral-500">
        <p>
          <strong>Created:</strong> Jan-03-2026 /{" "}
          <strong>Updated:</strong> Jan-03-2026
        </p>
      </footer>
    </article>
  );
}
