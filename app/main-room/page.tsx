import Nav from "../components/Nav";

export const metadata = { title: "Main Room — Gate Milano" };

export default function MainRoomPage() {
  return (
    <main className="min-h-screen bg-gate-black text-gate-white">
      <Nav />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dhkr9hmw5/video/upload/v1775460433/gate-milano-main-room-event-space_guects.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-[clamp(2rem,7.5vw,7rem)] leading-none text-gate-white uppercase"
            style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
          >
            Main Room
          </h1>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775461064/GateMainRoom-ph-2_11zon_dldmrm.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-gate-white text-[0.875rem] leading-relaxed">
            The Main Room is Gate Milano's largest space — a versatile area within the venue, ideal for large-scale events, corporate meetings, DJ sets, and live concerts in Milan. With a capacity designed for impact, it's the preferred choice for promoters, brands, and artists looking for a premium event space in the heart of the city.
          </p>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775461315/GateMainRoom-ph-6_11zon_clp0cq.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-gate-white text-[0.875rem] leading-relaxed">
            The Main Room at Gate Milano spans over 400 sqm and is fully equipped for professional events in Milan. With integrated bar areas, state-of-the-art lighting, and a professional sound system, it's the go-to venue for live concerts, corporate events, product launches, and large private gatherings in the city. A fully equipped, turnkey event space in Milan city centre — built for promoters, brands, and artists who demand impact.
          </p>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775463450/MAIN-ROOM-D_B_imhaqq.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-gate-white text-[0.875rem] leading-relaxed">
            The Main Room runs on a full D&amp;B Audiotechnik system — 8 Y8 line array elements, 2 Fly Bars, 3 J-Sub 3x18" subwoofers, and 6 D12 Power Amps. Designed for even coverage, deep low-end, and zero compromise on clarity at any volume. Whether you're headlining or hosting, the sound holds up.
          </p>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dhkr9hmw5/video/upload/v1775464276/gate-milano-main-room-event-space-lights_otjokz.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center">
          <p className="text-gate-white text-[0.875rem] leading-relaxed">
            The Main Room doesn't just look the part — it performs. With over 60 fixtures across the rig — including moving heads, effect lights, LED washes, strobes, and panel FX — the lighting system at Gate Milano is designed to transform any event into a full visual experience. No add-ons, no compromises — everything is already in place.
          </p>
        </div>
      </section>
    </main>
  );
}
