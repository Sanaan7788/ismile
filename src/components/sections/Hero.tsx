"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import content from "../../../docs/CONTENT.json";

export default function Hero() {
  const { hero } = content;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Sleek Neon Background Meshes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" 
        />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNjAgMEwwIDB2NjBoNjBWMHoiLz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-foreground/80 uppercase">Next-Generation AI Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[80px] font-bold text-foreground mb-8 tracking-tighter max-w-5xl mx-auto leading-[1.1]"
        >
          {hero.h1.replace("Software Solutions", "")}
          <span className="text-gradient">Software Solutions</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="/contact"
            className="flex items-center space-x-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all hover:scale-105"
          >
            <span>{hero.cta}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="flex items-center space-x-2 glass px-8 py-4 rounded-full font-semibold text-foreground hover:bg-white/10 transition-all"
          >
            <span>Explore Platform</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
