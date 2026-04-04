import Projects from "@/components/Projects";
import { motion } from "motion/react";

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-light">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4">Our Projects</h1>
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            A showcase of our structural engineering excellence and steel fabrication projects.
          </p>
        </motion.div>
        <Projects />
      </div>
    </div>
  );
}
