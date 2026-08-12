import {
  BarChart3,
  Boxes,
  CalendarClock,
  LayoutGrid,
  Map as MapIcon,
  Package,
  Route as RouteIcon,
  Settings,
} from "lucide-react";
import { NetworkMap } from "./network-map";
import { Reveal } from "./reveal";

const SIDEBAR = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "Shipments", icon: Package },
  { label: "Network", icon: MapIcon },
  { label: "Routes", icon: RouteIcon },
  { label: "Capacity", icon: Boxes },
  { label: "Reservations", icon: CalendarClock },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const STATS = [
  { label: "Available capacity", value: "124 kg", tone: "live" },
  { label: "Shipments in transit", value: "8" },
  { label: "Active routes", value: "23" },
  { label: "Projected network revenue", value: "₹18,420" },
];

export function DashboardPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">The product</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 display-section text-ink">
            One control surface for capacity, cargo and routes.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            Operators see what capacity exists. Logistics teams see what they can reserve. Both see
            the same live network.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12">
        <div className="overflow-hidden rounded-3xl border border-hairline bg-card shadow-float">
          <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
            </div>
            <p className="mono-label truncate">app.cargoflow — network overview</p>
          </div>

          <div className="grid lg:grid-cols-[210px_minmax(0,1fr)]">
            <nav className="hidden border-r border-hairline bg-surface/60 p-3 lg:block" aria-label="Dashboard">
              <ul className="space-y-0.5">
                {SIDEBAR.map((item) => (
                  <li key={item.label}>
                    <span
                      className={
                        "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.8125rem] " +
                        (item.active ? "bg-card text-ink shadow-panel" : "text-ink-soft")
                      }
                    >
                      <item.icon className="h-4 w-4 shrink-0" strokeWidth={1.6} />
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="min-w-0 p-4 sm:p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-medium tracking-[-0.02em] text-ink">
                    Network Overview
                  </h3>
                  <p className="mono-label mt-1">Maharashtra · demo dataset</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-live-soft px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-live uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-live" />
                  Live
                </span>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-xl border border-hairline bg-surface/60 p-3">
                    <dt className="mono-label leading-tight">{s.label}</dt>
                    <dd
                      className={
                        "mt-2 font-mono text-[1.0625rem] tracking-[-0.02em] " +
                        (s.tone === "live" ? "text-live" : "text-ink")
                      }
                    >
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 overflow-hidden rounded-2xl border border-hairline bg-surface/40">
                <NetworkMap className="aspect-[16/10]" focusRouteId="nsk-pune" />
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-[0.8125rem]">
                  <thead>
                    <tr className="border-b border-hairline">
                      {["Shipment", "Route", "Service", "Weight", "Status"].map((h) => (
                        <th key={h} className="mono-label py-2 font-normal">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="font-mono text-ink">
                    {[
                      ["CF-2048", "Nashik → Pune", "1024", "18 kg", "In transit"],
                      ["CF-2051", "Mumbai → Nashik", "1188", "9 kg", "Loaded"],
                      ["CF-2053", "Pune → Kolhapur", "7702", "24 kg", "Reserved"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-hairline last:border-0">
                        {row.map((cell, i) => (
                          <td key={i} className="py-2.5 pr-3">
                            {i === 4 ? (
                              <span className="rounded-full border border-hairline px-2 py-0.5 text-[0.6875rem] tracking-[0.05em] text-ink-soft uppercase">
                                {cell}
                              </span>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 font-mono text-[0.625rem] tracking-[0.1em] text-ink-soft uppercase">
          Product visualisation · demo data, not operational statistics
        </p>
      </Reveal>
    </section>
  );
}
