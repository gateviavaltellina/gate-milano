export const revalidate = 30;

import Link from "next/link";
import { client } from "../sanity/lib/client";
import NewsletterForm from "./components/NewsletterForm";
import EventsGrid, { type Event } from "./components/EventsGrid";
import Nav from "./components/Nav";

interface SiteSettings {
  venueName: string;
  description: string;
  address: { street: string; city: string; postalCode: string; region: string };
  email: string;
  phone?: string;
  instagram: string;
  googleMapsUrl?: string;
}

const venueOrder: Record<string, number> = {
  "Carroponte Milano": 0,
  "Alcatraz Milano": 1,
  "Main Room": 2,
  "Club Room": 3,
};

async function getEvents(): Promise<Event[]> {
  const events = await client.fetch(
    `*[_type == "event" && dateTime(date) >= dateTime(now()) - 60*60*6] | order(date asc) {
      _id, title, date, genres, venue, ticketUrl, isSoldOut, isSellingFast,
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

async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}


export default async function Home() {
  const [events] = await Promise.all([getEvents(), getSiteSettings()]);

  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center bg-gate-black overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://res.cloudinary.com/dhkr9hmw5/video/upload/v1775398568/background-homepage-gate-milano_ad0skc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center px-4">
            <h1
              className="hero-text text-[clamp(2rem,7.5vw,7rem)] leading-none text-gate-white uppercase"
              style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
            >
              CLUBBING.
              <br />
              LIVE.
              <br />
              CORPORATE.
            </h1>
          </div>
        </section>

        {/* Events Grid */}
        <section id="events" className="bg-gate-black py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <EventsGrid events={events} />
          </div>
        </section>

        {/* Category Cards */}
        <section className="bg-gate-black py-4 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
            {[
              { label: "EVENTS", href: "/events", bg: "from-blue-900 to-black", image: "https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775418580/20260321_PhotoIHateModels-33_gadeub_c_fill_w_1200_h_1200_ar_1_1_uib3sc.webp" },
              { label: "LIVE & DJ SET", href: "/main-room", bg: "from-indigo-900 to-black", image: "https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775419340/Photo_01-03-26_04_49_58_ysseqo_c_fill_w_1200_h_1200_ar_1_1_l5vz2d.webp" },
              { label: "CORPORATE", href: "/corporate", bg: "from-amber-900 to-black", image: "https://res.cloudinary.com/dhkr9hmw5/image/upload/v1775419244/GateMainRoom-ph-12_11zon_m2cpms_c_fill_w_1200_h_1200_ar_1_1_zukpwp.webp" },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`relative aspect-square flex items-center justify-center overflow-hidden group rounded-3xl ${!cat.image ? `bg-gradient-to-b ${cat.bg}` : ""}`}
              >
                {cat.image && (
                  <>
                    <img src={cat.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-colors" />
                  </>
                )}
                {!cat.image && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                )}
                <h2
                  className="relative z-10 text-4xl md:text-5xl text-gate-white uppercase group-hover:scale-105 transition-transform m-0"
                >
                  {cat.label}
                </h2>
              </Link>
            ))}
          </div>
        </section>

        {/* About + Simple Newsletter */}
        <section className="bg-gate-black py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="font-nhd-medium text-[clamp(2.1rem,5.6vw,4.9rem)] leading-none text-gate-white uppercase"
              >
                SINCE 2017.
                <br />
                THE EVENT
                <br />
                SPACE WHERE
                <br />
                YOUR NEEDS
                <br />
                TAKE SHAPE.
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-gate-white text-[0.9rem] leading-relaxed" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 300 }}>
                Gate Milano is aimed at companies, agencies and promoters for the purpose to
                transform the requested event into a unique experience of its kind.
              </p>
              <div className="border border-red-600 rounded-3xl p-6">
                <p className="text-sm text-center text-gate-white mb-4" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700 }}>
                  Sign-up now to receive offers and updates for the next events
                </p>
                <NewsletterForm variant="simple" />
              </div>
            </div>
          </div>
        </section>

      </main>

    </>
  );
}
