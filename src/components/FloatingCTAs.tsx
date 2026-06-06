import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import styles from "./FloatingCTAs.module.css";

export function FloatingCTAs() {
  return (
    <div className={styles.wrap} aria-label="Quick contact options">
      <a
        href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
        className={`${styles.btn} ${styles["btn--whatsapp"]}`}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} aria-hidden="true" />
      </a>
      <a
        href={`tel:${site.phone.replace(/\s/g, "")}`}
        className={`${styles.btn} ${styles["btn--phone"]}`}
        aria-label={`Call ${site.phone}`}
      >
        <Phone size={20} aria-hidden="true" />
      </a>
    </div>
  );
}
