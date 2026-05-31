"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Transformations", "#transformations"],
  ["Process", "#process"],
  ["Pricing", "#pricing"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cream/10 bg-charcoal/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="LuxeCraft Kitchen Studio home"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-gold/35 bg-gold/10 text-sm font-semibold text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            LC
          </span>
          <span className="max-w-[170px] text-sm font-semibold leading-5 text-cream sm:max-w-none sm:text-base">
            LuxeCraft Kitchen Studio
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-cream/70 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+10000000000" className="text-sm text-cream/70 hover:text-cream">
            Call Now
          </a>
          <a href="#contact" className="luxury-button">
            Book Free Design Call
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-cream/15 bg-cream/5 text-cream lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-cream/10 bg-charcoal/95 px-4 pb-5 pt-3 backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Mobile primary">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-[8px] px-3 py-3 text-base text-cream/80 transition",
                    "hover:bg-cream/[0.07] hover:text-gold",
                  )}
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex h-12 items-center justify-center gap-2 rounded-[8px] bg-gold px-5 text-sm font-semibold text-ink transition hover:bg-gold-light active:translate-y-px"
            >
              Book Free Design Call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
