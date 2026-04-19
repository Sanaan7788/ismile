"use client";

import { useState } from "react";
import content from "../../../docs/CONTENT.json";
import { motion } from "framer-motion";

export default function Contact() {
  const { contact_form } = content;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <div className="mb-10 text-center relative z-10">
            <h2 className="text-3xl md:text-[40px] font-bold text-foreground mb-4">
              {contact_form.heading}
            </h2>
            <p className="text-muted-foreground">Get in touch with our team of experts today.</p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 relative z-10"
            >
              <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-[0_0_30px_rgba(0,229,255,0.2)]">✓</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your message has been received. We will be in touch shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">{contact_form.fields[0]}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">{contact_form.fields[1]}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">{contact_form.fields[2]}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">{contact_form.fields[3]}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">{contact_form.fields[4]}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">{contact_form.fields[5]}</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all appearance-none">
                    <option value="" className="bg-background text-foreground">Please select</option>
                    {contact_form.services_options.map(opt => (
                      <option key={opt} value={opt} className="bg-background text-foreground">{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">{contact_form.fields[6]}</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-70 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              >
                {loading ? "Submitting..." : contact_form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
