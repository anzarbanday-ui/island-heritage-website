"use client";

import { useState, useRef, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, Clock, Mail, MapPin, MessageCircle, Phone, Plane } from "lucide-react";
import { DatePicker } from "@/components/DatePicker";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";
import styles from "./page.module.css";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const contactMethods = [
  { label: "Call", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "WhatsApp", value: "Message our reservations team", href: `https://wa.me/${site.whatsapp.replace("+", "")}`, icon: MessageCircle, external: true },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Airport Pickup", value: "Pre-arrange transfers", href: `mailto:${site.email}`, icon: Plane },
  { label: "Hours", value: site.hours, href: "#", icon: Clock },
  { label: "Address", value: site.address, href: "/location", icon: MapPin }
];

type Status = "idle" | "submitting" | "success" | "error";

function formatDate(d: Date | null) {
  if (!d) return "Not specified";
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export function ContactClient() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const minCheckOut = checkIn ? new Date(checkIn.getTime() + 86400000) : undefined;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `New Booking Enquiry — Island Heritage`,
      from_name: "Island Heritage Website",
      name: `${fd.get("firstName")} ${fd.get("lastName")}`.trim(),
      email: fd.get("email"),
      phone: fd.get("phone") || "Not provided",
      "Check-in":  formatDate(checkIn),
      "Check-out": formatDate(checkOut),
      "Room preference": fd.get("room") || "Any room",
      message: fd.get("message") || "—",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        formRef.current?.reset();
        setCheckIn(null);
        setCheckOut(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
                <span className={styles.methodInfo}>
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

        {status === "success" ? (
          <div className={styles.successMsg} role="alert">
            <CheckCircle size={28} className={styles.successIcon} aria-hidden="true" />
            <h3 className={styles.successTitle}>Enquiry received</h3>
            <p className={styles.successText}>
              Thank you — we have received your enquiry and will be in touch within 24 hours.
              For urgent requests, call or WhatsApp us directly.
            </p>
            <a href={`https://wa.me/${site.whatsapp.replace("+", "")}`} className="btn btn--primary" style={{ marginTop: "var(--space-5)" }} target="_blank" rel="noopener noreferrer">
              WhatsApp us now
            </a>
            <button className={`btn btn--secondary ${styles.resetBtn}`} onClick={() => setStatus("idle")}>
              Send another enquiry
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
            {status === "error" && (
              <div className={styles.errorMsg} role="alert">
                <AlertCircle size={16} aria-hidden="true" />
                Something went wrong. Please try again or reach us directly by phone or WhatsApp.
              </div>
            )}

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
                <option value="Single Bed Room">Single Bed Room</option>
                <option value="Double Bed Room">Double Bed Room</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>Message (optional)</label>
              <textarea id="message" name="message" className={styles.textarea} placeholder="Any special requests, arrival details, or questions…" />
            </div>

            <button
              type="submit"
              className={`btn btn--primary ${styles.submitBtn}`}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send Enquiry"}
              {status !== "submitting" && <ArrowRight size={15} aria-hidden="true" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
