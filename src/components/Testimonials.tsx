import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Pierre Dupont",
    role: "CEO, Industrial Group A",
    content: "Acier Building Tech delivered our industrial complex ahead of schedule and with exceptional structural integrity. Their engineering team is truly world-class.",
    rating: 5
  },
  {
    name: "Marie Lefebvre",
    role: "Project Manager, Urban Dev",
    content: "The steel fabrication precision was impressive. They handled the complex architectural designs with ease and provided innovative solutions for our office tower.",
    rating: 5
  },
  {
    name: "Marc Bernard",
    role: "Director, Logistics Hub",
    content: "Their construction management was seamless. From the initial consultation to the final site assembly, the communication and quality were outstanding.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-orange" />
              <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
                Client Feedback
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter uppercase">
              What Our <span className="text-brand-orange">Clients</span> Say.
            </h2>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-none hover:bg-brand-orange hover:border-brand-orange transition-all cursor-pointer">
              <Quote className="w-5 h-5 text-white rotate-180" />
            </div>
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-none hover:bg-brand-orange hover:border-brand-orange transition-all cursor-pointer">
              <Quote className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-10 relative group hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-orange fill-brand-orange" />
                ))}
              </div>
              
              <p className="text-white/80 text-lg italic mb-8 leading-relaxed font-light">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
                  {testimonial.role}
                </p>
              </div>
              
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 group-hover:text-brand-orange/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
