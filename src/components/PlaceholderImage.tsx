import Image from "next/image";
import { Camera, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PhotoPlan } from "@/data/site";

const svg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#E7DED2" offset="0"/>
      <stop stop-color="#F8F5F0" offset="0.52"/>
      <stop stop-color="#D6CAB9" offset="1"/>
    </linearGradient>
    <pattern id="p" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M80 0H0v80" fill="none" stroke="#B89B5E" stroke-opacity=".12" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1400" height="1000" fill="url(#g)"/>
  <rect width="1400" height="1000" fill="url(#p)"/>
  <path d="M175 760C390 515 525 610 705 430c130-130 286-166 520 65v265H175z" fill="#2F4F4F" fill-opacity=".11"/>
  <circle cx="1080" cy="230" r="120" fill="#B89B5E" fill-opacity=".16"/>
</svg>
`);

const placeholderSrc = `data:image/svg+xml;charset=utf-8,${svg}`;

type PlaceholderImageProps = {
  plan: PhotoPlan;
  ratio?: "portrait" | "landscape" | "wide" | "square" | "tall";
  className?: string;
  priority?: boolean;
  overlay?: "full" | "compact";
};

const ratios = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[5/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[3/4]"
};

export function PlaceholderImage({ plan, ratio = "landscape", className, priority, overlay = "full" }: PlaceholderImageProps) {
  return (
    <figure className={cn("group relative overflow-hidden rounded-3xl bg-beige shadow-soft", ratios[ratio], className)}>
      <Image
        src={placeholderSrc}
        alt={plan.label}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/16 to-transparent" />
      <div
        className={cn(
          "absolute rounded-2xl border border-white/20 bg-white/88 p-4 text-ink shadow-soft backdrop-blur-md",
          overlay === "full" && "inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6",
          overlay === "compact" && "right-4 top-4 max-w-[min(24rem,calc(100%-2rem))] sm:right-6 sm:top-6"
        )}
      >
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          <Camera className="h-4 w-4" aria-hidden="true" />
          Photo required
        </div>
        <figcaption className="font-serif text-xl leading-tight">{plan.label}</figcaption>
        <dl className={cn("mt-4 grid gap-2 text-xs leading-5 text-ink/68", overlay === "full" && "sm:grid-cols-2")}>
          <div><dt className="font-semibold text-ink">Angle</dt><dd>{plan.angle}</dd></div>
          <div><dt className="font-semibold text-ink">Lighting</dt><dd>{plan.lighting}</dd></div>
          {overlay === "full" ? (
            <>
              <div><dt className="font-semibold text-ink">Framing</dt><dd>{plan.framing}</dd></div>
              <div><dt className="font-semibold text-ink">Timing</dt><dd>{plan.timing}</dd></div>
            </>
          ) : null}
        </dl>
        <p className={cn("mt-3 gap-2 text-xs leading-5 text-ink/60", overlay === "full" ? "flex" : "hidden sm:flex")}>
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" aria-hidden="true" />
          {plan.equipment}
        </p>
      </div>
    </figure>
  );
}
