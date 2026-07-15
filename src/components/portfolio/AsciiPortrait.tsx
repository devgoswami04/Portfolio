import { useEffect, useRef } from "react";
import portraitUrl from "@/assets/black_bg.png";

// Chars from dark -> light.
const RAMP = " .·:-+*=#%@";

const COLS = 50;
const CELL = 6;
const LINE_H = 7;

type Particle = {
  ox: number; // origin x (px)
  oy: number; // origin y (px)
  x: number;
  y: number;
  vx: number;
  vy: number;
  ch: string;
  lum: number;
};

export default function AsciiPortrait() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; px: number; py: number }>({
    x: -9999, y: -9999, active: false, px: -9999, py: -9999,
  });
  const rafRef = useRef<number | null>(null);
  const revealRef = useRef(0);

  // Build particles from image.
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = portraitUrl;
    img.onload = () => {
      const aspect = img.height / img.width;
      const rows = Math.round(COLS * aspect * (CELL / LINE_H));
      const off = document.createElement("canvas");
      off.width = COLS;
      off.height = rows;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.drawImage(img, 0, 0, COLS, rows);
      const d = octx.getImageData(0, 0, COLS, rows).data;

      const particles: Particle[] = [];
      const rampLast = RAMP.length - 1;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < COLS; x++) {
          const i = (y * COLS + x) * 4;
          const lum = (0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]) / 255;
          if (lum < 0.1) continue;
          const idx = Math.round(lum * rampLast);
          const ch = RAMP[idx];
          if (ch === " ") continue;
          const ox = x * CELL;
          const oy = y * LINE_H;
          particles.push({ ox, oy, x: ox, y: oy, vx: 0, vy: 0, ch, lum });
        }
      }
      particlesRef.current = particles;

      // Size canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        const width = COLS * CELL;
        const height = rows * LINE_H;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const ctx = canvas.getContext("2d");
        if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      startLoop();
    };
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = parseFloat(canvas.style.width);
    const height = parseFloat(canvas.style.height);

    let last = performance.now();
    const revealStart = last;
    const REVEAL_DUR = 1200;

    const RADIUS = 55;
    const FORCE = 1400;

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      revealRef.current = Math.min(1, (now - revealStart) / REVEAL_DUR);
      const reveal = revealRef.current;

      const m = mouseRef.current;
      // Mouse velocity for extra kick
      const mvx = m.x - m.px;
      const mvy = m.y - m.py;
      m.px = m.x;
      m.py = m.y;

      const particles = particlesRef.current;
      ctx.clearRect(0, 0, width, height);
      ctx.font = "9px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textBaseline = "top";

      for (let p of particles) {
        // Repel from mouse
        if (m.active) {
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const d2 = dx * dx + dy * dy;
          const r2 = RADIUS * RADIUS;
          if (d2 < r2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const falloff = 1 - d / RADIUS;
            const f = (FORCE * falloff * falloff) / d;
            p.vx += dx * f * dt;
            p.vy += dy * f * dt;
            // Add mouse-velocity drag
            p.vx += mvx * falloff * 0.35;
            p.vy += mvy * falloff * 0.35;
          }
        }
        // Spring back to origin
        const sx = (p.ox - p.x) * 6;
        const sy = (p.oy - p.y) * 6;
        p.vx += sx * dt;
        p.vy += sy * dt;
        // Damping
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx * dt * 8;
        p.y += p.vy * dt * 8;

        // Reveal from center outward
        const cx = width / 2;
        const cy = height / 2;
        const distN = Math.hypot(p.ox - cx, p.oy - cy) / Math.hypot(cx, cy);
        const localT = Math.min(1, Math.max(0, (reveal - distN * 0.6) / 0.4));
        if (localT <= 0) continue;

        // Displacement -> brighter color
        const disp = Math.hypot(p.x - p.ox, p.y - p.oy);
        const excite = Math.min(1, disp / 40);
        const bright = p.lum > 0.55;
        const alpha = (bright ? 0.85 : 0.55) * localT;
        if (excite > 0.05) {
          ctx.fillStyle = `rgba(100,255,218,${alpha})`;
        } else {
          ctx.fillStyle = bright
            ? `rgba(100,255,218,${alpha})`
            : `rgba(136,146,176,${alpha * 0.9})`;
        }
        ctx.fillText(p.ch, p.x, p.y);
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };

  const onMove = (e: React.PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = parseFloat(canvas.style.width) / rect.width;
    const scaleY = parseFloat(canvas.style.height) / rect.height;
    const m = mouseRef.current;
    m.x = (e.clientX - rect.left) * scaleX;
    m.y = (e.clientY - rect.top) * scaleY;
    if (!m.active) {
      m.px = m.x;
      m.py = m.y;
      m.active = true;
    }
  };
  const onLeave = () => {
    mouseRef.current.active = false;
    mouseRef.current.x = -9999;
    mouseRef.current.y = -9999;
  };

  return (
    <div
      ref={containerRef}
      className="ascii-portrait"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
