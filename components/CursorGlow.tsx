// components/CursorGlow.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-64 w-64 rounded-full bg-sky-400/10 blur-3xl"
      animate={{ x: pos.x - 128, y: pos.y - 128 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    />
  );
}