import { motion } from 'framer-motion';
import { TestimonialDisclaimer } from './Disclaimers';

export function CaseStudies() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cases = [
    {
      catLabel: "Family Office · Multi-Asset Portfolio",
      result: "9.4%",
      resultNote: "Annualized*",
      metrics: [
        { n: "$2M+", l: "Capital Deployed" },
        { n: "3×", l: "Allocation Increased" }
      ],
      quote: "I've been in private credit for 15 years. The combination of short duration and consistent yield is genuinely rare. This fills a gap in my portfolio that nothing else does — and it held firm through the last equity drawdown.",
      author: { av: "RM", name: "Robert M.", role: "Family Office Principal · Southwest US" }
    },
    {
      catLabel: "RIA · Accredited Client Allocation",
      result: "Capital",
      resultSuffix: " Returned",
      metrics: [
        { n: "Full", l: "Position Visibility" },
        { n: "30", nSuffix: " day", l: "First Return Cycle" }
      ],
      quote: "The transparency is what kept me coming back and recommending this to clients. We know exactly which invoices capital is behind, who the buyer is, and when we get paid. No black box — just clean, verified positions.",
      author: { av: "SL", name: "Sandra L.", role: "Independent RIA · Accredited Client Portfolios" }
    },
    {
      catLabel: "Independent Sponsor · Multi-Asset",
      result: "Low Correlation",
      resultSuffix: " Position",
      metrics: [
        { n: "2×", l: "Allocation Increased" },
        { n: "Low", l: "Equity Drawdown Impact" }
      ],
      quote: "During the last equity drawdown, this continued performing while other positions went sideways. That is what diversification should look like. I've increased my allocation and I'm recommending it to serious investors in my network.",
      author: { av: "DK", name: "David K.", role: "Independent Sponsor · Multi-Asset Portfolio" }
    }
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-white border-y border-indigo/10" id="results" aria-labelledby="case-studies-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-dark mb-4"
        >
          <div className="w-5 h-px bg-teal-dark opacity-70" aria-hidden="true"></div>
          Investor Case Studies
        </motion.div>
        
        <motion.h2 
          id="case-studies-heading"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-indigo font-semibold mb-12"
        >
          How accredited investors<br/>are using <em className="italic text-teal-dark font-medium">trade finance.</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-indigo/10 border border-indigo/10">
          {cases.map((c, i) => (
            <motion.article 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
              className="bg-white flex flex-col transition-colors duration-300 hover:bg-teal-50"
            >
              <div className="bg-indigo p-4 md:px-6 flex items-center justify-between gap-4">
                <div className="text-[9px] font-bold tracking-[0.14em] uppercase text-white/50 leading-tight w-1/2">
                  {c.catLabel}
                </div>
                <div className="font-serif text-lg font-bold text-teal leading-none text-right">
                  <em className="italic">{c.result}</em>
                  {c.resultSuffix && <span className="text-white text-sm ml-1 font-sans font-medium tracking-normal">{c.resultSuffix}</span>}
                  {c.resultNote && <span className="text-white/40 text-xs ml-1 font-sans font-medium tracking-normal">{c.resultNote}</span>}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {c.metrics.map((m: any, idx: number) => (
                    <div key={idx}>
                      <div className="font-serif text-2xl font-bold text-indigo leading-none">
                        <em className="italic text-teal-dark">{m.n}</em>
                        {m.nSuffix && <span className="text-base font-sans text-indigo ml-1 font-semibold">{m.nSuffix}</span>}
                      </div>
                      <div className="text-[9px] font-bold tracking-[0.08em] uppercase text-ink-300 mt-1.5">{m.l}</div>
                    </div>
                  ))}
                  <div className="col-span-2 h-px bg-indigo/10 mt-2" aria-hidden="true"></div>
                </div>
                
                <blockquote className="text-[13.5px] leading-[1.68] text-ink-500 italic flex-1 mb-4 pl-3 border-l-2 border-teal-pale">
                  "{c.quote}"
                </blockquote>

                <TestimonialDisclaimer className="mb-4" />
                
                <div className="flex gap-3 items-center pt-4 border-t border-indigo/10 mt-auto">
                  <div className="w-8 h-8 shrink-0 bg-indigo flex items-center justify-center font-serif text-xs font-bold text-teal" aria-hidden="true">
                    {c.author.av}
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold text-indigo-700">{c.author.name}</div>
                    <div className="text-[10px] text-ink-300 mt-0.5">{c.author.role}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}