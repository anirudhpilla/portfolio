import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
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
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Architecture', href: '#architecture', id: 'architecture' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark (Top Bar Contract) */}
        <a 
          href="#hero" 
          id="nav-brand-link"
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-300 transition-colors whitespace-nowrap"
        >
          {personalInfo.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'hover:text-white text-neutral-400'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            id="nav-contact-btn"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 cursor-pointer whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
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
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold text-neutral-950 bg-cyan-400 cursor-pointer"
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
