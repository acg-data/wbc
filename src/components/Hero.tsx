import { motion } from 'framer-motion';
import { ChevronDown, Lock, Eye, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [viewerCount, setViewerCount] = useState(7);

  useEffect(() => {
    // Random viewer count that changes occasionally
    const interval = setInterval(() => {
      setViewerCount(prev => Math.max(3, prev + Math.floor(Math.random() * 3) - 1));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="pt-20 pb-6 px-6 text-center max-w-4xl mx-auto relative">
      {/* Floating urgency pill */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-white border border-indigo/10 shadow-lg px-4 py-2 rounded-full"
      >
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-dark">
          <Eye className="w-3.5 h-3.5" />
          {viewerCount} investors viewing
        </div>
        <div className="w-px h-3 bg-indigo/20"></div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo">
          <Clock className="w-3.5 h-3.5" />
          Q2 allocation closing
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-dark mb-6 mt-4"
      >
        <span className="w-1.5 h-1.5 bg-teal rounded-full animate-blink"></span>
        Trade Finance Investment Platform
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight text-indigo font-semibold text-balance mx-auto"
      >
        The asset class<br/>
        <em className="italic text-teal-dark">wall street keeps quiet.</em>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-ink-500 mt-6 max-w-xl mx-auto leading-relaxed"
      >
        8–10% returns. 30–90 day cycles. Asset-backed. Zero market correlation.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-stretch justify-center mx-auto mt-10 max-w-2xl border border-indigo/10 bg-white shadow-sm"
      >
        <div className="flex-1 p-5 md:p-6 text-center border-b md:border-b-0 md:border-r border-indigo/10">
          <div className="font-serif text-3xl md:text-4xl font-bold text-indigo">
            <em className="italic text-teal-dark">8–10%</em>
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Target Return</div>
        </div>
        <div className="flex-1 p-5 md:p-6 text-center border-b md:border-b-0 md:border-r border-indigo/10">
          <div className="font-serif text-3xl md:text-4xl font-bold text-indigo">
            30–<em className="italic text-teal-dark">90</em>d
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Duration</div>
        </div>
        <div className="flex-1 p-5 md:p-6 text-center">
          <div className="font-serif text-3xl md:text-4xl font-bold text-indigo">
            <em className="italic text-teal-dark">Secured</em>
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Every Position</div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="inline-flex items-center gap-2 bg-indigo/5 border border-indigo/10 px-4 py-2 mt-6 text-[10px] font-bold tracking-[0.1em] uppercase text-indigo"
      >
        <Lock className="w-3 h-3" />
        Accredited Investors Only
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col items-center gap-2 mt-10 text-[10px] font-bold tracking-[0.15em] uppercase text-ink-300"
      >
        <span>Watch the overview</span>
        <ChevronDown className="w-5 h-5 text-teal-dark animate-bounce" />
      </motion.div>
    </header>
  );
}