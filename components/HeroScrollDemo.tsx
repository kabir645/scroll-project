"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const clientLogos = [
  "/clients/Summit Roofing.png",
  "/clients/Clearflow Plumbing.png",
  "/clients/Multi Logo.png",
];

export function HeroScrollDemo() {
  const repeatedClientLogos = Array(12).fill(clientLogos).flat();

  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      <ContainerScroll>
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <video
            src="/vsl.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.26),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.85))]" />

          <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="mb-5 inline-flex rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-xs font-bold text-purple-100 backdrop-blur">
              Trusted by local businesses across Ontario
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
              Generate More Calls &<br />
              Booked Jobs — With<br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                High-Intent Google Ads
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/75 md:text-base">
              We build your website, launch your ads, and create a system that
              consistently brings in qualified leads.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#book-audit"
                className="rounded-md bg-[#8b45d9] px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(168,85,247,0.32)] transition hover:-translate-y-0.5 hover:bg-purple-500"
              >
                Free Google Ads Audit ↗
              </a>

              <a
                href="#website-demo"
                className="rounded-md bg-[#1600b8] px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Free Website Demo ↗
              </a>

              <a
                href="#quick-audit"
                className="rounded-md bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Get a Quick Audit ↗
              </a>
            </div>

            <div className="mt-12 text-xs font-bold text-white/55">
              Over 50+ businesses trust us
            </div>

            <div className="mt-5 w-full max-w-6xl overflow-hidden border-y border-white/10 py-6">
              <div className="client-marquee-track flex w-max items-center gap-0">
                {repeatedClientLogos.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="client-logo-float flex items-center justify-center px-2"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <img
                      src={src}
                      alt="Client logo"
                      className="h-28 w-auto object-contain opacity-90 transition duration-500 hover:scale-105 hover:opacity-100 md:h-32"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}