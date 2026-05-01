"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    label: "01",
    title: "We diagnose the funnel",
    text: "We look at your website, ads, offer, tracking, and lead flow to find what is blocking booked jobs.",
  },
  {
    label: "02",
    title: "We rebuild the landing page",
    text: "We create a high-converting page built around calls, quote requests, trust, and speed.",
  },
  {
    label: "03",
    title: "We launch high-intent ads",
    text: "We target people already searching for your services and send them to a conversion-focused page.",
  },
  {
    label: "04",
    title: "We track and optimize",
    text: "We measure calls, forms, audits, and bookings so we can improve what actually creates revenue.",
  },
];

export function StickyProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      steps.length - 1,
      Math.floor(latest * steps.length)
    );

    setActiveStep(index);
  });

  const step = steps[activeStep];

  return (
    <section
      id="process"
      ref={ref}
      className="relative h-[400vh] bg-black text-white"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-purple-300">
              Our Process
            </p>

            <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
              A system built for booked calls.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Scroll through the process we use to turn traffic into qualified leads.
            </p>
          </div>

          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_120px_rgba(79,70,229,0.22)] backdrop-blur-xl"
          >
            <div className="mb-6 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-bold text-purple-200">
              {step.label}
            </div>

            <h3 className="text-4xl font-bold tracking-tight">
              {step.title}
            </h3>

            <p className="mt-5 text-lg leading-8 text-white/60">
              {step.text}
            </p>

            <div className="mt-10 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-500"
              />
            </div>

            <div className="mt-5 text-sm font-semibold text-white/40">
              Step {activeStep + 1} of {steps.length}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}