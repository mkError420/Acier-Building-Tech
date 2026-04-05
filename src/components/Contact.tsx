import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight tracking-tighter uppercase mb-8">
              Start Your <br />
              <span className="text-brand-red">Project</span> <br />
              With Us.
            </h2>
            
            <p className="text-brand-dark/60 text-lg mb-12 leading-relaxed font-light max-w-md">
              Have a project in mind? Our team of experts is ready to help you bring your vision to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark/5 border border-brand-dark/10 flex items-center justify-center rounded-sm group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                  <Phone className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-brand-dark/50 text-xs uppercase tracking-widest font-bold mb-1">Call Us</div>
                  <div className="text-brand-dark text-xl font-bold">+880 1611-133365</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark/5 border border-brand-dark/10 flex items-center justify-center rounded-sm group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                  <Mail className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-brand-dark/50 text-xs uppercase tracking-widest font-bold mb-1">Email Us</div>
                  <div className="text-brand-dark text-xl font-bold">acierbuildingtech@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark/5 border border-brand-dark/10 flex items-center justify-center rounded-sm group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                  <MapPin className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-brand-dark/50 text-xs uppercase tracking-widest font-bold mb-1">Visit Us</div>
                  <div className="text-brand-dark text-xl font-bold">Metro Housing, Block-C, Main Road, H#03, Mohammadpur, Dhaka-1207.</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-light p-10 md:p-16 rounded-none shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
            <h3 className="text-3xl font-bold text-brand-dark mb-8 uppercase tracking-tight">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Full Name</label>
                  <Input className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 h-12 bg-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Email Address</label>
                  <Input className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 h-12 bg-white" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Subject</label>
                <Input className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 h-12 bg-white" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Message</label>
                <Textarea className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 min-h-[150px] bg-white" placeholder="Tell us about your project..." />
              </div>

              <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white rounded-none py-8 text-sm uppercase tracking-widest group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
