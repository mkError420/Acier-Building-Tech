import { Phone, Mail } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-brand-baby-blue border-b border-brand-dark/5 py-2 hidden md:block">
      <div className="container mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold">
        <div className="flex items-center gap-6">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-brand-dark/60 hover:text-brand-red transition-colors group">
            <Phone className="w-3.5 h-3.5 text-brand-red group-hover:scale-110 transition-transform" />
            <span>+880 1819-608497</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:info@acier.com" className="flex items-center gap-2 text-brand-dark/60 hover:text-brand-red transition-colors group">
            <Mail className="w-3.5 h-3.5 text-brand-red group-hover:scale-110 transition-transform" />
            <span>acierbuildingtech@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
