"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "@/components/MobileMenu";
import { navItems, site } from "@/data/site";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${solid ? styles["header--solid"] : ""}`}>
        <nav className={`container ${styles.nav}`} aria-label="Primary navigation">
          <Link href="/" className={styles.logo} aria-label={`${site.name} — home`}>
            <span className={styles.logoMark} aria-hidden="true">IH</span>
            <span className={styles.logoName}>{site.name}</span>
          </Link>

          <div className={styles.links} role="list">
            {navItems.slice(0, -1).map((item) => (
              <Link key={item.href} href={item.href} className={styles.link} role="listitem">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn--primary" style={{ fontSize: "var(--text-sm)", padding: "0.6rem 1.4rem" }}>
              Book a Stay
            </Link>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
