"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/10000000000?text=I%20would%20like%20to%20discuss%20a%20kitchen%20remodel."
      target="_blank"
      rel="noreferrer"
      aria-label="Send kitchen details on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-gold text-ink shadow-[0_18px_40px_rgba(0,0,0,0.34)] transition hover:bg-gold-light lg:bottom-8 lg:right-8"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </motion.a>
  );
}
