import { motion } from 'framer-motion';
import { ChevronDown, Lock } from 'lucide-react';
import { PerformanceDisclaimer } from './Disclaimers';

export function EsHero() {
  return (
    <header className="pt-20 pb-6 px-6 text-center max-w-4xl mx-auto relative" aria-label="Sección hero">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-dark mb-6 mt-4"
      >
        <span className="w-1.5 h-1.5 bg-teal rounded-full animate-blink" aria-hidden="true"></span>
        Plataforma de Inversión en Finanzas Comerciales
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight text-indigo font-semibold text-balance mx-auto"
      >
        World Bridge Capital:<br/>
        <em className="italic text-teal-dark">Finanzas Comerciales</em> para<br/>
        Inversores Acreditados.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-ink-500 mt-6 max-w-xl mx-auto leading-relaxed"
      >
        Objetivo de retorno del 8–10%. Ciclos de 30–90 días. Posiciones respaldadas por activos. Baja correlación con el mercado.*
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-stretch justify-center mx-auto mt-10 max-w-2xl border border-indigo/10 bg-white shadow-sm"
        role="region"
        aria-label="Métricas clave de inversión"
      >
        <div className="flex-1 p-5 md:p-6 text-center border-b md:border-b-0 md:border-r border-indigo/10">
          <div className="font-serif text-3xl md:text-4xl font-bold text-indigo" aria-label="8 a 10 por ciento de retorno objetivo">
            <em className="italic text-teal-dark">8–10%</em>
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Retorno Objetivo*</div>
        </div>
        <div className="flex-1 p-5 md:p-6 text-center border-b md:border-b-0 md:border-r border-indigo/10">
          <div className="font-serif text-3xl md:text-4xl font-bold text-indigo" aria-label="30 a 90 días de duración">
            30–<em className="italic text-teal-dark">90</em>d
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Duración</div>
        </div>
        <div className="flex-1 p-5 md:p-6 text-center">
          <div className="font-serif text-3xl md:text-4xl font-bold text-indigo">
            <em className="italic text-teal-dark">Asegurado</em>
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Cada Posición</div>
        </div>
      </motion.div>

      <PerformanceDisclaimer className="mt-4 max-w-2xl mx-auto text-center" variant="inline" />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="inline-flex items-center gap-2 bg-indigo/5 border border-indigo/10 px-4 py-2 mt-6 text-[10px] font-bold tracking-[0.1em] uppercase text-indigo"
      >
        <Lock className="w-3 h-3" aria-hidden="true" />
        Solo Inversores Acreditados · Regulación D
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col items-center gap-2 mt-10 text-[10px] font-bold tracking-[0.15em] uppercase text-ink-300"
      >
        <span>Ver la descripción general</span>
        <ChevronDown className="w-5 h-5 text-teal-dark animate-bounce" aria-hidden="true" />
      </motion.div>
    </header>
  );
}