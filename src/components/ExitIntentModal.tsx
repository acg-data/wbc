import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';

interface ExitIntentModalProps {
  onClose: () => void;
}

export function ExitIntentModal({ onClose }: ExitIntentModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // Only show once per session
        if (!sessionStorage.getItem('exitIntentShown')) {
          setIsVisible(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-indigo-dark/90 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-white border-2 border-teal shadow-2xl p-8 text-center"
          >
            <button 
              onClick={handleClose}
              className="absolute top-3 right-3 text-ink-300 hover:text-indigo transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-teal-dark" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-indigo mb-3">
              Wait! Before you go...
            </h3>
            
            <p className="text-ink-500 mb-6 leading-relaxed">
              Download our free <strong className="text-indigo">Trade Finance Investment Guide</strong> — the 12-page document we use to onboard new investors.
            </p>

            <div className="bg-cream-200 p-4 mb-6 text-left">
              <ul className="text-sm text-ink-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark">✓</span>
                  How to evaluate invoice-backed positions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark">✓</span>
                  Risk factors most investors miss
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark">✓</span>
                  Portfolio allocation framework
                </li>
              </ul>
            </div>

            <button 
              onClick={handleClose}
              className="w-full font-sans text-sm font-bold tracking-widest uppercase text-white bg-indigo px-6 py-3 hover:bg-teal-dark transition-all duration-200 shadow-lg"
            >
              Send Me The Guide →
            </button>

            <button 
              onClick={handleClose}
              className="block w-full text-xs text-ink-300 mt-4 hover:text-indigo"
            >
              No thanks, continue to site
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}