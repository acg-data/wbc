import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface VSLProps {
  onQuizClick: () => void;
}

export function VSL({ onQuizClick }: VSLProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    let current = 0;
    const interval = setInterval(() => {
      current += 0.5;
      setProgress(Math.min(current, 100));
      if (current >= 100) clearInterval(interval);
    }, 100);
  };

  return (
    <div className="relative bg-ink-900 border-y border-ink-800 shadow-2xl">
      {/* Top glowing edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hunter to-transparent opacity-50"></div>
      
      <div 
        className="relative w-full aspect-video max-h-[80vh] overflow-hidden cursor-pointer flex items-center justify-center bg-ink-900"
        onClick={handlePlay}
      >
        {/* Animated Background Canvas */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d14] via-[#0d121c] to-[#080b11]"></div>
        
        {/* High-tech Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 77, 62, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 77, 62, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)'
          }}
        ></div>

        {/* Animated Data Streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-hunter-light to-transparent"
              initial={{ opacity: 0, scaleX: 0, transformOrigin: 'left' }}
              animate={{ 
                opacity: [0, 0.8, 0], 
                scaleX: [0, 1, 0],
                x: ['-50%', '100%']
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${Math.random() * 20}%`,
                width: `${30 + Math.random() * 40}%`
              }}
            />
          ))}
          
          {/* Pulsing Nodes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute rounded-full bg-hunter-light shadow-glow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                width: `${4 + Math.random() * 4}px`,
                height: `${4 + Math.random() * 4}px`
              }}
            />
          ))}
        </div>

        <AnimatePresence>
          {!isPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-ink-900/60 backdrop-blur-sm z-10 hover:bg-ink-900/40 transition-colors duration-500"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-hunter rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                <div className="w-20 h-20 rounded-full bg-hunter flex items-center justify-center text-white relative shadow-2xl transition-transform duration-300 group-hover:scale-105">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </div>
              </div>
              
              <div className="text-center px-4">
                <span className="block text-lg md:text-xl font-bold text-white tracking-wide">
                  Why Trade Finance is the Asset Class Sophisticated Investors Are Moving Into
                </span>
                <span className="block text-xs font-medium text-white/50 tracking-[0.15em] uppercase mt-3">
                  6 minutes &middot; Accredited investors only &middot; No obligation
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fake Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-hunter-dark to-hunter transition-all duration-[100ms] linear z-20" style={{ width: `${progress}%` }}></div>
        
        {/* Time Badge */}
        <div className="absolute bottom-4 right-5 font-mono text-xs text-white/50 bg-black/40 border border-white/10 px-2.5 py-1 z-20 backdrop-blur-md">
          6:04
        </div>
      </div>

      <div className="bg-ink-900 border-t border-white/5 px-6 md:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-medium text-white/60">
          Ready to check your eligibility? <strong className="text-white">Take the 90-second investor quiz below.</strong>
        </div>
        <button 
          onClick={onQuizClick}
          className="font-sans text-xs font-bold tracking-widest uppercase text-ink-900 bg-white px-6 py-3 hover:bg-cream-200 transition-colors shadow-lg"
        >
          Check My Eligibility &rarr;
        </button>
      </div>
    </div>
  );
}
