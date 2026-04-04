import { motion } from "motion/react";
import { Building2, HardHat, Hammer, Ruler, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Steel Structures",
    description: "High-performance steel fabrication and erection for industrial and commercial buildings.",
    icon: Building2,
    color: "bg-brand-orange",
  },
  {
    title: "Structural Engineering",
    description: "Advanced structural analysis and design for complex architectural projects.",
    icon: Ruler,
    color: "bg-brand-steel",
  },
  {
    title: "Construction Management",
    description: "End-to-end project management ensuring quality, safety, and timely delivery.",
    icon: HardHat,
    color: "bg-brand-orange",
  },
  {
    title: "Renovation & Retrofitting",
    description: "Strengthening and modernizing existing structures with the latest technology.",
    icon: Hammer,
    color: "bg-brand-steel",
  },
  {
    title: "Safety Compliance",
    description: "Rigorous safety standards and compliance auditing for all construction sites.",
    icon: Shield,
    color: "bg-brand-orange",
  },
  {
    title: "Innovative Building Tech",
    description: "Implementing smart building solutions and sustainable construction methods.",
    icon: Zap,
    color: "bg-brand-steel",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-orange" />
              <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight tracking-tighter uppercase">
              Comprehensive <br />
              <span className="text-brand-orange">Building</span> Solutions.
            </h2>
          </div>
          <p className="text-brand-dark/60 text-lg max-w-sm mb-2 font-light">
            We provide a wide range of services tailored to meet the specific needs of each project, from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-brand-dark/5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-r border-b border-brand-dark/5 last:border-r-0 lg:[&:nth-child(3n)]:border-r-0"
            >
              <div className="bg-white p-12 hover:bg-brand-dark transition-all duration-500 h-full">
                <div className={`${service.color} w-16 h-16 flex items-center justify-center mb-10 rounded-none transform group-hover:rotate-[15deg] transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-dark group-hover:text-white mb-6 uppercase tracking-tight transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-dark/60 group-hover:text-white/60 leading-relaxed font-light transition-colors">
                  {service.description}
                </p>
                
                <div className="mt-10 flex items-center gap-3 text-brand-orange font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Explore Service
                  <div className="h-[1px] w-10 bg-brand-orange" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
