import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Recognition", href: "#recognition" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border)] bg-black/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-[14px] font-medium tracking-tight"
        >
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text)]">
            PJ
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:pj@os-1.ai"
              className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text)]"
            >
              <span className="link-underline">Contact</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-6 bg-[var(--color-text)] transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-[var(--color-text)] transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[var(--color-border)] bg-black/85 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] text-[var(--color-text-muted)]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:pj@os-1.ai"
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] text-[var(--color-text)]"
            >
              Contact ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
