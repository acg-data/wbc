import { useState, useEffect, lazy, Suspense } from 'react';
import { EsNav } from './components/EsNav';
import { EsHero } from './components/EsHero';
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
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load VSL for performance
const EsVSL = lazy(() => import('./components/EsVSL').then(module => ({ default: module.EsVSL })));

function EsApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

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

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-cream font-sans text-ink-500">
        <EsNav onQuizClick={scrollToQuiz} />
        
        <main id="main-content">
          <EsHero />
          
          {/* Lazy loaded VSL */}
          <Suspense fallback={
            <div className="h-96 flex items-center justify-center bg-indigo-dark" role="status" aria-label="Cargando sección de video">
              <div className="skeleton w-24 h-4 rounded"></div>
            </div>
          }>
            <EsVSL onQuizClick={scrollToQuiz} />
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
          role="complementary"
          aria-label="Resumen de inversión"
        >
          <div className="text-[13px] font-medium text-ink-500 text-center md:text-left">
            Objetivo <strong className="text-teal-dark">8–10% + participación en ganancias</strong> en factoraje comercial respaldado por activos.* Q2 2026.
          </div>
          <button 
            onClick={scrollToQuiz}
            className="font-sans text-[11px] font-bold tracking-widest uppercase text-white bg-teal-dark px-6 py-2.5 hover:bg-teal-dim transition-all duration-200 transform hover:-translate-y-px shadow-sm"
          >
            Verificar Elegibilidad <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </ErrorBoundary>
  );
}

export default EsApp;