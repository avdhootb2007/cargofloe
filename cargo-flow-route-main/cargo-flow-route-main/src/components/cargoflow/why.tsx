import { Activity, Coins, Layers, TrendingDown } from "lucide-react";
import { Reveal } from "./reveal";

const CARDS = [
  {
    icon: Layers,
    title: "Utilize existing infrastructure",
    body: "Move more cargo without adding dedicated vehicles to lanes that are already served.",
  },
  {
    icon: TrendingDown,
    title: "Lower cost",
    body: "Use scheduled journeys instead of building every route from scratch.",
  },
  {
    icon: Activity,
    title: "Real-time visibility",
    body: "Track cargo through every stage—from reservation to proof of delivery.",
  },
  {
    icon: Coins,
    title: "New transit revenue",
    body: "Turn unused cargo capacity into a new revenue stream for the operator.",
  },
];

export function WhyCargoFlow() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
      <Reveal>
        <p className="eyebrow">Why CargoFlow</p>
      </Reveal>
      <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 70} className="bg-card">
            <article className="group h-full p-6 transition-colors hover:bg-surface/70 sm:p-7">
              <c.icon className="h-5 w-5 text-transit" strokeWidth={1.6} />
              <h3 className="mt-6 text-[1.0625rem] font-medium tracking-[-0.02em] text-ink">
                {c.title}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-soft">{c.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
