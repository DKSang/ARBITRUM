import Image from "next/image";
import Link from "next/link";
import { FOOTER_SOCIALS, NAV_GROUPS } from "@/lib/site-data";

const LEGAL = [
  { label: "PRIVACY POLICY", href: "/privacy" },
  { label: "TERMS OF SERVICE", href: "/tos" },
];

export function Footer() {
  return (
    <footer className="bg-footer uppercase text-white">
      <div className="flex flex-col px-4 pb-12 pt-10">
        <div className="mb-12 max-w-md">
          <p className="mb-4 text-sm text-white/80">
            Subscribe for the latest updates.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              className="min-w-0 flex-1 rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm normal-case text-white placeholder:text-white/40 focus:border-primary-blue-3 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold uppercase text-primary-blue-1 transition-colors hover:bg-primary-blue-3"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
          {NAV_GROUPS.map((col) => (
            <div key={col.label} className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-white/50">
                {col.label}
              </p>
              {col.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-white/80 transition-colors hover:text-primary-blue-3"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-white/50">LEGAL</p>
            {LEGAL.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-white/80 transition-colors hover:text-primary-blue-3"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-white/50">STAY IN TOUCH</p>
            <div className="flex flex-wrap gap-3">
              {FOOTER_SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="transition-all hover:drop-shadow-[0_0_6px_rgba(16,225,255,0.6)]"
                >
                  <Image src={s.icon} alt={s.label} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/all_on_arbitrum.svg"
        alt="All on Arbitrum"
        width={1440}
        height={200}
        className="hidden w-full md:block"
      />
    </footer>
  );
}
