import Image from "next/image";
import { CASE_STUDIES } from "@/lib/site-data";

export function CaseStudies() {
  const cards = [...CASE_STUDIES, ...CASE_STUDIES];
  return (
    <section className="bg-stone-white py-30">
      <div className="mb-10 px-4 text-center">
        <p className="mb-2 font-aeonik-fono text-base uppercase text-primary-blue-1">
          CASE STUDIES
        </p>
        <h2 className="mb-6 text-4xl font-medium leading-extra-tight text-primary-blue-1">
          Proven in Production, Trusted at Scale
        </h2>
        <p className="m-auto max-w-[670px] text-md opacity-60">
          Discover why the world’s most innovative companies are building on
          Arbitrum.
        </p>
      </div>
      <div className="marquee-container relative w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-6 px-3">
          {cards.map((c, i) => (
            <a
              key={`${c.title}-${i}`}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="group relative mx-3 block h-[280px] w-[315px] shrink-0 overflow-hidden rounded-2xl border border-transparent bg-white transition-[border-color,box-shadow] hover:border-black/40 hover:shadow-card-hover"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="315px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-0 left-0 p-5 text-base font-medium text-white">
                {c.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
