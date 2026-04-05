import Link from "next/link";

export const metadata = { title: "Corporate — Gate Milano" };

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-[clamp(4rem,12vw,10rem)] leading-none uppercase mb-6"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          Corporate
        </h1>
        <p className="text-gate-muted text-lg max-w-xl">
          Gate Milano è il partner ideale per eventi aziendali, lanci di prodotto e presentazioni.
          Per informazioni scrivi a{" "}
          <a href="mailto:corporate@gatemilano.com" className="text-gate-white underline">
            corporate@gatemilano.com
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-8 text-sm uppercase tracking-widest border border-gate-white px-6 py-2 hover:bg-gate-white hover:text-gate-black transition-colors"
        >
          ← Back
        </Link>
      </section>
    </main>
  );
}
