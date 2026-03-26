import { motion } from 'framer-motion';

export function TrustBar() {
  const logos = [
    { name: "Wall Street Journal", abbr: "WSJ" },
    { name: "Bloomberg", abbr: "BLOOMBERG" },
    { name: "Financial Times", abbr: "FT" },
    { name: "Forbes", abbr: "FORBES" },
    { name: "Inc.", abbr: "INC." },
  ];

  return (
    <section className="py-12 px-6 bg-white border-t border-b border-indigo/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-300 mb-6"
        >
          As seen in
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="font-serif text-lg md:text-xl font-bold text-indigo-400 tracking-wide hover:text-indigo transition-colors cursor-default"
            >
              {logo.abbr}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}