"use client";

import { useState } from "react";

export default function NewsletterForm({ variant = "full" }: { variant?: "simple" | "full" }) {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className="text-center text-gate-white py-4">
        Grazie! Ti aggiorneremo sui prossimi eventi.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      {variant === "full" && (
        <>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="bg-transparent border border-gate-border px-4 py-3 text-sm text-gate-white placeholder-gate-muted focus:outline-none focus:border-gate-white rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            className="bg-transparent border border-gate-border px-4 py-3 text-sm text-gate-white placeholder-gate-muted focus:outline-none focus:border-gate-white rounded"
          />
        </>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="bg-transparent border border-gate-border px-4 py-3 text-sm text-gate-white placeholder-gate-muted focus:outline-none focus:border-gate-white rounded"
      />
      <button
        type="submit"
        className="bg-gate-red hover:bg-gate-red-dark text-gate-white font-bold py-3 px-6 rounded transition-colors uppercase tracking-wide text-sm"
      >
        Subscribe
      </button>
      <p className="text-xs text-gate-muted leading-relaxed">
        We will keep your data as long as you allow us and we are bound by law. Your Data Protection
        rights are Access, Rectification, Erasure, Restriction of processing, Data Portability and
        Object. You might exercise them by written enquiry to SING SING SRL, Via Valtellina 21,
        20159, Milan or by email info@gatemilano.com
      </p>
    </form>
  );
}
