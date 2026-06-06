import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description: "Read genuine guest reviews for Island Heritage — warmth, comfort, service, and the experience of a heritage stay in Srinagar."
};

export default function ReviewsPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <SectionTitle
            eyebrow="Guest reviews"
            title="Warm notes from memorable stays."
            text="A collection of guest impressions highlighting comfort, service, cleanliness, dining, and the quiet atmosphere of Island Heritage."
          />
        </div>
      </header>

      <main>
        <section className="section-gap">
          <div className="container">
            <div className={styles.grid}>
              {testimonials.map((t) => (
                <TestimonialCard key={t.author} testimonial={t} />
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Ready to create your own review-worthy stay?" />
      </main>
    </>
  );
}
