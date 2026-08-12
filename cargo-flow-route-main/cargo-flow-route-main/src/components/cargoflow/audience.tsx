import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";

const LOGISTICS = [
  "Lower regional delivery costs",
  "Access to existing routes",
  "Predictable scheduled departures",
  "Shipment visibility",
  "Centralized reservations",
  "Digital proof of delivery",
];

const OPERATORS = [
  "Additional revenue per journey",
  "Better vehicle utilisation",
  "Centralized cargo management",
  "Network-wide visibility",
  "Capacity analytics",
  "Controlled cargo reservations",
];

export function ForLogistics() {
  return (
    <section id="for-logistics" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow">For logistics companies</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 display-section text-ink">Ship without adding another vehicle.</h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
              Reserve capacity on services that are already running your lane. Pay for the space you
              use, not for a vehicle you have to keep moving.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <a
              href="#request-access"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start shipping
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={90}>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2">
            {LOGISTICS.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-card p-5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-live-soft">
                  <Check className="h-3 w-3 text-live" strokeWidth={2.5} />
                </span>
                <span className="text-[0.875rem] leading-snug text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function ForOperators() {
  return (
    <section id="for-operators" className="scroll-mt-24 bg-ink py-20 text-background sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <ul className="grid gap-px overflow-hidden rounded-3xl bg-background/15 sm:grid-cols-2">
            {OPERATORS.map((item) => (
              <li key={item} className="bg-ink p-5">
                <span className="font-mono text-[0.625rem] tracking-[0.1em] text-background/40 uppercase">
                  Operator
                </span>
                <p className="mt-2 text-[0.9375rem] leading-snug text-background/90">{item}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-background/50 uppercase">
              For transport operators
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 display-section text-background">Turn unused capacity into revenue.</h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-background/70">
              A transport organisation keeps full control of how much cargo space is offered, on
              which services, and under what rules. CargoFlow handles the reservations, tracking and
              reporting around it.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <a
              href="#request-access"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-background/25 px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Explore operator model
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-[0.75rem] leading-relaxed text-background/45">
              CargoFlow is an independent technology platform. It is not operated by, or affiliated
              with, MSRTC or any public transport authority.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
