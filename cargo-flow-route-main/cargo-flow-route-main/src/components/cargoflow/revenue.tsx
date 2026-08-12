import { Reveal } from "./reveal";

const FLOW = [
  {
    role: "Transport operator",
    line: "Publishes available cargo capacity per scheduled service.",
  },
  {
    role: "Logistics company",
    line: "Reserves the capacity it needs, by weight and departure window.",
  },
  {
    role: "CargoFlow",
    line: "Runs reservations, capacity control, tracking, billing and analytics.",
  },
  {
    role: "Transport operator",
    line: "Receives revenue from journeys that were already scheduled.",
  },
];

export function Revenue() {
  return (
    <section className="border-y border-hairline bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div>
            <Reveal>
              <p className="eyebrow">Revenue model</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 display-section text-ink">
                Every seat doesn't need a passenger to create value.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
                The model is deliberately simple: the operator supplies capacity, the logistics
                company reserves it, and CargoFlow is the layer that makes the exchange
                trustworthy—reservations, capacity limits, tracking, billing and reporting.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-soft">
                Commercial terms are set with the operator. CargoFlow publishes no fixed commission
                as part of this concept.
              </p>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <ol className="relative space-y-px overflow-hidden rounded-3xl border border-hairline bg-hairline">
              {FLOW.map((step, i) => (
                <li key={i} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 bg-card p-6">
                  <span className="mt-0.5 font-mono text-[0.6875rem] tracking-[0.14em] text-transit">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="mono-label">{step.role}</p>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink">{step.line}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
