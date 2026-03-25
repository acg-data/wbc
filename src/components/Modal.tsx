import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setTimeout(() => setSubmitted(false), 300);
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-indigo-dark/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[500px] bg-white border border-indigo/10 shadow-2xl p-8 md:p-12 border-t-4 border-t-teal-dark"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-5 text-ink-200 hover:text-indigo transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <h3 className="font-serif text-3xl font-bold text-indigo mb-2 leading-tight tracking-tight">
                  Submit Your <em className="italic text-teal-dark">Application</em>
                </h3>
                <p className="text-[13px] text-ink-500 mb-8 leading-relaxed">
                  Our team reviews every application and responds within 24 hours. Completing this form is not an investment commitment.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">First Name</label>
                      <input required type="text" placeholder="James" className="w-full bg-cream-100 border border-indigo/10 px-4 py-2.5 text-[14px] text-indigo-700 placeholder-ink-300 focus:outline-none focus:border-teal-dark focus:bg-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">Last Name</label>
                      <input required type="text" placeholder="Thompson" className="w-full bg-cream-100 border border-indigo/10 px-4 py-2.5 text-[14px] text-indigo-700 placeholder-ink-300 focus:outline-none focus:border-teal-dark focus:bg-white transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">Email</label>
                    <input required type="email" placeholder="james@email.com" className="w-full bg-cream-100 border border-indigo/10 px-4 py-2.5 text-[14px] text-indigo-700 placeholder-ink-300 focus:outline-none focus:border-teal-dark focus:bg-white transition-colors" />
                  </div>
                  
                  <div>
                    <label className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">Phone (Optional)</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-cream-100 border border-indigo/10 px-4 py-2.5 text-[14px] text-indigo-700 placeholder-ink-300 focus:outline-none focus:border-teal-dark focus:bg-white transition-colors" />
                  </div>
                  
                  <div>
                    <label className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">Investor Type</label>
                    <select required className="w-full bg-cream-100 border border-indigo/10 px-4 py-2.5 text-[14px] text-indigo-700 focus:outline-none focus:border-teal-dark focus:bg-white transition-colors appearance-none">
                      <option value="">Select...</option>
                      <option>Individual accredited investor</option>
                      <option>Family office or trust</option>
                      <option>RIA / Financial advisor</option>
                      <option>Independent sponsor or operator</option>
                      <option>Institutional investor</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="w-full mt-4 font-sans text-[13px] font-bold tracking-widest uppercase text-white bg-indigo px-6 py-4 hover:bg-teal-dark transition-all duration-300 shadow-lg transform hover:-translate-y-px">
                    Submit Application &rarr;
                  </button>
                </form>
                
                <p className="text-center text-[10px] text-ink-300 mt-4 tracking-wide">
                  All information kept strictly confidential.
                </p>
                
                <div className="mt-6 pt-5 border-t border-indigo/10 text-[9px] text-ink-300 leading-[1.6] text-justify">
                  This is a preliminary application only. No funds will be collected at this stage. World Bridge Capital investments are offered only to verified accredited investors under applicable securities regulations. Past results do not guarantee future returns. This is not an offer to sell securities.
                </div>
              </>
            ) : (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-teal-50 border border-teal-pale rounded-full flex items-center justify-center text-teal-dark mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-indigo mb-3">Application Received</h3>
                <p className="text-[14px] text-ink-500">We'll be in touch within 24 hours.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}