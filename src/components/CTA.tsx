import { motion } from "motion/react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 bg-brand-red relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -z-0 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-brand-dark/5 -z-0 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-white" />
              <span className="text-white uppercase tracking-[0.3em] text-xs font-bold">
                Ready to Build?
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight tracking-tighter uppercase mb-8">
              Let's <span className="text-brand-dark">Construct</span> <br />
              Your Vision Together.
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
              Our team of expert engineers and construction managers is ready to help you bring your next project to life.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-none border border-white/20">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-1">Call Us</div>
                  <div className="text-white font-bold">+880 1819-608497</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-none border border-white/20">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-1">Email Us</div>
                  <div className="text-white font-bold">acierbuildingtech@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/contact">
              <Button className="bg-brand-dark hover:bg-brand-dark/90 text-white rounded-none px-12 py-10 text-lg uppercase tracking-widest group shadow-2xl">
                Get a Quote
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
