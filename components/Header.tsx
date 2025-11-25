import React from 'react';
import { Program } from '../types';

interface HeaderProps {
  currentProgram: Program;
  onSwitchProgram: (program: Program) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentProgram, onSwitchProgram }) => {
  const isSixSigma = currentProgram === Program.SIX_SIGMA;

  return (
    <header className={`py-8 px-4 border-b mb-8 transition-colors duration-500 ${isSixSigma ? 'bg-sigma-900 border-sigma-800' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
            <h2 className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${isSixSigma ? 'text-sigma-500' : 'text-accent-600'}`}>
                Ingeniería Industrial & Sistemas
            </h2>
            <h1 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${isSixSigma ? 'text-white' : 'text-slate-900'}`}>
                Guía de Estudio <span className={`${isSixSigma ? 'text-sigma-500' : 'text-slate-700'}`}>
                  {isSixSigma ? 'Six Sigma' : 'Lean Manufacturing'}
                </span>
            </h1>
        </div>

        {/* Program Switcher */}
        <div className="flex bg-gray-200/50 p-1 rounded-full backdrop-blur-sm">
          <button
            onClick={() => onSwitchProgram(Program.LEAN)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              !isSixSigma 
                ? 'bg-white text-accent-600 shadow-md transform scale-105' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Lean
          </button>
          <button
            onClick={() => onSwitchProgram(Program.SIX_SIGMA)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              isSixSigma 
                ? 'bg-sigma-500 text-sigma-900 shadow-md transform scale-105' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Six Sigma
          </button>
        </div>
      </div>
    </header>
  );
};