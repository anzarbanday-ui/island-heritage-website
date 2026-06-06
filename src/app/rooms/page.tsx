import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { RoomCard } from "@/components/RoomCard";
import { SectionTitle } from "@/components/SectionTitle";
import { rooms } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "Two carefully designed room categories at Island Heritage — Single Bed and Double Bed rooms on Peerzu Island, Srinagar."
};

function RoomsGrid() {
  return (
    <div className={styles.grid}>
      {rooms.map((room, i) => (
        <RoomCard key={room.title} room={room} priority={i === 0} />
      ))}
    </div>
  );
}

function RoomsSkeleton() {
  return (
    <div className={styles.skeletonGrid} aria-hidden="true">
      {[0, 1].map((i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonImg} />
          <div className={styles.skeletonBody}>
            <div className={styles.skeletonLine} style={{ height: "2rem", width: "55%" }} />
            <div className={styles.skeletonLine} style={{ height: "1rem", width: "100%" }} />
            <div className={styles.skeletonLine} style={{ height: "1rem", width: "80%" }} />
            <div className={styles.skeletonLine} style={{ height: "1rem", width: "65%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RoomsPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <SectionTitle
            eyebrow="Rooms & suites"
            title="Elegant rooms composed for rest, privacy, and view."
            text="Both room categories are designed to feel complete — warm materials, essential amenities, and calm proportions."
          />
          <Link href="/contact" className="btn btn--primary">
            Enquire now
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <main>
        <section className="section-gap">
          <div className="container">
            <Suspense fallback={<RoomsSkeleton />}>
              <RoomsGrid />
            </Suspense>
          </div>
        </section>

        <CTASection title="Reserve the room that matches your rhythm." />
      </main>
    </>
  );
}
