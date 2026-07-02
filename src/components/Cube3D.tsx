"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

const HALF = 160;

const FACES = [
  {
    style: `translateZ(${HALF}px)`,
    alt: "tunnel",
    src: "/tunnel.webp",
    width: 320,
    height: 180,
    imgClass: "absolute bottom-[25%] right-[-12%]",
  },
  {
    style: `rotateY(180deg) translateZ(${HALF}px)`,
    alt: "Computer",
    src: "/computer.webp",
    width: 240,
    height: 258,
    imgClass: "relative",
  },
  {
    style: `rotateY(90deg) translateZ(${HALF}px)`,
    alt: "Phone",
    src: "/hand.webp",
    width: 240,
    height: 280,
    imgClass: "relative",
  },
  {
    style: `rotateY(-90deg) translateZ(${HALF}px)`,
    alt: "Arbitrum Everywhere",
    src: "/homepage/hero/arbitrum_everywhere.svg",
    width: 240,
    height: 104,
    imgClass: "relative",
  },
  {
    style: `rotateX(90deg) translateZ(${HALF}px)`,
    alt: "Arbitrum Logo",
    src: "/arb_logo_color.svg",
    width: 224,
    height: 258,
    imgClass: "",
  },
  {
    style: `rotateX(-90deg) translateZ(${HALF}px)`,
    alt: "Globe",
    src: "/globe.webp",
    width: 320,
    height: 320,
    imgClass: "relative h-full w-auto object-cover",
  },
] as const;

export function Cube3D() {
  const [rot, setRot] = useState({ x: -35, y: 45 });
  const drag = useRef<{ active: boolean; lastX: number; lastY: number }>({
    active: false,
    lastX: 0,
    lastY: 0,
  });
  const [dragging, setDragging] = useState(false);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { active: true, lastX: e.clientX, lastY: e.clientY };
    setDragging(true);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.lastX;
    const dy = e.clientY - drag.current.lastY;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
    setRot((r) => ({ x: r.x - dy * 0.5, y: r.y + dx * 0.5 }));
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    drag.current.active = false;
    setDragging(false);
  }, []);

  return (
    <div
      className="relative h-[320px] w-[320px] cursor-grab select-none drop-shadow-cube active:cursor-grabbing scale-75 lg:translate-x-[80px] lg:scale-100"
      style={{ perspective: "1000px" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="preserve-3d relative h-full w-full"
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: dragging ? "none" : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {FACES.map((face) => (
          <div
            key={face.alt}
            className="absolute left-0 top-0 flex h-[320px] w-[320px] items-center justify-center"
            style={{ transform: face.style, backfaceVisibility: "visible" }}
          >
            <Image
              src={face.src}
              alt={face.alt}
              width={face.width}
              height={face.height}
              className={face.imgClass}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
