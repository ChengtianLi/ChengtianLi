import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionType, Language } from './types';
import DesignSection from './components/DesignSection';
import ResearchSection from './components/ResearchSection';
import AboutSection from './components/AboutSection';

const App: React.FC = () => {
  // Default to Design view
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.DESIGN);
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const toggleLanguage = () => {
    setLanguage(prev => prev === Language.EN ? Language.JP : Language.EN);
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-theme-yellow/30">

      {/* Main Container */}
      <div className={`mx-auto min-h-screen flex flex-col ${selectedProject ? '' : 'max-w-7xl px-6 lg:px-12 py-10'}`}>

        {/* Floating Language Toggle (Project Detail) */}
        {selectedProject && (
          <button
            onClick={toggleLanguage}
            className="fixed top-8 right-8 z-50 p-2 text-[10px] font-bold uppercase tracking-widest text-[#555] opacity-60 hover:opacity-100 transition-opacity"
          >
            {language === Language.EN ? 'JP' : 'EN'}
          </button>
        )}

        {/* Global Header */}
        {!selectedProject && (
          <div className="w-full relative z-30">
            <div className="flex justify-between items-end pb-4 border-b border-black">
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-black">
                Chengtian (Chia) Li
              </h1>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={toggleLanguage}
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-1"
                >
                  {language === Language.EN ? 'JP' : 'EN'}
                </button>
                <nav className="flex gap-8 pb-1">
                  <button
                    onClick={() => setActiveSection(SectionType.DESIGN)}
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === SectionType.DESIGN
                      ? 'text-black'
                      : 'text-gray-400 hover:text-theme-purple'
                      }`}
                  >
                    {language === Language.EN ? 'Design' : 'デザイン'}
                  </button>
                  <button
                    onClick={() => setActiveSection(SectionType.RESEARCH)}
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === SectionType.RESEARCH
                      ? 'text-black'
                      : 'text-gray-400 hover:text-theme-purple'
                      }`}
                  >
                    {language === Language.EN ? 'Research' : '研究'}
                  </button>
                  <button
                    onClick={() => setActiveSection(SectionType.ABOUT)}
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === SectionType.ABOUT
                      ? 'text-black'
                      : 'text-gray-400 hover:text-theme-purple'
                      }`}
                  >
                    {language === Language.EN ? 'About' : 'プロフィール'}
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Content Area */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            {activeSection === SectionType.DESIGN && (
              <motion.div
                key="design"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <DesignSection
                  language={language}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                />
              </motion.div>
            )}

            {activeSection === SectionType.RESEARCH && (
              <motion.div
                key="research"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <ResearchSection language={language} />
              </motion.div>
            )}

            {activeSection === SectionType.ABOUT && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <AboutSection language={language} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default App;