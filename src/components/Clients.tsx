import React from "react";
import { motion } from "motion/react";

const clients = [
  "building technology & ideas ltd - bti",
  "Star Kabab & Restaurant",
  "OIM",
  "Tradexcel Ceramics Limited",
  "UNHCR",
  "Work Field Group",
  "Micro trade group",
  "STS Group",
  "SB Group",
  "Union group",
  "DOM-INNO",
  "FRIENDSHIP"
];

export default function Clients() {
  // Duplicate the list for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-brand-light-gray border-t border-brand-dark/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-brand-red" />
          <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
            Trusted By
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
          Our <span className="text-brand-red">Clients</span>.
        </h2>
      </div>

      <div className="relative flex items-center py-4">
        {/* Ticker Container */}
        <motion.div
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="text-brand-dark/40 hover:text-brand-red transition-all duration-500 text-xl md:text-3xl font-black uppercase tracking-tighter px-8 cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-brand-light-gray via-brand-light-gray/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-brand-light-gray via-brand-light-gray/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
