import { motion } from "motion/react";
import { Building2, HardHat, Hammer, Ruler, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Construction",
    description: "High-quality RCC and steel building construction, delivering durable and aesthetically pleasing structures.",
    icon: Building2,
    color: "bg-brand-red",
  },
  {
    title: "Project & Construction Management",
    description: "We manage the various phases of the project acting as an extension of the Owners organization. We set the strategy and manage the activities from pre-construction through completion.",
    icon: HardHat,
    color: "bg-brand-dark",
  },
  {
    title: "Design Management",
    description: "We manage the Design process for the Owner guiding him in seeking the appropriate Architect and specialty Engineers, ensuring design coordination and efficiency.",
    icon: Ruler,
    color: "bg-brand-red",
  },
  {
    title: "Tender Management",
    description: "We manage the Tender process on behalf of the Owner by short-listing qualified contractors, evaluating bids technically and commercially and making recommendations.",
    icon: Hammer,
    color: "bg-brand-dark",
  },
  {
    title: "Client Representation",
    description: "We represent the Owner and monitor the works of the various parties acting as the point of contact between the Owner and the involved parties.",
    icon: Shield,
    color: "bg-brand-red",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-red/5 blur-[120px] -z-10 rounded-full animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-dark/5 blur-[100px] -z-10 rounded-full animate-pulse delay-1000" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #E31E24 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-black">
                Our Expertise
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] md:leading-[0.9] tracking-tighter uppercase"
            >
              Comprehensive <br className="hidden sm:block" />
              <span className="text-brand-red relative">
                Building
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 h-1 md:h-2 bg-brand-red/20 -z-10"
                />
              </span> Solutions.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-dark/60 text-lg md:text-xl max-w-md font-light leading-relaxed"
          >
            We provide a wide range of specialized services tailored to meet the specific needs of each project, from initial concept to final completion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-brand-light p-10 lg:p-12 border border-brand-dark/5 hover:border-brand-red/20 transition-all duration-500"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="relative z-10">
                <div className={`${service.color} w-16 h-16 flex items-center justify-center mb-10 rounded-none transform group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-brand-red/20`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-brand-dark group-hover:text-white mb-6 uppercase tracking-tight transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-brand-dark/60 group-hover:text-white/60 leading-relaxed font-light transition-colors duration-500 mb-10">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-3 text-brand-red font-black text-[10px] uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform duration-500">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-brand-red/10 group-hover:border-r-brand-red/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
