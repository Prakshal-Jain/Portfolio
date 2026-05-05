import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "ol" | "ul" | "header" | "p";
};

/**
 * Wraps children with a single, consistent on-scroll fade-up reveal.
 * Honors prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: Props) {
  const reduceMotion = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}
