import { motion } from 'framer-motion';
import { Globe2, Search, Briefcase, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const steps = [
    { tag: "Step 01", icon: Globe2, title: "We Source Cross-Border Deals", text: "Our team identifies US businesses and international counterparts with verified receivables — import/export invoices from creditworthy buyers with 30–90 day payment terms.", cycle: "→ Continuous deal flow" },
    { tag: "Step 02", icon: Search, title: "We Underwrite & Verify", text: "Every invoice is verified, buyer credit is assessed, and legal recourse is established before a single dollar deploys. Asset-backed discipline is non-negotiable.", cycle: "→ Multi-layer diligence" },
    { tag: "Step 03", icon: Briefcase, title: "Investor Capital Deploys", text: "Accredited investor capital funds the advance — typically 80–90% of the invoice face value. The business gets liquidity. You hold a secured position against a real receivable.", cycle: "→ Asset-secured" },
    { tag: "Step 04", icon: TrendingUp, title: "Invoice Pays. You Earn.", text: "When the buyer pays, principal returns with your factoring fee — targeting 8–10% annualized. Plus profit sharing on portfolio performance above base targets.", cycle: "→ 30–90 day cycle" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-6xl mx-auto">
      <div className="mb-14">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-dark mb-4"
        >
          <div className="w-5 h-px bg-teal-dark opacity-70"></div>
          The Model
        </motion.div>
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-indigo font-semibold"
        >
          How World Bridge Capital<br/>generates your <em className="italic text-teal-dark font-medium">returns.</em>
        </motion.h2>
      </div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-indigo/10 shadow-sm"
      >
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="p-8 border-b lg:border-b-0 lg:border-r border-indigo/10 bg-white relative group hover:bg-teal-50 transition-colors duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-teal-dark transition-colors duration-300"></div>
            
            <div className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-ink-300 mb-6">
              {step.tag}
            </div>
            <step.icon className="w-6 h-6 text-indigo mb-4 stroke-[1.5]" />
            <h3 className="font-serif text-xl font-bold text-indigo mb-3 leading-[1.2]">
              {step.title}
            </h3>
            <p className="text-[13px] text-ink-500 leading-relaxed min-h-[100px]">
              {step.text}
            </p>
            <div className="font-mono text-[10px] text-teal-dark mt-6 tracking-[0.06em]">
              {step.cycle}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}