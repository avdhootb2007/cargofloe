import { Logo } from "./logo";

const COLUMNS = [
  {
    title: "Platform",
    links: ["Product", "Network", "How it Works"],
  },
  {
    title: "Audiences",
    links: ["For Logistics", "For Operators"],
  },
  {
    title: "Company",
    links: ["About", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[0.875rem] leading-relaxed text-ink-soft">
              Technology for a more connected transport and logistics network.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="mono-label">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[0.875rem] text-ink-soft transition-colors hover:text-ink"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-hairline pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p className="text-[0.75rem] leading-relaxed text-ink-soft">
            Built for Maharashtra. Designed for the network. CargoFlow is a proposed technology
            platform and is not operated by or affiliated with MSRTC or any public transport
            authority. Figures shown are demo data.
          </p>
          <div className="flex shrink-0 gap-5">
            <a href="#privacy" className="text-[0.75rem] text-ink-soft transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="#terms" className="text-[0.75rem] text-ink-soft transition-colors hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
