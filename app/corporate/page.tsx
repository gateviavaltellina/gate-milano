import Nav from "../components/Nav";

export const metadata = { title: "Corporate — Gate Milano" };

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <Nav />
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-[clamp(4rem,12vw,10rem)] leading-none uppercase mb-6"
          style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}
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
      </section>
    </main>
  );
}
