import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { MAP_W, MAP_H, ROUTES, STATE_PATH, routePath } from "@/lib/network-data";

export function FinalCta() {
  return (
    <section id="request-access" className="relative scroll-mt-24 overflow-hidden bg-ink">
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d={STATE_PATH} fill="none" stroke="var(--color-background)" strokeWidth="1.5" />
        {ROUTES.map((r) => (
          <path
            key={r.id}
            d={routePath(r.stops)}
            fill="none"
            stroke="var(--color-background)"
            strokeWidth="1"
            strokeOpacity="0.7"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-background/50 uppercase">
            Public transit × logistics
          </p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mx-auto mt-6 max-w-3xl display-hero text-background">
            The road is already moving.
          </h2>
        </Reveal>
        <Reveal delay={130}>
          <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-background/65">
            CargoFlow gives that movement another purpose.
          </p>
        </Reveal>
        <Reveal delay={190}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Request Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#network"
              className="inline-flex items-center rounded-xl border border-background/25 px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Explore the Network
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
