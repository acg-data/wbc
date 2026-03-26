interface NavProps {
  onQuizClick: () => void;
}

export function Nav({ onQuizClick }: NavProps) {
  return (
    <>
      {/* Skip navigation link for keyboard users */}
      <a href="#quiz" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:bg-teal-dark focus:text-white focus:px-4 focus:py-2 focus:text-sm">
        Skip to eligibility quiz
      </a>

      <div className="bg-indigo-dark text-teal-pale text-center py-2.5 px-6 text-xs font-semibold tracking-widest uppercase" role="banner">
        Q2 2026 allocation now accepting applications — <strong className="text-white">For accredited investors</strong>
      </div>
      
      <nav className="sticky top-0 z-50 h-16 flex items-center justify-between px-6 md:px-14 bg-cream/95 backdrop-blur-md border-b border-indigo/10 shadow-sm" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-3" aria-label="World Bridge Capital - Home">
          <div className="w-8 h-8 bg-indigo flex items-center justify-center relative overflow-hidden" aria-hidden="true">
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-teal-dark rounded-full opacity-90"></div>
            <span className="font-serif text-lg font-bold text-white relative z-10">W</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-indigo tracking-tight leading-none">World Bridge Capital</span>
            <span className="font-sans text-[8px] font-bold tracking-[0.2em] uppercase text-teal-dark mt-0.5">Trade Finance Investment Platform</span>
          </div>
        </a>
        
        <button 
          onClick={onQuizClick}
          className="font-sans text-[10px] md:text-xs font-bold tracking-widest uppercase text-white bg-teal-dark px-4 md:px-6 py-2.5 md:py-3 hover:bg-teal-dim transition-all duration-200 transform hover:-translate-y-px shadow-lg hover:shadow-teal-dark/30"
        >
          Check Eligibility <span aria-hidden="true">&rarr;</span>
        </button>
      </nav>
    </>
  );
}