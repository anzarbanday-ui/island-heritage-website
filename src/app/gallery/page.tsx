import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionTitle } from "@/components/SectionTitle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Visual impressions of Island Heritage — rooms, landscapes, dining, and the natural beauty of Srinagar, Kashmir."
};

export default function GalleryPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <SectionTitle
            eyebrow="Gallery"
            title="Island Heritage in frames."
            text="Kashmir's light, the lake, the mountain air, and the quiet interiors of the property."
          />
        </div>
      </header>

      <main>
        <section className="section-gap">
          <div className="container">
            <GalleryGrid />
          </div>
        </section>
      </main>
    </>
  );
}
