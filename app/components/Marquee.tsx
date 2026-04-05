"use client";

import { useRef, useEffect, useState } from "react";

export default function Marquee({ text, speed = 100, bgColor = "bg-white", textColor = "text-red-600" }: { text: string; speed?: number; bgColor?: string; textColor?: string }) {
  const groupRef = useRef<HTMLDivElement>(null);
  const [groupWidth, setGroupWidth] = useState<number | null>(null);

  useEffect(() => {
    if (groupRef.current) {
      setGroupWidth(groupRef.current.scrollWidth);
    }
  }, []);

  const items = Array.from({ length: 12 }).map((_, i) => (
    <span
      key={i}
      className={`inline-flex items-center uppercase tracking-widest ${textColor}`}
      style={{ fontFamily: "NeueHaasDisplay", fontWeight: 700, fontSize: "0.975rem", whiteSpace: "nowrap" }}
    >
      <span className="px-6">{text}</span>
      <span>•</span>
    </span>
  ));

  const duration = groupWidth ? groupWidth / speed : 10;

  return (
    <div className={`overflow-hidden ${bgColor} py-2`}>
      <div
        className="flex"
        style={{
          width: "max-content",
          animation: groupWidth ? `marquee-px-${Math.round(groupWidth)} ${duration}s linear infinite` : undefined,
          willChange: "transform",
        }}
      >
        <div ref={groupRef} className="flex" style={{ width: "max-content" }}>{items}</div>
        <div className="flex" aria-hidden style={{ width: "max-content" }}>{items}</div>
      </div>
      {groupWidth && (
        <style>{`
          @keyframes marquee-px-${Math.round(groupWidth)} {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-${groupWidth}px, 0, 0); }
          }
        `}</style>
      )}
    </div>
  );
}
