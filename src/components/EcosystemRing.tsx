"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ECOSYSTEM_MARQUEE } from "@/lib/site-data";

const OUTER = ECOSYSTEM_MARQUEE.slice(0, 11);
const INNER = ECOSYSTEM_MARQUEE.slice(11);

function Ring({
  logos,
  size,
  radius,
  duration,
  reverse,
}: {
  logos: typeof ECOSYSTEM_MARQUEE;
  size: number;
  radius: number;
  duration: number;
  reverse: boolean;
}) {
  const ringRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const loop = (t: number) => {
      const a = (reverse ? -1 : 1) * (t / 1000 / duration) * 360;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(-50%, -50%) rotate(${a}deg)`;
      }
      logoRefs.current.forEach((el) => {
        if (el) el.style.transform = `rotate(${-a}deg)`;
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [duration, reverse]);

  return (
    <div
      ref={ringRef}
      className="absolute left-1/2 top-1/2"
      style={{ width: size, height: size }}
    >
      {logos.map((logo, i) => {
        const angle = (i / logos.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return (
          <div
            key={logo.name}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: size / 2 + x - 30,
              top: size / 2 + y - 30,
              width: 60,
            }}
          >
            <div
              ref={(el) => {
                logoRefs.current[i] = el;
              }}
              className="flex flex-col items-center gap-1"
            >
              <Image
                src={logo.logo}
                alt={logo.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg bg-white/80 p-1 object-contain shadow-sm"
              />
              <span className="text-[10px] font-medium text-primary-blue-1">
                {logo.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function EcosystemRing() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-30">
      <Ring logos={OUTER} size={1440} radius={720} duration={80} reverse={false} />
      <Ring logos={INNER} size={620} radius={310} duration={60} reverse={true} />
      <div className="relative flex h-[530px] w-[530px] flex-col items-center gap-10">
        <Image
          src="/homepage/hexagon.svg"
          alt="hexagon"
          width={436}
          height={500}
          className="absolute left-0 top-0 mx-auto h-full w-full rotate-180"
        />
        <p className="relative max-w-[400px] text-center text-xl text-primary-blue-1 md:text-2xl">
          Build alongside hundreds of finance, consumer, and gaming
          applications.
        </p>
        <Link
          href="https://portal.arbitrum.io"
          className="group relative inline-flex min-w-[80px] items-center justify-center gap-2 rounded-[40px] border border-primary-blue-1/20 px-5 py-2 text-sm font-semibold text-primary-blue-1 backdrop-blur transition-all"
        >
          Explore the Ecosystem
          <span className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:shadow-button-glow">
            <Image
              src="/arrow_right.svg"
              alt="arrow right"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
