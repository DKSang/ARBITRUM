import Image from "next/image";
import Link from "next/link";

interface Card {
  alt: string;
  image: string;
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
}

const CARDS: Card[] = [
  {
    alt: "Build an app",
    image: "/homepage/deploy.webp",
    eyebrow: "BUILD AN APP",
    title:
      "Deploy your app on Arbitrum One with Solidity or Stylus (Rust, C, C++). Built for blockchain-native and institutional developers.",
    cta: "Learn About Apps",
    href: "/build-app",
  },
  {
    alt: "Launch a chain",
    image: "/homepage/launch.webp",
    eyebrow: "LAUNCH A CHAIN",
    title:
      "Use the Arbitrum stack to launch your own chain and configure it end-to-end, from custom gas token and governance to access controls and privacy.",
    cta: "Is a Chain Right For You?",
    href: "/launch-chain",
  },
];

export function FlexiblePlatform() {
  return (
    <section className="px-4 py-30 lg:px-10">
      <div className="mb-10 px-4 text-center">
        <p className="mb-2 font-aeonik-fono text-base uppercase text-primary-blue-1">
          A FLEXIBLE PLATFORM
        </p>
        <h2 className="mb-6 text-4xl font-medium leading-extra-tight text-primary-blue-1">
          Build an App, Launch a Chain
        </h2>
        <p className="m-auto max-w-[670px] text-md opacity-60">
          Ship an application or launch a chain using Arbitrum’s suite of fully
          customizable solutions to build your vision without compromise.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1280px] gap-20 lg:grid-cols-2">
        {CARDS.map((card) => (
          <div key={card.eyebrow} className="flex flex-col">
            <Image
              src={card.image}
              alt={card.alt}
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
            <p className="mt-8 font-aeonik-fono text-base uppercase text-primary-blue-1">
              {card.eyebrow}
            </p>
            <p className="my-4 text-2xl font-medium leading-tight text-primary-blue-1">
              {card.title}
            </p>
            <Link
              href={card.href}
              className="group inline-flex min-w-[80px] max-w-max items-center justify-center gap-2 rounded-[40px] border border-primary-blue-1/20 px-5 py-2 text-sm font-semibold text-primary-blue-1 backdrop-blur transition-all"
            >
              {card.cta}
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
        ))}
      </div>
    </section>
  );
}
