import { Building2, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark-gray border-t border-white/5 pt-24 pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-brand-red p-1.5 rounded-sm transform group-hover:rotate-12 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
          <div className="font-logo text-lg md:text-2xl flex items-center gap-1 md:gap-2 font-bold">
            <span className="text-red-500">acieR</span>
            <span className="text-white">building</span>
            <span className="text-red-500">technology</span>
          </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-light mb-8">
              Pioneering the future of industrial and commercial construction with innovative steel solutions and advanced engineering.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-sm text-white/40 hover:text-brand-red hover:border-brand-red transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Shop", href: "/shop" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/40 hover:text-brand-red transition-colors text-sm font-light uppercase tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Our Services</h4>
            <ul className="space-y-4">
              {["Steel Structures", "Engineering", "Management", "Retrofitting", "Compliance"].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-white/40 hover:text-brand-red transition-colors text-sm font-light uppercase tracking-widest">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm leading-relaxed font-light mb-6">
              Subscribe to our newsletter for the latest updates in building technology.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red w-full placeholder:text-white/20"
              />
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-none px-4">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Acier Building Tech. All Rights Reserved.
          </div>
          
       
          
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
