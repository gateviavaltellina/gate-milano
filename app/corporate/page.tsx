import Nav from "../components/Nav";

export const metadata = { title: "Corporate — Gate Milano" };

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-gate-black text-gate-white">
      <Nav />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775493250/gate-milano-corporate_qrsrb0.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-[clamp(2rem,7.5vw,7rem)] leading-none text-gate-white uppercase"
            style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
          >
            Corporate
          </h1>
        </div>
      </section>
      <section className="bg-gate-black py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gate-white text-[0.875rem] leading-relaxed">
            Gate Milano offers two distinct event spaces across a total area of 600 sqm, available independently or combined for events of any scale. The Main Room spans over 400 sqm and is Milan's premier large-scale event space for rent — ideal for product launches, corporate dinners, and live productions. The Club Room offers a more intimate setting for private events and exclusive gatherings. Both spaces come fully equipped with professional sound systems, architectural lighting rigs, and integrated bars — no external suppliers needed. You bring the vision, we take care of the rest.
          </p>
        </div>
      </section>
      <section className="bg-gate-black py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-[clamp(2rem,7.5vw,7rem)] leading-none text-gate-white uppercase mb-8"
            style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
          >
            Everything you need to make a decision.
          </h2>
          <p className="text-gate-white text-[0.875rem] leading-relaxed mb-12">
            Browse location photos and videos, download our full technical specifications, or access the venue floor plans — all in one place.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a href="https://www.dropbox.com/scl/fo/s9jo7pyf4ow36zcpopoqa/ALbFPweHtiVsOP-XrrPAfj4?rlkey=rpgs97n9ooja64bsxv26rigc9&st=akplic2w" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm border border-gate-white text-gate-white text-[0.875rem] uppercase tracking-widest px-6 py-4 rounded-full hover:bg-gate-white hover:text-gate-black transition-colors text-center" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}>
              Pics &amp; Videos of Location
            </a>
            <a href="https://www.dropbox.com/scl/fo/onv2q2eky03e95exg0rbs/AN4IlUw2E7uRDYAVfHQ75mM?rlkey=ma7qv2indliu94w3bp9oxopez&st=ufjgxk9p&dl=1" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm border border-gate-white text-gate-white text-[0.875rem] uppercase tracking-widest px-6 py-4 rounded-full hover:bg-gate-white hover:text-gate-black transition-colors text-center" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}>
              Tech Specs
            </a>
            <a href="https://www.dropbox.com/scl/fo/j84iyp5etlfzaumvb9lwy/ANZJV2q3_rMopnoJgg3QtfM?rlkey=d73tu6zwwbuah5815mpsthgo9&st=1i1jdbti&dl=1" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm border border-gate-white text-gate-white text-[0.875rem] uppercase tracking-widest px-6 py-4 rounded-full hover:bg-gate-white hover:text-gate-black transition-colors text-center" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}>
              Floor Plans
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
