import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const allProjects = [
  {
    title: "Industrial Complex A",
    location: "Lyon, France",
    category: "Steel Structure",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Modern Office Tower",
    location: "Paris, France",
    category: "Structural Engineering",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Logistics Hub",
    location: "Marseille, France",
    category: "Construction Management",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Bridge Retrofitting",
    location: "Bordeaux, France",
    category: "Retrofitting",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Smart Warehouse",
    location: "Nantes, France",
    category: "Steel Structure",
    image: "https://images.unsplash.com/photo-1587293855941-91f1fa937d6d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Residential Complex",
    location: "Toulouse, France",
    category: "Construction Management",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  }
];

const categories = ["All", "Steel Structure", "Structural Engineering", "Construction Management", "Retrofitting"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[600px] flex items-center bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=2000"
            alt="Steel Structure Construction"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Our Portfolio
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-brand-dark leading-[1.1] md:leading-[0.9] tracking-tighter uppercase mb-8">
              Structural <br className="hidden sm:block" />
              <span className="text-brand-red">Milestones</span>.
            </h1>
            <p className="text-brand-dark text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Explore our diverse portfolio of successfully completed projects across various sectors, demonstrating our commitment to engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-brand-light border-b border-brand-dark/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-brand-dark/40">
              <Filter className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Filter Projects</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-none border ${
                    activeCategory === category 
                      ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20" 
                      : "bg-transparent border-brand-dark/10 text-brand-dark/60 hover:border-brand-red hover:text-brand-red"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />
                  
                  <div className="absolute top-6 left-6">
                    <div className="bg-brand-red text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest self-start">
                      {project.category}
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
                      <MapPin className="w-3 h-3 text-brand-red" />
                      {project.location}
                    </div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
