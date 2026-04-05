import Services from "@/components/Services";
import ConsultancyServices from "@/components/ConsultancyServices";
import OrgChart from "@/components/OrgChart";
import CTA from "@/components/CTA";
import { motion } from "motion/react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[600px] flex items-center bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000"
            alt="Industrial Site"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Our Expertise
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-brand-dark leading-[1.1] md:leading-[0.9] tracking-tighter uppercase mb-8">
              Comprehensive <br className="hidden sm:block" />
              <span className="text-brand-red">Building</span> Solutions.
            </h1>
            <p className="text-brand-dark text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              From construction and design management to specialized consultancy, we provide end-to-end expertise for your infrastructure projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <Services />

      {/* Consultancy Services Section */}
      <ConsultancyServices />

      {/* Organization Chart Section */}
      <OrgChart />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

