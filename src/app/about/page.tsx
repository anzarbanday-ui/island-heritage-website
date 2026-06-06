import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { SectionTitle } from "@/components/SectionTitle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "The philosophy and hospitality approach behind Island Heritage — material honesty, personal service, and local context."
};

const pillars = [
  {
    title: "Material honesty",
    text: "Natural textures, warm light, and durable finishes create a calm tactile language throughout the property."
  },
  {
    title: "Personal service",
    text: "The team anticipates essentials and leaves space for guests to settle into their own rhythm without interruption."
  },
  {
    title: "Local context",
    text: "Architecture, food, and experience planning are shaped by the surrounding Kashmiri landscape and cultural heritage."
  }
];

export default function AboutPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroGrid}>
            <SectionTitle
              eyebrow="Our philosophy"
              title="Hospitality with restraint, warmth, and a strong sense of place."
              text="Island Heritage is designed as a quiet counterpoint to busy travel: elegant without spectacle, attentive without intrusion, and local without pastiche."
            />
            <div className={styles.heroImage}>
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
                alt="Serene heritage hotel lounge interior"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section-gap">
          <div className="container">
            <div className={styles.pillarsGrid}>
              {pillars.map((p) => (
                <article key={p.title} className={styles.pillar}>
                  <h2 className={styles.pillarTitle}>{p.title}</h2>
                  <p className={styles.pillarText}>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.story}>
          <div className={`container ${styles.storyGrid}`}>
            <div className={styles.storyImage}>
              <Image
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80"
                alt="Himalayan mountain vista from Srinagar"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <SectionTitle
                eyebrow="The location"
                title="Peerzu Island, in the heart of Srinagar."
                text="Set on a quiet island near Lal Chowk, the property is woven into the city's historic fabric while offering a removed, restful atmosphere. The Dal Lake, the old city, and the mountains form a natural frame."
              />
            </div>
          </div>
        </section>

        <CTASection title="A stay that feels composed from the first conversation." />
      </main>
    </>
  );
}
