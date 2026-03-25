import { motion } from 'framer-motion';

export function AssetClass() {
  const tableData = [
    { factor: "Duration", pe: "7–10 yrs", peClass: "text-red-600 font-bold", bond: "1–30 yrs", bondClass: "text-ink-400", tf: "30–90 days", tfClass: "text-teal-dark font-bold" },
    { factor: "Target Return", pe: "15–25%", peClass: "text-teal-dark font-bold", bond: "3–5%", bondClass: "text-red-600 font-bold", tf: "8–10%", tfClass: "text-teal-dark font-bold" },
    { factor: "Market Correlation", pe: "High", peClass: "text-red-600 font-bold", bond: "Medium", bondClass: "text-ink-400", tf: "Very Low", tfClass: "text-teal-dark font-bold" },
    { factor: "Asset-Backed", pe: "Rarely", peClass: "text-red-600 font-bold", bond: "Sometimes", bondClass: "text-ink-400", tf: "Always", tfClass: "text-teal-dark font-bold" },
    { factor: "Accessible to HNW?", pe: "Sometimes", peClass: "text-ink-400", bond: "Yes", bondClass: "text-teal-dark font-bold", tf: "Via WBC", tfClass: "text-teal-dark font-bold" },
    { factor: "Transparent positions", pe: "Rarely", peClass: "text-red-600 font-bold", bond: "Partially", bondClass: "text-ink-400", tf: "Full visibility", tfClass: "text-teal-dark font-bold" },
  ];

  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-6 md:px-14 max-w-6xl mx-auto">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-dark mb-4"
      >
        <div className="w-5 h-px bg-teal-dark opacity-70"></div>
        The Opportunity
      </motion.div>
      
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-indigo font-semibold max-w-4xl"
      >
        Most accredited investors have never<br/>considered <em className="italic text-teal-dark font-medium">trade finance.</em><br/>That's the edge.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-16 items-start">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
          className="prose prose-lg text-ink-500 leading-relaxed"
        >
          <p className="text-[17px]">
            Trade finance is the engine of global commerce — the mechanism that bridges the gap between when goods ship and when invoices get paid. It is the oldest form of credit on earth.
          </p>
          <p className="text-[17px] mt-4">
            It is also dramatically underallocated in private investor portfolios. Not because the returns aren't compelling — they are. But because the access points have historically been reserved for large banks and institutional trading desks.
          </p>
          
          <div className="mt-10 p-8 border-l-4 border-teal-dark bg-teal-20 shadow-sm">
            <p className="font-serif text-2xl font-medium leading-[1.4] text-indigo italic m-0">
              "The best alternative investments are the ones that most people don't know exist — not because they're risky, but because the access has been gated."
            </p>
            <cite className="block mt-4 text-[11px] font-bold tracking-[0.1em] uppercase text-teal-dark not-italic">
              — World Bridge Capital Investment Thesis
            </cite>
          </div>
          
          <p className="text-[17px] mt-8">
            World Bridge Capital exists to change that. We are building the hub where accredited investors access trade finance deal flow, education, and returns that were previously institutional-only.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        >
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-4">How trade finance compares</div>
          <div className="overflow-x-auto shadow-sm border border-indigo/10">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-indigo">
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10 w-1/3">Factor</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10">PE / VC</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10">Bonds</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-teal">Trade Finance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo/10">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-teal-50 transition-colors">
                    <td className="p-4 text-[13px] font-semibold text-indigo-700 border-r border-indigo/10">{row.factor}</td>
                    <td className={`p-4 text-[13px] border-r border-indigo/10 ${row.peClass}`}>{row.pe}</td>
                    <td className={`p-4 text-[13px] border-r border-indigo/10 ${row.bondClass}`}>{row.bond}</td>
                    <td className={`p-4 text-[13px] ${row.tfClass}`}>{row.tf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}