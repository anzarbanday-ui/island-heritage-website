import type { Metadata } from "next";
import { AmenityCard } from "@/components/AmenityCard";
import { CTASection } from "@/components/CTASection";
import { SectionTitle } from "@/components/SectionTitle";
import { amenities } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Amenities",
  description: "Premium amenities at Island Heritage — WiFi, parking, room service, restaurant, laundry, airport pickup, scenic views, and more."
};

export default function AmenitiesPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <SectionTitle
            eyebrow="Amenities"
            title="Quietly capable service for every stay."
            text="A premium experience is built from useful details, delivered gracefully."
          />
        </div>
      </header>

      <main>
        <section className="section-gap">
          <div className="container">
            <div className={styles.grid}>
              {amenities.map((a) => (
                <AmenityCard key={a.title} amenity={a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Let us prepare the details before you arrive." />
      </main>
    </>
  );
}
