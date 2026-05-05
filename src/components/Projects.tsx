import { Reveal } from "./Reveal";
import { PROJECTS } from "../data/content";
import type { Project } from "../data/content";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:px-10 md:py-32">
        <Reveal as="header" className="mb-12 flex items-baseline justify-between border-b border-[var(--color-border)] pb-6 md:mb-16">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
            Side projects
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
            {PROJECTS.length}
          </span>
        </Reveal>

        <ul className="divide-y divide-[var(--color-border)]">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const Wrap: React.ElementType = project.href ? "a" : "div";
  return (
    <Reveal as="li" delay={index * 0.04}>
      <Wrap
        href={project.href}
        target={project.href ? "_blank" : undefined}
        rel={project.href ? "noopener" : undefined}
        className="group grid grid-cols-1 items-baseline gap-y-2 py-7 transition-colors hover:bg-[var(--color-card)] md:grid-cols-[1fr_auto_180px_24px] md:gap-x-8 md:rounded-md md:px-3 md:-mx-3"
      >
        <div className="flex items-baseline gap-4">
          <h3 className="font-display text-[26px] leading-none tracking-[-0.01em]">
            {project.title}
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-subtle)]">
            {project.kind}
          </span>
        </div>

        <p className="text-[14.5px] leading-[1.5] text-[var(--color-text-muted)]">
          {project.blurb}
        </p>

        <span className="font-mono text-[12px] tabular-nums text-[var(--color-text-muted)] md:text-right">
          {project.meta ?? "\u00A0"}
        </span>

        {project.href ? (
          <span
            aria-hidden="true"
            className="hidden text-[var(--color-text-subtle)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--color-text)] md:inline-block md:text-right"
          >
            ↗
          </span>
        ) : (
          <span aria-hidden="true" className="hidden md:inline-block" />
        )}
      </Wrap>
    </Reveal>
  );
}
