import React, { useEffect, useRef } from 'react';
import { StudyCardData, WasteData, Program, VisualizationType } from '../types';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: StudyCardData | null;
  wastesData?: WasteData[];
}

// Sub-component for CSS Visual Simulations
const VisualSimulation: React.FC<{ type: VisualizationType }> = ({ type }) => {
  if (type === 'bell-curve') {
    return (
      <div className="my-6 p-6 bg-slate-900 rounded-lg text-center relative overflow-hidden h-48 flex items-end justify-center">
        {/* Bell Curve Shape using simple CSS border radius trick or SVG */}
        <svg viewBox="0 0 200 100" className="w-full h-full absolute bottom-0">
          <path d="M0,90 Q50,90 70,50 T100,10 T130,50 T200,90" fill="none" stroke="#eab308" strokeWidth="3" className="animate-draw" />
          {/* Mean Line */}
          <line x1="100" y1="10" x2="100" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4" />
          <text x="105" y="30" fill="white" fontSize="8">Media (μ)</text>
          {/* Sigma Lines */}
          <line x1="130" y1="50" x2="130" y2="100" stroke="#94a3b8" strokeWidth="1" />
          <text x="135" y="70" fill="#94a3b8" fontSize="6">+1σ</text>
        </svg>
        <div className="absolute top-2 right-4 text-xs text-sigma-500 font-mono">Simulación: Distribución Normal</div>
      </div>
    );
  }

  if (type === 'control-chart') {
    return (
      <div className="my-6 p-6 bg-white border border-gray-200 rounded-lg h-48 relative">
        <div className="absolute top-2 right-4 text-xs text-gray-400 font-mono">Gráfica X-Bar</div>
        <div className="h-full flex flex-col justify-between py-4 relative">
            {/* Lines */}
            <div className="w-full border-t border-red-500 border-dashed absolute top-[20%]"><span className="text-[9px] text-red-500 absolute -top-3 right-0">UCL (+3σ)</span></div>
            <div className="w-full border-t border-green-500 absolute top-[50%]"><span className="text-[9px] text-green-600 absolute -top-3 right-0">Media (x̄)</span></div>
            <div className="w-full border-t border-red-500 border-dashed absolute top-[80%]"><span className="text-[9px] text-red-500 absolute -top-3 right-0">LCL (-3σ)</span></div>
            
            {/* Data Points (Simulated) */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <polyline 
                    points="0,50 20,40 40,60 60,45 80,55 100,20 120,50 140,55 160,50 180,45 200,60" 
                    fill="none" 
                    stroke="#1e3a8a" 
                    strokeWidth="2" 
                    className="animate-draw"
                />
                 <circle cx="100" cy="20" r="4" fill="red" /> {/* Outlier */}
            </svg>
        </div>
      </div>
    );
  }

  if (type === 'pareto') {
    return (
        <div className="my-6 p-6 bg-white border border-gray-200 rounded-lg h-48 flex items-end justify-around gap-2 pb-6 relative">
             <div className="absolute top-2 right-4 text-xs text-gray-400 font-mono">Pareto (80/20)</div>
             <div className="w-12 bg-sigma-800 h-[80%] rounded-t relative group"><span className="absolute -top-4 w-full text-center text-xs font-bold">50</span></div>
             <div className="w-12 bg-sigma-800 h-[60%] rounded-t relative"><span className="absolute -top-4 w-full text-center text-xs font-bold">30</span></div>
             <div className="w-12 bg-slate-300 h-[30%] rounded-t relative"><span className="absolute -top-4 w-full text-center text-xs font-bold">10</span></div>
             <div className="w-12 bg-slate-300 h-[15%] rounded-t relative"><span className="absolute -top-4 w-full text-center text-xs font-bold">5</span></div>
             <div className="w-12 bg-slate-300 h-[5%] rounded-t relative"><span className="absolute -top-4 w-full text-center text-xs font-bold">2</span></div>
             
             {/* Cumulative Line */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <polyline points="40,30 100,50 160,90 220,110 280,120" fill="none" stroke="#eab308" strokeWidth="2" />
             </svg>
        </div>
    );
  }

  if (type === 'cp-cpk') {
      return (
          <div className="my-6 p-4 bg-gray-50 border border-gray-200 rounded-lg flex flex-col gap-4">
              {/* Scenario 1: Good Cp, Bad Cpk */}
              <div className="relative h-20 bg-white border rounded overflow-hidden">
                  <div className="absolute inset-y-0 left-[10%] right-[10%] border-l-2 border-r-2 border-red-400 border-dashed bg-green-50/30 flex items-center justify-center">
                    <span className="text-[10px] text-gray-400">Garaje (Specs)</span>
                  </div>
                  {/* Car (Process) shifted right */}
                  <div className="absolute top-4 bottom-4 left-[60%] w-[20%] bg-blue-500/50 rounded-full border border-blue-600 flex items-center justify-center text-[10px] text-white">
                      Proceso
                  </div>
                  <div className="absolute bottom-1 w-full text-center text-[9px] font-bold text-red-600">
                      Cp Alto (Cabe) pero Cpk Bajo (Descentrado) -> ¡Choque!
                  </div>
              </div>
          </div>
      );
  }

  return null;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, data, wastesData }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const isWasteView = !!wastesData;
  const isSixSigma = data?.program === Program.SIX_SIGMA;

  // Theme Colors
  const headerBg = isSixSigma ? 'bg-sigma-900' : 'bg-gray-50';
  const headerText = isSixSigma ? 'text-white' : 'text-gray-900';
  const closeBtnClass = isSixSigma ? 'text-gray-300 hover:text-white hover:bg-sigma-800' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200';
  const accentColor = isSixSigma ? 'text-sigma-500' : 'text-accent-600';
  const bgAccent = isSixSigma ? 'bg-sigma-50 border-sigma-200' : 'bg-blue-50 border-blue-100';
  const titleAccent = isSixSigma ? 'text-sigma-900' : 'text-blue-900';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-5 border-b border-gray-100 ${headerBg}`}>
          <div className="flex items-center gap-4">
             <span className="text-4xl filter drop-shadow-md">
                {isWasteView ? '🗑️' : data?.emoji}
             </span>
             <div>
                <h2 className={`text-2xl font-bold ${headerText}`}>
                    {isWasteView ? 'Los 7 Desperdicios (Muda)' : data?.title}
                </h2>
                {!isWasteView && (
                    <span className={`text-xs font-bold uppercase tracking-wider ${isSixSigma ? 'text-sigma-500' : 'text-gray-500'}`}>
                        {data?.category}
                    </span>
                )}
             </div>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${closeBtnClass}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 bg-white">
            
            {isWasteView && wastesData ? (
                /* Wastes View (Existing Code) */
                <div className="space-y-8">
                    <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-red-500 pl-4 bg-red-50 py-4 pr-4 rounded-r-lg">
                        Muda (Desperdicio) es cualquier actividad que consume recursos sin crear valor para el cliente. La eliminación del desperdicio es la esencia del Lean Manufacturing.
                    </p>
                    <div className="grid gap-6">
                        {wastesData.map((waste, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">{waste.emoji}</span>
                                    <h3 className="text-lg font-bold text-gray-900">{waste.name}</h3>
                                </div>
                                <p className="text-gray-800 font-medium mb-2">{waste.desc}</p>
                                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{waste.details}</p>
                                <div className="bg-white p-3 rounded border border-gray-200 text-xs">
                                    <strong className="text-gray-900">Consecuencias:</strong> <span className="text-gray-600">{waste.consequences}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : data ? (
                /* Standard Concept View */
                <>
                    {/* Definition Section */}
                    <section>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Definición Profunda</h3>
                        <p className="text-lg text-gray-800 leading-relaxed font-serif">
                            {data.extendedContent.deepDefinition}
                        </p>
                    </section>
                    
                    {/* Visual Simulation Injection */}
                    {data.visualization && (
                        <VisualSimulation type={data.visualization} />
                    )}

                    {/* Context Section */}
                    <section className={`${bgAccent} p-6 rounded-lg border`}>
                        <h3 className={`text-sm font-bold ${titleAccent} uppercase tracking-widest mb-2`}>Contexto e Importancia</h3>
                        <p className={`${isSixSigma ? 'text-slate-700' : 'text-blue-800'} leading-relaxed`}>
                            {data.extendedContent.context}
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Key Points */}
                        <section>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Puntos Clave</h3>
                            <ul className="space-y-2">
                                {data.keyPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isSixSigma ? 'bg-sigma-500' : 'bg-accent-500'}`}></span>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Methodology */}
                        <section>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Metodología / Pasos</h3>
                            <ul className="space-y-2">
                                {data.extendedContent.methodology.map((step, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className={`font-mono font-bold mr-3 text-sm pt-0.5 ${accentColor}`}>{(idx + 1).toString().padStart(2, '0')}.</span>
                                        <span className="text-gray-700">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                    
                    {/* EXAM TRAP - SPECIFIC FOR SIX SIGMA */}
                    {data.extendedContent.examTrap && (
                        <section className="mt-4">
                             <div className="border-2 border-red-100 bg-red-50/50 rounded-xl p-5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-10 text-5xl">⚠️</div>
                                <h3 className="text-red-700 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    Trampa de Examen
                                </h3>
                                <p className="text-red-900 font-medium italic">
                                    "{data.extendedContent.examTrap}"
                                </p>
                             </div>
                        </section>
                    )}

                    {/* Example Section */}
                    <section className="border-t border-gray-100 pt-6">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Ejemplo Práctico</h3>
                        <div className={`rounded-lg p-5 italic text-gray-600 border-l-4 ${isSixSigma ? 'bg-slate-50 border-sigma-500' : 'bg-gray-50 border-accent-500'}`}>
                            "{data.extendedContent.example}"
                        </div>
                    </section>
                </>
            ) : null}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
            <button 
                onClick={onClose}
                className={`px-6 py-2 text-white font-semibold rounded-lg hover:shadow-lg transition-all ${isSixSigma ? 'bg-sigma-800 hover:bg-sigma-900' : 'bg-gray-900 hover:bg-black'}`}
            >
                Entendido
            </button>
        </div>
      </div>
    </div>
  );
};