"use client";

const sections = [
  ["services", "Our Services", "Web design, Google Ads, landing pages, tracking, audits, and lead funnels."],
  ["process", "Our Process", "We build the page, launch the ads, track the leads, and improve the funnel."],
  ["why-us", "Why Us?", "We focus on revenue actions: calls, form fills, booked audits, and quote requests."],
  ["book-audit", "Book Free Audit", "Get a clear breakdown of what is wasting money and what needs fixing."],
  ["quick-audit", "Quick Audit", "Fast website and ads check for businesses that want direction before committing."],
  ["website-demo", "Website Demo", "Request a free personalized demo website before paying anything upfront."],
  ["faq", "FAQ's", "Common questions about pricing, timelines, audits, and demo websites."],
  ["privacy-policy", "Privacy Policy", "How we handle submitted contact information and lead form details."],
];

export function LandingSections() {
  return (
    <div className="bg-black text-white">
      {sections.map(([id, title, text]) => (
        <section
          key={id}
          id={id}
          className="mx-auto min-h-screen max-w-7xl border-t border-white/10 px-8 py-32"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-purple-300">
            ConvertIQ Media
          </p>
          <h2 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            {text}
          </p>
        </section>
      ))}
    </div>
  );
}