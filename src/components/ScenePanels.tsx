"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Panel {
  alt: string;
  image: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  cta: string;
  href: string;
}

const PANELS: Panel[] = [
  {
    alt: "Finance",
    image: "/homepage/hero/scene_3_cube_face.webp",
    titleTop: "Where Finance",
    titleBottom: "Moves Onchain, at Scale",
    description:
      "Arbitrum is your enterprise-grade infrastructure for global finance. See how liquidity, world-class developer talent, and Ethereum's security can drive impact for your company.",
    cta: "Learn about Arbitrum Finance",
    href: "/solutions/finance",
  },
  {
    alt: "Consumer",
    image: "/homepage/hero/scene_4_cube_face.webp",
    titleTop: "Where Big Ideas",
    titleBottom: "Meet Mass Adoption",
    description:
      "Building a consumer app that millions will love requires a network that feels invisible. Arbitrum provides the near-instant speed, low costs, and scale to make your onchain experience feel as smooth and intuitive as the best Web2 apps.",
    cta: "Learn about Arbitrum Consumer",
    href: "/solutions/consumer",
  },
  {
    alt: "Games",
    image: "/homepage/hero/scene_5_cube_face.webp",
    titleTop: "Build Games",
    titleBottom: "Without Limits",
    description:
      "Arbitrum enables you to create the games you've always dreamed of with near-instant transaction speeds, scale, and a seamless experience for your players.",
    cta: "Learn about Arbitrum Gaming",
    href: "/solutions/gaming",
  },
];

function TiltCard({ panel }: { panel: Panel }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "rotateY(0) rotateX(0)";
  };

  return (
    <div className="hero-card-wrapper h-full">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="hero-card flex h-full max-w-[360px] flex-col gap-10 rounded-[12px] bg-white/70 p-4"
      >
        <Image
          src={panel.image}
          alt={panel.alt}
          width={292}
          height={292}
          className="rounded-lg h-[327px] w-full max-w-full object-fill"
        />
        <div className="flex grow flex-col justify-between gap-4">
          <p className="text-4xl font-bold leading-none font-screamer text-black">
            {panel.titleTop}
            <br />
            {panel.titleBottom}
          </p>
          <p className="text-sm opacity-80 text-black">{panel.description}</p>
          <Link
            href={panel.href}
            className={cn(
              "group inline-flex min-w-[80px] max-w-max items-center justify-center gap-2 rounded-[40px] border border-black/10 px-5 py-2 text-sm font-semibold text-black backdrop-blur transition-all",
            )}
          >
            {panel.cta}
            <span className="arrow h-6 w-6 transition-all group-hover:translate-x-1 group-hover:shadow-button-glow">
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
      </div>
    </div>
  );
}

export function ScenePanels() {
  return (
    <div className="relative z-[1] mx-auto grid items-stretch justify-center gap-16 px-4 py-16 md:max-w-max md:grid-cols-3 md:items-center md:py-30 md:pb-60 lg:gap-[6vw]">
      {PANELS.map((p) => (
        <TiltCard key={p.alt} panel={p} />
      ))}
    </div>
  );
}
