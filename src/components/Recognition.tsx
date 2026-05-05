import { Reveal } from "./Reveal";
import { RECOGNITION } from "../data/content";

export function Recognition() {
  return (
    <section
      id="recognition"
      className="relative border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:px-10 md:py-32">
        <Reveal as="header" className="mb-12 flex items-baseline justify-between border-b border-[var(--color-border)] pb-6 md:mb-16">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
            Recognition
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-12">
          <Reveal as="div" delay={0.05}>
            <ColTitle>Press</ColTitle>
            <ul className="space-y-5">
              {RECOGNITION.press.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="link-underline text-[15.5px] text-[var(--color-text)]">
                        {p.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-[var(--color-text-subtle)] transition-colors group-hover:text-[var(--color-text)]"
                      >
                        ↗
                      </span>
                    </div>
                    <span className="mt-1 block font-mono text-[11.5px] uppercase tracking-[0.12em] text-[var(--color-text-subtle)]">
                      {p.meta}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={0.1}>
            <ColTitle>Awards</ColTitle>
            <ul className="space-y-4">
              {RECOGNITION.awards.map((a) => (
                <li
                  key={a}
                  className="text-[14.5px] leading-[1.55] text-[var(--color-text-muted)]"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={0.15}>
            <ColTitle>Programs</ColTitle>
            <ul className="space-y-4">
              {RECOGNITION.programs.map((p) => (
                <li
                  key={p}
                  className="text-[14.5px] leading-[1.55] text-[var(--color-text-muted)]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-6 font-mono text-[11.5px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
      {children}
    </h4>
  );
}
