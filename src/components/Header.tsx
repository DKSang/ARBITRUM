"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HEADER_SOCIALS, NAV_GROUPS } from "@/lib/site-data";

const LETTERS = [
  { c: "a", src: "/letter_a.svg" },
  { c: "r", src: "/letter_r.svg" },
  { c: "b", src: "/letter_b.svg" },
  { c: "i", src: "/letter_i.svg" },
  { c: "t", src: "/letter_t.svg" },
  { c: "r", src: "/letter_r.svg" },
  { c: "u", src: "/letter_u.svg" },
  { c: "m", src: "/letter_m.svg" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "header sticky top-0 z-20 flex flex-col bg-white px-5 py-4 text-sm font-medium transition-[background,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] lg:flex-row lg:bg-transparent",
        scrolled && "lg:bg-white lg:shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
      )}
    >
      <button
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        className="absolute right-5 top-5 z-10 flex h-6 w-6 items-center justify-center lg:hidden"
      >
        <span
          className={cn(
            "absolute left-0 h-px w-6 bg-black transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            mobileOpen ? "top-3 translate-y-0 rotate-45" : "top-[11px]",
          )}
        />
        <span
          className={cn(
            "absolute left-0 h-px w-6 bg-black transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            mobileOpen ? "top-3 -rotate-45" : "top-[19px]",
          )}
        />
      </button>

      <Link
        href="/"
        className="group relative flex w-max items-center"
        aria-label="Arbitrum home"
      >
        <Image
          src="/brandkit/icon_white.svg"
          alt="Arbitrum Logo"
          width={28}
          height={32}
          className="invert transition-opacity duration-300 group-hover:opacity-0"
        />
        <span className="absolute top-[3px] flex gap-2">
          <Image
            src="/assets/arbitrum/logo_color.svg"
            alt="Arbitrum Logo"
            width={28}
            height={32}
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="relative flex shrink-0 gap-[0.7px]">
            {LETTERS.map((l, i) => (
              <Image
                key={`${l.c}-${i}`}
                src={l.src}
                alt={l.c}
                width={l.c === "a" ? 12 : l.c === "b" ? 10 : l.c === "i" ? 3 : l.c === "m" ? 14 : 11}
                height={32}
                className="h-8 w-auto"
              />
            ))}
          </span>
        </span>
      </Link>

      <div
        className={cn(
          "absolute left-0 top-[62px] hidden h-[calc(100vh-62px)] w-full flex-col justify-between overflow-auto bg-white px-4 pb-4 lg:static lg:flex lg:h-auto lg:flex-row lg:overflow-visible lg:bg-transparent lg:px-0 lg:pb-0",
          mobileOpen && "flex",
        )}
      >
        <nav className="flex w-full justify-center lg:z-10" aria-label="Main">
          <ul className="flex flex-1 list-none flex-col justify-stretch lg:flex-row lg:items-center lg:justify-center">
            {NAV_GROUPS.map((group) => (
              <li key={group.label} className="relative">
                <button
                  onClick={() =>
                    setOpen((cur) => (cur === group.label ? null : group.label))
                  }
                  aria-expanded={open === group.label}
                  className="flex w-full items-center justify-between px-4 py-2 uppercase tracking-wide transition-colors hover:text-primary-blue-1 lg:px-2"
                >
                  {group.label}
                  <span
                    className={cn(
                      "ml-1 inline-block transition-transform duration-300",
                      open === group.label ? "rotate-180" : "",
                    )}
                  >
                    ▾
                  </span>
                </button>
                {open === group.label && (
                  <div className="static block w-full lg:absolute lg:left-1/2 lg:top-[38px] lg:z-30 lg:-translate-x-1/2">
                    <ul className="flex flex-col gap-1 bg-white py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] lg:w-max lg:rounded-lg lg:px-2">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block whitespace-nowrap px-3 py-1.5 uppercase text-primary-blue-1/70 transition-colors hover:text-primary-blue-1"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-6 mt-auto flex items-center gap-3 px-1 lg:mb-0 lg:mt-0">
          {HEADER_SOCIALS.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="invert transition-all hover:drop-shadow-[0_0_6px_rgba(16,225,255,0.6)]"
            >
              <Image src={s.icon} alt={s.label} width={18} height={18} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
