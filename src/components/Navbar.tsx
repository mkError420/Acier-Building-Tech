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
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage ? "bg-brand-baby-blue/95 backdrop-blur-md border-b border-brand-dark/10 top-0" : "bg-transparent top-0 md:top-10"
      }`}
    >
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled || !isHomePage ? "py-3" : "py-6"}`}>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-1.5 rounded-sm transform group-hover:rotate-12 transition-transform">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div className="font-logo text-lg md:text-2xl flex items-center gap-1 md:gap-2 font-bold">
            <span className="text-red-500">acieR</span>
            <span className="text-brand-dark">building</span>
            <span className="text-red-500">technology</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] xl:text-sm font-medium uppercase tracking-widest hover:text-brand-red transition-colors relative group/nav ${
                location.pathname === link.href 
                  ? "text-brand-red" 
                  : "text-brand-dark/90"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-red transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover/nav:w-full"}`} />
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-none uppercase tracking-widest text-[10px] xl:text-xs px-4 xl:px-6">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`lg:hidden p-2 transition-colors duration-500 text-brand-dark`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-baby-blue border-b border-brand-dark/10 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-medium uppercase tracking-widest flex items-center justify-between group transition-colors ${
                    location.pathname === link.href ? "text-brand-red" : "text-brand-dark/80"
                  }`}
                >
                  {link.name}
                  <ChevronRight className={`w-4 h-4 transition-all ${location.pathname === link.href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"} text-brand-red`} />
                </Link>
              ))}
              <Link to="/contact">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-none uppercase tracking-widest mt-4 w-full">
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
