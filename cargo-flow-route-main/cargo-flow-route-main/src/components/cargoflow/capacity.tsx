import { useInView, Reveal } from "./reveal";

const TOTAL = 80;
const RESERVED = 32;
const AVAILABLE = TOTAL - RESERVED;

function BusDiagram({ fill }: { fill: number }) {
  return (
    <svg viewBox="0 0 520 190" className="w-full" role="img" aria-label="Bus cargo hold with reserved and available capacity">
      <rect x="14" y="26" width="486" height="104" rx="22" fill="var(--color-surface)" stroke="var(--color-border)" />
      <rect x="34" y="44" width="96" height="44" rx="10" fill="var(--color-card)" stroke="var(--color-hairline)" />
      <rect x="146" y="44" width="70" height="44" rx="10" fill="var(--color-card)" stroke="var(--color-hairline)" />
      <rect x="232" y="44" width="70" height="44" rx="10" fill="var(--color-card)" stroke="var(--color-hairline)" />
      <rect x="318" y="44" width="70" height="44" rx="10" fill="var(--color-card)" stroke="var(--color-hairline)" />
      <rect x="404" y="44" width="70" height="44" rx="10" fill="var(--color-card)" stroke="var(--color-hairline)" />

      {/* cargo hold */}
      <rect x="34" y="98" width="440" height="24" rx="8" fill="var(--color-card)" stroke="var(--color-hairline)" />
      <rect
        x="36"
        y="100"
        width={436 * (fill / 100)}
        height="20"
        rx="6"
        fill="var(--color-ink)"
        opacity="0.85"
        style={{ transition: "width 1.1s cubic-bezier(0.22,0.8,0.3,1)" }}
      />
      <circle cx="126" cy="140" r="18" fill="var(--color-card)" stroke="var(--color-ink)" strokeWidth="2" />
      <circle cx="126" cy="140" r="6" fill="var(--color-ink)" opacity="0.25" />
      <circle cx="392" cy="140" r="18" fill="var(--color-card)" stroke="var(--color-ink)" strokeWidth="2" />
      <circle cx="392" cy="140" r="6" fill="var(--color-ink)" opacity="0.25" />
      <rect x="14" y="26" width="10" height="104" rx="5" fill="var(--color-signal)" opacity="0.75" />
    </svg>
  );
}

export function Capacity() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const reservedPct = (RESERVED / TOTAL) * 100;

  return (
    <section className="border-y border-hairline bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center sm:py-28">
        <div>
          <Reveal>
            <p className="eyebrow">Capacity</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 display-section text-ink">Make empty capacity productive.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
              Every scheduled service carries a cargo allowance. When part of it goes unused, that
              space is a wasted asset. CargoFlow measures it, publishes it, and makes it reservable.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 border-l-2 border-signal pl-4 text-[0.9375rem] leading-relaxed text-ink">
              Unused capacity becomes usable logistics infrastructure—without adding a single
              vehicle to the road.
            </p>
          </Reveal>
        </div>

        <Reveal delay={90}>
          <div ref={ref} className="rounded-3xl border border-hairline bg-card p-6 shadow-panel sm:p-8">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
              <div className="min-w-0">
                <p className="mono-label">Bus 1024</p>
                <p className="mt-1 truncate text-lg font-medium tracking-[-0.02em] text-ink">
                  Nashik → Pune
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-live-soft px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-live uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-live" />
                {AVAILABLE} kg free
              </span>
            </div>

            <div className="mt-6">
              <BusDiagram fill={inView ? reservedPct : 0} />
            </div>

            <div className="mt-6">
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-ink"
                  style={{
                    width: inView ? `${reservedPct}%` : "0%",
                    transition: "width 1.1s cubic-bezier(0.22,0.8,0.3,1)",
                  }}
                />
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-hairline pt-5">
                <div>
                  <dt className="mono-label">Total capacity</dt>
                  <dd className="mt-1.5 font-mono text-xl tracking-[-0.02em] text-ink">{TOTAL} kg</dd>
                </div>
                <div>
                  <dt className="mono-label">Reserved</dt>
                  <dd className="mt-1.5 font-mono text-xl tracking-[-0.02em] text-ink">{RESERVED} kg</dd>
                </div>
                <div>
                  <dt className="mono-label">Available</dt>
                  <dd className="mt-1.5 font-mono text-xl tracking-[-0.02em] text-live">{AVAILABLE} kg</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
