import styles from "./TestimonialCard.module.css";

type Testimonial = {
  quote: string;
  author: string;
  detail: string;
  date?: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className={styles.card}>
      <span className={styles.quoteIcon} aria-hidden="true">&ldquo;</span>
      <blockquote className={styles.quote}>
        <p>{testimonial.quote}</p>
      </blockquote>
      <footer className={styles.footer}>
        <div>
          <p className={styles.author}>{testimonial.author}</p>
          <p className={styles.detail}>{testimonial.detail}</p>
        </div>
        {testimonial.date && <time className={styles.date}>{testimonial.date}</time>}
      </footer>
    </article>
  );
}
