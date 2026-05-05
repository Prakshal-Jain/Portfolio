import { Reveal } from "./Reveal";
import { WORK } from "../data/content";
import type { WorkItem } from "../data/content";

export function Work() {
  return (
    <section id="work" className="relative border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:px-10 md:py-32">
        <Reveal as="header" className="mb-12 flex items-baseline justify-between border-b border-[var(--color-border)] pb-6 md:mb-16">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
            Selected work
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
            {WORK.length} roles
          </span>
        </Reveal>

        <ol className="divide-y divide-[var(--color-border)]">
          {WORK.map((item, i) => (
            <WorkRow key={item.id} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function WorkRow({ item, index }: { item: WorkItem; index: number }) {
  return (
    <Reveal as="li" delay={index * 0.04}>
      <article className="group grid grid-cols-1 gap-y-6 py-12 md:grid-cols-[140px_1fr] md:gap-x-12 md:py-16">
        <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-text-subtle)]">
          {item.period}
        </div>

        <div>
          <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-display text-[clamp(34px,4.4vw,52px)] leading-[1] tracking-[-0.015em]">
              {item.company}
            </h3>
            <span className="text-[13px] text-[var(--color-text-muted)]">
              {item.role}
            </span>
          </header>

          <p className="mt-5 max-w-[68ch] text-[16px] leading-[1.6] text-[var(--color-text-muted)] md:text-[17px]">
            {item.blurb}
          </p>

          {item.stats && (
            <ul className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
              {item.stats.map((s) => (
                <li key={s.label}>
                  <div className="font-mono text-[18px] tabular-nums leading-none tracking-[-0.01em] text-[var(--color-text)]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[12.5px] leading-tight text-[var(--color-text-subtle)]">
                    {s.label}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {item.links && item.links.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {item.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    className="link-underline inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                  >
                    {l.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </Reveal>
  );
}
