import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AmenityCard } from "@/components/AmenityCard";
import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { RoomCard } from "@/components/RoomCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhyStay } from "@/components/WhyStay";
import { amenities, attractions, rooms, testimonials } from "@/data/site";
import pageStyles from "./page.module.css";

export const metadata: Metadata = {
  title: "Island Heritage | Boutique Heritage Hotel — Srinagar, Kashmir",
  description: "A quiet luxury retreat shaped by landscape, craft, and unhurried hospitality. Stay at Island Heritage on Peerzu Island, Srinagar."
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About */}
      <AnimatedSection className={pageStyles.about}>
        <div className={`container ${pageStyles.aboutGrid}`}>
          <div>
            <SectionTitle
              eyebrow="About the retreat"
              title="A measured kind of luxury, shaped by quiet detail."
              text="Island Heritage is imagined for travellers who value space, material honesty, attentive service, and the feeling of arriving somewhere composed."
            />
            <Link href="/about" className="btn btn--secondary" style={{ marginTop: "var(--space-8)" }}>
              Our story
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className={pageStyles.aboutImage}>
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
              alt="Heritage hotel lounge interior with warm textures and natural light"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Rooms */}
      <AnimatedSection className={pageStyles.rooms}>
        <div className="container">
          <div className={pageStyles.roomsHeader}>
            <SectionTitle
              eyebrow="Rooms & suites"
              title="Private spaces with calm proportions."
            />
            <Link href="/rooms" className="btn btn--secondary">
              View all rooms
            </Link>
          </div>
          <div className={pageStyles.roomsGrid}>
            {rooms.map((room, i) => (
              <RoomCard key={room.title} room={room} priority={i === 0} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Stay */}
      <WhyStay />

      {/* Amenities */}
      <AnimatedSection className="section-gap">
        <div className="container">
          <SectionTitle
            align="center"
            eyebrow="Amenities"
            title="Everything useful, nothing excessive."
            text="Service essentials delivered with polish, warmth, and a quiet respect for your time."
          />
          <div className={pageStyles.amenitiesGrid}>
            {amenities.map((a) => (
              <AmenityCard key={a.title} amenity={a} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
            <Link href="/amenities" className="btn btn--secondary">
              All amenities
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection className={pageStyles.experience}>
        <div className={`container ${pageStyles.experienceGrid}`}>
          <div className={pageStyles.experienceImage}>
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
              alt="Refined dining setup with warm candlelight ambience"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="The experience"
              title="Days unfold between mountain air, warm dining, and unhurried rituals."
              text="Morning tea by the window, a slow breakfast, an afternoon walk, and evenings gathered around soft light."
              theme="dark"
            />
            <Link
              href="/contact"
              className="btn btn--white"
              style={{ marginTop: "var(--space-8)" }}
            >
              Plan your stay
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery preview */}
      <AnimatedSection className="section-gap">
        <div className="container">
          <SectionTitle
            eyebrow="Gallery"
            title="Island Heritage in frames."
          />
          <div style={{ marginTop: "var(--space-10)" }}>
            <GalleryGrid />
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
            <Link href="/gallery" className="btn btn--secondary">
              Full gallery
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Location */}
      <AnimatedSection className={pageStyles.location}>
        <div className={`container ${pageStyles.locationGrid}`}>
          <div className={pageStyles.locationMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.0!2d74.8227359!3d34.0711943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f007cb42c63%3A0x94bda2caad14f2c2!2sIsland%20Heritage!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "var(--radius-xl)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Island Heritage location on Google Maps"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="Location"
              title="Close to what matters, removed from what does not."
              text="Peerzu Island, near Lal Chowk, Srinagar — with markets, viewpoints, and heritage landmarks within a short drive."
            />
            <ul className={pageStyles.attractionsList}>
              {attractions.map((item) => (
                <li key={item.title} className={pageStyles.attractionItem}>
                  <MapPin size={15} aria-hidden="true" />
                  <div>
                    <p className={pageStyles.attractionTitle}>{item.title} · {item.distance}</p>
                    <p className={pageStyles.attractionDesc}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="section-gap" style={{ background: "var(--clr-cream)" }}>
        <div className="container">
          <SectionTitle align="center" eyebrow="Guest notes" title="Warmth, restraint, and care." />
          <div className={pageStyles.testimonialsGrid}>
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.author} testimonial={t} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
            <Link href="/reviews" className="btn btn--secondary">
              Read more reviews
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
