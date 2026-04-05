import Nav from "../components/Nav";

export const metadata = { title: "Club Room — Gate Milano" };

export default function ClubRoomPage() {
  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <Nav />
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-[clamp(4rem,12vw,10rem)] leading-none uppercase mb-6"
          style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}
        >
          Club Room
        </h1>
        <p className="text-gate-muted text-lg max-w-xl">
          Lo spazio intimo di Gate Milano per serate esclusive. Info e immagini in arrivo.
        </p>
      </section>
    </main>
  );
}
