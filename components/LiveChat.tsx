"use client";

import Script from "next/script";

export function LiveChat() {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
        async
      />

      <div
        className="elfsight-app-2b05aba1-14d2-4164-a9d2-4a444d6de305"
        data-elfsight-app-lazy
      />
    </>
  );
}