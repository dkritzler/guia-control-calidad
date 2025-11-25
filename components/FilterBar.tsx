import React from 'react';
import { Category, Program } from '../types';

interface FilterBarProps {
  selectedCategory: Category;
  currentProgram: Program;
  onSelectCategory: (cat: Category) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ selectedCategory, currentProgram, onSelectCategory }) => {
  // Define categories per program
  const leanCategories = [
    Category.ALL,
    Category.FLOW,
    Category.QUALITY,
    Category.STRATEGY,
    Category.ANALYSIS,
    Category.WASTE
  ];

  const sixSigmaCategories = [
    Category.ALL,
    Category.FUNDAMENTALS,
    Category.DMAIC,
    Category.STATS_TOOLS,
    Category.CAPABILITY
  ];

  const categories = currentProgram === Program.LEAN ? leanCategories : sixSigmaCategories;
  const isSixSigma = currentProgram === Program.SIX_SIGMA;

  return (
    <div className="flex flex-wrap gap-2 mb-10 px-4 md:px-0 justify-center md:justify-start">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 border ${
            selectedCategory === cat
              ? isSixSigma 
                ? 'bg-sigma-800 border-sigma-800 text-sigma-500 shadow-lg shadow-sigma-900/20' 
                : 'bg-slate-800 border-slate-800 text-white shadow-md'
              : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};