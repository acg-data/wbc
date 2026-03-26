import { motion } from 'framer-motion';

export function ProofTicker() {
  const items = [
    { n: "$4.5T", l: "Global Trade Finance Gap (ADB)" },
    { n: "8–10%", l: "Target Annual Return*" },
    { n: "30–90", l: "Day Avg. Position Duration" },
    { n: "<0.5%", l: "Industry Default Rate (ICC)" },
    { n: "+", l: "Profit Participation*" },
  ];

  const tickerItems = [...items, ...items];

  return (
    <div className="bg-white border-y border-indigo/10 overflow-hidden relative shadow-sm" role="marquee" aria-label="Key investment metrics ticker">
      <div className="py-5 flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {tickerItems.map((item, i) => (
            <div key={i} className="flex items-baseline gap-2.5 px-10 md:px-16 border-r border-indigo/10 shrink-0">
              <div className="font-serif text-3xl font-bold text-indigo leading-none">
                <em className="italic text-teal-dark">{item.n}</em>
              </div>
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-ink-300">
                {item.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
      
      {/* Ticker disclaimer */}
      <div className="text-center pb-2 text-[8px] text-ink-300 px-4">
        *Targets only. Not guarantees. Past performance does not guarantee future results. Industry data: ICC Trade Register, ADB.
      </div>
    </div>
  );
}