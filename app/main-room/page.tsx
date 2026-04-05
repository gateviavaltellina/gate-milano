import Nav from "../components/Nav";

export const metadata = { title: "Main Room — Gate Milano" };

export default function MainRoomPage() {
  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <Nav />
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-[clamp(4rem,12vw,10rem)] leading-none uppercase mb-6"
          style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}
        >
          Main Room
        </h1>
        <p className="text-gate-muted text-lg max-w-xl">
          Il cuore pulsante di Gate Milano. Capacity info, technical specs e immagini in arrivo.
        </p>
      </section>
    </main>
  );
}
