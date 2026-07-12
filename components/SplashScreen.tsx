"use client";

import { useEffect, useState } from "react";

const NAME = "D PREMSANKAR";
const STRIPS = 9;

export default function SplashScreen() {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  // 0 = name animating in
  // 1 = subtitle visible
  // 2 = hold
  // 3 = exit (text zooms out, strips tear away)
  // 4 = done

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase(4);
      return;
    }

    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase(1), 920);
    const t2 = setTimeout(() => setPhase(2), 1500);
    const t3 = setTimeout(() => setPhase(3), 2250);
    const t4 = setTimeout(() => {
      setPhase(4);
      document.body.style.overflow = "";
    }, 3100);

    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === 4) return null;

  const isExiting = phase === 3;

  return (
    <div
      className="fixed inset-0 z-[99999]"
      aria-hidden="true"
      style={{ pointerEvents: isExiting ? "none" : "all" }}
    >
      {/* Strips — cover the screen, tear away on exit to reveal the site */}
      {Array.from({ length: STRIPS }).map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 bg-bg"
          style={{
            top: `${(i / STRIPS) * 100}%`,
            // slight overhang prevents sub-pixel gaps between strips
            height: `calc(${100 / STRIPS}% + 1px)`,
            ...(isExiting && {
              animation: `${i % 2 === 0 ? "strip-left" : "strip-right"} 0.52s cubic-bezier(0.55,0,1,0.45) both`,
              animationDelay: `${i * 35}ms`,
            }),
          }}
        />
      ))}

      {/* Centered content — above the strips */}
      <div
        className="absolute inset-0 z-10 flex select-none flex-col items-center justify-center"
        style={isExiting ? { animation: "splash-text-out 0.22s ease-in forwards" } : undefined}
      >
        {/* Name — each letter slams up from below */}
        <p
          className="font-display font-extrabold uppercase text-primary"
          style={{
            fontSize: "clamp(2rem, 8.5vw, 8rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom"
              style={{ width: char === " " ? "0.22em" : undefined }}
            >
              <span
                className="inline-block"
                style={{
                  animation: "letter-slam 0.6s cubic-bezier(0.22,1.2,0.36,1) both",
                  animationDelay: `${120 + i * 44}ms`,
                }}
              >
                {char === " " ? " " : char}
              </span>
            </span>
          ))}
        </p>

        {/* Red rule — expands from center */}
        <div
          className="mt-5 h-[2px] origin-center bg-accent"
          style={{
            width: "clamp(140px, 34vw, 460px)",
            animation: "line-grow 0.42s ease-out both",
            animationDelay: "660ms",
          }}
        />

        {/* Subtitle */}
        {phase >= 1 && (
          <p
            className="mt-4 font-mono uppercase tracking-[0.3em] text-muted"
            style={{
              fontSize: "clamp(0.85rem, 1.6vw, 1.1rem)",
              fontFamily: "var(--font-calligraphy)",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "0.05em",
              animation: "sub-in 0.4s ease both",
            }}
          >
            Founder · Builder · 18
          </p>
        )}
      </div>
    </div>
  );
}
