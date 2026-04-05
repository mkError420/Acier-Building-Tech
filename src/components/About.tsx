import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, Award, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Global Standards",
    description: "Adhering to the highest international building codes and safety standards.",
    icon: Globe,
  },
  {
    title: "Expert Team",
    description: "Our team consists of certified structural engineers and construction experts.",
    icon: Users,
  },
  {
    title: "Award Winning",
    description: "Recognized for excellence in structural design and innovative construction.",
    icon: Award,
  },
];

interface AboutProps {
  showButton?: boolean;
}

export default function About({ showButton = true }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Our Legacy
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold text-brand-dark leading-[0.9] tracking-tighter uppercase mb-10">
              Forging <br />
              <span className="text-brand-red">Strength</span> <br />
              Into Form.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <p className="text-brand-dark/70 text-lg leading-relaxed font-light">
                Acier Building Tech was Established in 2012, acieR building technology has a proud history of service to the construction industry. acieR building technology covers the full spectrum of the market and provides construction service to residential, commercial and industrial clients.
              </p>
              <p className="text-brand-dark/70 text-lg leading-relaxed font-light">
                acieR building technology is an army of construction professionals, tradesmen and support staff. We are one of the largest and most experienced construction team in Bangladesh. Our team has expertise in residential, commercial and industrial construction and the ability to deliver any scale of construction project.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-4 max-w-[200px]"
                >
                  <feature.icon className="w-10 h-10 text-brand-red" />
                  <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-brand-dark/50 text-xs font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {showButton && (
              <Link to="/about">
                <Button className="bg-brand-dark hover:bg-brand-dark/90 text-white rounded-none px-12 py-8 text-sm uppercase tracking-widest group">
                  Full Story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square bg-brand-light relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592dec583206?auto=format&fit=crop&q=80&w=1000"
                alt="Construction Collage"
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-white/20" />
            </div>
            
            {/* Experience badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-brand-red p-12 text-white shadow-2xl transform -rotate-3"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-6xl font-bold mb-2">13+</div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">Years of <br /> Excellence</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
