export const revalidate = 30;

import Link from "next/link";
import { client } from "../sanity/lib/client";
import NewsletterForm from "./components/NewsletterForm";
import EventsGrid, { type Event } from "./components/EventsGrid";

interface SiteSettings {
  venueName: string;
  description: string;
  address: { street: string; city: string; postalCode: string; region: string };
  email: string;
  phone?: string;
  instagram: string;
  googleMapsUrl?: string;
}

async function getEvents(): Promise<Event[]> {
  return client.fetch(
    `*[_type == "event" && date >= now()] | order(date asc) {
      _id, title, date, genres, ticketUrl, isSoldOut,
      image { asset { _ref } }
    }`
  );
}

async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

const navLinks = [
  { label: "EVENTS", href: "/events" },
  { label: "MAIN ROOM", href: "/main-room" },
  { label: "CLUB ROOM", href: "/club-room" },
  { label: "CORPORATE", href: "/corporate" },
  { label: "FAQ", href: "/faq" },
];

export default async function Home() {
  const [events, settings] = await Promise.all([getEvents(), getSiteSettings()]);

  const email = settings?.email ?? "info@gatemilano.com";
  const phone = settings?.phone ?? "+39 391 487 6443";
  const address = settings?.address;
  const instagram = settings?.instagram ?? "gatemilano";

  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gate-black border-b border-gate-border">
        <nav className="flex items-center justify-around px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold tracking-widest text-gate-white hover:text-red-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="pt-[57px]">
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
              className="text-[clamp(4rem,15vw,14rem)] leading-none text-gate-white uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
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

        {/* About + Simple Newsletter */}
        <section className="bg-gate-black py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-[clamp(3rem,8vw,7rem)] leading-none text-gate-white uppercase"
                style={{ fontFamily: "var(--font-bebas)" }}
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
            <div className="flex flex-col gap-8 pt-4">
              <p className="text-gate-muted text-base leading-relaxed">
                Gate Milano is aimed at companies, agencies and promoters for the purpose to
                transform the requested event into a unique experience of its kind.
              </p>
              <div className="border border-red-600 rounded-xl p-6">
                <p className="text-sm text-center text-gate-white mb-4">
                  Sign-up now to receive offers and updates
                  <br />
                  for the next events
                </p>
                <NewsletterForm variant="simple" />
              </div>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="bg-gate-black py-4 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
            {[
              { label: "EVENTS", href: "/events", bg: "from-blue-900 to-black" },
              { label: "LIVE & DJ SET", href: "/main-room", bg: "from-indigo-900 to-black" },
              { label: "CORPORATE", href: "/corporate", bg: "from-amber-900 to-black" },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`relative h-64 flex items-center justify-center bg-gradient-to-b ${cat.bg} overflow-hidden group rounded`}
              >
                <span
                  className="relative z-10 text-4xl md:text-5xl text-gate-white uppercase group-hover:scale-105 transition-transform"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Full Newsletter */}
        <section className="bg-gate-black py-16 px-4">
          <div className="max-w-md mx-auto border border-red-600 rounded-xl p-8">
            <p className="text-sm text-center text-gate-white mb-6">
              Sign-up now to receive offers and updates
              <br />
              for the next events
            </p>
            <NewsletterForm variant="full" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gate-black border-t border-gate-border py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3">Contact Us</h4>
            <ul className="space-y-1 text-sm text-gate-muted">
              <li>
                <a href={`mailto:${email}`} className="hover:text-gate-white transition-colors">
                  {email}
                </a>
              </li>
              {phone && (
                <li>
                  <a href={`tel:${phone}`} className="hover:text-gate-white transition-colors">
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3">Careers</h4>
            <a href="mailto:careers@gatemilano.com" className="text-sm text-gate-muted hover:text-gate-white transition-colors">
              careers@gatemilano.com
            </a>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3">Get Direction</h4>
            <address className="not-italic text-sm text-gate-muted leading-relaxed">
              {address?.street ?? "Via Valtellina 21"}
              <br />
              {address?.city ?? "Milano"}, {address?.postalCode ?? "20159"}
            </address>
            <a
              href={settings?.googleMapsUrl ?? "https://maps.google.com/?q=Via+Valtellina+21+Milano"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-gate-muted hover:text-gate-white transition-colors underline underline-offset-2"
            >
              Open in Maps
            </a>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3">Live</h4>
            <a href="mailto:live@gatemilano.com" className="text-sm text-gate-muted hover:text-gate-white transition-colors">
              live@gatemilano.com
            </a>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3">Corporate</h4>
            <a href="mailto:corporate@gatemilano.com" className="text-sm text-gate-muted hover:text-gate-white transition-colors">
              corporate@gatemilano.com
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gate-border flex items-center justify-between text-xs text-gate-muted">
          <span>© {new Date().getFullYear()} Gate Milano</span>
          <div className="flex gap-4">
            <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-gate-white transition-colors">
              Instagram
            </a>
            <a href="https://facebook.com/gateviavaltellina" target="_blank" rel="noopener noreferrer" className="hover:text-gate-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
