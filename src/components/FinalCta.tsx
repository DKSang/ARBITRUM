import Link from "next/link";
import Image from "next/image";
import { Cube3D } from "@/components/Cube3D";

const CTAS = [
  { label: "Start Building", href: "https://docs.arbitrum.io" },
  { label: "Get in Touch", href: "/contact" },
  { label: "Join our Community", href: "https://discord.gg/arbitrum" },
];

export function FinalCta() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 bg-stone-white px-4 py-[120px] lg:flex-row lg:px-20">
      <Cube3D />

      <div className="flex max-w-[1000px] grow flex-col gap-6">
        {CTAS.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className="group flex w-full items-center justify-center gap-3 rounded-[40px] border border-primary-blue-1/20 px-4 py-10 text-center text-4xl font-medium text-black transition-all hover:bg-yellow"
          >
            {cta.label}
            <span className="arrow hidden opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 lg:block">
              <Image
                src="/arrow_right.svg"
                alt="arrow right"
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
