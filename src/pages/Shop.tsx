import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Check, ArrowRight, X, Send, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const products = [
  {
    id: 1,
    title: "Industrial Steel Kit (Small)",
    price: "$15,000",
    category: "Industrial",
    description: "Complete pre-fabricated steel frame kit for a 2,500 sq. ft. industrial unit. Includes all columns, beams, and bolts.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
    features: ["High-Grade Steel", "Pre-Drilled Holes", "Assembly Manual", "Corrosion Resistant"]
  },
  {
    id: 2,
    title: "Commercial Office Shell Kit",
    price: "$45,000",
    category: "Commercial",
    description: "Modular structural shell for a two-story commercial office space. Designed for rapid on-site assembly.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
    features: ["Modular Design", "Glass-Ready Frames", "Internal Partitioning", "Fire Rated"]
  },
  {
    id: 3,
    title: "Logistics Hub Expansion Kit",
    price: "$28,000",
    category: "Logistics",
    description: "Standardized expansion kit for existing warehouses. Adds 2 additional loading bays with full structural support.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    features: ["Seamless Integration", "Heavy Duty Steel", "Dock Leveler Frames", "Weather Sealed"]
  },
  {
    id: 4,
    title: "Structural Reinforcement Kit",
    price: "$8,500",
    category: "Retrofitting",
    description: "Comprehensive kit for structural retrofitting. Includes carbon fiber wraps and steel jacketing components.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000",
    features: ["Carbon Fiber Tech", "Steel Jacketing", "Epoxy Resin Incl.", "Installation Tools"]
  }
];

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[500px] flex items-center bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000"
            alt="Shop Hero"
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
                Equipment & Materials
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-brand-dark leading-[1.1] md:leading-[0.9] tracking-tighter uppercase mb-8">
              Construction <br className="hidden sm:block" />
              <span className="text-brand-red">Kits</span>.
            </h1>
            <p className="text-brand-dark text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              High-quality, pre-engineered construction kits for industrial, commercial, and logistics projects. Built for durability and rapid deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border border-brand-dark/5 bg-brand-light flex flex-col lg:flex-row overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="lg:w-2/5 relative overflow-hidden aspect-video lg:aspect-auto">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {product.category}
                  </div>
                </div>
                
                <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4 gap-2">
                      <h3 className="text-lg lg:text-xl font-black text-brand-dark uppercase tracking-tight leading-tight">
                        {product.title}
                      </h3>
                      <span className="text-brand-red font-black text-lg lg:text-xl">{product.price}</span>
                    </div>
                    <p className="text-brand-dark/60 text-xs lg:text-sm mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-[9px] lg:text-[10px] uppercase tracking-widest font-bold text-brand-dark/40">
                          <Check className="w-3 h-3 text-brand-red" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={() => handleBooking(product)}
                    className="w-full bg-brand-dark hover:bg-brand-red text-white rounded-none py-5 lg:py-6 uppercase tracking-widest text-[10px] lg:text-xs font-bold transition-colors group px-4"
                  >
                    Book This Kit
                    <ShoppingBag className="ml-2 w-3 h-3 lg:w-4 lg:h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl scrollbar-hide"
            >
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 bg-brand-dark text-white flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>

              {/* Modal Left: Product Preview */}
              <div className="md:w-1/3 bg-brand-light p-6 md:p-8 border-b md:border-b-0 md:border-r border-brand-dark/5">
                <div className="aspect-video md:aspect-square mb-4 md:mb-6 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-bold mb-1 md:mb-2">Booking Item</h4>
                <h3 className="text-lg md:text-xl font-black text-brand-dark uppercase tracking-tight mb-2 md:mb-4">{selectedProduct.title}</h3>
                <div className="text-xl md:text-2xl font-black text-brand-red mb-4 md:mb-6">{selectedProduct.price}</div>
                <div className="hidden md:block space-y-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-brand-dark/40 mt-1" />
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40 leading-relaxed">
                      Once booked, our team will contact you within 24 hours to finalize the material delivery and customization options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Right: Form */}
              <div className="md:w-2/3 p-6 md:p-12">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <div className="h-[1px] md:h-[2px] w-6 md:w-8 bg-brand-red" />
                  <span className="text-brand-red uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold">
                    Reservation Form
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tighter mb-6 md:mb-8">
                  Confirm Your <span className="text-brand-red">Booking</span>.
                </h2>

                <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Full Name</label>
                      <Input className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 h-10 md:h-12" placeholder="Your Name" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Company Name</label>
                      <Input className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 h-10 md:h-12" placeholder="Your Company" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Email Address</label>
                      <Input className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 h-10 md:h-12" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Phone Number</label>
                      <Input className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 h-10 md:h-12" placeholder="+880..." />
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">Customization Requirements</label>
                    <Textarea className="rounded-none border-brand-dark/10 focus:border-brand-red focus:ring-0 min-h-[80px] md:min-h-[100px]" placeholder="Any specific changes to the kit?" />
                  </div>

                  <Button 
                    onClick={() => {
                      console.log("Booking request submitted!");
                      setIsBookingOpen(false);
                    }}
                    className="w-full bg-brand-red hover:bg-brand-dark text-white rounded-none py-6 md:py-8 text-xs md:text-sm uppercase tracking-widest font-black transition-all group"
                  >
                    Submit Booking Request
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Trust Section */}
      <section className="py-24 bg-brand-light border-t border-brand-dark/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xs uppercase tracking-[0.5em] text-brand-dark/40 font-bold mb-12">Secure Transactions & Professional Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
            {/* Mock logos or icons */}
            <div className="flex items-center justify-center font-black text-xl italic tracking-tighter">SECURE PAY</div>
            <div className="flex items-center justify-center font-black text-xl italic tracking-tighter">ENG CERTIFIED</div>
            <div className="flex items-center justify-center font-black text-xl italic tracking-tighter">24/7 SUPPORT</div>
            <div className="flex items-center justify-center font-black text-xl italic tracking-tighter">GLOBAL SHIP</div>
          </div>
        </div>
      </section>
    </div>
  );
}
