import { motion } from 'framer-motion';
import { ChevronDown, Lock } from 'lucide-react';

export function Hero() {
  return (
    <header className="pt-24 pb-8 px-6 text-center max-w-5xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-hunter mb-8"
      >
        <span className="w-1.5 h-1.5 bg-hunter rounded-full animate-blink"></span>
        The Trade Finance Investment Platform for Accredited Investors
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold text-balance mx-auto"
      >
        A <em className="italic text-hunter font-medium">waitlisted</em> asset class.<br />
        A <em className="italic text-hunter font-medium">30-day</em> cycle.<br />
        A return stream most portfolios<br />
        have <span className="relative inline-block text-ink-400">never accessed.</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-stretch justify-center mx-auto mt-12 max-w-3xl border border-ink-200 bg-white shadow-sm"
      >
        <div className="flex-1 p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-ink-200 relative">
          <div className="font-serif text-4xl md:text-5xl font-bold text-ink-900 leading-none">
            <em className="italic text-hunter">8–10%</em>
          </div>
          <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-ink-400 mt-2">Target Annual Return</div>
          <div className="text-[11px] font-semibold text-hunter mt-1">+ Profit Sharing Upside</div>
        </div>
        <div className="flex-1 p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-ink-200 relative">
          <div className="font-serif text-4xl md:text-5xl font-bold text-ink-900 leading-none">
            30–<em className="italic text-hunter">90</em> d
          </div>
          <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-ink-400 mt-2">Avg. Position Duration</div>
          <div className="text-[11px] font-semibold text-hunter mt-1">No decade-long lockups</div>
        </div>
        <div className="flex-1 p-6 md:p-8 text-center relative">
          <div className="font-serif text-4xl md:text-5xl font-bold text-ink-900 leading-none">
            Asset-<em className="italic text-hunter">Backed</em>
          </div>
          <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-ink-400 mt-2">Every Position Secured</div>
          <div className="text-[11px] font-semibold text-hunter mt-1">Invoice-verified receivables</div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="inline-flex items-center gap-2 bg-ink-100/30 border border-ink-200/50 px-5 py-2.5 mt-8 text-[11px] font-bold tracking-[0.1em] uppercase text-ink-800"
      >
        <Lock className="w-3.5 h-3.5" />
        For Accredited Investors Only &middot; SEC Regulation D
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col items-center gap-2 mt-12 text-[10px] font-bold tracking-[0.15em] uppercase text-ink-400"
      >
        <span>Watch the overview first</span>
        <ChevronDown className="w-5 h-5 text-hunter animate-bounce" />
      </motion.div>
    </header>
  );
}
