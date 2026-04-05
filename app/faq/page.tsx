import Link from "next/link";

export const metadata = { title: "FAQ — Gate Milano" };

const faqs = [
  {
    q: "Dove si trova Gate Milano?",
    a: "Via Valtellina 21, 20159 Milano.",
  },
  {
    q: "Come posso acquistare i biglietti?",
    a: "I biglietti sono disponibili tramite il link presente su ogni evento.",
  },
  {
    q: "Posso organizzare un evento privato o corporate a Gate Milano?",
    a: "Sì. Contattaci a corporate@gatemilano.com per informazioni e disponibilità.",
  },
  {
    q: "Come posso proporre un evento o una serata?",
    a: "Scrivici a info@gatemilano.com con una presentazione del progetto.",
  },
  {
    q: "Gate Milano è accessibile?",
    a: "Sì, la struttura è accessibile. Per esigenze specifiche contattaci prima dell'evento.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1
          className="text-[clamp(3rem,10vw,8rem)] leading-none uppercase mb-16"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          FAQ
        </h1>
        <div className="divide-y divide-gate-border">
          {faqs.map((item) => (
            <div key={item.q} className="py-6">
              <h2 className="font-bold text-base mb-2">{item.q}</h2>
              <p className="text-gate-muted text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="mt-12 inline-block text-sm uppercase tracking-widest border border-gate-white px-6 py-2 hover:bg-gate-white hover:text-gate-black transition-colors"
        >
          ← Back
        </Link>
      </section>
    </main>
  );
}
