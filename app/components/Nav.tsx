"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "EVENTS", href: "/events" },
  { label: "MAIN ROOM", href: "/main-room" },
  { label: "CLUB ROOM", href: "/club-room" },
  { label: "CORPORATE", href: "/corporate" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <>
      {/* Closed nav bar */}
      {!open && (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
          <div className="flex items-center justify-between w-full max-w-md bg-white rounded-full px-5 py-1.5 shadow-md">
            <Link href="/">
              <Image src="/logos/GateLogos/250727_MKT_LogoVectorialBlack.svg" alt="Gate Milano" width={60} height={20} priority />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="text-black text-xs tracking-widest uppercase px-4 py-1.5 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
              style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700 }}
            >
              Menu
            </button>
          </div>
        </header>
      )}

      {/* Open menu panel */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-center px-4 py-3 bg-black/60">
          <div className="menu-panel w-full max-w-md bg-gate-black rounded-3xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-2.5">
              <Link href="/" onClick={() => setOpen(false)}>
                <Image src="/logos/GateLogos/250727_MKT_LogoVectorialWhite.svg" alt="Gate Milano" width={60} height={20} />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-gate-white text-xs tracking-widest uppercase px-4 py-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700 }}
              >
                Close
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[clamp(1.8rem,5vw,3.5rem)] leading-tight uppercase text-gate-white hover:text-red-600 transition-colors"
                  style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
