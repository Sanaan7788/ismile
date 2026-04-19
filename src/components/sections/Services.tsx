"use client";

import { motion } from "framer-motion";
import content from "../../../docs/CONTENT.json";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const { services } = content;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto lg:mx-0"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group glass-card glass-card-hover rounded-2xl p-8 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground/90 mb-8 leading-relaxed transition-colors flex-grow">
                {service.desc}
              </p>
              <Link
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center text-primary group-hover:text-secondary transition-colors mt-auto font-semibold uppercase tracking-wider text-sm"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
