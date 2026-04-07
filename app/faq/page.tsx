"use client";

import Nav from "../components/Nav";
import { useState } from "react";

type Question = { q: string; a: string; link?: { label: string; href: string } };
type FaqEntry =
  | { type: "category"; label: string; questions: Question[] }
  | { type: "flat"; q: string; a: string; link?: { label: string; href: string } };

const faqData: FaqEntry[] = [
  {
    type: "category",
    label: "Getting Here",
    questions: [
      {
        q: "Where is Gate Milano located?",
        a: "Gate Milano is located at Via Valtellina 21, 20159 Milan, Italy.",
        link: { label: "View on Google Maps", href: "https://www.google.com/maps/place/Gate+Milano/@45.49428,9.1800291,17z/data=!4m15!1m8!3m7!1s0x4786c12862ee85c9:0x17fe3928f4849ebd!2sVia+Valtellina,+21,+20159+Milano+MI!3b1!8m2!3d45.49428!4d9.182604!16s%2Fg%2F11q2nbvhm2!3m5!1s0x4786c12862ee1b41:0xedef1901c9323f79!8m2!3d45.4943885!4d9.1819677!16s%2Fg%2F11fy7cdpd0?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" },
      },
      {
        q: "Is There Parking Near Gate Milano?",
        a: "Several parking options are available near the venue. A free public car park is located in Via Bernina, directly adjacent to Gate Milano — free of charge from 7 PM to 8 AM. Additional paid parking is available at Parcheggio Farini, Via Carlo Farini 30, a short distance from the venue. Street parking is also available in the surrounding area. We recommend using a taxi or rideshare service for a hassle-free night.",
      },
    ],
  },
  {
    type: "category",
    label: "Event Opening Times",
    questions: [
      {
        q: "What Are Gate Milano's Opening Times?",
        a: "Gate Milano is usually open on Fridays and Saturdays from 11:00 PM to 5:00 AM. Opening and closing times may vary depending on the event. Please check our Events page for up-to-date information on each night.",
        link: { label: "Events", href: "https://www.gatemilano.it/events" },
      },
    ],
  },
  {
    type: "category",
    label: "Access To the Event",
    questions: [
      {
        q: "How Does Security Work At Gate Milano?",
        a: "At Gate Milano, guest safety is our top priority. All entry procedures and security checks are carried out by trained staff, including both male and female personnel, in order to ensure a respectful and safe environment for everyone. Access to the venue is subject to compliance with our security policies and internal regulations. Gate Milano reserves the right to deny entry or remove any individual who does not adhere to staff instructions or whose behaviour may compromise the safety, comfort or experience of other guests. Our objective is to guarantee a secure, controlled and enjoyable experience for all attendees.",
      },
      {
        q: "Is There A Dress Code At Gate Milano?",
        a: "At Gate Milano, guest safety is our top priority. All entry procedures and security checks are carried out by trained staff, including both male and female personnel, in order to ensure a respectful and safe environment for everyone. Access to the venue is subject to compliance with our security policies and internal regulations. Gate Milano reserves the right to deny entry or remove any individual who does not adhere to staff instructions or whose behaviour may compromise the safety, comfort or experience of other guests. Our objective is to guarantee a secure, controlled and enjoyable experience for all attendees.",
      },
      {
        q: "Is There A Cloakroom At Gate Milano?",
        a: "Yes, Gate Milano has a cloakroom service available at €5 per item. Accepted items include jackets (one per person), helmets, backpacks, suitcases, and umbrellas.",
      },
      {
        q: "What Is The Bag Policy At Gate Milano?",
        a: "Backpacks, large bags, helmets, and suitcases must be checked into the cloakroom upon entry at a cost of €5 per item. Items of this size are not permitted inside the venue. Small handbags and clutches are allowed.",
      },
      {
        q: "Is There A Re-Entry Policy At Gate Milano?",
        a: "Re-entry is not permitted. Guests who leave the venue will be required to purchase a new ticket to re-enter. We recommend taking advantage of the outdoor areas available on-site for those who need a break from the dancefloor.",
      },
      {
        q: "What Areas Can I Access With My Ticket?",
        a: "Each ticket grants access to its respective room — the Main Room and the Club Room each have their own dedicated entry. Restrooms and smoking areas are accessible to all guests regardless of ticket type. VIP areas require a VIP ticket or table booking. Backstage access is subject to the same VIP policy and is not included in standard admission.",
      },
      {
        q: "Is Gate Milano An Accessible Venue?",
        a: "Gate Milano is wheelchair accessible and welcomes guests with all types of functional diversity. We encourage guests with specific accessibility needs to contact us in advance so our staff can arrange the appropriate assistance and ensure the best possible experience.",
      },
      {
        q: "What Identification Do I Need To Enter Gate Milano?",
        a: "A valid government-issued photo ID is required upon entry. Accepted documents include national ID cards and passports. Please note that photocopies and digital photographs of ID documents will not be accepted — only original documents are valid.",
      },
      {
        q: "What Is The Minimum Age To Enter Gate Milano?",
        a: "All guests must be aged 18 or older to enter Gate Milano. Anyone who appears to be underage will be asked to provide valid proof of age — guests unable to do so will be refused entry.\n\nFor concerts only, guests aged 16 and over are permitted. Guests under 16 may attend concerts exclusively if accompanied by a parent or legal guardian.\n\nAccepted documents: for European citizens, a national identity card or passport. For non-European citizens, a passport is required. Driver's licenses and similar documents are not accepted under any circumstances. Photocopies and digital photographs of ID documents will not be valid — original documents only.",
      },
    ],
  },

  {
    type: "category",
    label: "VIP Access, Bookings & Reservations",
    questions: [
      {
        q: "How Can I Book A VIP Table At Gate Milano?",
        a: "VIP tables are available for selected events only. To check availability, visit our Events page or contact us directly at info@gatemilano.com. For events that offer individual VIP tickets, these can be purchased directly through the event page. A member of our team will get back to you as soon as possible.",
      },
      {
        q: "How Do I Access The VIP Area?",
        a: "The VIP entrance is located at the front of the venue, on the left hand side. Look out for our staff on arrival — they'll guide you straight through.",
      },
      {
        q: "How Many People Per Table?",
        a: "Table capacity varies depending on the event and availability. All details are listed directly on the ticketing page for each event. For further information you can also reach us at info@gatemilano.com.",
      },
      {
        q: "What Is The Table Layout?",
        a: "Table arrangements vary depending on the event setup and production requirements. For specific layout information, check the event page or contact us at info@gatemilano.com.",
      },
      {
        q: "What Payment Methods Are Accepted?",
        a: "Gate Milano accepts contactless payments, Mastercard, Visa, Maestro, and American Express. Cash payments are also accepted, limited to the amount pursuant to applicable law.",
      },
      {
        q: "What Is The Cancellation Policy?",
        a: "All bookings are non-refundable. In the event of a cancellation, any deposit paid will be forfeited. If full payment has been made, both the booking and the full amount paid will be lost.",
      },
      {
        q: "Is There A Dress Code At Gate Milano?",
        a: "Gate Milano promotes a smart-casual dress code in line with the club's atmosphere and production standards. Beachwear, flip-flops, sleeveless undershirts and overly casual outfits are not permitted. To preserve a neutral and inclusive environment, we do not allow sports team merchandise, flags, or clothing displaying political, ideological or religious messages that may cause discomfort or offence to other guests.",
      },
      {
        q: "What Is The Bag Policy At Gate Milano?",
        a: "Backpacks, large bags, helmets, and suitcases are not permitted inside the venue and must be checked into the cloakroom upon entry. Please refer to our cloakroom policy for details.",
      },
      {
        q: "What Is The Photography & Recording Policy?",
        a: "Professional cameras, drones, tablets, laser devices, audio recording equipment, selfie sticks, monopods, tripods, telescopic lenses, and wearable recording devices are not permitted inside Gate Milano. Any recording or photography for commercial or advertising purposes is strictly prohibited without prior written authorization from the venue.",
      },
      {
        q: "What Is The Best Time To Arrive?",
        a: "To make the most of your night at Gate Milano, we recommend arriving before 1:00 AM. If you have a VIP booking, please let us know your estimated arrival time in advance.",
      },
      {
        q: "What Identification Is Required For VIP Access?",
        a: "Original personal identification is required at the VIP entrance. You must bring the original document — photocopies and photographs will not be accepted. For European citizens, a national identity card or passport is required. For non-European citizens, a passport is required.",
      },
      {
        q: "Is There Parking Near Gate Milano?",
        a: "Several parking options are available near the venue. A public car park is located in Via Bernina, directly adjacent to Gate Milano, free of charge from 7 PM to 8 AM. Additional paid parking is available at Parcheggio Farini, Via Carlo Farini 30, a short distance from the venue. Street parking is also available in the surrounding area. We recommend using a taxi or rideshare service for a hassle-free night.",
      },
    ],
  },
  {
    type: "category",
    label: "Tickets",
    questions: [
      {
        q: "Do I Need To Print My Ticket?",
        a: "No need to print anything — simply download your eTicket and show it on your smartphone at the entrance.",
      },
      {
        q: "What Shall I Do If I'm Having Trouble Purchasing Tickets?",
        a: "For any ticketing issues, please contact our official ticketing platform directly at support@xceed.com.",
      },
      {
        q: "Can I Purchase Tickets At The Door?",
        a: "Yes, tickets are available at the door on the night of the event. We recommend purchasing in advance online for the best available price, as door prices may differ. For more information, contact us at info@gatemilano.com.",
      },
      {
        q: "How Do I Get A Refund?",
        a: "Refund requests must be submitted within 48 hours of the cancelled event directly through the ticketing platform where the purchase was made. For assistance, contact support@xceed.com with your original purchase receipt.",
      },
    ],
  },
  {
    type: "category",
    label: "VIP & Backstage Tickets",
    questions: [
      {
        q: "Can I Access The VIP Or Backstage Area Without A Table Booking?",
        a: "For selected events, a limited number of individual VIP tickets are available, granting access to the VIP area without a table booking. Backstage tickets are also available for selected events only. Check the event page for availability or contact us at info@gatemilano.com.",
      },
    ],
  },
  {
    type: "category",
    label: "Photo & Video Policy",
    questions: [
      {
        q: "Can I Film And / Or Take Photographs?",
        a: "Personal photography and video recording with a smartphone is permitted, provided it is done respectfully and does not interfere with other guests' experience. Professional cameras, drones, tablets, selfie sticks, monopods, tripods, telescopic lenses, audio recording equipment, and wearable recording devices are not permitted inside the venue. Any filming or photography for commercial or advertising purposes is strictly prohibited without prior written authorization from Gate Milano. By entering the venue, guests consent to being filmed or photographed by our internal media team for promotional purposes.",
      },
    ],
  },
  {
    type: "category",
    label: "Contact",
    questions: [
      {
        q: "How Do I Get In Touch With Gate Milano?",
        a: "For any enquiries, feel free to reach us at info@gatemilano.com. We'll get back to you as soon as possible.",
      },
    ],
  },
  {
    type: "category",
    label: "General FAQs",
    questions: [
      {
        q: "Can I Pay By Card?",
        a: "We accept contactless payments and card payments using Mastercard, Visa, Maestro and American Express.",
      },
      {
        q: "Do You Accept Cash?",
        a: "Yes, cash payments are accepted, limited to the amount permitted by applicable law.",
      },
      {
        q: "Can I Bring Food & Drink Into Gate Milano?",
        a: "Outside food and beverages are not permitted inside the venue.",
      },
    ],
  },
  {
    type: "category",
    label: "Lost & Found",
    questions: [
      {
        q: "What If I Lose Something At Gate Milano?",
        a: "If you have lost an item during an event, please contact us at info@gatemilano.com with a description of the lost item and one of our team members will get back to you as soon as possible. Gate Milano assumes no responsibility for items lost on the premises.",
      },
    ],
  },
  {
    type: "category",
    label: "Job Opportunities",
    questions: [
      {
        q: "Where Can I Send My CV?",
        a: "We are always looking for talented people to join the Gate Milano team. Send your CV to careers@gatemilano.com and we'll be in touch if a suitable opportunity arises.",
      },
    ],
  },
  {
    type: "category",
    label: "Refund & Cancellation Policy",
    questions: [
      {
        q: "What Is The Refund Policy?",
        a: "Tickets are non-refundable. In the event of a cancelled event, a full refund will be issued automatically. For any other refund-related enquiries, please contact us at info@gatemilano.com and our team will review your request.",
      },
      {
        q: "What Is The Cancellation Policy?",
        a: "In the event of a cancellation, all ticket holders will be automatically refunded. No action is required on your part.",
      },
    ],
  },
];

function PlusButton({ open }: { open: boolean }) {
  return (
    <span
      className="shrink-0 w-8 h-8 rounded-full bg-gate-white text-gate-black flex items-center justify-center text-[1.688rem] pointer-events-none"
      style={{ fontWeight: 300 }}
    >
      {open ? "−" : "+"}
    </span>
  );
}

function QuestionRow({ item, isOpen, onToggle }: { item: Question; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="py-4 cursor-pointer border-t border-gate-border"
      style={{ touchAction: "manipulation" }}
      onMouseDown={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className="text-[1rem] text-gate-white"
          style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700 }}
        >
          {item.q}
        </span>
        <span
          className="shrink-0 w-8 h-8 flex items-center justify-center text-[1.688rem] text-gate-white pointer-events-none"
          style={{ fontWeight: 300 }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <p className="mt-3 text-gate-white text-[0.875rem] leading-relaxed">{item.a}</p>
        {item.link && (
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-[0.875rem] text-red-500 hover:text-red-400 underline"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {item.link.label}
          </a>
        )}
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openCat, setOpenCat] = useState<number | null>(null);
  const [openQ, setOpenQ] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gate-black text-gate-white pt-[57px]">
      <Nav />

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1
          className="text-[clamp(2rem,7.5vw,6rem)] leading-none text-gate-white uppercase mb-12 text-center"
          style={{ fontFamily: "NeueHaasDisplay", fontWeight: 500 }}
        >
          FAQ
        </h1>

        <div className="divide-y divide-gate-border">
          {faqData.map((entry, i) => {
            if (entry.type === "category") {
              const catOpen = openCat === i;
              return (
                <div key={i}>
                  {/* Category header */}
                  <div
                    className="py-5 cursor-pointer"
                    style={{ touchAction: "manipulation" }}
                    onMouseDown={() => {
                      setOpenCat(catOpen ? null : i);
                      setOpenQ(null);
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className="text-[1.2rem] text-gate-white"
                        style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700 }}
                      >
                        {entry.label}
                      </span>
                      <PlusButton open={catOpen} />
                    </div>
                  </div>
                  {/* Sub-questions */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: catOpen ? `${entry.questions.length * 300}px` : "0px" }}
                  >
                    <div className="pl-4 pb-2">
                      {entry.questions.map((q, j) => {
                        const key = `${i}-${j}`;
                        return (
                          <QuestionRow
                            key={key}
                            item={q}
                            isOpen={openQ === key}
                            onToggle={() => setOpenQ(openQ === key ? null : key)}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            // Flat question
            const key = `flat-${i}`;
            return (
              <div
                key={i}
                className="py-5 cursor-pointer"
                style={{ touchAction: "manipulation" }}
                onMouseDown={() => setOpenQ(openQ === key ? null : key)}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="text-[1.2rem] text-gate-white"
                    style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700 }}
                  >
                    {entry.q}
                  </span>
                  <PlusButton open={openQ === key} />
                </div>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: openQ === key ? "500px" : "0px" }}
                >
                  <p className="mt-4 text-gate-white text-[0.875rem] leading-relaxed">{entry.a}</p>
                  {entry.link && (
                    <a
                      href={entry.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[0.875rem] text-red-500 hover:text-red-400 underline"
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      {entry.link.label}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
