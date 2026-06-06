import type { Metadata } from "next";
import { Car, MapPinned, Plane, Train } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionTitle } from "@/components/SectionTitle";
import { attractions, site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Location",
  description: "Find Island Heritage in Srinagar, Kashmir — nearby attractions, travel directions, and transfer arrangements."
};

const travelInfo = [
  { icon: Car, title: "By car", text: "Private parking and porch drop-off are available on arrival." },
  { icon: Plane, title: "Airport", text: "Pre-booked airport pickup can be arranged through reservations." },
  { icon: Train, title: "Rail station", text: "Rail station transfers available with 24-hour advance notice." },
  { icon: MapPinned, title: "Accessibility", text: "Step-free arrival support and luggage assistance are available on request." }
];

export default function LocationPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <SectionTitle
            eyebrow="Location"
            title="A peaceful base with easy access."
            text={site.address}
          />
        </div>
      </header>

      <main>
        <section className="section-gap">
          <div className="container">
            <div className={styles.mapGrid}>
              <div className={styles.mapWrap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.0!2d74.8227359!3d34.0711943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f007cb42c63%3A0x94bda2caad14f2c2!2sIsland%20Heritage!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Island Heritage location on Google Maps"
                />
              </div>

              <div>
                <p className={styles.colHead}>Nearby attractions</p>
                <ul className={styles.attractions}>
                  {attractions.map((a) => (
                    <li key={a.title} className={styles.attractionItem}>
                      <p className={styles.attractionTitle}>{a.title} <span className={styles.attractionDist}>· {a.distance}</span></p>
                      <p className={styles.attractionDesc}>{a.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.travelSection}>
          <div className="container">
            <SectionTitle
              eyebrow="Getting here"
              title="Simple arrivals, planned with care."
            />
            <div className={styles.travelGrid}>
              {travelInfo.map(({ icon: Icon, title, text }) => (
                <article key={title} className={styles.travelCard}>
                  <Icon size={22} className={styles.travelIcon} aria-hidden="true" />
                  <h3 className={styles.travelTitle}>{title}</h3>
                  <p className={styles.travelText}>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Send your arrival details and we will shape the route." />
      </main>
    </>
  );
}
