import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PlaceholderModal } from './components/PlaceholderModal';
import { Education } from './components/Education';

const PortfolioContent: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [placeholderInfo, setPlaceholderInfo] = useState<{
    type: string;
    projectName: string;
  } | null>(null);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handlePlaceholderClick = (type: string, projectName: string) => {
    setPlaceholderInfo({ type, projectName });
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] dark:bg-[#121214] text-[#111111] dark:text-[#F5F0E8] selection:bg-[#FFD84D] selection:text-[#111111] font-sans antialiased overflow-x-hidden transition-colors duration-200">




      {/* Navigation */}
      <Navbar onResumeClick={handleOpenResume} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onResumeClick={handleOpenResume} />
        <About />
        <Education />
        <TechStack />
        <Projects onPlaceholderClick={handlePlaceholderClick} />
        <Achievements />

        <ResumeCTA onResumeClick={handleOpenResume} />
        <Contact onPlaceholderClick={handlePlaceholderClick} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <PlaceholderModal
        isOpen={!!placeholderInfo}
        onClose={() => setPlaceholderInfo(null)}
        info={placeholderInfo}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default App;
