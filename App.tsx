import React, { useState, useMemo, useEffect } from 'react';
import { STUDY_DATA, WASTES_DATA } from './constants';
import { Category, StudyCardData, Program } from './types';
import { ConceptCard } from './components/ConceptCard';
import { SevenWastesCard } from './components/SevenWastesCard';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { DetailModal } from './components/DetailModal';

const App: React.FC = () => {
  const [currentProgram, setCurrentProgram] = useState<Program>(Program.LEAN);
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<StudyCardData | null>(null);
  const [showWastesDetail, setShowWastesDetail] = useState(false);

  // Reset category when switching programs
  const handleProgramSwitch = (program: Program) => {
    setCurrentProgram(program);
    setSelectedCategory(Category.ALL);
  };

  const filteredData = useMemo(() => {
    // First filter by Program
    let data = STUDY_DATA.filter(item => item.program === currentProgram);

    // Then filter by Category
    if (selectedCategory !== Category.ALL) {
      data = data.filter(item => item.category === selectedCategory);
    }
    return data;
  }, [currentProgram, selectedCategory]);

  const showWastesCard = currentProgram === Program.LEAN && (selectedCategory === Category.ALL || selectedCategory === Category.WASTE);

  // Handlers
  const handleCardClick = (concept: StudyCardData) => {
    setSelectedConcept(concept);
    setShowWastesDetail(false);
    setIsModalOpen(true);
  };

  const handleWastesClick = () => {
    setSelectedConcept(null);
    setShowWastesDetail(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
        setSelectedConcept(null);
        setShowWastesDetail(false);
    }, 200);
  };

  // Background style based on program
  const bgClass = currentProgram === Program.SIX_SIGMA ? 'bg-slate-100' : 'bg-slate-50';

  return (
    <div className={`min-h-screen pb-20 font-sans transition-colors duration-500 ${bgClass}`}>
      <Header currentProgram={currentProgram} onSwitchProgram={handleProgramSwitch} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FilterBar 
          selectedCategory={selectedCategory} 
          currentProgram={currentProgram}
          onSelectCategory={setSelectedCategory} 
        />

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            
            {/* Standard Concept Cards */}
            {filteredData.map((concept) => (
              <ConceptCard 
                key={concept.id} 
                data={concept} 
                onClick={() => handleCardClick(concept)}
              />
            ))}

            {/* Special 7 Wastes Card (Only for Lean) */}
            {showWastesCard && (
                <SevenWastesCard onClick={handleWastesClick} />
            )}
            
          </div>

          {filteredData.length === 0 && !showWastesCard && (
            <div className="text-center py-32 border-2 border-dashed border-gray-300 rounded-xl opacity-60">
              <p className="text-gray-500 font-medium">No hay conceptos en esta categoría.</p>
            </div>
          )}
        </main>
        
        <footer className="mt-24 text-center text-xs text-gray-400 border-t border-gray-200 pt-8 pb-8">
          <p className="font-semibold uppercase tracking-wider text-gray-300">
            Guía de Estudio Profesional • {currentProgram}
          </p>
        </footer>
      </div>

      {/* Detail Modal */}
      <DetailModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        data={selectedConcept}
        wastesData={showWastesDetail ? WASTES_DATA : undefined}
      />
    </div>
  );
};

export default App;