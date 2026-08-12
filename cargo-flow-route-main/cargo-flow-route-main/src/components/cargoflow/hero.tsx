import { ArrowRight } from "lucide-react";
import { NetworkMap } from "./network-map";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] grid-paper opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-10 lg:pb-24">
        <div>
          <Reveal>
            <p className="eyebrow">The logistics network already exists</p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="mt-5 display-hero text-ink">
              Turn every journey into delivery capacity.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
              CargoFlow lets logistics companies reserve unused capacity on scheduled public
              buses—creating a faster, more affordable way to move cargo across Maharashtra.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#network"
                className="group inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Explore the Network
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#request-access"
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
              >
                Request Access
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 text-[0.8125rem] text-ink-soft">
              Built around scheduled public transport. Designed for logistics.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative rounded-3xl border border-hairline bg-card p-2 shadow-float">
            <div className="rounded-[1.25rem] bg-surface p-1">
              <NetworkMap className="aspect-[10/8] sm:aspect-[10/7.4]" focusRouteId="nsk-pune" />
            </div>

            <div className="mt-2 w-full rounded-2xl border border-hairline bg-card p-4 lg:pointer-events-none lg:absolute lg:-bottom-8 lg:right-4 lg:mt-0 lg:w-[17rem] lg:shadow-float">
              <div className="flex items-center justify-between gap-3">
                <p className="mono-label">Live reservation</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-live-soft px-2 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-live uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-live" />
                  Space available
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="metric-num text-ink">68</span>
                <span className="text-sm text-ink-soft">kg available capacity</span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-y-2.5 border-t border-hairline pt-3 text-[0.8125rem]">
                <dt className="mono-label">Route</dt>
                <dd className="text-right text-ink">Nashik → Pune</dd>
                <dt className="mono-label">Departure</dt>
                <dd className="text-right font-mono text-ink">08:30 AM</dd>
                <dt className="mono-label">Arrival</dt>
                <dd className="text-right font-mono text-ink">01:15 PM</dd>
              </dl>
            </div>
          </div>
          <p className="mt-6 text-left lg:mt-14 font-mono text-[0.625rem] tracking-[0.1em] text-ink-soft uppercase">
            Product visualisation · demo data
          </p>
        </Reveal>
      </div>
    </section>
  );
}
