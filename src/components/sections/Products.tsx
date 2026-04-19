"use client";

import { motion } from "framer-motion";
import content from "../../../docs/CONTENT.json";
import { CheckCircle2 } from "lucide-react";

export default function Products() {
  const { products } = content;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proprietary accelerators built to reduce time-to-market for mission-critical deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass p-5 rounded-2xl flex items-center space-x-4 hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">
                {product.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
