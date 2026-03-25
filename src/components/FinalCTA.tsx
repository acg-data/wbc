import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface FinalCTAProps {
  onQuizClick: () => void;
}

export function FinalCTA({ onQuizClick }: FinalCTAProps) {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-ink-900 py-24 px-6 md:px-14 relative overflow-hidden text-center border-t border-ink-800">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(26, 77, 62, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(26, 77, 62, 0.3) 0%, transparent 60%)'
      }}></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div className="flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-hunter-light mb-6">
            <div className="w-5 h-px bg-hunter-light opacity-70"></div>
            Limited Q2 2026 Allocation
            <div className="w-5 h-px bg-hunter-light opacity-70"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-white font-semibold text-balance mx-auto">
            Your portfolio deserves<br/>returns that <em className="italic text-hunter-light">don't stop</em><br/>when markets do.
          </h2>
          
          <p className="text-[17px] text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">
            Trade finance has been generating consistent, asset-backed returns for institutional investors for decades. World Bridge Capital is the access point for accredited investors who are ready to participate.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="grid grid-cols-2 md:grid-cols-4 border border-white/10 bg-white/5 mt-12 mb-10 divide-x divide-y md:divide-y-0 divide-white/10 backdrop-blur-sm"
        >
          <div className="p-6 text-center">
            <div className="font-serif text-3xl font-bold text-white leading-none"><em className="italic text-hunter-light">8–10%</em></div>
            <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">Target Return</div>
          </div>
          <div className="p-6 text-center">
            <div className="font-serif text-3xl font-bold text-white leading-none">+<em className="italic text-hunter-light">Share</em></div>
            <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">Profit Participation</div>
          </div>
          <div className="p-6 text-center">
            <div className="font-serif text-3xl font-bold text-white leading-none"><em className="italic text-hunter-light">90</em> day</div>
            <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">Max Avg. Duration</div>
          </div>
          <div className="p-6 text-center">
            <div className="font-serif text-3xl font-bold text-white leading-none"><em className="italic text-hunter-light">Q2</em> '26</div>
            <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">Slots Open Now</div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="flex flex-col items-center">
          <button 
            onClick={onQuizClick}
            className="font-sans text-[15px] font-bold tracking-[0.06em] uppercase text-ink-900 bg-hunter-light hover:bg-white px-12 py-5 transition-all duration-300 shadow-[0_0_30px_rgba(38,115,93,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transform hover:-translate-y-1"
          >
            Check My Eligibility &rarr;
          </button>
          <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-white/30 mt-4">
            Takes 90 seconds &middot; No commitment required &middot; Accredited investors only
          </div>
          
          <div className="mt-12 p-5 bg-hunter/10 border border-hunter/20 max-w-lg flex items-start gap-4 text-left">
            <Shield className="w-5 h-5 text-hunter-light shrink-0 mt-0.5" />
            <p className="text-[12px] text-white/50 leading-[1.6]">
              <strong className="text-hunter-light font-semibold">Confidential & No Obligation:</strong> Your information is never shared with third parties. Completing the quiz or application does not constitute an investment commitment. Past results do not guarantee future returns. Not an offer to sell securities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
