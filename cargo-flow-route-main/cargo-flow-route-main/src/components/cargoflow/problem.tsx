import { ArrowDown } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

function FlowStep({
  label,
  note,
  muted,
}: {
  label: string;
  note?: string;
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3",
        muted ? "border-dashed border-border bg-transparent" : "border-hairline bg-card shadow-panel",
      )}
    >
      <p className="text-sm font-medium text-ink">{label}</p>
      {note && <p className="mt-0.5 text-[0.75rem] text-ink-soft">{note}</p>}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden="true">
      <ArrowDown className="h-3.5 w-3.5 text-ink-soft/60" />
    </div>
  );
}

export function Problem() {
  return (
    <section id="product" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">The utilisation gap</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 display-section text-ink">
            Millions of kilometres are already being travelled.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            The network doesn't need more vehicles. It needs better utilization. Scheduled buses
            leave on time whether their cargo hold is full or empty.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <article className="h-full rounded-3xl border border-border bg-surface/50 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="mono-label">Current model</p>
              <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-ink-soft uppercase">
                Higher cost per parcel
              </span>
            </div>
            <div className="mt-6">
              <FlowStep label="Courier" note="Regional shipment created" muted />
              <Arrow />
              <FlowStep label="Dedicated vehicle" note="One vehicle committed per lane" muted />
              <Arrow />
              <FlowStep label="Route" note="Fuel, driver, maintenance, idle return" muted />
              <Arrow />
              <FlowStep label="Delivery" muted />
            </div>
            <p className="mt-6 border-t border-border pt-5 text-sm text-ink-soft">
              Every new lane means another vehicle, another driver, another fixed cost—regardless of
              how much cargo actually moves.
            </p>
          </article>
        </Reveal>

        <Reveal delay={90}>
          <article className="h-full rounded-3xl border border-hairline bg-card p-6 shadow-panel sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="mono-label">CargoFlow model</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-live-soft px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-live uppercase">
                Better utilization
              </span>
            </div>
            <div className="mt-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <FlowStep label="Existing bus journey" note="Already scheduled, already departing" />
                <FlowStep label="Available cargo capacity" note="Space left over after passenger load" />
              </div>
              <Arrow />
              <FlowStep label="Cargo reservation" note="Booked by weight, route and departure window" />
              <Arrow />
              <FlowStep label="Delivery network" note="Handover and last-mile at destination" />
            </div>
            <p className="mt-6 border-t border-hairline pt-5 text-sm text-ink-soft">
              The journey happens either way. CargoFlow simply gives the unused space a purpose—and
              gives the operator a second revenue line for it.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
