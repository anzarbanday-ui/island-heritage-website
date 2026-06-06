import {
  Car,
  Clock,
  ConciergeBell,
  Droplets,
  Flame,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Plane,
  Shirt,
  Sparkles,
  Tv,
  Utensils,
  Wifi
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const site = {
  name: "Island Heritage",
  tagline: "A quiet luxury retreat shaped by landscape, craft, and unhurried hospitality.",
  url: "https://islandheritage.example.com",
  phone: "+91 94190 08857",
  whatsapp: "+919419008857",
  email: "peerwajahatkhaki@gmail.com",
  address: "Peerzu Island, Near GPO, Lal Chowk, Srinagar, J & K, India",
  hours: "Daily, 7:00 AM - 11:00 PM"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/amenities", label: "Amenities" },
  { href: "/about", label: "About" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Book" }
];

export type PhotoPlan = {
  label: string;
  shot: string;
  angle: string;
  lighting: string;
  framing: string;
  timing: string;
  equipment: string;
};

export const photoPlans: Record<string, PhotoPlan> = {
  hero: {
    label: "Capture: cinematic exterior hotel shot during golden hour",
    shot: "Exterior arrival facade with architectural depth and warm interior glow.",
    angle: "Low-to-mid height, slightly wide, centered on the entrance axis.",
    lighting: "Golden hour with soft side light and practical lamps visible.",
    framing: "Symmetrical, clean foreground, no people or vehicles in frame.",
    timing: "20 minutes before sunset.",
    equipment: "Full-frame camera, 24mm lens, tripod recommended."
  },
  about: {
    label: "Capture: quiet lounge detail with heritage materials",
    shot: "Interior lounge showing texture, craft, and negative space.",
    angle: "Eye-level three-quarter view from a calm corner position.",
    lighting: "Natural window light with warm balanced interior lamps.",
    framing: "Layer furniture, wall art, and local material details.",
    timing: "Late morning after housekeeping reset.",
    equipment: "35mm prime lens, tripod, polarizer optional."
  },
  room: {
    label: "Capture: wide-angle room image with natural lighting",
    shot: "Guest room showing bed, seating, window, and floor finish.",
    angle: "Corner wide angle, camera level, avoid distortion.",
    lighting: "Soft daylight with lamps on for depth.",
    framing: "Include window view without overexposure; remove clutter.",
    timing: "Morning or golden hour depending on room orientation.",
    equipment: "16-24mm lens, tripod, bracketed exposures."
  },
  dining: {
    label: "Capture: refined restaurant table setting at dusk",
    shot: "Dining space with linen, glassware, and warm ambience.",
    angle: "Seated eye-level view across table to room depth.",
    lighting: "Dusk ambience with warm practical light and candle detail.",
    framing: "Foreground table setting, elegant negative space, no crowd.",
    timing: "Blue hour before dinner service.",
    equipment: "35mm lens, tripod, small bounce card."
  },
  galleryExterior: {
    label: "Capture: landscaped exterior and arrival path",
    shot: "Garden approach, facade, and mountain or sky context.",
    angle: "Wide three-quarter architectural perspective.",
    lighting: "Golden hour or soft overcast for balanced detail.",
    framing: "Lead the eye with pathway lines and uncluttered edges.",
    timing: "Sunrise or late afternoon.",
    equipment: "24mm lens, tripod, graduated filter optional."
  },
  map: {
    label: "Map placeholder: replace with embedded custom location map",
    shot: "Styled map showing hotel, approach roads, and nearby landmarks.",
    angle: "Top-down digital composition.",
    lighting: "Neutral map palette matching beige and evergreen brand colors.",
    framing: "Hotel pin centered with clear travel radius rings.",
    timing: "Designed asset, not a camera photograph.",
    equipment: "Mapbox, Google Maps embed, or custom illustrated map."
  }
};

export type Room = {
  title: string;
  description: string;
  size: string;
  occupancy: string;
  amenities: string[];
  rateLabel: string;
  plan: PhotoPlan;
};

export const rooms: Room[] = [
  {
    title: "Single Bed Room",
    description: "A serene private room with one comfortable double bed, designed for couples or two guests seeking a quiet, restful stay.",
    size: "Approx. 28 sqm",
    occupancy: "2 adults",
    amenities: ["One double bed", "Smart TV", "Hot water", "Work desk"],
    rateLabel: "Request availability",
    plan: { ...photoPlans.room, label: "Capture: one-bed room with natural lighting and uncluttered styling" }
  },
  {
    title: "Double Bed Room",
    description: "A spacious room with two double beds, ideal for families or small groups who want comfort, storage, and room to settle in.",
    size: "Approx. 38 sqm",
    occupancy: "4 guests",
    amenities: ["Two double beds", "Smart TV", "Hot water", "Extra storage"],
    rateLabel: "Plan family stay",
    plan: { ...photoPlans.room, label: "Capture: two-bed room with both beds visible in a wide-angle frame" }
  }
];

export type Amenity = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const amenities: Amenity[] = [
  { title: "WiFi", description: "High-speed connectivity throughout guest areas.", icon: Wifi },
  { title: "Parking", description: "Secure on-site parking with arrival support.", icon: Car },
  { title: "Room Service", description: "Thoughtful in-room dining and beverage service.", icon: ConciergeBell },
  { title: "Hot Water", description: "Reliable hot water for every season.", icon: Droplets },
  { title: "Smart TV", description: "Streaming-ready screens in every room.", icon: Tv },
  { title: "Restaurant", description: "Seasonal menus with local produce and refined plating.", icon: Utensils },
  { title: "Laundry", description: "Prompt laundry support for extended stays.", icon: Shirt },
  { title: "Airport Pickup", description: "Pre-arranged transfers from airport or rail station.", icon: Plane },
  { title: "Scenic View", description: "Rooms and lounges oriented toward natural vistas.", icon: Mountain },
  { title: "Heating", description: "Comfortable indoor warmth through cool evenings.", icon: Flame }
];

export const testimonials = [
  {
    quote: "Quietly luxurious, deeply considered, and exactly the kind of place that makes time slow down.",
    author: "Ananya Rao",
    detail: "Weekend retreat",
    date: "March 2026"
  },
  {
    quote: "The room was spotless, the bed was excellent, and the staff handled every small request with warmth.",
    author: "Vikram Shah",
    detail: "Couple stay",
    date: "February 2026"
  },
  {
    quote: "A beautifully composed hotel with calm rooms, excellent food, and a view worth waking early for.",
    author: "Meera Kapoor",
    detail: "Family holiday",
    date: "January 2026"
  },
  {
    quote: "The two-bed room was perfect for our family. Spacious, quiet, and comfortable without feeling crowded.",
    author: "Rohan Mehta",
    detail: "Double bed room",
    date: "December 2025"
  },
  {
    quote: "Elegant interiors, quick service, reliable hot water, and a peaceful location. It felt premium from arrival.",
    author: "Priya Nair",
    detail: "Single bed room",
    date: "November 2025"
  },
  {
    quote: "The team helped arrange our pickup and made the stay feel effortless. A polished, memorable experience.",
    author: "Arjun Menon",
    detail: "Leisure stay",
    date: "October 2025"
  }
];

export const attractions = [
  { title: "Heritage Market", distance: "8 min", description: "Local craft, tea, and slow evening walks." },
  { title: "Mountain View Point", distance: "18 min", description: "Sunrise views and gentle walking trails." },
  { title: "Old Valley Temple", distance: "14 min", description: "Quiet architecture and cultural context." },
  { title: "Botanical Walk", distance: "22 min", description: "Seasonal blooms and shaded paths." }
];

export const contactMethods = [
  { label: "Call", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "WhatsApp", value: "Message reservations", href: `https://wa.me/${site.whatsapp.replace("+", "")}`, icon: Sparkles },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Hours", value: site.hours, href: "/contact", icon: Clock },
  { label: "Address", value: site.address, href: "/location", icon: MapPin },
  { label: "Transfers", value: "Airport pickup available", href: "/contact", icon: Car }
];

export const galleryPlans: PhotoPlan[] = [
  photoPlans.hero,
  photoPlans.about,
  photoPlans.room,
  photoPlans.dining,
  photoPlans.galleryExterior,
  {
    label: "Capture: spa-like bathroom detail with stone, brass, and linen",
    shot: "Bathroom vanity, fixtures, towels, and shower texture.",
    angle: "Straight-on detail with slight depth.",
    lighting: "Soft window or diffused continuous light.",
    framing: "No reflections, no clutter, highlight material quality.",
    timing: "Morning after full reset.",
    equipment: "50mm lens, tripod, polarizer."
  },
  {
    label: "Capture: breakfast tray near window with morning view",
    shot: "In-room breakfast tray styled naturally by the window.",
    angle: "Three-quarter top angle, not flat lay.",
    lighting: "Fresh morning light, lamps off unless needed.",
    framing: "Tray in foreground, soft view in background.",
    timing: "7:30-9:00 AM.",
    equipment: "35mm or 50mm lens, reflector."
  },
  {
    label: "Capture: evening terrace with warm lights and open sky",
    shot: "Terrace seating prepared for quiet evening service.",
    angle: "Wide low eye-level with horizon breathing space.",
    lighting: "Blue hour with lanterns and warm interior spill.",
    framing: "No people, avoid harsh artificial hotspots.",
    timing: "15 minutes after sunset.",
    equipment: "24mm lens, tripod, long exposure."
  }
];
