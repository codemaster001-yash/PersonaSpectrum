import React from 'react';
import { StatPoint } from '../types';

interface StatsChartProps {
  data: StatPoint[];
  color: string;
  textColorClass?: string;
}

const StatsChart: React.FC<StatsChartProps> = ({ data, color, textColorClass = 'text-white' }) => {
  return (
    <div className="w-full h-full min-h-[120px] flex flex-col justify-center gap-3 py-1">
        {data.map((stat, index) => (
          <div key={index} className="flex items-center gap-3 w-full">
            {/* Label */}
            <span className="w-24 text-[10px] md:text-xs font-bold text-slate-400 uppercase text-right leading-tight tracking-wide shrink-0">
              {stat.label}
            </span>
            
            {/* Bar Container */}
            <div className="flex-1 h-2.5 md:h-3 bg-slate-800 rounded-full overflow-hidden relative shadow-inner shrink-0">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out" 
                style={{ 
                  width: `${stat.value * 10}%`, 
                  backgroundColor: color,
                  opacity: 0.9 
                }}
              />
            </div>
            
            {/* Value Number */}
            <span className={`w-6 text-sm md:text-base font-black text-right ${textColorClass} shrink-0`}>
              {stat.value}
            </span>
          </div>
        ))}
    </div>
  );
};

export default StatsChart;