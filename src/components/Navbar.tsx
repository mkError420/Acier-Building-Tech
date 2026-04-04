import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Building2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage ? "bg-brand-dark/95 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-orange p-1.5 rounded-sm transform group-hover:rotate-12 transition-transform">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div className="font-logo text-2xl flex items-center gap-2 font-bold">
            <span className="text-red-500">acieR</span>
            <span className="text-white">building</span>
            <span className="text-red-500">technology</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium uppercase tracking-widest hover:text-brand-orange transition-colors ${
                location.pathname === link.href ? "text-brand-orange" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none uppercase tracking-widest text-xs px-6">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 text-white`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-medium uppercase tracking-widest flex items-center justify-between group transition-colors ${
                    location.pathname === link.href ? "text-brand-orange" : "text-white/80"
                  }`}
                >
                  {link.name}
                  <ChevronRight className={`w-4 h-4 transition-all ${location.pathname === link.href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"} text-brand-orange`} />
                </Link>
              ))}
              <Link to="/contact">
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none uppercase tracking-widest mt-4 w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
