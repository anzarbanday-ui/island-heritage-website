# Island Heritage Luxury Hotel Website

Production-ready luxury hotel website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Features

- App Router pages for Home, Rooms & Suites, Gallery, Amenities, About, Location, Contact / Booking, and Privacy Policy
- Sticky scroll-aware navbar with animated mobile menu
- Cinematic motion system with reveal, stagger-style composition, hover, and parallax effects
- Placeholder photography system with capture instructions for every required image
- SEO metadata, Open Graph, Twitter metadata, sitemap, and robots.txt
- Static export compatible with Cloudflare Pages
- Responsive, accessible, mobile-first UI

## Photography System

The site intentionally uses no real hotel photos. Every visual frame is a `PlaceholderImage` component with:

- subject / capture label
- angle
- lighting
- framing
- timing
- equipment recommendation

Replace the placeholder artwork later by updating `src/components/PlaceholderImage.tsx` or by extending the component to accept real optimized image sources.

## Setup

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
pnpm run build
```

The static site exports to `out/`.

## Cloudflare Pages

Use these settings:

- Framework preset: Next.js
- Build command: `pnpm run build`
- Output directory: `out`
- Node.js version: 20+

## Booking Form

The contact form posts to `NEXT_PUBLIC_BOOKING_FORM_ENDPOINT`.

Example:

```bash
NEXT_PUBLIC_BOOKING_FORM_ENDPOINT=https://your-form-provider.example/booking pnpm run build
```

If no endpoint is configured, the UI remains usable and explains that the demo endpoint must be connected.
