import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactClient } from "./ContactClient";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description: "Contact Island Heritage reservations by enquiry form, WhatsApp, phone, or email. Located on Peerzu Island, Srinagar."
};

export default function ContactPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <SectionTitle
            eyebrow="Contact & Reservations"
            title="Tell us when you would like to arrive."
            text="Use the enquiry form or reach our reservations team directly by call, WhatsApp, or email."
          />
        </div>
      </header>

      <main className={styles.body}>
        <div className="container">
          <ContactClient />
        </div>
      </main>
    </>
  );
}
