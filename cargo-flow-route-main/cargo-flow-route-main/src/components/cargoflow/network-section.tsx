import { useState } from "react";
import { NetworkMap } from "./network-map";
import { Reveal } from "./reveal";
import { ROUTES, type Route } from "@/lib/network-data";

const FEATURED_IDS = ["nsk-pune", "mum-pune", "mum-nsk", "nsk-sambhaji", "pune-solapur", "nsk-ahilya"];

export function NetworkSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const featured = ROUTES.filter((r) => FEATURED_IDS.includes(r.id));
  const active: Route | undefined = featured.find((r) => r.id === hovered) ?? featured[0];

  return (
    <section id="network" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">The network</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 display-section text-ink">One network. Thousands of journeys.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            The MVP models scheduled services across selected Maharashtra divisions, starting with
            the Nashik, Pune and Mumbai corridors. Hover a route to inspect it.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-6">
          <div className="overflow-hidden rounded-3xl border border-hairline bg-card p-2 shadow-panel">
            <div className="rounded-[1.25rem] bg-surface/60">
              <NetworkMap
                className="aspect-[10/7]"
                focusRouteId={active?.id ?? "nsk-pune"}
                hoveredId={hovered}
                onHoverRoute={(r) => setHovered(r?.id ?? null)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {active && (
              <div className="rounded-3xl border border-hairline bg-card p-6 shadow-panel">
                <div className="flex items-center justify-between gap-3">
                  <p className="mono-label">Active route</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-live-soft px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-live uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-live" />
                    Space available
                  </span>
                </div>
                <p className="mt-2 text-xl font-medium tracking-[-0.02em] text-ink">{active.label}</p>
                <dl className="mt-5 space-y-3 border-t border-hairline pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="mono-label">Next departure</dt>
                    <dd className="font-mono text-sm text-ink">{active.departure}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="mono-label">Arrival</dt>
                    <dd className="font-mono text-sm text-ink">{active.arrival}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="mono-label">Capacity</dt>
                    <dd className="font-mono text-sm text-ink">
                      {active.capacityKg - active.reservedKg} kg
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="mono-label">Service</dt>
                    <dd className="font-mono text-sm text-ink">{active.service}</dd>
                  </div>
                </dl>
              </div>
            )}

            <ul className="divide-y divide-hairline overflow-hidden rounded-3xl border border-hairline bg-card">
              {featured.map((r) => (
                <li key={r.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setHovered(r.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(r.id)}
                    onBlur={() => setHovered(null)}
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3.5 text-left transition-colors hover:bg-surface/70"
                  >
                    <span className="min-w-0 truncate text-[0.875rem] text-ink">{r.label}</span>
                    <span className="shrink-0 font-mono text-[0.75rem] text-ink-soft">
                      {r.departure} · {r.capacityKg - r.reservedKg} kg
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 font-mono text-[0.625rem] tracking-[0.1em] text-ink-soft uppercase">
          Route geometry is stylised · schedules are demo data derived from published timetable structures
        </p>
      </Reveal>
    </section>
  );
}
