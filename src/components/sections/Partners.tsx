"use client";

import content from "../../../docs/CONTENT.json";

export default function Partners() {
  const { partners, partner_cta } = content;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5" />
      <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-16">
          {partner_cta.heading}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 mb-16 opacity-50 hover:opacity-100 transition-opacity duration-700">
          {partners.map((partner) => (
            <span key={partner} className="text-2xl md:text-3xl font-bold text-foreground/60 hover:text-foreground transition-colors tracking-tight">
              {partner}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {partner_cta.badges.map((badge) => (
            <div key={badge} className="px-5 py-2.5 glass rounded-full text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
