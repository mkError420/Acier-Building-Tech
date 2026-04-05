import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[500px] flex items-center bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Contact Us"
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
                Connect With Us
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-dark leading-[0.9] tracking-tighter uppercase mb-8">
              Get In <br />
              <span className="text-brand-red">Touch</span>.
            </h1>
            <p className="text-brand-dark text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Ready to start your next structural masterpiece? Our team of experts is here to discuss your vision and provide the engineering excellence your project deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* Office Details Section */}
      <section className="py-24 bg-white border-y border-brand-dark/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center p-8 bg-brand-light hover:bg-brand-red transition-all duration-500 group">
              <div className="w-16 h-16 bg-white border border-brand-dark/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-lg font-bold text-brand-dark uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Our Office</h4>
              <p className="text-brand-dark/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                Metro Housing, Block-C, Main Road, H#03, Mohammadpur, Dhaka-1207.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-brand-light hover:bg-brand-red transition-all duration-500 group">
              <div className="w-16 h-16 bg-white border border-brand-dark/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-lg font-bold text-brand-dark uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Call Us</h4>
              <p className="text-brand-dark/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                +880 1611-133365<br />
                +880 1711-000000
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-brand-light hover:bg-brand-red transition-all duration-500 group">
              <div className="w-16 h-16 bg-white border border-brand-dark/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-lg font-bold text-brand-dark uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Email Us</h4>
              <p className="text-brand-dark/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                acierbuildingtech@gmail.com<br />
                info@acierbuilding.com
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-brand-light hover:bg-brand-red transition-all duration-500 group">
              <div className="w-16 h-16 bg-white border border-brand-dark/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="text-lg font-bold text-brand-dark uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Working Hours</h4>
              <p className="text-brand-dark/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                Sat - Thu: 9:00 AM - 6:00 PM<br />
                Friday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Map Section */}
      <section className="h-[500px] w-full relative bg-gray-200">
        <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902263155776!2d90.3546!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5f7f0f0f0f%3A0x0!2zMjPCsDQ1JzAzLjIiTiA5MMKwMjEnMTYuNiJF!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-brand-red text-white p-6 shadow-2xl animate-bounce">
            <MapPin className="w-8 h-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
