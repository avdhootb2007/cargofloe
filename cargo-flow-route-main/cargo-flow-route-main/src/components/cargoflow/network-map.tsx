import { useEffect, useState } from "react";
import {
  CITIES,
  CITY_BY_ID,
  MAP_H,
  MAP_W,
  ROUTES,
  STATE_PATH,
  cityPoint,
  routePath,
  type Route,
} from "@/lib/network-data";
import { cn } from "@/lib/utils";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

type NetworkMapProps = {
  routeIds?: string[];
  focusRouteId?: string;
  interactive?: boolean;
  showLabels?: boolean;
  labelCityIds?: string[];
  className?: string;
  compact?: boolean;
  onHoverRoute?: (route: Route | null) => void;
  hoveredId?: string | null;
};

function midpoint(stops: string[]): [number, number] {
  const first = stops[0];
  const last = stops[stops.length - 1];
  if (!first || !last) return [0, 0];
  const a = cityPoint(first);
  const b = cityPoint(last);
  return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
}

export function NetworkMap({
  routeIds,
  focusRouteId = "nsk-pune",
  interactive = true,
  showLabels = true,
  labelCityIds,
  className,
  compact = false,
  onHoverRoute,
  hoveredId,
}: NetworkMapProps) {
  const reduced = usePrefersReducedMotion();
  const [internalHover, setInternalHover] = useState<string | null>(null);
  const activeId = hoveredId ?? internalHover;

  const routes = routeIds ? ROUTES.filter((r) => routeIds.includes(r.id)) : ROUTES;
  const cities = labelCityIds ? CITIES.filter((c) => labelCityIds.includes(c.id)) : CITIES;
  const focus = routes.find((r) => r.id === focusRouteId) ?? routes[0];
  const activeRoute = routes.find((r) => r.id === activeId) ?? null;

  const setHover = (id: string | null) => {
    setInternalHover(id);
    onHoverRoute?.(id ? (routes.find((r) => r.id === id) ?? null) : null);
  };

  const card = activeRoute ?? null;
  const cardPos = card ? midpoint(card.stops) : null;

  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="h-full w-full"
        role="img"
        aria-label="Stylized map of Maharashtra showing scheduled bus routes with available cargo capacity"
      >
        <defs>
          <pattern id="cf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="var(--color-hairline)" strokeWidth="1" />
          </pattern>
          <linearGradient id="cf-state" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-surface)" />
            <stop offset="100%" stopColor="var(--color-surface-2)" />
          </linearGradient>
          <clipPath id="cf-clip">
            <path d={STATE_PATH} />
          </clipPath>
        </defs>

        <path d={STATE_PATH} fill="url(#cf-state)" stroke="var(--color-border)" strokeWidth="1.25" />
        <g clipPath="url(#cf-clip)" opacity="0.7">
          <rect width={MAP_W} height={MAP_H} fill="url(#cf-grid)" />
        </g>

        {/* Base network */}
        <g fill="none" strokeLinecap="round">
          {routes.map((route) => {
            const isFocus = focus?.id === route.id;
            const isActive = activeRoute?.id === route.id;
            const d = routePath(route.stops);
            return (
              <g key={route.id}>
                <path
                  d={d}
                  stroke={isFocus || isActive ? "var(--color-transit)" : "var(--color-ink-soft)"}
                  strokeWidth={isFocus || isActive ? 2 : 1}
                  strokeOpacity={isFocus || isActive ? 1 : 0.32}
                  strokeDasharray={isFocus ? undefined : "1 0"}
                  className="transition-all duration-300"
                />
                {interactive && (
                  <path
                    d={d}
                    stroke="transparent"
                    strokeWidth={22}
                    className="cursor-pointer"
                    onMouseEnter={() => setHover(route.id)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(route.id)}
                    onBlur={() => setHover(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${route.label}, departure ${route.departure}, ${route.capacityKg - route.reservedKg} kilograms available`}
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* Animated cargo markers */}
        {routes.map((route, i) => {
          const isFocus = focus?.id === route.id;
          if (!isFocus && i % 3 !== 0) return null;
          const d = routePath(route.stops);
          const dur = 10 + (i % 4) * 3;
          return (
            <g key={`bus-${route.id}`}>
              <rect
                x={-4.5}
                y={-3.5}
                width={9}
                height={7}
                rx={2}
                fill={isFocus ? "var(--color-transit)" : "var(--color-ink)"}
                opacity={isFocus ? 1 : 0.45}
              >
                {!reduced && (
                  <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={d} rotate="auto" />
                )}
              </rect>
            </g>
          );
        })}

        {/* Cities */}
        <g>
          {cities.map((city) => {
            const [x, y] = cityPoint(city.id);
            const onFocusRoute = focus?.stops.includes(city.id);
            const r = city.tier === 1 ? 4 : city.tier === 2 ? 3 : 2.4;
            return (
              <g key={city.id}>
                {onFocusRoute && !reduced && (
                  <circle cx={x} cy={y} r={r + 2} fill="var(--color-transit)" className="pulse-dot" />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={r}
                  fill={onFocusRoute ? "var(--color-transit)" : "var(--color-card)"}
                  stroke={onFocusRoute ? "var(--color-transit)" : "var(--color-ink)"}
                  strokeWidth="1.4"
                />
                {showLabels && city.tier <= (compact ? 1 : 3) && (
                  <text
                    x={x + (city.labelDx ?? 10)}
                    y={y + (city.labelDy ?? 4)}
                    textAnchor={city.anchor ?? "start"}
                    className={cn(
                      "fill-ink font-sans",
                      city.tier === 1 ? "text-[15px]" : "text-[12.5px]",
                    )}
                    style={{
                      fontSize: city.tier === 1 ? 15 : 12.5,
                      letterSpacing: "-0.01em",
                      opacity: city.tier === 1 ? 0.95 : 0.55,
                    }}
                  >
                    {city.short ?? city.name}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {card && cardPos && (
        <div
          className="pointer-events-none absolute z-20 w-52 -translate-x-1/2 -translate-y-full rounded-xl border border-hairline bg-card p-3 shadow-float"
          style={{ left: `${(cardPos[0] / MAP_W) * 100}%`, top: `${(cardPos[1] / MAP_H) * 100 - 2}%` }}
        >
          <p className="mono-label">Route</p>
          <p className="mt-1 text-sm font-medium text-ink">{card.label}</p>
          <dl className="mt-3 grid grid-cols-2 gap-y-2 text-[0.75rem]">
            <dt className="mono-label">Departs</dt>
            <dd className="text-right font-mono text-ink">{card.departure}</dd>
            <dt className="mono-label">Available</dt>
            <dd className="text-right font-mono text-ink">{card.capacityKg - card.reservedKg} kg</dd>
            <dt className="mono-label">Delivery</dt>
            <dd className="text-right font-mono text-ink">Today</dd>
          </dl>
        </div>
      )}
    </div>
  );
}

export function routeById(id: string) {
  return ROUTES.find((r) => r.id === id);
}

export function cityName(id: string) {
  return CITY_BY_ID[id]?.name ?? id;
}
