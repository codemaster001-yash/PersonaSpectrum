import React, { useState } from 'react';
import { PERSONALITY_DATA } from './constants';
import { PersonalityData, ColorType } from './types';
import FlipCard from './components/FlipCard';
import StatsChart from './components/StatsChart';
import AboutModal from './components/AboutModal';
import QuickReferenceModal from './components/QuickReferenceModal';
import LowPolyFigure from './components/LowPolyFigure';
import { 
  Zap, 
  Brain, 
  Target, 
  MessageCircle, 
  Activity, 
  HelpCircle,
  Printer,
  Lightbulb
} from 'lucide-react';

// Simplified 3D Human Logo Component
const Logo3D: React.FC<{className?: string}> = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0">
     {/* Abstract Human Form using low-poly style triangles */}
     <path d="M50 5 L70 20 L50 35 L30 20 Z" fill="#f43f5e" className="opacity-90"/> {/* Head */}
     <path d="M30 25 L70 25 L85 55 L50 85 L15 55 Z" fill="#8b5cf6" className="opacity-90"/> {/* Body */}
     <path d="M50 85 L15 55 L25 95 L50 95 Z" fill="#3b82f6" className="opacity-80"/> {/* Leg Left */}
     <path d="M50 85 L85 55 L75 95 L50 95 Z" fill="#06b6d4" className="opacity-80"/> {/* Leg Right */}
     
     {/* Wireframe overlay for 3D effect */}
     <path d="M50 5 L50 35 M30 20 L70 20 M50 35 L50 85" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
  </svg>
);

const App: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isQuickRefOpen, setIsQuickRefOpen] = useState(false);
  const [printMode, setPrintMode] = useState(false);

  // Helper to resolve impact text color
  const getImpactColor = (impactColorType: ColorType) => {
    switch (impactColorType) {
      case ColorType.RED: return 'text-rose-400';
      case ColorType.YELLOW: return 'text-amber-400';
      case ColorType.GREEN: return 'text-emerald-400';
      case ColorType.BLUE: return 'text-sky-400';
      default: return 'text-white';
    }
  };

  return (
    <div className={`min-h-screen bg-[#0f172a] text-slate-100 pb-20 ${printMode ? 'print-layout' : ''}`}>
      
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-40 bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <Logo3D className="w-full h-full drop-shadow-lg" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              Persona<span className="font-light">Spectrum</span>
            </h1>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => setIsQuickRefOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-300 hover:text-indigo-200 transition-all"
            title="Quick Reference"
          >
            <Lightbulb size={18} />
            <span className="hidden md:inline text-sm font-medium">Quick Ref</span>
          </button>

          <button 
            onClick={() => setPrintMode(!printMode)}
            className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              printMode ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            <Printer size={16} />
            {printMode ? 'Poster Mode On' : 'Poster Mode'}
          </button>
          
          <button 
            onClick={() => setIsAboutOpen(true)}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <HelpCircle size={20} />
          </button>
        </div>
      </nav>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <QuickReferenceModal isOpen={isQuickRefOpen} onClose={() => setIsQuickRefOpen(false)} />

      {/* Main Content Grid */}
      <main className="container mx-auto px-4 mt-8 max-w-[1600px]">
        
        {/* Intro Text - Always visible even in print mode */}
         <div className="text-center mb-16 max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Who are you dealing with?
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 text-lg text-slate-300 font-medium">
            
            {/* Question 1: Introvert (Blue/Green) vs Extrovert (Red/Yellow) */}
            <div className="w-full flex-1 px-8 py-4 bg-slate-800/40 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl flex items-center justify-center gap-3">
              <span className="text-3xl font-black uppercase bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                Introverted
              </span>
              <span className="text-slate-600 text-sm font-bold uppercase tracking-wider">vs</span>
              <span className="text-3xl font-black uppercase bg-gradient-to-r from-rose-500 to-amber-400 bg-clip-text text-transparent drop-shadow-sm">
                Extroverted
              </span>
            </div>
            
            {/* Question 2: Logical (Blue/Red) vs Emotional (Green/Yellow) */}
            <div className="w-full flex-1 px-8 py-4 bg-slate-800/40 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl flex items-center justify-center gap-3">
               <span className="text-3xl font-black uppercase bg-gradient-to-r from-sky-400 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                Logical
              </span>
              <span className="text-slate-600 text-sm font-bold uppercase tracking-wider">vs</span>
               <span className="text-3xl font-black uppercase bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent drop-shadow-sm">
                Emotional
              </span>
            </div>
            
            {/* Question 3: Deliberate (Green/Blue) vs Quick (Red/Yellow) */}
            <div className="w-full flex-1 px-8 py-4 bg-slate-800/40 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl flex items-center justify-center gap-3">
               <span className="text-3xl font-black uppercase bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent drop-shadow-sm">
                Deliberate
              </span>
              <span className="text-slate-600 text-sm font-bold uppercase tracking-wider">vs</span>
               <span className="text-3xl font-black uppercase bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                Quick
              </span>
            </div>

          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PERSONALITY_DATA.map((p: PersonalityData) => (
            <div 
              key={p.type} 
              className={`relative flex flex-col rounded-3xl overflow-hidden border ${p.borderColor} bg-[#1a2236] transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] ${p.shadowColor}`}
            >
              {/* Header Section: 3D Figure & Title */}
              <div className={`p-6 pb-0 relative overflow-hidden min-h-[360px] flex flex-col pt-10`}> {/* Increased top padding */}
                
                {/* Background Glow */}
                <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] ${p.bgColor} opacity-40`} />
                <div className={`absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-[80px] ${p.bgColor} opacity-20`} />
                
                <div className="relative z-10 flex flex-col items-center flex-grow">
                  
                  {/* Title moved to top */}
                  <h3 className={`text-5xl font-black uppercase mb-4 w-full text-center tracking-tight ${p.textColor} drop-shadow-lg`}>
                    {p.type}
                  </h3>

                  {/* Tagline */}
                  <div className={`text-xs font-bold tracking-widest uppercase mb-8 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 ${p.textColor} shadow-lg z-20`}>
                    {p.tagline}
                  </div>
                  
                  {/* "3D" Avatar Component */}
                  <div className="w-full flex-grow relative -my-4 group">
                     <LowPolyFigure type={p.type} />
                     
                     {/* Big Background Letter - Adjusted for new layout */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white mix-blend-overlay opacity-5 select-none pointer-events-none">
                       {p.type.charAt(0)}
                     </div>
                  </div>
                  
                </div>
              </div>

              {/* Interactive Flip Cards Grid */}
              <div className="flex-1 p-4 pt-0 grid grid-cols-1 gap-4 z-20">
                
                {/* Card 1: Description */}
                <FlipCard 
                  isPrintMode={printMode}
                  className="h-40"
                  front={
                    <div className="flex flex-col items-center gap-3">
                      <Brain size={32} className={p.textColor} />
                      <h4 className="text-lg font-bold text-slate-200">Who Are They?</h4>
                    </div>
                  }
                  back={
                    <div className="text-sm text-slate-300 leading-relaxed font-medium">
                      "{p.description}"
                    </div>
                  }
                />

                {/* Card 2: Stats */}
                <FlipCard 
                  isPrintMode={printMode}
                  className="h-48"
                  front={
                    <div className="flex flex-col items-center gap-3">
                      <Activity size={32} className={p.textColor} />
                      <h4 className="text-lg font-bold text-slate-200">The Specs</h4>
                    </div>
                  }
                  back={
                    <div className="w-full h-full">
                       <StatsChart data={p.stats} color={p.themeColor} textColorClass={p.textColor} />
                    </div>
                  }
                />

                {/* Card 3: Communication */}
                <FlipCard 
                  isPrintMode={printMode}
                  className="h-44"
                  front={
                    <div className="flex flex-col items-center gap-3">
                      <MessageCircle size={32} className={p.textColor} />
                      <h4 className="text-lg font-bold text-slate-200">How to Talk</h4>
                    </div>
                  }
                  back={
                    <div className="w-full">
                      <h5 className={`text-xs uppercase font-bold mb-3 ${p.textColor} opacity-80`}>Communication Keys</h5>
                      <ul className="space-y-2">
                        {p.communicationTips.map((tip, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-200 bg-white/5 p-1.5 rounded-lg border border-white/5">
                            <Target size={12} className={p.textColor} />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                />

                {/* Card 4: Impact */}
                <FlipCard 
                  isPrintMode={printMode}
                  className="h-48"
                  front={
                    <div className="flex flex-col items-center gap-3">
                      <Zap size={32} className={p.textColor} />
                      <h4 className="text-lg font-bold text-slate-200">Impact on Others</h4>
                    </div>
                  }
                  back={
                    <div className="w-full text-left">
                       <h5 className={`text-xs uppercase font-bold mb-3 ${p.textColor} opacity-80`}>Perception</h5>
                       <div className="space-y-3">
                         {p.impactOnOthers.map((impact, i) => (
                           <div key={i} className="text-xs border-l-2 border-slate-700 pl-2">
                             <span className={`font-bold uppercase ${getImpactColor(impact.color)}`}>{impact.color}: </span>
                             <span className="text-slate-400 italic">{impact.description}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                  }
                />

              </div>
              
              {/* Footer strip for card */}
              <div className={`h-2 w-full ${p.bgColor.replace('/10', '')} opacity-80`}></div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-20 text-center text-slate-600 text-sm pb-8">
        <p>© 2024 PersonaSpectrum. Concepts adapted from Jungian archetypes & modern personality theory.</p>
      </footer>
    </div>
  );
};

export default App;