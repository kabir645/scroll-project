"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black px-4 py-28 text-white md:px-8 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_30%)]" />

      <ContainerScroll
        titleComponent={
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              ConvertIQ Media
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-7xl">
              We build websites that turn visitors into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                booked calls.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Get a free personalized demo website built for your business before
              you pay anything upfront.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#demo"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.45)] transition hover:bg-blue-500"
              >
                Get My Free Demo
              </a>

              <a
                href="#video"
                className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Watch the VSL
              </a>
            </div>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Premium website design preview"
          height={720}
          width={1400}
          className="h-full w-full rounded-2xl object-cover object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </section>
  );
}