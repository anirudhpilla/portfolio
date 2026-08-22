import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  FileText,
  Send,
  Award
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'skills', 'architecture', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#hero', id: 'hero' },
    { label: 'Skills & Stack', href: '#skills', id: 'skills' },
    { label: 'System Flow', href: '#architecture', id: 'architecture' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          id="nav-brand-link"
          className="group flex items-center gap-3 text-neutral-100 font-bold tracking-tight hover:text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-md shadow-cyan-500/10">
            <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-neutral-100 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
              {personalInfo.name}
            </span>
            <span className="text-xs text-neutral-400 font-mono font-normal">
              SDE · 4+ yrs · Akrivia Automation
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 border border-neutral-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-neutral-800 text-cyan-400 font-semibold shadow-inner'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a 
            href={personalInfo.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            id="nav-github-link"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href={personalInfo.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            id="nav-linkedin-link"
            className="p-2 rounded-lg text-neutral-400 hover:text-[#0A66C2] hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href={personalInfo.hackerrankUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            id="nav-hackerrank-link"
            className="p-2 rounded-lg text-neutral-400 hover:text-emerald-400 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all"
            title="HackerRank Profile"
          >
            <Award className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all shadow-sm cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            id="nav-contact-btn"
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 mt-2 backdrop-blur-xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-xs font-medium text-neutral-300 hover:text-cyan-400 bg-neutral-900/60 border border-neutral-800/80"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 justify-around py-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-neutral-300 bg-neutral-900 border border-neutral-800"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-neutral-300 bg-neutral-900 border border-neutral-800"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-neutral-300 bg-neutral-900 border border-neutral-800"
              >
                <Mail className="w-4 h-4 text-cyan-400" /> Email
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold text-neutral-950 bg-cyan-400"
              >
                <Send className="w-4 h-4" />
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
