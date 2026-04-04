import { motion } from "motion/react";
import { Building2, HardHat, Hammer, Award } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "500+", icon: Building2 },
  { label: "Expert Engineers", value: "150+", icon: HardHat },
  { label: "Years Experience", value: "25+", icon: Hammer },
  { label: "Awards Won", value: "12", icon: Award },
];

export default function Stats() {
  return (
    <section className="py-20 bg-brand-dark border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-none mb-6 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500">
                <stat.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
