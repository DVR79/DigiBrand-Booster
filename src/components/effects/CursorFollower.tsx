'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = 0, ry = 0;

    function onMove(e: MouseEvent) {
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    }

    let raf: number;
    function lerp() {
      if (ring) {
        const tx = parseFloat(dot?.style.left || '0');
        const ty = parseFloat(dot?.style.top || '0');
        rx += (tx - rx) * 0.12;
        ry += (ty - ry) * 0.12;
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(lerp);
    }

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[200] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'var(--accent-primary)' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[199] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ border: '1.5px solid var(--accent-primary)', opacity: 0.4 }}
      />
    </>
  );
}
