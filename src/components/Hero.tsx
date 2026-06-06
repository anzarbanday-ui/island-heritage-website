"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import styles from "./Hero.module.css";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (imageRef.current) {
          const y = window.scrollY * 0.35;
          imageRef.current.style.transform = `translateY(${y}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.imageWrap} ref={imageRef} aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt="Panoramic mountain landscape of Kashmir near Srinagar"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
        />
      </div>

      <div className={styles.gradient} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <span className={`eyebrow ${styles.eyebrow}`}>
            Peerzu Island · Srinagar, Kashmir
          </span>
          <h1 className={styles.headline}>{site.name}</h1>
          <p className={styles.tagline}>{site.tagline}</p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn--white">
              Book a Stay
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/rooms" className="btn btn--secondary" style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.35)" }}>
              Explore Rooms
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
