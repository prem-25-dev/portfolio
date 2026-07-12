"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.documentElement.classList.add("cursor-enabled");
    cursor.style.display = "block";

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const labeled = target.closest("[data-cursor-text]");
      if (labeled) {
        cursor.textContent = labeled.getAttribute("data-cursor-text");
        cursor.classList.add("is-label");
        cursor.classList.remove("is-hovering");
        return;
      }
      cursor.textContent = "";
      cursor.classList.remove("is-label");
      if (target.closest("a, button")) {
        cursor.classList.add("is-hovering");
      } else {
        cursor.classList.remove("is-hovering");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("cursor-enabled");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}
