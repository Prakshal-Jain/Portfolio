import { motion, useReducedMotion } from "motion/react";
import { CellCanvas } from "./CellCanvas";
import { HERO } from "../data/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fade = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <CellCanvas />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1180px] flex-col justify-end px-6 pt-32 pb-24 md:px-10 md:pb-28">
        <motion.div
          {...fade(0.05)}
          className="inline-flex w-fit items-center gap-3 text-[12px] tracking-[0.14em] text-[var(--color-text-subtle)] uppercase"
        >
          <span className="font-mono">{HERO.status.suffix}</span>
          <span aria-hidden="true" className="h-px w-6 bg-[var(--color-border-strong)]" />
          <a
            href={HERO.status.href}
            target="_blank"
            rel="noopener"
            className="font-mono text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {HERO.status.text}
          </a>
        </motion.div>

        <motion.h1
          {...fade(0.12)}
          className="font-display mt-6 text-[clamp(72px,13vw,200px)] leading-[0.92] tracking-[-0.025em]"
        >
          {HERO.name}
        </motion.h1>

        <motion.p
          {...fade(0.22)}
          className="mt-8 max-w-[60ch] text-[18px] leading-[1.5] text-[var(--color-text-muted)] md:text-[20px]"
          dangerouslySetInnerHTML={{ __html: HERO.bio }}
        />

        <motion.ul
          {...fade(0.32)}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[14px]"
        >
          {HERO.contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel={c.href?.startsWith("http") ? "noopener" : undefined}
                className="link-underline text-[var(--color-text)]"
              >
                {c.value}
              </a>
            </li>
          ))}
          <li className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-text-subtle)]">
            {HERO.location}
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
