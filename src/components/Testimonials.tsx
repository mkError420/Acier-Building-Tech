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
    <section className="py-24 bg-white overflow-hidden border-t border-brand-dark/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Client Feedback
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight tracking-tighter uppercase">
              What Our <span className="text-brand-red">Clients</span> Say.
            </h2>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 border border-brand-dark/10 flex items-center justify-center rounded-none hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer group">
              <Quote className="w-5 h-5 text-brand-dark group-hover:text-white rotate-180" />
            </div>
            <div className="w-12 h-12 border border-brand-dark/10 flex items-center justify-center rounded-none hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer group">
              <Quote className="w-5 h-5 text-brand-dark group-hover:text-white" />
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
              className="bg-brand-light border border-brand-dark/5 p-10 relative group hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-red fill-brand-red" />
                ))}
              </div>
              
              <p className="text-brand-dark/80 text-lg italic mb-8 leading-relaxed font-light">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="text-brand-dark font-bold uppercase tracking-widest text-sm mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-brand-dark/40 text-xs uppercase tracking-widest font-bold">
                  {testimonial.role}
                </p>
              </div>
              
              <Quote className="absolute top-10 right-10 w-12 h-12 text-brand-dark/5 group-hover:text-brand-red/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
