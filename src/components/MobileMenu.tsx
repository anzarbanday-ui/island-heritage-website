"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navItems, site } from "@/data/site";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`${styles.overlay} ${open ? styles["overlay--open"] : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-hidden={!open}
    >
      <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className={styles.topBar}>
          <span className={styles.logoMark} aria-hidden="true">IH</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close navigation menu">
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <nav className={styles.links} aria-label="Mobile navigation">
          {navItems.slice(0, -1).map((item) => (
            <Link key={item.href} href={item.href} className={styles.link} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={`btn btn--primary ${styles.bookBtn}`} onClick={onClose}>
          Book a Stay
        </Link>

        <div className={styles.contact}>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={styles.contactItem}>{site.phone}</a>
          <a href={`mailto:${site.email}`} className={styles.contactItem}>{site.email}</a>
        </div>
      </div>
    </div>
  );
}
