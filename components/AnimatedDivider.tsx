// components/AnimatedDivider.tsx
"use client";

import React from "react";

export function AnimatedDivider() {
  return (
    <div className="relative h-24 overflow-hidden bg-black">
      <div className="absolute left-1/2 top-1/2 h-px w-[85%] -translate-x-1/2 -translate-y-1/2 bg-white/10" />

      <div className="divider-glow absolute left-0 top-1/2 h-px w-40 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

      <div className="absolute left-1/2 top-1/2 h-20 w-[70%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_60%)] blur-2xl" />

      <div className="absolute left-1/2 top-1/2 h-16 w-[45%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_62%)] blur-3xl" />
    </div>
  );
}