import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const faqs = [
    { q: "What exactly is invoice factoring and how does it generate returns?", a: "Invoice factoring is the purchase of accounts receivable at a discount. A business owed $100K by a creditworthy buyer — but needing cash now — sells that invoice to World Bridge for $92K. We collect the full $100K when it pays, earning the $8K spread. As an investor, your capital funds that advance and earns a proportional return over the 30–90 day term. The asset is always the invoice itself — a legal payment obligation, not a loan promise." },
    { q: "What makes this cross-border and why does that matter?", a: "We specialise in trade finance across international borders — US importers and exporters transacting with verified foreign buyers and suppliers. Cross-border deal flow is significantly less competed than domestic factoring, which is saturated with large bank participation. That lower competition gives us access to better margins, which translates directly into stronger risk-adjusted returns for investors." },
    { q: "How is my capital secured and what happens if a buyer doesn't pay?", a: "Every position is backed by a verified invoice — a legal payment obligation from an identified buyer. We assess buyer creditworthiness, verify the underlying trade transaction, and establish legal recourse before deploying. In the event of non-payment, we pursue the receivable through established legal channels. We further manage concentration risk by diversifying across multiple transactions, industries, and geographies. Historical default rates in investment-grade invoice factoring run below 0.5%." },
    { q: "How and when do I receive returns?", a: "As invoices clear — typically within 30–90 days — your principal returns along with the factoring return. Capital then recycles into new positions. Returns compound as capital is continuously redeployed across the portfolio. Profit sharing distributions are made on a schedule defined in your investment agreement. You'll have full visibility into pending cycles and expected return dates through your investor dashboard." },
    { q: "What does accredited investor mean and how do I know if I qualify?", a: "An accredited investor is generally an individual with annual income exceeding $200K (or $300K jointly with a spouse) for the past two years with expectation of the same going forward, or net worth exceeding $1M excluding primary residence. Certain professional certifications and entity types also qualify. The 90-second quiz above is the fastest way to check — it walks you through the key criteria and tells you immediately whether you appear to qualify." },
    { q: "Is this available to RIAs allocating on behalf of clients?", a: "Yes. We work with independent RIAs and family office principals who want to allocate to trade finance on behalf of their accredited clients. We have a dedicated process for advisor relationships including consolidated reporting, co-investment structures, and educational materials you can share with clients. Contact us directly if you manage capital for multiple investors — we'll walk you through the advisor access pathway." },
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-white border-y border-ink-200">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12">
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-hunter mb-4">
            <div className="w-5 h-px bg-hunter opacity-70"></div>
            FAQ
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold">
            Questions serious investors<br/><em className="italic text-hunter font-medium">always ask.</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="divide-y divide-ink-200 border-t border-b border-ink-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button 
                className="w-full flex items-center justify-between gap-6 text-left group"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`text-[16px] font-bold transition-colors ${openIdx === i ? 'text-hunter' : 'text-ink-800 group-hover:text-hunter'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${openIdx === i ? 'bg-hunter/10 border-hunter/30 text-hunter' : 'bg-transparent border-ink-200 text-ink-400 group-hover:border-hunter/30 group-hover:text-hunter'}`}>
                  {openIdx === i ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 pb-2 text-[14.5px] text-ink-500 leading-relaxed pr-10">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
