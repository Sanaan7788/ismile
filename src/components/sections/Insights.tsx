"use client";

import { motion } from "framer-motion";
import content from "../../../docs/CONTENT.json";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Insights() {
  const { insights_heading, insights } = content;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground mb-4 max-w-2xl">
            {insights_heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col h-full group"
            >
              <div className="w-full h-48 bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {insight.title}
              </h3>
              <div className="mt-auto pt-6 border-t border-white/5">
                <Link
                  href="#"
                  className="inline-flex items-center text-muted-foreground font-semibold hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
