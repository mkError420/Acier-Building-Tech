import Services from "@/components/Services";
import { motion } from "motion/react";

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-light">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4">Our Services</h1>
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            Comprehensive structural engineering and steel fabrication solutions for modern construction.
          </p>
        </motion.div>
        <Services />
      </div>
    </div>
  );
}
