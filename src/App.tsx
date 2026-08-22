/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyMetrics from './components/KeyMetrics';
import SkillsSection from './components/SkillsSection';
import ArchitecturePlayground from './components/ArchitecturePlayground';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Navigation Header */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenContact={handleOpenContact}
          onOpenResume={() => setResumeOpen(true)}
        />
        
        <KeyMetrics />

        <SkillsSection />

        <ArchitecturePlayground />

        <ExperienceSection />

        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}
