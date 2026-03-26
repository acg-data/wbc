import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investorType: '',
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      previousFocus.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Focus trap
  const handleTab = useCallback((e: KeyboardEvent) => {
    if (!isOpen || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [handleTab]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'Required';
    if (!formData.lastName.trim()) errs.lastName = 'Required';
    if (!formData.email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.investorType) errs.investorType = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ firstName: '', lastName: '', email: '', phone: '', investorType: '' });
        }, 300);
      }, 3000);
    }, 1200);
  };

  const inputClass = (field: string) => 
    `w-full bg-cream-100 border px-4 py-2.5 text-[14px] text-indigo-700 placeholder-ink-300 focus:outline-none focus:border-teal-dark focus:bg-white focus:ring-1 focus:ring-teal-dark/50 transition-colors ${
      errors[field] ? 'border-red-400 bg-red-50/30' : 'border-indigo/10'
    }`;

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
            aria-hidden="true"
          />
          
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[500px] bg-white border border-indigo/10 shadow-2xl p-8 md:p-12 border-t-4 border-t-teal-dark max-h-[90vh] overflow-y-auto"
          >
            <button 
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-5 text-ink-200 hover:text-indigo transition-colors"
              aria-label="Close application form"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <h3 id="modal-heading" className="font-serif text-3xl font-bold text-indigo mb-2 leading-tight tracking-tight">
                  Submit Your <em className="italic text-teal-dark">Application</em>
                </h3>
                <p className="text-[13px] text-ink-500 mb-8 leading-relaxed">
                  Our team reviews every application and responds within 24 hours. Completing this form is not an investment commitment.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">First Name</label>
                      <input id="firstName" type="text" value={formData.firstName} onChange={e => handleChange('firstName', e.target.value)} placeholder="James" className={inputClass('firstName')} aria-required="true" aria-invalid={!!errors.firstName} />
                      {errors.firstName && <p className="text-[10px] text-red-500 mt-1" role="alert">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">Last Name</label>
                      <input id="lastName" type="text" value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} placeholder="Thompson" className={inputClass('lastName')} aria-required="true" aria-invalid={!!errors.lastName} />
                      {errors.lastName && <p className="text-[10px] text-red-500 mt-1" role="alert">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">Email</label>
                    <input id="email" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="james@email.com" className={inputClass('email')} aria-required="true" aria-invalid={!!errors.email} />
                    {errors.email && <p className="text-[10px] text-red-500 mt-1" role="alert">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">Phone (Optional)</label>
                    <input id="phone" type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="+1 (555) 000-0000" className={inputClass('phone')} />
                  </div>
                  
                  <div>
                    <label htmlFor="investorType" className="block text-[9px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-1.5">Investor Type</label>
                    <select id="investorType" value={formData.investorType} onChange={e => handleChange('investorType', e.target.value)} className={inputClass('investorType')} aria-required="true" aria-invalid={!!errors.investorType}>
                      <option value="">Select...</option>
                      <option>Individual accredited investor</option>
                      <option>Family office or trust</option>
                      <option>RIA / Financial advisor</option>
                      <option>Independent sponsor or operator</option>
                      <option>Institutional investor</option>
                    </select>
                    {errors.investorType && <p className="text-[10px] text-red-500 mt-1" role="alert">{errors.investorType}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-4 font-sans text-[13px] font-bold tracking-widest uppercase text-white bg-indigo px-6 py-4 hover:bg-teal-dark transition-all duration-300 shadow-lg transform hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application →'}
                  </button>
                </form>
                
                <p className="text-center text-[10px] text-ink-300 mt-4 tracking-wide">
                  All information kept strictly confidential.
                </p>
                
                <div className="mt-6 pt-5 border-t border-indigo/10 text-[9px] text-ink-300 leading-[1.6] text-justify">
                  This is a preliminary application only. No funds will be collected at this stage. World Bridge Capital investments 
                  are offered only to verified accredited investors under applicable securities regulations. Investments involve risk 
                  including the potential loss of principal. Past results do not guarantee future returns. This is not an offer to sell 
                  or a solicitation to buy any securities. Any such offer will be made only by means of a private placement memorandum.
                </div>
              </>
            ) : (
              <div className="py-12 text-center" role="status" aria-live="polite">
                <div className="w-16 h-16 bg-teal-50 border border-teal-pale rounded-full flex items-center justify-center text-teal-dark mx-auto mb-6" aria-hidden="true">
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