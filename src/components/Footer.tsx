export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10 md:py-16">
        <div>
          <p className="text-[14px] text-[var(--color-text-muted)]">
            <span className="text-[var(--color-text)]">Prakshal Jain</span>
            <span className="mx-3 text-[var(--color-text-subtle)]">/</span>
            San Francisco
          </p>
          <p className="mt-2 font-mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--color-text-subtle)]">
            © {year} — All rights reserved
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
          <FooterLink href="mailto:pj@os-1.ai">pj@os-1.ai</FooterLink>
          <FooterLink href="https://github.com/Prakshal-Jain">GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/prakshal-jain/">LinkedIn</FooterLink>
          <FooterLink href="https://mitosislabs.ai">Mitosis</FooterLink>
        </ul>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener" : undefined}
        className="link-underline text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
      >
        {children}
      </a>
    </li>
  );
}
