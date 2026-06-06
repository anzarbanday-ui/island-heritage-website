import Image from "next/image";
import styles from "./GalleryGrid.module.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    alt: "Dal Lake panorama at golden hour, Srinagar",
    caption: "Dal Lake at dusk",
    width: 800, height: 1067
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury hotel room interior with warm lighting",
    caption: "Single Bed Room",
    width: 800, height: 533
  },
  {
    src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    alt: "Sunrise over the mountains of Kashmir",
    caption: "Morning views from the property",
    width: 800, height: 600
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    alt: "Spacious double room with natural light",
    caption: "Double Bed Room",
    width: 800, height: 1067
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    alt: "Elegant dining table with Kashmiri inspired setting",
    caption: "In-house dining",
    width: 800, height: 533
  },
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
    alt: "Heritage hotel exterior at night with warm lights",
    caption: "The property at night",
    width: 800, height: 1000
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel pool terrace with mountain backdrop",
    caption: "Terrace & outdoor spaces",
    width: 800, height: 533
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
    alt: "Morning tea tray by the window with garden view",
    caption: "Morning ritual",
    width: 800, height: 600
  }
];

export function GalleryGrid() {
  return (
    <div className={styles.grid}>
      {galleryImages.map((img, i) => (
        <div key={img.src} className={styles.item}>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading={i < 3 ? "eager" : "lazy"}
            style={{ width: "100%", height: "auto" }}
          />
          <div className={styles.overlay} aria-hidden="true">
            <p className={styles.caption}>{img.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
