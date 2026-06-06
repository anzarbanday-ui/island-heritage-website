import type { Amenity } from "@/data/site";
import styles from "./AmenityCard.module.css";

export function AmenityCard({ amenity }: { amenity: Amenity }) {
  const Icon = amenity.icon;
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        <Icon size={18} />
      </div>
      <h3 className={styles.title}>{amenity.title}</h3>
      <p className={styles.description}>{amenity.description}</p>
    </article>
  );
}
