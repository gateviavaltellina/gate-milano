import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import Marquee from "./Marquee";

export interface Event {
  _id: string;
  title: string;
  date: string;
  genres: string[];
  venue?: string;
  ticketUrl?: string;
  isSoldOut?: boolean;
  isSellingFast?: boolean;
  image?: { asset: { _ref: string } };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function EventsGrid({ events }: { events: Event[] }) {
  if (events.length === 0) {
    return (
      <p className="text-gate-muted text-center py-12">
        No upcoming events. Check back soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div
          key={event._id}
          className="border border-gate-border rounded-3xl overflow-hidden flex flex-col"
        >
          {/* Poster image */}
          <a
            href={event.ticketUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square bg-gate-gray block overflow-hidden"
          >
            {/* Selling Fast badge */}
            {event.isSellingFast && !event.isSoldOut && (
              <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
                <Marquee text="TICKETS SELLING FAST" speed={130} bgColor="bg-white" textColor="text-red-600" />
              </div>
            )}
            {/* Sold Out badge */}
            {event.isSoldOut && (
              <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
                <Marquee text="SOLD OUT" speed={130} bgColor="bg-red-600" textColor="text-white" />
              </div>
            )}
            {event.image?.asset?._ref ? (
              <Image
                src={urlFor(event.image).width(600).height(600).url()}
                alt={event.title}
                fill
                className="object-cover hover:opacity-80 transition-opacity"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={(event.isSellingFast && !event.isSoldOut) || event.isSoldOut ? { top: '38px' } : {}}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-4xl text-gate-white uppercase text-center px-4"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {event.title}
                </span>
              </div>
            )}
          </a>

          {/* Buy Tickets button */}
          <div className="px-4 pb-2 pt-2">
            {event.ticketUrl && !event.isSoldOut ? (
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-600 hover:bg-red-700 text-white text-sm uppercase tracking-widest py-3 text-center rounded-full transition-colors"
                style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700, fontSize: "0.966rem" }}
              >
                BUY TICKETS
              </a>
            ) : event.isSoldOut ? (
              <span className="block bg-gate-gray text-gate-muted text-sm uppercase tracking-widest py-3 text-center rounded-full opacity-60" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700, fontSize: "0.966rem" }}>
                SOLD OUT
              </span>
            ) : (
              <span className="block bg-red-600 text-white text-sm uppercase tracking-widest py-3 text-center rounded-full opacity-60" style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700, fontSize: "0.966rem" }}>
                BUY TICKETS
              </span>
            )}
          </div>

          {/* Info */}
          <div className="px-4 pt-2 pb-4 flex flex-col gap-2 bg-gate-black">
            <a
              href={event.ticketUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gate-white leading-tight uppercase tracking-wide hover:text-red-500 transition-colors"
              style={{ fontWeight: 500 }}
            >
              {event.title}
            </a>
            {event.venue && (
              <span className="text-xs border border-red-600 text-red-500 px-2 py-0.5 rounded-full w-fit">
                {event.venue}
              </span>
            )}
            {event.genres?.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {event.genres.map((g) => (
                  <span
                    key={g}
                    className="text-xs border border-gate-border px-2 py-0.5 text-gate-muted rounded-full"
                  >
                    {g}
                  </span>
                ))}
              </div>
            )}
            <a href={event.ticketUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="text-lg uppercase text-gate-white hover:text-red-500 transition-colors" style={{ fontWeight: 500 }}>{formatDate(event.date)}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
