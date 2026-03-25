interface NavProps {
  onQuizClick: () => void;
}

export function Nav({ onQuizClick }: NavProps) {
  return (
    <>
      <div className="bg-indigo-dark text-teal-pale text-center py-2.5 px-6 text-xs font-semibold tracking-widest uppercase">
        Q2 2026 allocation now open — <strong className="text-white">Limited capacity for new accredited investors</strong>
      </div>
      
      <nav className="sticky top-0 z-50 h-16 flex items-center justify-between px-6 md:px-14 bg-cream/95 backdrop-blur-md border-b border-indigo/10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo flex items-center justify-center relative overflow-hidden">
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-teal-dark rounded-full opacity-90"></div>
            <span className="font-serif text-lg font-bold text-white relative z-10">W</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-indigo tracking-tight leading-none">World Bridge Capital</span>
            <span className="font-sans text-[8px] font-bold tracking-[0.2em] uppercase text-teal-dark mt-0.5">Trade Finance Investment Platform</span>
          </div>
        </div>
        
        <button 
          onClick={onQuizClick}
          className="hidden md:inline-block font-sans text-xs font-bold tracking-widest uppercase text-white bg-teal-dark px-6 py-3 hover:bg-teal-dim transition-all duration-200 transform hover:-translate-y-px shadow-lg hover:shadow-teal-dark/30"
        >
          Check My Eligibility &rarr;
        </button>
      </nav>
    </>
  );
}