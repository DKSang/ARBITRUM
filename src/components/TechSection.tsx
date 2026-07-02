import Image from "next/image";
import Link from "next/link";

const CUBE_POSITIONS: [number, number][] = [
  [434, 564],
  [434, 410],
  [316, 564],
  [316, 410],
  [316, 256],
  [198, 564],
  [198, 410],
  [198, 256],
  [198, 102],
  [80, 644],
  [80, 490],
  [80, 336],
  [80, 182],
  [80, 23],
];

export function TechSection() {
  return (
    <section className="relative mt-4 overflow-hidden rounded-[1.25rem] bg-yellow-blue px-4 pb-[340px] pt-20 text-primary-blue-1 lg:px-20 lg:py-60">
      <div className="absolute bottom-0 left-0 h-full w-full">
        {CUBE_POSITIONS.map(([x, y], i) => (
          <Image
            key={i}
            src="/homepage/lego_cube.webp"
            alt="cube"
            width={220}
            height={288}
            className="absolute hover:z-[1] hover:mix-blend-soft-light max-sm:hidden"
            style={{ left: x, top: y }}
          />
        ))}
      </div>
      <div className="relative ml-auto max-w-[540px] lg:w-[40%]">
        <p className="mb-2 font-aeonik-fono text-sm uppercase lg:text-base">
          TECHNOLOGY THAT SCALES
        </p>
        <h2 className="text-4xl font-medium leading-none">Build with Confidence</h2>
        <p className="my-6 text-md opacity-80">
          Access clear documentation, robust SDKs, and a global community
          designed to accelerate your build. Features like Stylus (smart
          contracts in Rust, C, and C++) unlock new levels of flexibility and
          performance.
        </p>
        <Link
          href="https://docs.arbitrum.io"
          className="group inline-flex min-w-[80px] items-center justify-center gap-2 rounded-[40px] border border-primary-blue-1/20 px-5 py-2 text-sm font-semibold text-primary-blue-1 backdrop-blur transition-all"
        >
          Explore Documentation
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
