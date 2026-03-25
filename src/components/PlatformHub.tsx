import { motion } from 'framer-motion';
import { Briefcase, BarChart3, GraduationCap, Globe } from 'lucide-react';

interface PlatformHubProps {
  onResourceClick: () => void;
}

export function PlatformHub({ onResourceClick }: PlatformHubProps) {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    { icon: Briefcase, title: "Direct Deal Access", text: "Invest directly in verified cross-border invoice positions. Full visibility into every deployment — buyer, invoice amount, term, and expected return." },
    { icon: BarChart3, title: "Portfolio Transparency Dashboard", text: "Real-time view of your deployed capital, active positions, return history, and upcoming cycle completions. No quarterly black-box reports." },
    { icon: GraduationCap, title: "Trade Finance Education Hub", text: "Deep-dive resources, market data, and deal analysis for investors who want to truly understand the asset class — not just buy into it blind." },
    { icon: Globe, title: "Cross-Border Deal Flow Network", text: "Access to US-international trade finance opportunities that institutional desks have hoarded. Our proprietary sourcing network surfaces deal flow most HNW investors never see." }
  ];

  const resources = [
    { type: "Guide", title: "Trade Finance 101: The Asset Class Institutional Investors Have Kept Quiet", desc: "A plain-English breakdown of how invoice factoring generates returns — and why the risk profile is fundamentally different from other private credit." },
    { type: "Analysis", title: "The $4.5T Gap: Why Global Trade Finance Is Structurally Undersupplied", desc: "Market data on the global trade finance shortfall and what it means for investors who can access the opportunity." },
    { type: "Case Study", title: "Cross-Border Factoring vs. Domestic: Why the Margin Difference Matters", desc: "How international deal flow gives World Bridge access to superior risk-adjusted returns compared to domestic-only factoring portfolios." },
    { type: "Webinar", title: "Portfolio Construction: How to Size a Trade Finance Allocation", desc: "For RIAs and family office principals — a framework for integrating short-duration, asset-backed credit into a diversified alternatives allocation." }
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-6xl mx-auto">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-hunter mb-4"
      >
        <div className="w-5 h-px bg-hunter opacity-70"></div>
        The Platform
      </motion.div>
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold mb-16"
      >
        World Bridge Capital is not<br/>just a fund. It is <em className="italic text-hunter font-medium">the hub</em><br/>for trade finance investors.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <p className="text-[17px] text-ink-500 leading-relaxed mb-10">
            Most investment vehicles give you exposure to an asset class and little else. We are building something different — the full infrastructure for accredited investors who want to understand, access, and scale their exposure to trade finance.
          </p>
          <div className="flex flex-col border-t border-ink-200">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-5 py-6 border-b border-ink-200 group hover:bg-cream-100 transition-colors -mx-4 px-4">
                <div className="w-10 h-10 shrink-0 bg-white border border-ink-200 flex items-center justify-center text-ink-600 group-hover:border-hunter/30 group-hover:text-hunter transition-colors shadow-sm">
                  <f.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-ink-800 mb-1.5">{f.title}</h4>
                  <p className="text-[13px] text-ink-500 leading-[1.6]">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="bg-cream-100/50 p-6 md:p-8 border border-ink-200">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-400 mb-6">From the education hub</div>
          <div className="flex flex-col gap-3">
            {resources.map((r, i) => (
              <div 
                key={i} 
                onClick={onResourceClick}
                className="bg-white border border-ink-200 p-5 flex items-start gap-4 cursor-pointer hover:border-hunter/40 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-hunter bg-hunter/5 border border-hunter/10 px-2.5 py-1 whitespace-nowrap shrink-0 mt-0.5">
                  {r.type}
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-ink-800 mb-1.5 group-hover:text-hunter transition-colors">{r.title}</h4>
                  <p className="text-[12.5px] text-ink-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
