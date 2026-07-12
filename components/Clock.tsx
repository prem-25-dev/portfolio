"use client";

import { useEffect, useState } from "react";

/** Live IST clock, harshith.com style — renders only after mount to avoid hydration mismatch. */
export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className="font-mono text-tag tracking-[0.1em] text-muted" suppressHydrationWarning>
      IND — {time} IST
    </span>
  );
}
