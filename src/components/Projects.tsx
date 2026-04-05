import { motion } from "motion/react";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Industrial Complex A",
    location: "Lyon, France",
    category: "Steel Structure",
    image: "https://images.unsplash.com/photo-1517089534702-8a9b2e11fb33?auto=format&fit=crop&q=80&w=1000",
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
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white overflow-hidden border-t border-brand-dark/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight tracking-tighter uppercase">
              Featured <br />
              <span className="text-brand-red">Projects</span> Showcase.
            </h2>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="border-brand-dark/10 text-brand-dark hover:bg-brand-dark/5 rounded-none px-8 py-7 text-sm uppercase tracking-widest group">
              All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative overflow-hidden ${
                index === 0 ? "lg:col-span-8 lg:row-span-2" : "lg:col-span-4"
              } ${index === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-[600px]" : "aspect-[16/10] lg:aspect-auto lg:h-[284px]"}`}
            >
              <div className="w-full h-full overflow-hidden relative">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />
                
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <div className="bg-brand-red text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest self-start">
                    {project.category}
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div>
                    <h3 className={`font-bold text-white uppercase tracking-tighter leading-none mb-4 ${
                      index === 0 ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
                    }`}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                      <MapPin className="w-3 h-3 text-brand-red" />
                      {project.location}
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
