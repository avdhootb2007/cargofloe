# Manual Setup — CargoFlow

The CargoFlow landing page runs with **no manual setup**. There are no API keys, no
environment variables and no external services required. `bun install` + `bun run dev`
is enough.

## 1. Maps / API keys

**No action required.**

The Maharashtra network visualisations (hero, network section, dashboard preview and
shipment tracking) are rendered as a custom stylised SVG map built from projected
geographic coordinates in `src/lib/network-data.ts`. There is no Google Maps, Mapbox
or other map provider dependency, so nothing needs a key and nothing can break at
runtime because a key is missing.

If you later want to swap in a real map provider:

1. Obtain a key from the provider (e.g. Google Cloud Console → *APIs & Services →
   Credentials*).
2. Enable the APIs you need (for Google: *Maps JavaScript API*, *Directions API*,
   *Places API*).
3. Add a variable to `.env` — it must be prefixed with `VITE_` to reach the browser:
   `VITE_MAPS_API_KEY=your_key_here`
4. Copy `.env.example` to `.env` and fill in the value. Never commit `.env`.
5. Restart the dev server so Vite picks up the new variable:
   `bun run dev`

## 2. Environment variables

None are currently used by the landing page. `.env.example` is included only as a
placeholder for the optional map-provider migration described above.

## 3. Data

All routes, schedules, capacities, shipments and revenue figures are **demo data**
defined in `src/lib/network-data.ts` and inside the section components. They are
labelled as product visualisation on the page.

Route structure is inspired by publicly published MSRTC timetable patterns. CargoFlow
is presented as an independent technology platform — the page makes no claim of
operating, or being affiliated with, MSRTC or any public transport authority. Keep
that framing if you edit the copy.

## 4. Deployment

Publish from the Lovable editor (**Publish** in the top right). No build-time secrets
are needed.

## 5. Custom domain

Configure under *Project → Settings → Domains* in Lovable, then add the CNAME record
your DNS provider asks for. No code change is required.
