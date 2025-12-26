import React from 'react';
import { 
  X, 
  Target, Zap, Crown, // Red
  Sparkles, MessageCircle, Sun, // Yellow
  Heart, Shield, Anchor, // Green
  Brain, FileText, Ruler, // Blue
  Lightbulb
} from 'lucide-react';
import { ColorType } from '../types';

interface QuickReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickReferenceModal: React.FC<QuickReferenceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const quickData = [
    {
      type: ColorType.RED,
      title: "Commander",
      bg: "bg-rose-500",
      text: "text-rose-400",
      border: "border-rose-500/30",
      bgRaw: "bg-rose-500",
      symbols: [
        { icon: Crown, label: "Power" },
        { icon: Target, label: "Results" },
        { icon: Zap, label: "Speed" }
      ],
      keywords: ["Direct", "Firm", "Do It Now"]
    },
    {
      type: ColorType.YELLOW,
      title: "Influencer",
      bg: "bg-amber-400",
      text: "text-amber-400",
      border: "border-amber-400/30",
      bgRaw: "bg-amber-400",
      symbols: [
        { icon: Sun, label: "Optimism" },
        { icon: Sparkles, label: "Ideas" },
        { icon: MessageCircle, label: "Chat" }
      ],
      keywords: ["Fun", "Fast", "Involve Me"]
    },
    {
      type: ColorType.GREEN,
      title: "Supporter",
      bg: "bg-emerald-400",
      text: "text-emerald-400",
      border: "border-emerald-400/30",
      bgRaw: "bg-emerald-400",
      symbols: [
        { icon: Heart, label: "Harmony" },
        { icon: Anchor, label: "Stability" },
        { icon: Shield, label: "Safety" }
      ],
      keywords: ["Care", "Calm", "Show Me"]
    },
    {
      type: ColorType.BLUE,
      title: "Analyst",
      bg: "bg-sky-400",
      text: "text-sky-400",
      border: "border-sky-400/30",
      bgRaw: "bg-sky-400",
      symbols: [
        { icon: Brain, label: "Logic" },
        { icon: Ruler, label: "Precision" },
        { icon: FileText, label: "Details" }
      ],
      keywords: ["Facts", "Plan", "Prove It"]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl bg-[#0f172a] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900/50 p-6 border-b border-slate-800 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
              <Lightbulb size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Quick Reference Guide</h2>
              <p className="text-slate-400 text-sm">Visual recall symbols for rapid identification</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickData.map((item) => (
              <div key={item.type} className={`bg-slate-900/50 rounded-2xl p-6 border ${item.border} flex flex-col items-center text-center hover:bg-slate-800/80 transition-colors`}>
                
                {/* Header Bubble */}
                <div className={`w-full py-3 rounded-xl mb-6 ${item.bg} bg-opacity-10 border ${item.border} border-opacity-30`}>
                  <h3 className={`text-2xl font-black uppercase tracking-wider ${item.text}`}>{item.type}</h3>
                  <span className="text-sm text-slate-300 font-bold uppercase tracking-widest opacity-80">{item.title}</span>
                </div>

                {/* Symbols */}
                <div className="flex justify-between gap-2 mb-8 w-full px-2">
                  {item.symbols.map((s, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group flex-1">
                      <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-${item.text.split('-')[1]}-500/50 transition-colors shadow-lg`}>
                        <s.icon size={28} className={item.text} />
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Keywords - Enhanced Pop */}
                <div className="mt-auto w-full pt-6 border-t border-slate-800/50">
                   <div className="flex flex-col gap-2">
                     {item.keywords.map((k, i) => (
                       <div key={i} className={`w-full py-2 px-3 ${item.bgRaw} rounded-lg shadow-lg transform transition-transform hover:scale-[1.02]`}>
                         <span className="text-sm md:text-base lg:text-lg font-bold text-slate-900 uppercase tracking-tight block">
                           {k}
                         </span>
                       </div>
                     ))}
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickReferenceModal;