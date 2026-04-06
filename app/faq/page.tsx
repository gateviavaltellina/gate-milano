"use client";

import Nav from "../components/Nav";
import { useState } from "react";

const sections = [
  {
    title: "Getting Here & Access",
    faqs: [
      { q: "What is Gate Milano's address?", a: "Via Valtellina 21, 20159 Milano." },
      { q: "Is there parking at Gate Milano?", a: "Public parking is available in the surrounding area." },
      { q: "What are Gate Milano's opening times?", a: "Opening times vary by event. Check each event page for specific times." },
      { q: "What is the security policy?", a: "Safety is our priority. Security checks are conducted at entry. Admission may be refused for non-compliance." },
      { q: "What is the dress code?", a: "Flip-flops, tank tops and sportswear are not recommended. We reserve the right to refuse entry." },
      { q: "What is the re-admission policy?", a: "Re-admission is not guaranteed once you leave the venue." },
      { q: "Is Gate Milano an accessible venue?", a: "Yes, the venue is accessible. For specific needs please contact us before the event." },
      { q: "What identification do I need?", a: "A valid government-issued photo ID or passport is required. Photocopies are not accepted." },
      { q: "How old do I need to be to access Gate Milano?", a: "You must be 18 or older. ID will be requested for anyone appearing underage." },
    ],
  },
  {
    title: "Tickets & Refunds",
    faqs: [
      { q: "Do I need to print my ticket?", a: "No, eTickets displayed on your smartphone are accepted." },
      { q: "Can I purchase tickets at the door?", a: "Yes, subject to availability. Advance purchase is recommended for guaranteed entry." },
      { q: "What shall I do if I'm having trouble purchasing tickets?", a: "Contact us at info@gatemilano.com and we'll help you out." },
      { q: "How do I get a refund?", a: "Refund policies depend on the event organiser. Please refer to the ticketing platform used at purchase." },
    ],
  },
  {
    title: "Corporate & Private Events",
    faqs: [
      { q: "Can I organise a private or corporate event at Gate Milano?", a: "Yes. We offer both the Main Room and Club Room for private hire. Contact us at corporate@gatemilano.com." },
      { q: "What is included in a venue hire?", a: "Both spaces come fully equipped with professional sound systems, architectural lighting rigs, and integrated bars. No external suppliers needed." },
      { q: "Can I hire both rooms at the same time?", a: "Yes, the Main Room and Club Room can be booked independently or combined for larger events." },
      { q: "Where can I find technical specifications and floor plans?", a: "You can download all documentation from our Corporate page." },
    ],
  },
  {
    title: "Photos & Videos",
    faqs: [
      { q: "Can I film and/or take photographs?", a: "Photography and video for personal use is permitted with a smartphone. Professional equipment and commercial recording are strictly prohibited without prior authorisation." },
    ],
  },
  {
    title: "Contact & General",
    faqs: [
      { q: "How do I get in touch?", a: "You can reach us at info@gatemilano.com or via our social channels." },
      { q: "How can I propose an event or a night?", a: "Write to us at info@gatemilano.com with a presentation of your project." },
      { q: "Can I pay by card?", a: "Yes, we accept contactless and card payments." },
      { q: "Where can I send my CV?", a: "Send your CV to careers@gatemilano.com." },
    ],
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <Nav />

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1
          className="text-[clamp(2rem,7.5vw,6rem)] leading-none text-gate-white uppercase mb-12 text-center"
          style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
        >
          FAQ
        </h1>
        {sections.map((section) => (
          <div key={section.title} className="mb-12">
            <h2
              className="text-[0.975rem] text-gate-muted mb-4"
              style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
            >
              {section.title}
            </h2>
            <div className="divide-y divide-gate-border">
              {section.faqs.map((item) => {
                const id = `${section.title}-${item.q}`;
                return (
                  <div
                    key={id}
                    className="py-5 cursor-pointer"
                    onClick={() => setOpen(open === id ? null : id)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className="text-[1.2rem] text-gate-white"
                        style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700 }}
                      >
                        {item.q}
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-gate-white text-gate-black flex items-center justify-center text-[1.688rem]" style={{ fontWeight: 300 }}>
                        {open === id ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: open === id ? "500px" : "0px" }}
                    >
                      <p className="mt-4 text-gate-white text-[0.875rem] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

