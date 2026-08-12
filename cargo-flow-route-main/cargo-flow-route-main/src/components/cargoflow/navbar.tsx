import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "For Logistics", href: "#for-logistics" },
  { label: "For Operators", href: "#for-operators" },
  { label: "Network", href: "#network" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-transparent px-3 py-2.5 transition-all duration-300 sm:px-4",
          scrolled &&
            "border-hairline bg-background/80 shadow-panel backdrop-blur-xl supports-[backdrop-filter]:bg-background/70",
        )}
      >
        <a href="#top" className="flex min-w-0 items-center" aria-label="CargoFlow home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-[0.8125rem] text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1.5 lg:flex">
          <a
            href="#request-access"
            className="rounded-lg px-3 py-2 text-[0.8125rem] text-ink-soft transition-colors hover:text-ink"
          >
            Sign in
          </a>
          <a
            href="#request-access"
            className="rounded-lg bg-ink px-3.5 py-2 text-[0.8125rem] font-medium text-background transition-opacity hover:opacity-90"
          >
            Request Access
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-hairline bg-card text-ink lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-hairline bg-background p-3 shadow-float lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-ink hairline-b last:border-b-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-2">
            <a
              href="#request-access"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-hairline px-3 py-2.5 text-center text-sm text-ink"
            >
              Sign in
            </a>
            <a
              href="#request-access"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-ink px-3 py-2.5 text-center text-sm font-medium text-background"
            >
              Request Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
