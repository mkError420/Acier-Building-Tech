import { motion } from "motion/react";
import { Calculator, Search, ShoppingCart, FileText, AlertTriangle } from "lucide-react";

const consultancyServices = [
  { 
    name: "Value Engineering / Design Review", 
    icon: Search,
    description: "Optimizing project value and performance through meticulous design analysis."
  },
  { 
    name: "Cost Analysis and Estimation", 
    icon: Calculator,
    description: "Accurate financial forecasting and budgeting for informed decision-making."
  },
  { 
    name: "Procurement", 
    icon: ShoppingCart,
    description: "Strategic sourcing of high-quality materials and equipment for project success."
  },
  { 
    name: "Claims Management", 
    icon: FileText,
    description: "Expert handling of contractual claims to ensure fair and timely resolutions."
  },
  { 
    name: "Troubleshooting", 
    icon: AlertTriangle,
    description: "Rapidly identifying and resolving project-related problems to keep work on track."
  },
];

export default function ConsultancyServices() {
  return (
    <section className="py-24 bg-brand-light border-y border-brand-dark/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-brand-red" />
            <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
              Specialized Support
            </span>
            <div className="h-[2px] w-12 bg-brand-red" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark uppercase tracking-tighter">
            Consultancy <span className="text-brand-red">Service</span>.
          </h2>
          <p className="text-brand-dark/40 mt-6 max-w-2xl mx-auto font-light">
            Providing expert guidance to Owners, Designers, and Contractors to ensure project excellence and problem resolution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {consultancyServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border border-brand-dark/5 hover:border-brand-red/20 transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 bg-brand-light flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-red transition-colors">
                <service.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-4 group-hover:text-brand-red transition-colors min-h-[40px] flex items-center justify-center">
                {service.name}
              </h3>
              <p className="text-brand-dark/50 text-[10px] leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
