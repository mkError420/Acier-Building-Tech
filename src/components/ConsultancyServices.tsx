import { motion } from "motion/react";

const consultancyServices = [
  { name: "Value Engineering", logo: "https://thevalueengineering.com/assets/logo-AP6BmeKw.png" },
  { name: "Cost Analysis", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
  { name: "Procurement", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
  { name: "Claims Management", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
  { name: "Troubleshooting", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
];

export default function ConsultancyServices() {
  return (
    <section className="py-20 bg-brand-light border-y border-brand-dark/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-brand-orange" />
            <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
              Our Expertise
            </span>
            <div className="h-[2px] w-12 bg-brand-orange" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark uppercase tracking-tighter">
            Consultancy <span className="text-brand-orange">Services</span>.
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {consultancyServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="text-lg md:text-xl font-bold text-brand-dark uppercase tracking-widest group-hover:text-brand-orange transition-colors">
                {service.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
