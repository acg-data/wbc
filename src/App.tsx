import { useState, useEffect, lazy, Suspense } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ProofTicker } from './components/ProofTicker';
import { AssetClass } from './components/AssetClass';
import { Returns } from './components/Returns';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudies } from './components/CaseStudies';
import { PullQuote } from './components/PullQuote';
import { PlatformHub } from './components/PlatformHub';
import { QuizFunnel } from './components/QuizFunnel';
import { Included } from './components/Included';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { TrustBar } from './components/TrustBar';
import { ExitIntentModal } from './components/ExitIntentModal';

// Lazy load VSL for performance
const VSL = lazy(() => import('./components/VSL').then(module => ({ default: module.VSL })));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [exitIntentKey, setExitIntentKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => setIsModalOpen(true);

  const closeExitIntent = () => setExitIntentKey(prev => prev + 1);

  return (
    <div className="min-h-screen bg-cream font-sans text-ink-500">
      <Nav onQuizClick={scrollToQuiz} />
      
      <main>
        <Hero />
        
        {/* Lazy loaded VSL */}
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center bg-indigo-dark">
            <div className="animate-pulse text-white/50">Loading...</div>
          </div>
        }>
          <VSL onQuizClick={scrollToQuiz} />
        </Suspense>
        
        <ProofTicker />
        <AssetClass />
        <Returns />
        <HowItWorks />
        <CaseStudies />
        <PullQuote />
        <PlatformHub onResourceClick={openModal} />
        <QuizFunnel onComplete={openModal} />
        <Included />
        <FAQ />
        <TrustBar />
        <FinalCTA onQuizClick={scrollToQuiz} />
      </main>

      <Footer />

      {/* Sticky Bottom Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-t border-ink-100 shadow-[0_-4px_24px_rgba(39,33,98,0.08)] px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="text-[13px] font-medium text-ink-500 text-center md:text-left">
          Earn <strong className="text-teal-dark">8–10% + profit sharing</strong> on asset-backed trade finance. Q2 2026 allocation open now.
        </div>
        <button 
          onClick={scrollToQuiz}
          className="font-sans text-[11px] font-bold tracking-widest uppercase text-white bg-teal-dark px-6 py-2.5 hover:bg-teal-dim transition-all duration-200 transform hover:-translate-y-px shadow-sm"
        >
          Check Eligibility &rarr;
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ExitIntentModal key={exitIntentKey} onClose={closeExitIntent} />
    </div>
  );
}

export default App;