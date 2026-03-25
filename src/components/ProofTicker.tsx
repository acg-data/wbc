import { motion } from 'framer-motion';

export function ProofTicker() {
  const items = [
    { n: "$4.5T", l: "Global Trade Finance Gap" },
    { n: "8–10%", l: "Target Annual Return" },
    { n: "30–90", l: "Day Avg. Position Duration" },
    { n: "0.2%", l: "Hist. Default Rate (Inv. Grade)" },
    { n: "+ Share", l: "Profit Participation" },
  ];

  const tickerItems = [...items, ...items];

  return (
    <div className="bg-white border-y border-indigo/10 py-5 overflow-hidden flex relative shadow-sm">
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
              {item.n.includes('%') || item.n.includes('T') ? (
                <><em>{item.n.replace(/[^0-9.]/g, '')}</em>{item.n.replace(/[0-9.]/g, '')}</>
              ) : item.n === '+ Share' ? (
                <><em>+</em> Share</>
              ) : item.n === '30–90' ? (
                <>30–<em>90</em></>
              ) : item.n.includes('$') ? (
                <>{item.n.charAt(0)}<em>{item.n.slice(1, -1)}</em>{item.n.slice(-1)}</>
              ) : (
                <em>{item.n}</em>
              )}
            </div>
            <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-ink-300">
              {item.l}
            </div>
          </div>
        ))}
      </motion.div>
      
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}