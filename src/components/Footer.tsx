import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, site } from "@/data/site";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.main}`}>

        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <span className={styles.logoMark} aria-hidden="true">IH</span>
            <span className={styles.logoName}>{site.name}</span>
          </div>
          <p className={styles.tagline}>{site.tagline}</p>

        </div>

        {/* Explore */}
        <nav aria-label="Footer navigation">
          <p className={styles.colHeading}>Explore</p>
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Contact */}
        <address className="not-italic">
          <p className={styles.colHeading}>Contact</p>
          <div className={styles.contactList}>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={styles.contactItem}>
              <Phone size={15} aria-hidden="true" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className={styles.contactItem}>
              <Mail size={15} aria-hidden="true" />
              {site.email}
            </a>
            <p className={styles.contactItem}>
              <MapPin size={15} aria-hidden="true" />
              {site.address}
            </p>
          </div>
        </address>

        {/* Newsletter */}
        <div>
          <p className={styles.colHeading}>Stay in touch</p>
          <p className={styles.newsletterText}>
            Seasonal offers, new experiences, and quiet updates from the property.
          </p>
          <NewsletterForm />
        </div>

      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <Link href="/privacy-policy" className={styles.privacyLink}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
