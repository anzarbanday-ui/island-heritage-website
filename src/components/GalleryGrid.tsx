import Image from "next/image";
import styles from "./GalleryGrid.module.css";

const galleryImages = [
  {
    src: "/images/exterior.webp",
    alt: "Island Heritage garden and outdoor grounds, Peerzu Island",
    caption: "The garden",
    width: 800, height: 1067
  },
  {
    src: "/images/room-single.webp",
    alt: "Single Bed Room at Island Heritage with natural light",
    caption: "Single Bed Room",
    width: 800, height: 533
  },
  {
    src: "/images/lounge.webp",
    alt: "Heritage lounge interior with warm textures and local craft",
    caption: "Heritage lounge",
    width: 800, height: 600
  },
  {
    src: "/images/room-double.webp",
    alt: "Double Bed Room at Island Heritage with two beds",
    caption: "Double Bed Room",
    width: 800, height: 1067
  },
  {
    src: "/images/dining.webp",
    alt: "Refined dining setup at Island Heritage restaurant",
    caption: "In-house dining",
    width: 800, height: 533
  },
  {
    src: "/images/terrace.webp",
    alt: "Evening terrace at Island Heritage with warm ambient lighting",
    caption: "Terrace at dusk",
    width: 800, height: 1000
  },
  {
    src: "/images/bathroom.webp",
    alt: "Bathroom detail showing stone, brass, and linen at Island Heritage",
    caption: "Bathroom detail",
    width: 800, height: 533
  },
  {
    src: "/images/hero.webp",
    alt: "Island Heritage hotel facade at golden hour",
    caption: "Golden hour",
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
