"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Car, Clock, Mail, MapPin, MessageCircle, Phone, Plane } from "lucide-react";
import { DatePicker } from "@/components/DatePicker";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";
import styles from "./page.module.css";

const contactMethods = [
  { label: "Call", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "WhatsApp", value: "Message our reservations team", href: `https://wa.me/${site.whatsapp.replace("+", "")}`, icon: MessageCircle, external: true },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Airport Pickup", value: "Pre-arrange transfers", href: `mailto:${site.email}`, icon: Plane },
  { label: "Hours", value: site.hours, href: "#", icon: Clock },
  { label: "Address", value: site.address, href: "/location", icon: MapPin }
];

export function ContactClient() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const minCheckOut = checkIn ? new Date(checkIn.getTime() + 86400000) : undefined;

  return (
    <div className={styles.grid}>
      {/* Contact methods */}
      <div>
        <SectionTitle eyebrow="Reach us" title="Direct lines to our team." />
        <div className={styles.methods}>
          {contactMethods.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.label}
                href={m.href}
                className={styles.method}
                {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={styles.methodIcon}><Icon size={17} aria-hidden="true" /></span>
                <span>
                  <span className={styles.methodLabel}>{m.label}</span>
                  <span className={styles.methodValue}>{m.value}</span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className={styles.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.0!2d74.8227359!3d34.0711943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f007cb42c63%3A0x94bda2caad14f2c2!2sIsland%20Heritage!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Island Heritage on Google Maps"
          />
        </div>
      </div>

      {/* Enquiry form */}
      <div className={styles.formWrap}>
        <h2 className={styles.formTitle}>Send an enquiry</h2>
        <form className={styles.form} action="#" method="POST">
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="firstName" className={styles.fieldLabel}>First name</label>
              <input id="firstName" name="firstName" type="text" className={styles.input} placeholder="Arjun" required autoComplete="given-name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="lastName" className={styles.fieldLabel}>Last name</label>
              <input id="lastName" name="lastName" type="text" className={styles.input} placeholder="Mehta" required autoComplete="family-name" />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>Email</label>
              <input id="email" name="email" type="email" className={styles.input} placeholder="you@email.com" required autoComplete="email" />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone" className={styles.fieldLabel}>Phone</label>
              <input id="phone" name="phone" type="tel" className={styles.input} placeholder="+91 98765 43210" autoComplete="tel" />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <DatePicker label="Check-in" value={checkIn} onChange={setCheckIn} name="checkIn" />
            <DatePicker label="Check-out" value={checkOut} onChange={setCheckOut} minDate={minCheckOut} name="checkOut" />
          </div>

          <div className={styles.field}>
            <label htmlFor="room" className={styles.fieldLabel}>Room preference</label>
            <select id="room" name="room" className={styles.input}>
              <option value="">Any room</option>
              <option value="single">Single Bed Room</option>
              <option value="double">Double Bed Room</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.fieldLabel}>Message (optional)</label>
            <textarea id="message" name="message" className={styles.textarea} placeholder="Any special requests, arrival details, or questions…" />
          </div>

          <button type="submit" className={`btn btn--primary ${styles.submitBtn}`}>
            Send Enquiry
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
