import { motion } from 'framer-motion';

/**
 * TrustBar — Placeholder for future media mentions.
 * Only display logos for publications where WBC has actually been featured.
 * Using generic "Featured In" framing rather than false "As Seen In" claims.
 */
export function TrustBar() {
  const partners = [
    { name: "SEC Regulation D", abbr: "REG D" },
    { name: "Accredited Investors", abbr: "ACCREDITED" },
    { name: "Asset-Backed", abbr: "ASSET-BACKED" },
    { name: "Invoice Verified", abbr: "VERIFIED" },
    { name: "Transparent Reporting", abbr: "TRANSPARENT" },
  ];

  return (
    <section className="py-10 px-6 bg-white border-t border-b border-indigo/10" aria-label="Investment standards">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-300 mb-5"
        >
          Investment Standards
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {partners.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-xs font-bold tracking-widest uppercase text-ink-300 px-4 py-2 border border-indigo/10 bg-cream"
              aria-label={item.name}
            >
              {item.abbr}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}