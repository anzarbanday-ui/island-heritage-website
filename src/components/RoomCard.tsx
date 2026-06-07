import Image from "next/image";
import Link from "next/link";
import { Users, Ruler, ArrowRight } from "lucide-react";
import type { Room } from "@/data/site";
import styles from "./RoomCard.module.css";

const roomImages: Record<string, string> = {
  "Single Bed Room": "/images/room-single.webp",
  "Double Bed Room": "/images/room-double.webp"
};

const fallbackImage = "/images/room-single.webp";

type RoomCardProps = {
  room: Room;
  priority?: boolean;
};

export function RoomCard({ room, priority = false }: RoomCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={roomImages[room.title] ?? fallbackImage}
          alt={`${room.title} at Island Heritage`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          loading={priority ? "eager" : "lazy"}
          style={{ objectFit: "cover" }}
        />
        <span className={styles.badge}>{room.occupancy}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{room.title}</h3>
        <p className={styles.description}>{room.description}</p>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Ruler size={14} aria-hidden="true" />
            {room.size}
          </span>
          <span className={styles.metaItem}>
            <Users size={14} aria-hidden="true" />
            {room.occupancy}
          </span>
        </div>

        <ul className={styles.amenities} aria-label="Room amenities">
          {room.amenities.map((item) => (
            <li key={item} className={styles.amenityChip}>{item}</li>
          ))}
        </ul>

        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>Rate</span>
            <span className={styles.priceValue}>{room.rateLabel}</span>
          </div>
          <Link href="/contact" className="btn btn--primary">
            Book
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
