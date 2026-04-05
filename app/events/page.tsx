import { client } from "../../sanity/lib/client";
import EventsGrid, { type Event } from "../components/EventsGrid";
import Nav from "../components/Nav";

export const revalidate = 30;

export const metadata = { title: "Events — Gate Milano" };

const venueOrder: Record<string, number> = {
  "Carroponte Milano": 0,
  "Alcatraz Milano": 1,
  "Main Room": 2,
  "Club Room": 3,
};

async function getEvents(): Promise<Event[]> {
  const events = await client.fetch(
    `*[_type == "event" && dateTime(date) >= dateTime(now()) - 60*60*6] | order(date asc) {
      _id, title, date, genres, venue, ticketUrl, isSoldOut,
      image { asset { _ref } }
    }`
  );
  return events.sort((a: Event, b: Event) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (dateA !== dateB) return dateA - dateB;
    const vA = venueOrder[a.venue ?? ""] ?? 99;
    const vB = venueOrder[b.venue ?? ""] ?? 99;
    return vA - vB;
  });
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <Nav />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1
          className="text-[clamp(3rem,8vw,7rem)] leading-none uppercase mb-12 text-center"
          style={{ fontFamily: "NeueHaasDisplay", fontWeight: 900 }}
        >
          Events
        </h1>
        <EventsGrid events={events} />
      </section>
    </main>
  );
}
