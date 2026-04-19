"use client";

import { motion } from "framer-motion";
import content from "../../../docs/CONTENT.json";
import { Lightbulb, PlayCircle, BookOpen } from "lucide-react";

export default function WhatWeThink() {
  const { what_we_think } = content;
  
  const icons = [BookOpen, PlayCircle, Lightbulb];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground">
            {what_we_think.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {what_we_think.tiles.map((tile, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:bg-white/5 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {tile.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tile.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
