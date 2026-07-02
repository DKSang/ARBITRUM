"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TAB_PROJECTS } from "@/lib/site-data";

type TabKey = keyof typeof TAB_PROJECTS;
const TABS: TabKey[] = ["Finance", "Gaming", "Consumer"];

export function EcosystemTabs() {
  const [active, setActive] = useState<TabKey>("Finance");
  const projects = TAB_PROJECTS[active];

  return (
    <div className="text-primary-blue-1">
      <h2 className="mb-6 px-4 text-center text-4xl font-medium leading-extra-tight">
        Plug Into a Thriving Sovereign Nation
      </h2>
      <p className="mx-auto mb-10 max-w-[720px] px-4 text-center text-lg">
        Join a dynamic network of active users, digital culture, and economic
        activity. Arbitrum is the vibrant hub where consumers connect,
        interact, and transact.
      </p>

      <div className="mx-auto flex w-full max-w-[480px] flex-col gap-2 px-4">
        <div className="flex w-full rounded-lg bg-muted p-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              data-state={active === tab ? "active" : "inactive"}
              className={cn(
                "relative flex h-11 flex-1 items-center justify-center rounded-md text-sm font-medium transition-colors",
                active === tab
                  ? "bg-white text-primary-blue-1 shadow-sm"
                  : "text-primary-blue-1/60 hover:text-primary-blue-1",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mb-20 mt-10 grid max-w-[1280px] grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:overflow-hidden">
        {projects.map((p) => (
          <div
            key={p.name}
            className="card mr-4 flex min-h-[320px] w-full flex-col justify-between gap-14 rounded-2xl bg-stone-white p-6"
          >
            <div className="flex justify-between">
              <div className="flex h-12 w-12 overflow-hidden rounded-lg">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <Link
                href={p.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Learn more about ${p.name}`}
                className="group mt-2 flex items-center justify-center gap-2 text-sm font-medium"
              >
                Learn More
                <span className="arrow-wrapper rounded-[4px] transition-all group-hover:shadow-button-glow">
                  <Image
                    src="/arrow_right.svg"
                    alt="arrow right"
                    width={32}
                    height={32}
                    className="inline-block h-8 w-8 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-1 pr-2">
              <p className="text-lg">{p.name}</p>
              <p className="text-sm opacity-60">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center px-4">
        <Link
          href="https://portal.arbitrum.io"
          className="group inline-flex min-w-[80px] items-center justify-center gap-2 rounded-[40px] border border-primary-blue-1/20 px-5 py-2 text-sm font-semibold text-primary-blue-1 backdrop-blur transition-all"
        >
          View all Projects
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
    </div>
  );
}
