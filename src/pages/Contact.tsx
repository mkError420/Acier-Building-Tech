import Contact from "@/components/Contact";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-light">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4">Contact Us</h1>
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            Get in touch with us for your next project.
          </p>
        </motion.div>
        <Contact />
      </div>
    </div>
  );
}
