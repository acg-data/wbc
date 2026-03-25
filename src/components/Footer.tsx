export function Footer() {
  return (
    <footer className="bg-indigo-dark px-6 md:px-14 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo flex items-center justify-center relative overflow-hidden border border-white/10">
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-teal-dark rounded-full"></div>
          <span className="font-serif text-sm font-bold text-white relative z-10">W</span>
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-sm font-bold text-white/60 tracking-tight leading-none">World Bridge Capital</span>
          <span className="font-sans text-[8px] font-bold tracking-[0.2em] uppercase text-white/30 mt-0.5">Trade Finance Investment Platform</span>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a href="#" className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/30 hover:text-teal transition-colors">Privacy Policy</a>
        <a href="#" className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/30 hover:text-teal transition-colors">Terms of Use</a>
        <a href="#" className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/30 hover:text-teal transition-colors">Regulatory Disclosures</a>
        <a href="mailto:invest@worldbridgecapital.com" className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/30 hover:text-teal transition-colors">invest@worldbridgecapital.com</a>
      </div>
      
      <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/20 text-center md:text-right max-w-xs">
        &copy; 2026 World Bridge Capital &middot; For Accredited Investors Only &middot; Not an offer to sell securities &middot; Past performance does not guarantee future results
      </div>
    </footer>
  );
}