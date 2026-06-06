"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Send } from "lucide-react";

const endpoint = process.env.NEXT_PUBLIC_BOOKING_FORM_ENDPOINT || "https://example.com/booking-inquiry";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Full name
          <input name="name" required autoComplete="name" className="focus-ring rounded-2xl border border-ink/10 bg-linen px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Email
          <input name="email" type="email" required autoComplete="email" className="focus-ring rounded-2xl border border-ink/10 bg-linen px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" className="focus-ring rounded-2xl border border-ink/10 bg-linen px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Preferred dates
          <input name="dates" required placeholder="12-15 July" className="focus-ring rounded-2xl border border-ink/10 bg-linen px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Guests
          <input name="guests" required placeholder="2 adults" className="focus-ring rounded-2xl border border-ink/10 bg-linen px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Room preference
          <select name="room" className="focus-ring rounded-2xl border border-ink/10 bg-linen px-4 py-3 font-normal">
            <option>Single Bed Room</option>
            <option>Double Bed Room</option>
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-ink">
        Message
        <textarea name="message" rows={5} placeholder="Tell us about your arrival time, celebration, or transfer needs." className="focus-ring rounded-2xl border border-ink/10 bg-linen px-4 py-3 font-normal" />
      </label>
      <button
        disabled={status === "sending"}
        className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-evergreen disabled:cursor-wait disabled:opacity-70"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>
      <p className="mt-4 min-h-6 text-sm text-ink/62" aria-live="polite">
        {status === "sent" && "Thank you. The reservations team will respond shortly."}
        {status === "error" && "The demo endpoint is not connected yet. Use WhatsApp, call, or set NEXT_PUBLIC_BOOKING_FORM_ENDPOINT."}
      </p>
    </form>
  );
}
