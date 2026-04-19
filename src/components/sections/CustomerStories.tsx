"use client";

import { motion } from "framer-motion";
import content from "../../../docs/CONTENT.json";
import { Quote } from "lucide-react";

export default function CustomerStories() {
  const { customer_stories } = content;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground">
            Customer Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customer_stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl relative group cursor-pointer"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              <h3 className="text-xl font-semibold leading-relaxed mb-8 text-foreground/90 group-hover:text-foreground transition-colors mt-4">
                "{story.title}"
              </h3>
              <div className="mt-auto flex items-center space-x-2 text-primary font-semibold text-sm uppercase tracking-wider">
                <span>Read Story</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
