import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Island Heritage hotel website."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <SectionTitle eyebrow="Privacy" title="Privacy Policy" text="This policy explains how booking inquiries and guest communications are handled." />
        </div>
      </header>

      <main>
        <section className={styles.body}>
          <div className="container">
            <div className={styles.content}>
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Information we collect</h2>
                <p className={styles.blockText}>We collect the details you submit through inquiry forms, including name, contact information, preferred dates, guest count, and message content.</p>
              </section>
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>How we use information</h2>
                <p className={styles.blockText}>We use submitted details to respond to reservation requests, arrange stays, coordinate transfers, and improve guest communication.</p>
              </section>
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Data sharing</h2>
                <p className={styles.blockText}>Guest inquiry details are not sold. They may be shared only with service partners when required to fulfil a requested booking or transfer.</p>
              </section>
              <section className={styles.block}>
                <h2 className={styles.blockTitle}>Contact</h2>
                <p className={styles.blockText}>
                  For privacy questions, contact{" "}
                  <a href={`mailto:${site.email}`} style={{ color: "var(--clr-accent)", textDecoration: "underline" }}>
                    {site.email}
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
