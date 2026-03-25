import { motion } from 'framer-motion';

export function Included() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const inclusions = [
    { name: "8–10% Target Annual Return", sub: "Factoring fee income across deployed positions, paid as cycles complete", tag: "Core Return" },
    { name: "Profit Sharing on Portfolio Outperformance", sub: "Returns above base target shared directly with investors — you participate in the upside", tag: "Upside" },
    { name: "Asset-Backed Invoice Positions", sub: "Every dollar secured by a verified, legal receivable from an identified buyer", tag: "Secured" },
    { name: "Cross-Border Proprietary Deal Flow", sub: "US-international trade finance with superior margin access vs. domestic-only", tag: "Differentiated" },
    { name: "30–90 Day Position Duration", sub: "Short-cycle deployment — capital recycles continuously, no decade-long lockups", tag: "Liquid Cycle" },
    { name: "Full Portfolio Transparency", sub: "Complete visibility into deployed positions, buyer details, and return timeline", tag: "Included" },
    { name: "Access to Trade Finance Education Hub", sub: "Market research, deal analysis, and investor resources — exclusive to WBC investors", tag: "Included" },
    { name: "Dedicated Investor Relations", sub: "Direct access to the World Bridge team throughout your investment period", tag: "Included" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-4xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-dark mb-4">
          <div className="w-5 h-px bg-teal-dark opacity-70"></div>
          Investment Structure
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-indigo font-semibold">
          What you get as a<br/>World Bridge <em className="italic text-teal-dark font-medium">investor.</em>
        </h2>
        <p className="text-[17px] text-ink-500 mt-6 mb-12">
          Transparent structure. No hidden fees. Clear terms from day one.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="bg-white border border-indigo/10 shadow-sm"
      >
        <div className="divide-y divide-indigo/10">
          {inclusions.map((inc, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 md:px-8 hover:bg-teal-50 transition-colors">
              <div>
                <div className="text-[14.5px] font-bold text-indigo-700">{inc.name}</div>
                <div className="text-[13px] text-ink-500 mt-1">{inc.sub}</div>
              </div>
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-teal-dark bg-teal-50 px-3 py-1 border border-teal-pale self-start md:self-auto">
                ✓ {inc.tag}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-indigo p-6 md:px-8 flex items-center justify-between border-t-2 border-teal-dark">
          <div className="font-serif text-2xl font-bold text-white">Minimum Investment</div>
          <div className="font-serif text-2xl font-bold text-teal"><em className="italic">Discussed on Intro Call</em></div>
        </div>
      </motion.div>
    </section>
  );
}