import React from 'react';
import { X, Info, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in duration-300">
        
        {/* Header - Google/Playful Style */}
        <div className="bg-slate-100 p-8 border-b border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Sparkles size={120} />
          </div>
          <div className="flex justify-between items-start relative z-10">
            <div>
               <h2 className="text-3xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-rose-500 via-amber-500 to-sky-500 bg-clip-text text-transparent">
                Behind the Spectrum
              </h2>
              <p className="text-slate-500 font-medium">Understanding the theory</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
            >
              <X size={24} className="text-slate-700" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div className="flex gap-4 items-start">
             <div className="min-w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
               <Info size={24} />
             </div>
             <div>
               <h3 className="text-xl font-bold mb-2">The 4-Color Methodology</h3>
               <p className="text-slate-600 leading-relaxed">
                 Based on the works of Carl Jung and later evolved by Thomas Erikson (author of <em>Surrounded by Idiots</em>) and Insights Discovery, this model simplifies complex human behavior into four distinct color energies.
               </p>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <h4 className="font-bold text-sm text-slate-400 uppercase mb-2">Intent</h4>
               <p className="text-slate-800">To improve communication, reduce workplace friction, and foster empathy by understanding that "different" doesn't mean "wrong".</p>
            </div>
             <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <h4 className="font-bold text-sm text-slate-400 uppercase mb-2">Usage</h4>
               <p className="text-slate-800">Use this poster as a quick reference guide before meetings or difficult conversations to tailor your approach.</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-100 text-center text-sm text-slate-400">
            Designed as an interactive educational tool.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;