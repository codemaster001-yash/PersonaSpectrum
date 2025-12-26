import React from 'react';
import { ColorType } from '../types';

interface LowPolyFigureProps {
  type: ColorType;
  className?: string;
}

const LowPolyFigure: React.FC<LowPolyFigureProps> = ({ type, className = '' }) => {
  
  // Color Palettes (Light, Medium, Dark)
  const colors = {
    [ColorType.RED]: { light: '#fb7185', medium: '#f43f5e', dark: '#be123c' },
    [ColorType.YELLOW]: { light: '#fcd34d', medium: '#fbbf24', dark: '#d97706' },
    [ColorType.GREEN]: { light: '#6ee7b7', medium: '#34d399', dark: '#059669' },
    [ColorType.BLUE]: { light: '#7dd3fc', medium: '#38bdf8', dark: '#0284c7' },
  };

  const c = colors[type];

  // Unique polygon configurations for different "poses"
  const renderFigure = () => {
    switch (type) {
      case ColorType.RED: // Commanding / Pointing
        return (
          <g transform="translate(100, 50) scale(1.2)">
            {/* Head */}
            <polygon points="40,0 60,0 70,20 50,30 30,20" fill={c.light} />
            <polygon points="50,30 70,20 65,40 50,45" fill={c.medium} />
            
            {/* Torso */}
            <polygon points="30,20 70,20 80,60 50,90 20,60" fill={c.medium} />
            <polygon points="50,45 80,60 50,90" fill={c.dark} />
            
            {/* Right Arm (Pointing Out) */}
            <polygon points="80,25 120,20 125,35 80,45" fill={c.light} /> 
            <polygon points="120,20 140,20 135,35 125,35" fill={c.medium} />
            
            {/* Left Arm (On Hip) */}
            <polygon points="20,25 0,45 10,60 25,50" fill={c.dark} />
            
            {/* Right Leg */}
            <polygon points="50,90 80,85 85,140 65,150" fill={c.medium} />
            <polygon points="85,140 65,150 70,160 90,150" fill={c.dark} />
            
            {/* Left Leg */}
            <polygon points="50,90 20,85 15,140 35,150" fill={c.light} />
            <polygon points="15,140 35,150 30,160 10,150" fill={c.medium} />
          </g>
        );
      
      case ColorType.YELLOW: // Dynamic / Jumping
        return (
          <g transform="translate(100, 30) scale(1.2)">
             {/* Head (Tilted) */}
            <polygon points="40,0 60,5 65,25 45,30 25,20" fill={c.light} />
            
            {/* Torso (Angled) */}
            <polygon points="25,20 65,25 70,70 30,80" fill={c.medium} />
            <polygon points="30,80 70,70 50,90" fill={c.dark} />
            
            {/* Right Arm (Up high) */}
            <polygon points="65,25 90,10 100,20 70,40" fill={c.light} />
            
            {/* Left Arm (Back) */}
            <polygon points="25,20 5,30 0,50 25,40" fill={c.dark} />
            
            {/* Right Leg (Kicking back) */}
            <polygon points="50,90 80,80 100,100 80,110" fill={c.medium} />
            <polygon points="100,100 80,110 90,130 110,120" fill={c.dark} />
            
            {/* Left Leg (Forward) */}
            <polygon points="30,80 20,110 30,140 50,120" fill={c.light} />
            <polygon points="20,110 30,140 25,150 10,130" fill={c.medium} />
          </g>
        );

      case ColorType.GREEN: // Relaxed / Leaning
        return (
          <g transform="translate(110, 50) scale(1.2)">
            {/* Head */}
            <polygon points="45,5 65,5 70,25 55,35 35,25" fill={c.light} />
            
            {/* Torso */}
            <polygon points="35,25 70,25 75,65 55,90 25,65" fill={c.medium} />
            <polygon points="55,35 75,65 55,90" fill={c.dark} />

            {/* Arms (Relaxed by side) */}
            <polygon points="70,25 90,50 85,70 75,50" fill={c.light} />
            <polygon points="35,25 15,50 20,70 25,50" fill={c.dark} />

            {/* Legs (Casual stance) */}
            <polygon points="55,90 75,85 70,140 60,150" fill={c.medium} />
            <polygon points="70,140 60,150 65,160 80,150" fill={c.dark} />

            <polygon points="55,90 35,85 30,140 40,150" fill={c.light} />
            <polygon points="30,140 40,150 35,160 20,150" fill={c.medium} />
          </g>
        );

      case ColorType.BLUE: // Analytical / Stiff
        return (
          <g transform="translate(110, 50) scale(1.2)">
            {/* Head (Looking down slightly) */}
            <polygon points="40,10 60,10 65,30 50,40 35,30" fill={c.light} />
            
            {/* Torso (Straight) */}
            <polygon points="35,30 65,30 65,70 50,90 35,70" fill={c.medium} />
            <polygon points="50,40 65,70 50,90 35,70" fill={c.dark} />

            {/* Arms (Crossed roughly) */}
            <polygon points="35,30 20,50 40,55 50,50" fill={c.light} />
            <polygon points="65,30 80,50 60,55 50,50" fill={c.dark} />

            {/* Legs (Together) */}
            <polygon points="50,90 60,85 60,140 55,150" fill={c.medium} />
            <polygon points="60,140 55,150 60,160 70,150" fill={c.dark} />

            <polygon points="50,90 40,85 40,140 45,150" fill={c.light} />
            <polygon points="40,140 45,150 40,160 30,150" fill={c.medium} />
          </g>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 300 300" 
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.3))' }}
      >
        <defs>
          <radialGradient id={`glow-${type}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor={c.medium} stopOpacity="0.4" />
            <stop offset="100%" stopColor={c.medium} stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Background Aura */}
        <circle cx="150" cy="150" r="100" fill={`url(#glow-${type})`} />
        
        {renderFigure()}
      </svg>
    </div>
  );
};

export default LowPolyFigure;