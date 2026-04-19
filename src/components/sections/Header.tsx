"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import content from "../../../docs/CONTENT.json";
import design from "../../../docs/DESIGN_SYSTEM.json";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b-0 py-4 shadow-2xl shadow-black/50" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0 z-50">
            <Image
              src={design.brand.logo_svg_url}
              alt={design.brand.name}
              width={design.brand.logo_dimensions.width}
              height={design.brand.logo_dimensions.height}
              className="object-contain filter brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {content.header.nav.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
                  <span>{item.label}</span>
                  {(item.children || item.groups) && (
                    <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && (item.children || item.groups) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 glass-card rounded-2xl p-4 min-w-[240px] overflow-hidden border border-white/10"
                    >
                      {item.children && (
                        <ul className="space-y-1">
                          {item.children.map((child) => (
                            <li key={child}>
                              <Link
                                href="#"
                                className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-white/5 rounded-lg transition-all"
                              >
                                {child}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.groups && (
                        <div className="flex space-x-8 p-2">
                          {Object.entries(item.groups).map(([groupName, items]) => (
                            <div key={groupName} className="min-w-[200px]">
                              <h4 className="font-semibold text-foreground mb-3 text-sm tracking-wide">
                                {groupName}
                              </h4>
                              <ul className="space-y-1">
                                {items.map((child) => (
                                  <li key={child}>
                                    <Link
                                      href="#"
                                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-white/5 rounded-lg transition-all"
                                    >
                                      {child}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
              <Globe className="w-4 h-4 mr-1" />
              <span>EN</span>
            </div>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]"
            >
              {content.header.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 lg:hidden overflow-y-auto pt-24 pb-8 px-6 border-t border-white/10"
          >
            <div className="flex flex-col space-y-6">
              {content.header.nav.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-4">
                  <div className="font-bold text-lg mb-4 text-foreground">
                    {item.label}
                  </div>
                  {item.children && (
                    <ul className="space-y-3 pl-4 border-l-2 border-primary/20">
                      {item.children.map((child) => (
                        <li key={child}>
                          <Link href="#" className="text-muted-foreground hover:text-primary block text-sm">
                            {child}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.groups && (
                    <div className="space-y-6 pl-4 border-l-2 border-primary/20">
                      {Object.entries(item.groups).map(([groupName, items]) => (
                        <div key={groupName}>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">
                            {groupName}
                          </h4>
                          <ul className="space-y-2">
                            {items.map((child) => (
                              <li key={child}>
                                <Link href="#" className="text-muted-foreground text-sm">
                                  {child}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 flex flex-col space-y-4">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-foreground text-center px-6 py-3 rounded-full font-semibold"
                >
                  {content.header.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
