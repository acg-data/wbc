import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PerformanceDisclaimer } from './Disclaimers';

export function Returns() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const differentiators = [
    { title: "Low correlation to equity markets", text: "Invoice payment is driven by trade activity, not market sentiment. However, broad economic downturns may affect buyer payment ability." },
    { title: "Cross-border deal flow advantage", text: "International trade finance is less competed than domestic factoring — giving us access to better margins and higher-quality receivables." },
    { title: "Full position transparency", text: "You see exactly which invoices your capital is behind, who the buyer is, and when payment is due. No black box." },
    { title: "Straightforward fee structure", text: "Our fee structure is fully disclosed in the private placement memorandum provided to qualified investors before any commitment." }
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-white border-y border-indigo/10" aria-labelledby="returns-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-dark mb-4"
          >
            <div className="w-5 h-px bg-teal-dark opacity-70" aria-hidden="true"></div>
            What Investors Earn
            <div className="w-5 h-px bg-teal-dark opacity-70" aria-hidden="true"></div>
          </motion.div>
          
          <motion.h2 
            id="returns-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-indigo font-semibold"
          >
            The return profile.<br/><em className="italic text-teal-dark font-medium">Plainly stated.</em>
          </motion.h2>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mt-16 flex flex-col items-center"
          >
            <div className="font-serif text-[6rem] md:text-[8.5rem] font-bold leading-[0.85] tracking-tight text-indigo" aria-label="8 to 10 percent target annual return">
              <em className="italic text-teal-dark">8</em>–<em className="italic text-teal-dark">10</em>%
            </div>
            <div className="text-sm font-bold tracking-[0.14em] uppercase text-ink-300 mt-6">Target Annual Return — Base*</div>
            <p className="text-base text-ink-500 mt-4 max-w-xl leading-relaxed">
              Targeted factoring fee income as positions clear. Distributed as each 30–90 day cycle completes — not held to a distant exit event.
            </p>
            <PerformanceDisclaimer className="mt-4 max-w-xl text-center" variant="inline" />
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="grid grid-cols-1 md:grid-cols-3 border border-indigo/10 shadow-sm mt-16 bg-cream-200"
        >
          <div className="p-8 md:p-10 text-center border-b md:border-b-0 md:border-r border-indigo/10 hover:bg-teal-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-indigo leading-none">
              +<em className="italic text-teal-dark">Upside</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Profit Sharing*</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Returns above base target may be shared with investors per the terms of the PPM. Not guaranteed.
            </p>
          </div>
          <div className="p-8 md:p-10 text-center border-b md:border-b-0 md:border-r border-indigo/10 hover:bg-teal-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-indigo leading-none">
              <em className="italic text-teal-dark">Secured</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Every Position</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Each deployment is backed by a verified invoice — a legal payment obligation from an identified buyer. Buyer default remains a risk.
            </p>
          </div>
          <div className="p-8 md:p-10 text-center hover:bg-teal-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-indigo leading-none">
              <em className="italic text-teal-dark">30–90</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Day Cycle</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Capital recycles as invoices clear and new positions deploy. Actual durations may vary.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="grid grid-cols-1 md:grid-cols-2 mt-4 border border-indigo/10 shadow-sm bg-white"
        >
          {differentiators.map((diff, i) => (
            <div 
              key={i} 
              className={`flex gap-4 p-6 md:p-8 hover:bg-teal-50 transition-colors ${
                i % 2 === 0 ? 'md:border-r border-indigo/10' : ''
              } ${i < 2 ? 'border-b border-indigo/10' : ''}`}
            >
              <div className="w-6 h-6 shrink-0 bg-teal-50 border border-teal-pale rounded-full flex items-center justify-center text-teal-dark mt-0.5" aria-hidden="true">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[13.5px] font-bold text-indigo-700 mb-1.5">{diff.title}</h4>
                <p className="text-[12.5px] text-ink-500 leading-relaxed">{diff.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}