import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/resumeDownload';
import { Terminal, Github, Linkedin, Mail, ArrowUp, Phone, Award, MapPin, Download, Loader2 } from 'lucide-react';

export default function Footer() {
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      await downloadResumePdf('resume.pdf');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          
          {/* Brand & Location */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">{personalInfo.name}</span>
              <span className="text-[11px] text-neutral-400 font-mono flex items-center gap-1.5 mt-0.5">
                <span>{personalInfo.profession}</span>
                <span>•</span>
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </div>

          {/* Social Links & Resume Download */}
          <div className="flex items-center flex-wrap gap-2.5">
            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              id="footer-resume-download-btn"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-cyan-400 disabled:opacity-75 border border-neutral-800 transition-colors cursor-pointer"
              title="Download Resume (PDF)"
            >
              {isDownloading ? (
                <Loader2 className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5 text-cyan-400" />
              )}
              <span>Resume PDF</span>
            </button>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-[#0A66C2] border border-neutral-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.hackerrankUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-emerald-400 border border-neutral-800 transition-colors"
              title="HackerRank"
            >
              <Award className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-cyan-400 border border-neutral-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-emerald-400 border border-neutral-800 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors ml-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>

        </div>

        {/* Copyright & Stack summary */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.name} — Software Development Engineer (4+ Yrs Exp)
          </div>
          <div>
            NestJS • Node.js • Redis • RabbitMQ • PostgreSQL • React • Microservices
          </div>
        </div>

      </div>
    </footer>
  );
}
