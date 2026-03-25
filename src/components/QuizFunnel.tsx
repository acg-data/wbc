import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuizFunnelProps {
  onComplete: () => void;
}

const questions = [
  { q: "Are you based in the United States?", opts: ["Yes, I'm US-based", "No, I'm based outside the US"], disqualify: [1] },
  { q: "What best describes your annual income?", opts: ["Under $100,000", "$100,000 – $199,999", "$200,000+ individual, or $300,000+ with spouse/partner", "Prefer not to say — I qualify by net worth instead"], disqualify: [0, 1] },
  { q: "What is your approximate net worth, excluding your primary residence?", opts: ["Under $500,000", "$500,000 – $999,999", "$1,000,000 or more", "Prefer not to say"], disqualify: [0] },
  { q: "How would you describe yourself as an investor?", opts: ["Individual accredited investor", "Family office or trust", "RIA or financial advisor representing clients", "Independent sponsor or operator", "Institutional investor"], disqualify: [] },
  { q: "Have you previously invested in private credit, factoring, or trade finance?", opts: ["Yes — this is familiar territory", "No, but I'm actively researching alternative asset classes", "No — this is my first exposure to asset-backed credit"], disqualify: [] },
  { q: "What allocation size are you considering?", opts: ["$50,000 – $100,000", "$100,000 – $250,000", "$250,000 – $500,000", "$500,000 – $1,000,000", "$1,000,000+"], disqualify: [] },
  { q: "What matters most to you in this investment?", opts: ["Consistent income with capital preservation", "True non-correlation to equity markets", "Short duration and capital flexibility", "Upside participation beyond the base return"], disqualify: [] }
];

export function QuizFunnel({ onComplete }: QuizFunnelProps) {
  const [cur, setCur] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [status, setStatus] = useState<'playing' | 'complete' | 'disqualified'>('playing');
  const [direction, setDirection] = useState(1);

  const handleSelect = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[cur] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[cur] === undefined) return;
    
    if (questions[cur].disqualify.includes(answers[cur])) {
      setStatus('disqualified');
      return;
    }
    
    if (cur < questions.length - 1) {
      setDirection(1);
      setCur(cur + 1);
    } else {
      setStatus('complete');
    }
  };

  const handleBack = () => {
    if (cur > 0) {
      setDirection(-1);
      setCur(cur - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 20 : -20, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 20 : -20, opacity: 0 })
  };

  return (
    <section className="py-24 px-6 md:px-14 bg-cream-200 border-y border-indigo/10" id="quiz">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-dark mb-4">
            <div className="w-5 h-px bg-teal-dark opacity-70"></div>
            Investor Eligibility
            <div className="w-5 h-px bg-teal-dark opacity-70"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-indigo font-semibold">
            Find out if you <em className="italic text-teal-dark font-medium">qualify</em><br/>in 90 seconds.
          </h2>
          <p className="text-[17px] text-ink-500 mt-6 max-w-xl mx-auto leading-relaxed">
            World Bridge Capital is only open to accredited investors. Answer 7 short questions to check your eligibility and receive your personalised next steps.
          </p>
        </div>

        <div className="bg-white border border-indigo/10 shadow-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo via-teal-dark to-teal"></div>
          
          {status === 'playing' && (
            <>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-[2px] bg-indigo/10 overflow-hidden">
                  <motion.div 
                    className="h-full bg-teal-dark"
                    initial={{ width: 0 }}
                    animate={{ width: `${(cur / questions.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <div className="font-mono text-[10px] text-ink-300 uppercase tracking-widest whitespace-nowrap">
                  Question {cur + 1} of {questions.length}
                </div>
              </div>

              <div className="min-h-[280px] relative">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={cur}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-snug text-indigo mb-8">
                      {questions[cur].q.split(/(\$?\d+(?:,\d+)*(?:\+)?)/g).map((part, i) => 
                        part.match(/^\$?\d+(?:,\d+)*(?:\+)?$/) ? <em key={i} className="italic text-teal-dark">{part}</em> : part
                      )}
                    </h3>
                    
                    <div className="flex flex-col gap-3">
                      {questions[cur].opts.map((opt, i) => {
                        const isSelected = answers[cur] === i;
                        return (
                          <button
                            key={i}
                            onClick={() => handleSelect(i)}
                            className={`flex items-center gap-4 p-4 border text-left transition-all duration-200 ${
                              isSelected 
                                ? 'border-teal-dark bg-teal-50 ring-1 ring-teal-dark' 
                                : 'border-indigo/10 bg-cream-100/50 hover:border-teal-dark/50 hover:bg-teal-50/50'
                            }`}
                          >
                            <div className={`w-6 h-6 shrink-0 border flex items-center justify-center text-[10px] font-bold font-mono transition-colors ${
                              isSelected ? 'bg-teal-dark border-teal-dark text-white' : 'bg-white border-indigo/20 text-ink-400'
                            }`}>
                              {String.fromCharCode(65 + i)}
                            </div>
                            <span className={`text-[14.5px] font-medium ${isSelected ? 'text-teal-dark' : 'text-indigo-700'}`}>
                              {opt}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-indigo/10">
                <button 
                  onClick={handleBack}
                  className={`flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase text-ink-300 hover:text-indigo transition-colors ${cur === 0 ? 'invisible' : ''}`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                
                <button 
                  onClick={handleNext}
                  disabled={answers[cur] === undefined}
                  className={`flex items-center gap-2 font-sans text-[12px] font-bold tracking-widest uppercase px-6 py-3 transition-all duration-200 ${
                    answers[cur] !== undefined 
                      ? 'bg-indigo text-white hover:bg-teal-dark shadow-lg hover:shadow-teal-dark/20 transform hover:-translate-y-px' 
                      : 'bg-indigo/30 text-ink-300 cursor-not-allowed'
                  }`}
                >
                  {cur === questions.length - 1 ? 'See Results' : 'Continue'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {status === 'complete' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-teal-50 border border-teal-pale rounded-full flex items-center justify-center text-teal-dark mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-indigo mb-4">You Appear to <em className="italic text-teal-dark">Qualify.</em></h3>
              <p className="text-[15px] text-ink-500 leading-relaxed mb-10 max-w-lg mx-auto">
                Based on your answers, you meet the criteria to invest with World Bridge Capital. Submit your application below and our team will reach out within 24 hours to walk you through the investment structure and available positions.
              </p>
              <button 
                onClick={onComplete}
                className="w-full md:w-auto font-sans text-[13px] font-bold tracking-widest uppercase text-white bg-teal-dark px-10 py-4 hover:bg-teal-dim transition-all duration-200 shadow-lg hover:shadow-teal-dark/30 transform hover:-translate-y-px"
              >
                Submit My Application &rarr;
              </button>
              <p className="text-[11px] text-ink-300 mt-6 leading-[1.6]">
                No commitment required. This is a qualification step, not an investment agreement.<br/>Past results do not guarantee future returns.
              </p>
            </motion.div>
          )}

          {status === 'disqualified' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center text-indigo mx-auto mb-6">
                <Info className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-indigo mb-4">Not the Right Fit — Yet.</h3>
              <p className="text-[15px] text-ink-500 leading-relaxed max-w-lg mx-auto">
                Based on your answers, you may not currently meet the accredited investor requirements for World Bridge Capital. Accreditation requirements may change as your financial situation evolves — we'd encourage you to revisit when your circumstances change.
              </p>
              <button 
                onClick={() => { setCur(0); setAnswers([]); setStatus('playing'); }}
                className="mt-10 font-sans text-[12px] font-bold tracking-widest uppercase text-indigo border border-indigo/20 px-8 py-3 hover:bg-indigo/5 transition-colors"
              >
                Start Over
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}