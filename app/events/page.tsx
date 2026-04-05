import { client } from "../../sanity/lib/client";
import EventsGrid, { type Event } from "../components/EventsGrid";

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-gate-black border-b border-gate-border">
        <nav className="flex items-center justify-around px-4 py-4">
          {[
            { label: "EVENTS", href: "/events" },
            { label: "MAIN ROOM", href: "/main-room" },
            { label: "CLUB ROOM", href: "/club-room" },
            { label: "CORPORATE", href: "/corporate" },
            { label: "FAQ", href: "/faq" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold tracking-widest text-gate-white hover:text-red-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1
          className="text-[clamp(3rem,8vw,7rem)] leading-none uppercase mb-12"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          Events
        </h1>
        <EventsGrid events={events} />
      </section>
    </main>
  );
}
