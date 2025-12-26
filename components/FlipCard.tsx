import React, { useState } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  isPrintMode?: boolean;
}

const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  className = "",
  isPrintMode = false,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle flip only if not in print mode
  const handleFlip = (e: React.MouseEvent) => {
    if (!isPrintMode) {
      e.stopPropagation(); // Prevent bubbling to parent containers
      setIsFlipped(!isFlipped);
    }
  };

  if (isPrintMode) {
    // In print mode, render the BACK content (the info) directly
    // Ensure height is auto/full to fill the parent's fixed height
    return (
      <div
        className={`p-4 rounded-xl border border-slate-700 bg-slate-800 overflow-visible h-full ${className}`}
      >
        {back}
      </div>
    );
  }

  return (
    <div
      className={`relative perspective-1000 cursor-pointer w-full ${className}`}
      onClick={handleFlip}
    >
      <div
        className={`w-full h-full duration-500 transform-style-3d transition-transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg border border-white/5 bg-slate-800 p-6 flex flex-col items-center justify-center text-center z-20 group">
          {/* Content Wrapper */}
          <div
            className="w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
            {front}
          </div>

          <span className="absolute bottom-3 right-3 text-xs text-white/30 font-light tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Tap to Reveal
          </span>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-xl border border-white/10 bg-slate-900 z-10">
          {/* Content Container */}
          <div className="w-full h-full p-4 flex flex-col text-center">
            {back}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
