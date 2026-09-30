import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/downloadResume';
import { 
  Download, 
  Copy, 
  Check, 
  X, 
  ExternalLink, 
  FileText 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    downloadResumeFile('Anirudh_Pilla_Resume.pdf');
  };

  const handleCopyPlainText = () => {
    const text = `
${personalInfo.name}
Software Development Engineer
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedinUrl} | GitHub: ${personalInfo.githubUrl} | HackerRank: ${personalInfo.hackerrankUrl}

SUMMARY
Full-Stack & Backend Engineer with 4+ years of hands-on experience building high-throughput microservices, scalable distributed architectures, multi-tenant SaaS platforms, and agentic AI systems. Specialized in Python (FastAPI), Node.js (NestJS), Redis, PostgreSQL, RabbitMQ, and cloud infrastructure.

TECHNICAL SKILLS
• Languages & Runtimes: Python, TypeScript, JavaScript, SQL, HTML5/CSS3
• Frameworks & Libraries: FastAPI, NestJS, React.js, Express.js, Angular, TypeORM, SQLAlchemy, Tailwind CSS
• Databases & Vector Stores: PostgreSQL, MySQL, Redis, MongoDB, pgvector (HNSW Indexing)
• Distributed Systems & Queues: RabbitMQ, BullMQ, Redis Streams & Distributed Locks, RESTful APIs, WebSockets
• Cloud, DevOps & Tools: Docker, AWS (EC2, S3), Git, Linux/Unix, Postman, Vite

EXPERIENCE
Software Development Engineer | Akrivia Automation Pvt. Ltd. (Facttwin)
Visakhapatnam, India | Aug 2022 – Present
• Architected and developed high-throughput REST APIs and microservices using Python (FastAPI) and NestJS across 15+ multi-tenant smart factory environments.
• Built distributed caching and locking with Redis and RabbitMQ message queues, reducing peak-load latency by 35% and preventing concurrency conflicts.
• Engineered dual-database ingestion layer (PostgreSQL relational transactional schema + MongoDB time-series IoT storage) handling 100k+ daily telemetry metrics.
• Implemented role-based access control (RBAC), multi-tenant tenancy isolation, and SSO authentication for 10,000+ active enterprise users.
• Developed interactive React and Angular analytics dashboards with sub-second live telemetry rendering.

Software Engineer Intern | Akrivia Automation Pvt. Ltd.
Visakhapatnam, India | Feb 2022 – Jul 2022
• Built reusable REST endpoints in Node.js/Express with input validation pipelines, reducing invalid client requests by 25%.
• Optimized complex MySQL database queries and indexing strategies, decreasing average response time from 180ms to 95ms.
• Created comprehensive API documentation using Swagger/OpenAPI specifications and collaborated with QA for automated integration testing.

KEY PROJECTS
• Cortex - Agentic Local Codebase Intelligence (FastAPI, pgvector, HNSW, Cross-Encoder)
• Boltticket - High-Concurrency Flash-Sale Ticketing Engine (Redis Lua, BullMQ, Express, 955 RPS)
• Facttwin - Enterprise Multi-Tenant SmartFactory System (NestJS, FastAPI, RabbitMQ, Dual-DB)
• Real-Time Collaborative Whiteboard (React, Socket.io, HTML5 Canvas)

EDUCATION
Raghu Engineering College | Visakhapatnam, India
B.Tech, Computer Science and Engineering (CGPA: 9.16/10) | Mar 2023
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="resume-modal-dialog"
        className="relative w-full max-w-5xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-4 sm:p-6 my-4 text-neutral-100 max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Toolbar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
                Resume Preview
              </span>
              <span className="text-[11px] text-neutral-400 hidden sm:inline">
                Anirudh_Pilla_Resume.pdf
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              id="resume-download-pdf-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-xs font-bold text-neutral-950 transition-colors shadow-sm cursor-pointer"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <a
              href="/Anirudh_Pilla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="resume-open-tab-btn"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-300 transition-colors cursor-pointer"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Tab</span>
            </a>

            <button
              onClick={handleCopyPlainText}
              id="resume-copy-text-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-300 transition-colors cursor-pointer"
              title="Copy resume text to clipboard"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              id="resume-close-btn"
              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Static PDF Preview Frame */}
        <div className="relative w-full h-[78vh] min-h-[520px] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-inner flex flex-col">
          <object
            data="/Anirudh_Pilla_Resume.pdf#view=FitH"
            type="application/pdf"
            className="w-full h-full rounded-xl"
          >
            <iframe
              src="/Anirudh_Pilla_Resume.pdf#view=FitH"
              title="Resume Preview"
              className="w-full h-full border-0 rounded-xl"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto" />
                <div>
                  <h3 className="text-base font-bold text-white">Anirudh Pilla Resume</h3>
                  <p className="text-xs text-neutral-400 mt-1 max-w-sm">
                    Your browser does not support embedded PDF rendering directly inside this frame.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-neutral-950 font-bold text-xs"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <a
                    href="/Anirudh_Pilla_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 text-xs font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open PDF
                  </a>
                </div>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </div>
  );
}
