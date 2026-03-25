import { motion } from 'framer-motion';

export function ProofTicker() {
  const items = [
    { n: "$4.5T", l: "Global Trade Finance Gap" },
    { n: "8–10%", l: "Target Annual Return" },
    { n: "30–90", l: "Day Avg. Position Duration" },
    { n: "0.2%", l: "Hist. Default Rate (Inv. Grade)" },
    { n: "+ Share", l: "Profit Participation" },
  ];

  // Double the items for seamless marquee
  const tickerItems = [...items, ...items];

  return (
    <div className="bg-white border-y border-ink-200 py-5 overflow-hidden flex relative shadow-sm">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1035] }} // Adjust based on content width, or use CSS keyframes
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {tickerItems.map((item, i) => (
          <div key={i} className="flex items-baseline gap-2.5 px-10 md:px-16 border-r border-ink-200 shrink-0">
            <div className="font-serif text-3xl font-bold text-ink-900 leading-none">
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
            <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-ink-400">
              {item.l}
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Gradients to smooth edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
