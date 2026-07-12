"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("cursor-enabled");
    dot.style.display = "block";
    ring.style.display = "block";

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // dot snaps instantly
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const tick = () => {
      // ring lerps toward mouse
      ringX += (mouseX - ringX) * 0.11;
      ringY += (mouseY - ringY) * 0.11;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const labeled = target.closest("[data-cursor-text]");

      if (labeled) {
        const text = labeled.getAttribute("data-cursor-text") ?? "";
        dot.textContent = text;
        dot.classList.add("is-label");
        dot.classList.remove("is-hovering");
        ring.classList.add("ring-hidden");
        return;
      }

      dot.textContent = "";
      dot.classList.remove("is-label");
      ring.classList.remove("ring-hidden");

      if (target.closest("a, button")) {
        dot.classList.add("is-hovering");
        ring.classList.add("ring-large");
      } else {
        dot.classList.remove("is-hovering");
        ring.classList.remove("ring-large");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("cursor-enabled");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ display: "none" }}
        aria-hidden="true"
      />
    </>
  );
}
