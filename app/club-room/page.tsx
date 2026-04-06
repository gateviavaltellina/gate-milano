import Nav from "../components/Nav";

export const metadata = { title: "Club Room — Gate Milano" };

export default function ClubRoomPage() {
  return (
    <main className="min-h-screen bg-gate-black text-gate-white">
      <Nav />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775485250/Gate_ClubRoom-2_11zon_hd4gkt.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-[clamp(2rem,7.5vw,7rem)] leading-none text-gate-white uppercase"
            style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
          >
            Club Room
          </h1>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775485782/Gate_ClubRoom-3_11zon_lcvjck.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-gate-white text-[0.875rem] leading-relaxed">
            The Club Room is where things get intimate. A self-contained private event space in Milan with its own bar and powerful sound system — featuring an exclusive lighting installation designed by Ausgang Studios. Built for exclusive nights, private parties, and corporate gatherings that don't need a crowd of thousands to hit hard. Fully equipped and ready to go. Smaller room, same energy.
          </p>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dhkr9hmw5/video/upload/v1775486240/club-room-gate-milano-entacles-4-5_xl4flx.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-gate-white text-[0.875rem] leading-relaxed">
            Light is the room. The Club Room features a bespoke LED ceiling installation and a full professional lighting rig, designed by Ausgang Studios — one of Europe's most respected lighting design collectives. Every surface, every beat, every moment — lit with intention.
          </p>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775486653/MANTIKORE2102-13_11zon_bzg5k2.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-gate-white text-[0.875rem] leading-relaxed">
            The Club Room runs on a full Funktion-One system — four Resolution 4e loudspeakers, two F1201, two R1, and three F121 bass units. One of the most respected sound systems in the world, now in a room built to let it breathe. If you know, you know. If you don't — you'll feel it anyway.
          </p>
        </div>
      </section>
    </main>
  );
}
