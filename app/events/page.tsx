import { client } from "../../sanity/lib/client";
import EventsGrid, { type Event } from "../components/EventsGrid";
import Nav from "../components/Nav";

export const revalidate = 30;

export const metadata = { title: "Events — Gate Milano" };

async function getEvents(): Promise<Event[]> {
  return client.fetch(
    `*[_type == "event" && date >= now()] | order(date asc) {
      _id, title, date, genres, ticketUrl, isSoldOut,
      image { asset { _ref } }
    }`
  );
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <Nav />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1
          className="text-[clamp(3rem,8vw,7rem)] leading-none uppercase mb-12"
          style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}
        >
          Events
        </h1>
        <EventsGrid events={events} />
      </section>
    </main>
  );
}
