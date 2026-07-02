import Link from "next/link";
import Image from "next/image";
import { STATS } from "@/lib/site-data";

export function Stats() {
  return (
    <section className="relative bg-stone-white px-4 py-30 text-center text-primary-blue-1">
      <p className="text-4xl font-medium leading-none">The Onchain Standard</p>
      <p className="mx-auto my-6 max-w-[720px] text-lg opacity-80">
        Arbitrum consistently leads the industry in key metrics, reflecting the
        maturity, reliability, and adoption of the platform. Join the ecosystem
        where innovation meets proven performance.
      </p>
      <div className="mx-auto grid max-w-screen-2xl grid-rows-3 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-6 text-md lg:p-10">
            <div className="h-px w-full bg-primary-blue-1/10" />
            <div>
              <p className="text-2xl font-medium leading-extra-tight text-primary-blue-1 md:h-[90px] xl:h-[5vw]">
                <span className="text-shadow-blue font-semibold">
                  {stat.value}
                </span>{" "}
                {stat.label}
              </p>
              <div className="flex items-center justify-center gap-1">
                <Link
                  href={stat.sourceUrl}
                  className="text-sm text-primary-blue-1/70 underline hover:text-primary-blue-1/50"
                >
                  Source
                </Link>
              </div>
            </div>
            <p className="text-lg opacity-80">{stat.description}</p>
          </div>
        ))}
      </div>
      <Link
        href="https://dune.com/entropy_advisors/arbitrum-one-network-overview"
        className="group mt-10 inline-flex min-w-[80px] items-center justify-center gap-2 rounded-[40px] border border-transparent px-5 py-2 text-sm font-semibold text-primary-blue-1 backdrop-blur transition-all"
      >
        View Live Data
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
    </section>
  );
}
