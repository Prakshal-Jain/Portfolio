import { useEffect, useRef } from "react";

type Cell = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  targetR: number;
  age: number;
  splitAt: number;
  alive: boolean;
};

const MAX_CELLS = 14;

/**
 * Hero background canvas. Renders a gentle field of "cells" that drift
 * and occasionally divide — a quiet visual reference to the Mitosis name.
 *
 * Honors prefers-reduced-motion (renders a single static frame).
 */
export function CellCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const cellsRef = useRef<Cell[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const seedCells = () => {
      const cells: Cell[] = [];
      const seed = Math.min(MAX_CELLS - 4, Math.max(6, Math.floor((width * height) / 110000)));
      for (let i = 0; i < seed; i++) {
        cells.push(spawn(width, height));
      }
      cellsRef.current = cells;
    };
    seedCells();

    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      tick(ctx, cellsRef.current, width, height, dt);
      if (!reduceMotion) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    if (reduceMotion) {
      tick(ctx, cellsRef.current, width, height, 0);
    } else {
      rafRef.current = requestAnimationFrame(step);
    }

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

function spawn(width: number, height: number): Cell {
  const r = 4 + Math.random() * 7;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.08,
    vy: (Math.random() - 0.5) * 0.08,
    r,
    targetR: r,
    age: Math.random() * 8000,
    splitAt: 14000 + Math.random() * 10000,
    alive: true,
  };
}

function tick(
  ctx: CanvasRenderingContext2D,
  cells: Cell[],
  width: number,
  height: number,
  dt: number,
) {
  ctx.clearRect(0, 0, width, height);

  // Update
  for (const c of cells) {
    if (!c.alive) continue;
    c.age += dt;

    // Drift + soft damping
    c.x += c.vx * (dt / 16);
    c.y += c.vy * (dt / 16);
    c.vx *= 0.99;
    c.vy *= 0.99;

    // Bounce off bounds with soft restitution
    if (c.x < 0) {
      c.x = 0;
      c.vx = Math.abs(c.vx) * 0.6;
    } else if (c.x > width) {
      c.x = width;
      c.vx = -Math.abs(c.vx) * 0.6;
    }
    if (c.y < 0) {
      c.y = 0;
      c.vy = Math.abs(c.vy) * 0.6;
    } else if (c.y > height) {
      c.y = height;
      c.vy = -Math.abs(c.vy) * 0.6;
    }

    // Animate radius toward target
    c.r += (c.targetR - c.r) * 0.05;

    // Mitosis
    if (c.age > c.splitAt && cells.filter((x) => x.alive).length < MAX_CELLS) {
      c.age = 0;
      c.splitAt = 9000 + Math.random() * 6000;
      const baseR = c.r * 0.85;
      c.targetR = baseR;
      const child: Cell = {
        x: c.x + (Math.random() - 0.5) * 8,
        y: c.y + (Math.random() - 0.5) * 8,
        vx: c.vx + (Math.random() - 0.5) * 0.4,
        vy: c.vy + (Math.random() - 0.5) * 0.4,
        r: baseR * 0.4,
        targetR: baseR,
        age: 0,
        splitAt: 9000 + Math.random() * 6000,
        alive: true,
      };
      cells.push(child);
    }
  }

  // Cull excess (oldest die first)
  if (cells.length > MAX_CELLS) {
    cells.sort((a, b) => b.age - a.age);
    while (cells.length > MAX_CELLS) cells.pop();
  }

  // Draw cells — no connection lines, just drifting glows
  for (const c of cells) {
    if (!c.alive) continue;

    // Soft outer glow
    const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r * 5);
    grad.addColorStop(0, "rgba(245, 230, 200, 0.07)");
    grad.addColorStop(1, "rgba(245, 230, 200, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r * 5, 0, Math.PI * 2);
    ctx.fill();

    // Inner core (much fainter)
    ctx.fillStyle = "rgba(245, 230, 200, 0.32)";
    ctx.beginPath();
    ctx.arc(c.x, c.y, Math.max(1, c.r * 0.32), 0, Math.PI * 2);
    ctx.fill();
  }
}
