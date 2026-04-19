"use client";

import { motion } from "framer-motion";
import content from "../../../docs/CONTENT.json";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ValueProp() {
  const { value_prop } = content;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide">
              Why iSmile
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-foreground mb-6 leading-tight">
              {value_prop.h2.replace("AI-Powered Innovation", "")}
              <span className="text-gradient">AI-Powered Innovation</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 glass p-8 md:p-10 rounded-3xl"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {value_prop.body}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-primary font-bold hover:text-primary-foreground hover:bg-primary px-6 py-3 rounded-full transition-all group border border-primary/20"
            >
              <span>{value_prop.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-[600px] h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
    </section>
  );
}
