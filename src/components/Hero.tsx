import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, HardHat, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070"
          alt="Construction site"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-orange" />
              <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
                Engineering the Future
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter mb-8 uppercase"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block"
              >
                Building
              </motion.span> <br />
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-brand-orange inline-block"
              >
                Structures
              </motion.span> <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="inline-block"
              >
                That Last.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed font-light"
            >
              Our Commitment Since 2012. Since 2012, acieR Building Technology has been dedicated to delivering high-quality construction services across residential, commercial, and humanitarian sectors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none px-8 py-7 text-sm uppercase tracking-widest group">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white/20 text-dark hover:bg-white/10 rounded-none px-8 py-7 text-sm uppercase tracking-widest">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 aspect-square max-w-md mx-auto overflow-hidden rounded-[2rem] border-8 border-brand-orange/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                alt="Construction Site"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/40 font-bold"></span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-orange to-transparent" />
      </motion.div>
    </section>
  );
}
