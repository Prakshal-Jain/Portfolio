/**
 * All site content lives here. Edit this file to update the portfolio.
 */

export type Stat = { value: string; label: string };

export type WorkItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  blurb: string;
  notes?: string;
  stats?: Stat[];
  links?: { label: string; href: string }[];
};

export type Project = {
  id: string;
  title: string;
  kind: string;
  blurb: string;
  meta?: string;
  href?: string;
};

export const HERO = {
  status: { text: "Mitosis Labs", suffix: "2026 →", href: "https://mitosislabs.ai" },
  name: "Prakshal Jain",
  bio: `Co-founder, <a class="link-underline" href="https://mitosislabs.ai" target="_blank" rel="noopener">Mitosis Labs</a>. Previously Reality Labs and Superintelligence Labs at Meta. Founded Chimera and ClawdBody.`,
  contacts: [
    { label: "Email", value: "pj@os-1.ai", href: "mailto:pj@os-1.ai" },
    { label: "GitHub", value: "Prakshal-Jain", href: "https://github.com/Prakshal-Jain" },
    { label: "LinkedIn", value: "prakshal-jain", href: "https://www.linkedin.com/in/prakshal-jain/" },
  ],
  location: "San Francisco",
};

export const WORK: WorkItem[] = [
  {
    id: "mitosis",
    company: "Mitosis Labs",
    role: "Co-founder, CPO",
    period: "2026 →",
    blurb:
      "Infrastructure for AI agent colonies. Multi-brain, production-grade — the layer between LLM labs and the businesses that need agents to actually work.",
    stats: [
      { value: "500+", label: "Paying users" },
      { value: "5,000+", label: "Agents deployed" },
      { value: "100K+", label: "Tasks completed" },
      { value: "$600K", label: "Enterprise LOIs" },
    ],
    links: [{ label: "mitosislabs.ai", href: "https://mitosislabs.ai" }],
  },
  {
    id: "chimera",
    company: "Chimera Auto",
    role: "Founder",
    period: "2023 — 2026",
    blurb:
      "AR configurator and 3D modelling infrastructure on Apple Vision Pro for luxury automotive, private jet, and real estate buyers. Sold into Lamborghini, Aston Martin, and Lotus.",
    stats: [
      { value: "3", label: "Luxury OEMs" },
      { value: "Vision Pro", label: "First-wave launch app" },
      { value: "Patent", label: "Provisional filed" },
    ],
    links: [{ label: "chimeraauto.com", href: "https://chimeraauto.com" }],
  },
  {
    id: "meta",
    company: "Meta",
    role: "Frameworks (MSL & RL) · React Components · Facebook",
    period: "2022 — 2025",
    blurb:
      "Built immersive Instagram and Facebook for Quest 3. Demoed by Mark Zuckerberg at Connect 2024. Shipped frameworks for Superintelligence Labs and Reality Labs. Contributor to StyleX, react-strict-dom, and React. Authored XR accessibility guidelines now in production.",
    stats: [
      { value: "1.4B", label: "MAU touched" },
      { value: "Connect '24", label: "Keynote demo" },
      { value: "OSS", label: "StyleX · React" },
    ],
    links: [
      { label: "TechCrunch", href: "https://techcrunch.com/2024/09/25/meta-has-rebuilt-instagram-and-facebook-for-its-quest-headsets/" },
      { label: "Meta Blog", href: "https://www.meta.com/blog/quest/meta-quest-3s-announced-connect-2024/" },
      { label: "StyleX", href: "https://stylexjs.com/docs/learn/acknowledgements/" },
      { label: "Instagram TV", href: "https://about.instagram.com/blog/announcements/instagram-tv-app" },
    ],
  },
  {
    id: "clawdbody",
    company: "ClawdBody",
    role: "Founder",
    period: "2025",
    blurb:
      "First hosting platform for OpenClaw. The deployment scripts I open-sourced still ship in the OpenClaw repo. Adopted by a wave of YC-funded companies; Peter Steinberger reached out to use them.",
    stats: [
      { value: "6,000+", label: "Users in 5 weeks" },
      { value: "$4K", label: "MRR" },
      { value: "2M+", label: "Social impressions" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "reactive",
    title: "Reactive",
    kind: "npm",
    blurb: "Open-source React video editor library.",
    meta: "~1,800 monthly downloads",
    href: "https://www.npmjs.com/package/react-video-editor",
  },
  {
    id: "continuity",
    title: "Continuity Browser",
    kind: "iOS · macOS",
    blurb: "Privacy-first browser with cross-OS tab sync.",
    meta: "540+ users · 8 countries",
    href: "https://apps.apple.com/us/app/continuity-browser/id1666743201",
  },
  {
    id: "zeal",
    title: "Zeal",
    kind: "Web · ML",
    blurb: "ML-based team-matching for hackathons.",
    meta: "100+ matched",
  },
  {
    id: "stylex",
    title: "StyleX & React",
    kind: "OSS",
    blurb: "Contributions to Meta's CSS-in-JS library and React core.",
    href: "https://stylexjs.com/docs/learn/acknowledgements/",
  },
];

export const RECOGNITION = {
  press: [
    {
      label: "TechCrunch",
      meta: "Meta Quest IG/FB rebuild · 2024",
      href: "https://techcrunch.com/2024/09/25/meta-has-rebuilt-instagram-and-facebook-for-its-quest-headsets/",
    },
    {
      label: "Meta Blog",
      meta: "Connect 2024",
      href: "https://www.meta.com/blog/quest/meta-quest-3s-announced-connect-2024/",
    },
    {
      label: "Instagram",
      meta: "Instagram TV announcement",
      href: "https://about.instagram.com/blog/announcements/instagram-tv-app",
    },
  ],
  awards: [
    "International Rank 7 — SOF Cyber Olympiad",
    "Provisional Patent — Chimera",
    "Apple Distinguished School designation — contributed via a virtual world built on a jailbroken school iPad",
    "Tau Beta Pi Scholar; VP, NY Nu Chapter",
    "Summa Cum Laude, 3.9 GPA — UB Honors College",
    "Blackstone LaunchPad — multiple competition wins (Zeal, Continuity Browser)",
  ],
  programs: [
    "NVIDIA Inception",
    "AWS Partner Network",
    "AGI House — design partner",
    "Frontier Tower — co-host AI/agent events",
    "Blackstone LaunchPad — judge, 2026 AI Accelerator",
  ],
};
