import React from 'react';
import { StudyCardData, Program } from '../types';

interface ConceptCardProps {
  data: StudyCardData;
  onClick: () => void;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ data, onClick }) => {
  const isSixSigma = data.program === Program.SIX_SIGMA;

  return (
    <div 
      onClick={onClick}
      className={`group relative bg-white p-6 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full
        ${isSixSigma 
          ? 'border-slate-200 hover:border-sigma-500' 
          : 'border-gray-200 hover:border-accent-500'}`}
    >
      {/* Dynamic Left Border */}
      <div className={`absolute top-0 left-0 w-1.5 h-full rounded-l-xl transition-colors duration-300 
        ${isSixSigma 
          ? 'bg-slate-200 group-hover:bg-sigma-500' 
          : 'bg-gray-200 group-hover:bg-accent-600'}`}>
      </div>
      
      <div className="flex justify-between items-start mb-4 pl-3">
        <span className={`text-[10px] font-extrabold uppercase tracking-widest transition-colors
          ${isSixSigma 
            ? 'text-slate-400 group-hover:text-sigma-600' 
            : 'text-gray-400 group-hover:text-accent-600'}`}>
          {data.category}
        </span>
        <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
          {data.emoji}
        </div>
      </div>
      
      <div className="pl-3 flex-grow">
        <h3 className={`text-lg font-bold mb-2 transition-colors
           ${isSixSigma 
             ? 'text-slate-900 group-hover:text-sigma-800' 
             : 'text-brand-900 group-hover:text-accent-600'}`}>
          {data.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {data.definition}
        </p>
      </div>

      <div className="pl-3 mt-auto pt-4 border-t border-gray-100">
        <div className={`flex items-center text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300
           ${isSixSigma ? 'text-sigma-600' : 'text-accent-600'}`}>
          Estudiar a fondo <span className="ml-1">→</span>
        </div>
      </div>
    </div>
  );
};