import { NetworkMap } from "./network-map";
import { Reveal } from "./reveal";

const TIMELINE = [
  { label: "Booked", time: "07:12", done: true },
  { label: "Reserved", time: "07:20", done: true },
  { label: "Loaded", time: "08:22", done: true },
  { label: "In transit", time: "08:30", active: true },
  { label: "Delivered", time: "Est. 13:15" },
];

export function Tracking() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">Tracking</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 display-section text-ink">
            Package tracking, on transit infrastructure.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={110} className="mt-12">
        <div className="grid gap-4 overflow-hidden rounded-3xl border border-hairline bg-card p-4 shadow-float lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:p-5">
          <div className="min-w-0 p-2 sm:p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <p className="mono-label">Shipment</p>
                <p className="mt-1 truncate font-mono text-xl tracking-[-0.02em] text-ink">
                  #CF-2048
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-transit-soft px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-transit uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-transit" />
                In transit
              </span>
            </div>

            <dl className="mt-6 space-y-3.5 border-t border-hairline pt-5">
              <div className="flex items-center justify-between gap-3">
                <dt className="mono-label">Route</dt>
                <dd className="text-sm text-ink">Nashik → Pune</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="mono-label">Current location</dt>
                <dd className="text-sm text-ink">Sinnar</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="mono-label">Next stop</dt>
                <dd className="text-sm text-ink">Sangamner</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="mono-label">ETA</dt>
                <dd className="font-mono text-sm text-ink">12:45 PM</dd>
              </div>
            </dl>

            <ol className="mt-7 border-t border-hairline pt-6">
              {TIMELINE.map((t, i) => (
                <li key={t.label} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                  <span className="relative grid h-6 w-3 place-items-center">
                    {i !== TIMELINE.length - 1 && (
                      <span className="absolute top-1/2 bottom-[-0.75rem] w-px bg-hairline" />
                    )}
                    <span
                      className={
                        "relative z-10 h-2.5 w-2.5 rounded-full border-2 " +
                        (t.done
                          ? "border-live bg-live"
                          : t.active
                            ? "border-transit bg-transit"
                            : "border-border bg-card")
                      }
                    />
                  </span>
                  <span
                    className={
                      "min-w-0 truncate py-2 text-[0.875rem] " +
                      (t.done || t.active ? "text-ink" : "text-ink-soft")
                    }
                  >
                    {t.label}
                  </span>
                  <span className="shrink-0 font-mono text-[0.75rem] text-ink-soft">{t.time}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="overflow-hidden rounded-2xl border border-hairline bg-surface/50">
            <NetworkMap
              className="aspect-[10/8] lg:aspect-auto lg:h-full"
              routeIds={["nsk-pune", "mum-nsk", "nsk-ahilya", "mum-pune"]}
              focusRouteId="nsk-pune"
              labelCityIds={["nashik", "sinnar", "sangamner", "pune", "mumbai", "ahilyanagar"]}
              interactive={false}
            />
          </div>
        </div>
        <p className="mt-4 font-mono text-[0.625rem] tracking-[0.1em] text-ink-soft uppercase">
          Product visualisation · demo shipment
        </p>
      </Reveal>
    </section>
  );
}
