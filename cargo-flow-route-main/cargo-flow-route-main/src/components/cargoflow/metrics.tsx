import { useEffect, useRef, useState } from "react";
import { useInView } from "./reveal";

type Metric = { value: number | null; suffix?: string; display?: string; label: string };

const METRICS: Metric[] = [
  { value: 100, suffix: "+", label: "Scheduled routes modelled" },
  { value: 3, suffix: "", label: "Initial divisions in scope" },
  { value: null, display: "24/7", label: "Network visibility" },
  { value: null, display: "₹", label: "Additional transit revenue" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 900, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="border-y border-hairline bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-12">
        <p className="mono-label">Platform demo metrics · not operational statistics</p>
        <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="min-w-0">
              <dt className="metric-num text-ink">
                {m.value === null ? m.display : <CountUp to={m.value} suffix={m.suffix ?? ""} />}
              </dt>
              <dd className="mt-2 text-[0.8125rem] leading-snug text-ink-soft">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
