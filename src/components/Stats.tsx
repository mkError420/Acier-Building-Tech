import { motion, useSpring, useTransform, useInView } from "motion/react";
import { Building2, HardHat, Hammer, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects Completed", value: 500, suffix: "+", icon: Building2 },
  { label: "Expert Engineers", value: 150, suffix: "+", icon: HardHat },
  { label: "Years Experience", value: 25, suffix: "+", icon: Hammer },
  { label: "Awards Won", value: 12, suffix: "", icon: Award },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(spring, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-white border-y border-brand-dark/5">
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
              <div className="w-16 h-16 bg-brand-dark/5 border border-brand-dark/10 flex items-center justify-center rounded-none mb-6 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                <stat.icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-2 tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-brand-dark/40 text-[10px] uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
