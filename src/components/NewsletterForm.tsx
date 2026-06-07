"use client";

import styles from "./Footer.module.css";

export function NewsletterForm() {
  return (
    <form
      className={styles.newsletterForm}
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">Your email address</label>
      <input
        id="footer-email"
        type="email"
        name="email"
        placeholder="your@email.com"
        className={styles.newsletterInput}
        autoComplete="email"
        required
      />
      <button type="submit" className={styles.newsletterBtn}>
        Subscribe
      </button>
    </form>
  );
}
