import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import styles from "./CTASection.module.css";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
};

export function CTASection({
  eyebrow = "Reservations",
  title = "Begin with a quiet arrival. Leave with a slower rhythm.",
  text = "Share your preferred dates and our reservations team will prepare the room, transfer, and any dining arrangements."
}: CTASectionProps) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className={styles.heading}>{title}</h2>
            <p className={styles.body}>{text}</p>
          </div>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn--white">
              Request Booking
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
              className="btn btn--secondary"
              style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.22)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
