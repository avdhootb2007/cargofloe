import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Book",
    lead: "A logistics company enters the shipment.",
    items: ["Origin", "Destination", "Parcel weight", "Parcel dimensions", "Required delivery window"],
  },
  {
    n: "02",
    title: "Match",
    lead: "CargoFlow searches scheduled transport services.",
    items: ["Route compatibility", "Available capacity", "Departure time", "Arrival time"],
  },
  {
    n: "03",
    title: "Move",
    lead: "The parcel travels with the scheduled service.",
    items: ["Bus", "Route", "Shipment", "Capacity", "Status"],
  },
  {
    n: "04",
    title: "Deliver",
    lead: "Handover happens at the destination.",
    items: ["Parcel is handed over", "Shipment status updates", "Digital proof of delivery"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-y border-hairline bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">How it works</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 display-section text-ink">
              Cargo moves through the network, not around it.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 80} className="bg-card">
              <div className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-transit">
                    {step.n}
                  </span>
                  <span className="h-px flex-1 bg-hairline" />
                  <span className="h-1.5 w-1.5 rounded-full bg-transit" />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-[-0.02em] text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.lead}</p>
                <ul className="mt-5 space-y-2 border-t border-hairline pt-5">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.8125rem] text-ink-soft">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-ink-soft/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
