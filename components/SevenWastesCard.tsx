import React from 'react';
import { WASTES_DATA } from '../constants';

interface SevenWastesCardProps {
    onClick: () => void;
}

export const SevenWastesCard: React.FC<SevenWastesCardProps> = ({ onClick }) => {
  return (
    <div 
        onClick={onClick}
        className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-lg border border-gray-300 shadow-sm hover:shadow-lg hover:border-gray-400 transition-all duration-300 cursor-pointer p-8 group relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gray-50 rounded-full z-0 group-hover:bg-gray-100 transition-colors"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b border-gray-100 pb-6">
        <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-white transition-colors">
                <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">🗑️</span>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-900">Los 7 Desperdicios (Muda)</h3>
                <p className="text-gray-500 text-sm mt-1">Concepto fundamental de ineficiencia.</p>
            </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col items-end">
             <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-mono border border-gray-200 uppercase tracking-widest">
                Mnemotecnia: TIM WOOD
            </div>
             <p className="text-xs text-accent-600 mt-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Clic para estudiar en profundidad →
             </p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {WASTES_DATA.map((waste, idx) => (
          <div key={idx} className="text-center group-hover:-translate-y-1 transition-transform duration-300 delay-[0ms]">
            <div className="text-2xl mb-2 grayscale group-hover:grayscale-0 transition-all">{waste.emoji}</div>
            <div className="text-xs font-bold text-gray-700">{waste.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};