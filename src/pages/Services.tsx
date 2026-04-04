import Services from "@/components/Services";
import ConsultancyServices from "@/components/ConsultancyServices";
import CTA from "@/components/CTA";
import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Clock, Zap, Target, Award } from "lucide-react";

const whyChooseUs = [
  {
    title: "Precision Engineering",
    description: "We use advanced BIM and CAD software to ensure every structural component is engineered to exact specifications.",
    icon: Target
  },
  {
    title: "Safety First",
    description: "Our construction sites adhere to the strictest safety protocols, ensuring a zero-accident environment.",
    icon: ShieldCheck
  },
  {
    title: "Timely Delivery",
    description: "We understand the importance of project timelines and use efficient project management to deliver on time.",
    icon: Clock
  },
  {
    title: "Innovative Solutions",
    description: "We stay ahead of the curve by implementing the latest building technologies and sustainable methods.",
    icon: Zap
  },
  {
    title: "Certified Quality",
    description: "All our materials and processes are certified to meet international building standards and codes.",
    icon: Award
  },
  {
    title: "Expert Support",
    description: "Our team of engineers and consultants provides end-to-end support throughout the project lifecycle.",
    icon: CheckCircle2
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative pt-48 pb-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark to-brand-dark" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-brand-orange" />
              <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
                Our Expertise
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter uppercase mb-8">
              Comprehensive <br />
              <span className="text-brand-orange">Building</span> Solutions.
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
              From structural engineering to steel fabrication and construction management, we provide end-to-end services for industrial, commercial, and residential projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-orange" />
              <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
                The Acier Advantage
              </span>
              <div className="h-[2px] w-12 bg-brand-orange" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark uppercase tracking-tighter">
              Why <span className="text-brand-orange">Choose</span> Us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 border border-brand-dark/5 hover:border-brand-orange/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-light flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-brand-dark/60 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Services Section */}
      <ConsultancyServices />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
