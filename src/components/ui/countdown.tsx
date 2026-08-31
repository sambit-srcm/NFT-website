"use client";

import { useEffect, useState } from "react";

type Remaining = { hours: number; minutes: number; seconds: number };

const INITIAL: Remaining = { hours: 59, minutes: 59, seconds: 59 };

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

/**
 * Auction countdown.
 *
 * Server and first client render both show the same fixed starting figure, and
 * ticking only begins after mount. Deriving the deadline from Date.now() during
 * render would produce a hydration mismatch instead.
 */
export function Countdown() {
  const [remaining, setRemaining] = useState<Remaining>(INITIAL);

  useEffect(() => {
    const deadline =
      Date.now() + ((INITIAL.hours * 60 + INITIAL.minutes) * 60 + INITIAL.seconds) * 1000;

    const tick = () => {
      const msLeft = Math.max(0, deadline - Date.now());
      const totalSeconds = Math.floor(msLeft / 1000);

      setRemaining({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    };

    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const units: Array<[string, number]> = [
    ["Hours", remaining.hours],
    ["Minutes", remaining.minutes],
    ["Seconds", remaining.seconds],
  ];

  return (
    <div className="flex items-end gap-4 sm:gap-6">
      {units.map(([label, value]) => (
        <div key={label}>
          <span className="font-display block text-2xl font-bold tabular-nums sm:text-[38px]">
            {pad(value)}
          </span>
          <span className="text-ink-subtle text-xs sm:text-base">{label}</span>
        </div>
      ))}
    </div>
  );
}
