import { cn } from "@/lib/utils";

/**
 * CargoFlow mark: a routed path that folds into a cargo unit.
 * Abstract route + flow, deliberately not a truck.
 */
export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 28 28"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="0.75" y="0.75" width="26.5" height="26.5" rx="8" className="fill-ink" />
        <path
          d="M6.5 19.5c3.6 0 3.6-11 7.2-11s3.6 11 7.2 11"
          className="stroke-background"
          strokeWidth="1.7"
          opacity="0.55"
        />
        <path d="M6.5 14h6.2" className="stroke-background" strokeWidth="1.7" />
        <rect x="14.4" y="10.6" width="6.9" height="6.9" rx="2" className="stroke-background" strokeWidth="1.7" />
        <circle cx="17.85" cy="14.05" r="1.15" className="fill-background" />
      </svg>
      {showWordmark && (
        <span className="text-[1.05rem] font-medium tracking-[-0.03em] text-ink">CargoFlow</span>
      )}
    </span>
  );
}
