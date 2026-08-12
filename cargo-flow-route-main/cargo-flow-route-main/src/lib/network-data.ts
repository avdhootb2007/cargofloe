/**
 * Stylized Maharashtra network geometry.
 * All coordinates are approximate geographic points, projected into a fixed
 * SVG viewBox. Data is demo data for product visualisation only.
 */

export const MAP_W = 1000;
export const MAP_H = 720;

const LON_MIN = 72.0;
const LON_MAX = 81.5;
const LAT_MIN = 15.3;
const LAT_MAX = 22.4;

export function project(lon: number, lat: number): [number, number] {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_W;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_H;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

const OUTLINE: Array<[number, number]> = [
  [72.72, 20.12],
  [73.5, 20.14],
  [74.02, 21.02],
  [74.62, 21.42],
  [75.9, 21.42],
  [76.62, 21.28],
  [77.5, 21.42],
  [78.32, 21.62],
  [79.02, 21.72],
  [79.62, 21.82],
  [80.22, 21.6],
  [80.88, 21.28],
  [80.42, 20.6],
  [80.18, 20.02],
  [79.9, 19.42],
  [79.5, 19.22],
  [79.02, 19.32],
  [78.4, 19.02],
  [77.7, 18.92],
  [77.3, 18.42],
  [76.92, 18.22],
  [76.6, 17.72],
  [76.9, 17.42],
  [77.0, 17.02],
  [76.5, 16.62],
  [76.0, 16.42],
  [75.3, 16.02],
  [74.8, 15.92],
  [74.4, 15.72],
  [74.08, 15.92],
  [73.9, 16.22],
  [73.62, 16.12],
  [73.4, 16.62],
  [73.2, 17.42],
  [72.9, 18.42],
  [72.78, 19.22],
];

export const STATE_PATH =
  OUTLINE.map(([lon, lat], i) => {
    const [x, y] = project(lon, lat);
    return `${i === 0 ? "M" : "L"}${x} ${y}`;
  }).join(" ") + " Z";

export type City = {
  id: string;
  name: string;
  short?: string;
  lon: number;
  lat: number;
  tier: 1 | 2 | 3;
  labelDx?: number;
  labelDy?: number;
  anchor?: "start" | "end" | "middle";
};

export const CITIES: City[] = [
  { id: "mumbai", name: "Mumbai", lon: 72.877, lat: 19.076, tier: 1, labelDx: 11, labelDy: 16 },
  { id: "pune", name: "Pune", lon: 73.856, lat: 18.52, tier: 1, labelDx: -12, labelDy: 16, anchor: "end" },
  { id: "nashik", name: "Nashik", lon: 73.79, lat: 19.997, tier: 1, labelDx: -12, anchor: "end" },
  { id: "nagpur", name: "Nagpur", lon: 79.088, lat: 21.146, tier: 1, labelDx: 12 },
  {
    id: "sambhajinagar",
    name: "Chh. Sambhajinagar",
    short: "Sambhajinagar",
    lon: 75.343,
    lat: 19.877,
    tier: 1,
    labelDx: 12,
    labelDy: -8,
  },
  { id: "kolhapur", name: "Kolhapur", lon: 74.243, lat: 16.705, tier: 2, labelDx: -12, anchor: "end" },
  { id: "solapur", name: "Solapur", lon: 75.906, lat: 17.659, tier: 2, labelDx: 12 },
  { id: "amravati", name: "Amravati", lon: 77.75, lat: 20.933, tier: 2, labelDx: 0, labelDy: -14, anchor: "middle" },
  { id: "nanded", name: "Nanded", lon: 77.32, lat: 19.15, tier: 2, labelDx: 12 },
  { id: "jalgaon", name: "Jalgaon", lon: 75.563, lat: 21.007, tier: 2, labelDx: 0, labelDy: -14, anchor: "middle" },
  { id: "sangamner", name: "Sangamner", lon: 74.21, lat: 19.57, tier: 3, labelDx: 11, labelDy: 4 },
  { id: "sinnar", name: "Sinnar", lon: 74.0, lat: 19.85, tier: 3, labelDx: 11, labelDy: -4 },
  { id: "ahilyanagar", name: "Ahilyanagar", lon: 74.748, lat: 19.095, tier: 3, labelDx: 11 },
  { id: "ratnagiri", name: "Ratnagiri", lon: 73.3, lat: 16.994, tier: 3, labelDx: -11, anchor: "end" },
  { id: "satara", name: "Satara", lon: 74.006, lat: 17.686, tier: 3, labelDx: -11, anchor: "end" },
  { id: "latur", name: "Latur", lon: 76.56, lat: 18.4, tier: 3, labelDx: 10, labelDy: 12 },
];

export const CITY_BY_ID = Object.fromEntries(CITIES.map((c) => [c.id, c])) as Record<string, City>;

export function cityPoint(id: string): [number, number] {
  const c = CITY_BY_ID[id];
  if (!c) return [0, 0];
  return project(c.lon, c.lat);
}

export type Route = {
  id: string;
  label: string;
  stops: string[];
  service: string;
  departure: string;
  arrival: string;
  capacityKg: number;
  reservedKg: number;
  primary?: boolean;
};

export const ROUTES: Route[] = [
  {
    id: "nsk-pune",
    label: "Nashik → Pune",
    stops: ["nashik", "sinnar", "sangamner", "pune"],
    service: "Service 1024",
    departure: "08:30",
    arrival: "13:15",
    capacityKg: 80,
    reservedKg: 12,
    primary: true,
  },
  {
    id: "mum-pune",
    label: "Mumbai → Pune",
    stops: ["mumbai", "pune"],
    service: "Service 2210",
    departure: "09:10",
    arrival: "12:40",
    capacityKg: 70,
    reservedKg: 44,
  },
  {
    id: "mum-nsk",
    label: "Mumbai → Nashik",
    stops: ["mumbai", "nashik"],
    service: "Service 1188",
    departure: "07:45",
    arrival: "11:30",
    capacityKg: 80,
    reservedKg: 26,
  },
  {
    id: "nsk-sambhaji",
    label: "Nashik → Ch. Sambhajinagar",
    stops: ["nashik", "sambhajinagar"],
    service: "Service 3401",
    departure: "10:15",
    arrival: "15:05",
    capacityKg: 75,
    reservedKg: 31,
  },
  {
    id: "pune-solapur",
    label: "Pune → Solapur",
    stops: ["pune", "solapur"],
    service: "Service 4520",
    departure: "06:20",
    arrival: "12:10",
    capacityKg: 80,
    reservedKg: 58,
  },
  {
    id: "sambhaji-nanded",
    label: "Ch. Sambhajinagar → Nanded",
    stops: ["sambhajinagar", "latur", "nanded"],
    service: "Service 5108",
    departure: "11:00",
    arrival: "17:20",
    capacityKg: 70,
    reservedKg: 18,
  },
  {
    id: "nagpur-amravati",
    label: "Nagpur → Amravati",
    stops: ["nagpur", "amravati"],
    service: "Service 6033",
    departure: "08:05",
    arrival: "11:35",
    capacityKg: 75,
    reservedKg: 22,
  },
  {
    id: "jal-nagpur",
    label: "Jalgaon → Nagpur",
    stops: ["jalgaon", "amravati", "nagpur"],
    service: "Service 6612",
    departure: "05:40",
    arrival: "14:50",
    capacityKg: 80,
    reservedKg: 37,
  },
  {
    id: "pune-kolhapur",
    label: "Pune → Kolhapur",
    stops: ["pune", "satara", "kolhapur"],
    service: "Service 7702",
    departure: "07:15",
    arrival: "12:55",
    capacityKg: 70,
    reservedKg: 40,
  },
  {
    id: "pune-ratnagiri",
    label: "Pune → Ratnagiri",
    stops: ["pune", "satara", "ratnagiri"],
    service: "Service 8109",
    departure: "06:50",
    arrival: "14:20",
    capacityKg: 65,
    reservedKg: 29,
  },
  {
    id: "nsk-ahilya",
    label: "Nashik → Ahilyanagar",
    stops: ["nashik", "sangamner", "ahilyanagar"],
    service: "Service 2907",
    departure: "09:35",
    arrival: "13:40",
    capacityKg: 70,
    reservedKg: 15,
  },
];

/** Smooth polyline through a route's stops, as an SVG path string. */
export function routePath(stops: string[]): string {
  const pts = stops.map(cityPoint);
  const first = pts[0];
  if (!first) return "";
  if (pts.length < 3) {
    const second = pts[1] ?? first;
    return `M${first[0]} ${first[1]} L${second[0]} ${second[1]}`;
  }
  let d = `M${first[0]} ${first[1]}`;
  for (let i = 1; i < pts.length; i++) {
    const cur = pts[i]!;
    const prev = pts[i - 1]!;
    const mx = (prev[0] + cur[0]) / 2;
    const my = (prev[1] + cur[1]) / 2;
    d += ` Q${prev[0]} ${prev[1]} ${mx} ${my}`;
    if (i === pts.length - 1) d += ` L${cur[0]} ${cur[1]}`;
  }
  return d;
}
