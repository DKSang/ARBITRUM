import Link from "next/link";
import Image from "next/image";

export function ReadyToBuild() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <h2 className="text-center text-4xl font-medium leading-none text-primary-blue-1">
        Ready to start <span className="hidden sm:inline">building </span>
        on Arbitrum?
      </h2>
      <Link
        href="/contact"
        className="group inline-flex min-w-[80px] items-center justify-center gap-2 rounded-[40px] border border-primary-blue-1/20 px-5 py-2 text-sm font-semibold text-primary-blue-1 backdrop-blur transition-all"
      >
        Get in Touch
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
  );
}
