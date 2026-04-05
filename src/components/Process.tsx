import { motion } from "motion/react";
import { Search, PenTool, Factory, Construction } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "We begin by understanding your vision, requirements, and project constraints through in-depth discussions.",
    icon: Search,
    step: "01"
  },
  {
    title: "Design & Engineering",
    description: "Our expert engineers create detailed structural designs and 3D models using advanced BIM technology.",
    icon: PenTool,
    step: "02"
  },
  {
    title: "Steel Fabrication",
    description: "High-precision steel components are manufactured in our state-of-the-art facilities to exact specifications.",
    icon: Factory,
    step: "03"
  },
  {
    title: "Construction",
    description: "Our skilled teams manage the on-site assembly and construction, ensuring safety and structural integrity.",
    icon: Construction,
    step: "04"
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-brand-red" />
            <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
              How We Work
            </span>
            <div className="h-[2px] w-12 bg-brand-red" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark uppercase tracking-tighter">
            Our <span className="text-brand-red">Seamless</span> Process.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-[1px] bg-brand-dark/5 -z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 group"
            >
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-brand-light border border-brand-dark/5 flex items-center justify-center rounded-none group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 transform group-hover:rotate-[15deg]">
                  <step.icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-brand-dark/5 group-hover:text-brand-red/10 transition-colors pointer-events-none">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-brand-dark/60 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
