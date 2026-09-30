import { useState, MouseEvent } from 'react';
import { personalInfo, experienceData, skillCategories, projectsData } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/downloadResume';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Phone,
  Github, 
  Linkedin, 
  ExternalLink,
  Briefcase,
  Code2,
  Database,
  Layers,
  GraduationCap,
  Award,
  Sparkles,
  Bot
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: MouseEvent) => {
    e.preventDefault();
    downloadResumeFile('Anirudh_Pilla_Resume.pdf');
  };

  const handleCopyPlainText = () => {
    const text = `
ANIRUDH PILLA
Portfolio | (+91) 9949266794 | anirudhxdev@gmail.com | LinkedIn: ${personalInfo.linkedinUrl} | GitHub: ${personalInfo.githubUrl} | HackerRank: ${personalInfo.hackerrankUrl}

SUMMARY
${personalInfo.bio}

TECHNICAL SKILLS
Languages: Python, JavaScript, TypeScript, SQL
Frameworks: FastAPI, React, TypeORM, Node.js, NestJS, Express.js, Angular
Architecture: Microservices, Event-Driven Architecture, REST APIs, Multi-Tenant Systems, RBAC, SSO
Databases: PostgreSQL, MySQL, MongoDB
Caching & Messaging: Redis, RabbitMQ, Async Processing Pipelines
Cloud & DevOps: AWS, Docker, Jenkins, CI/CD, Grafana
AI Assisted Tools: Claude Code, Cursor IDE
Practices: System Design, Agile/Scrum, Unit & Integration Testing, Performance Optimization

EXPERIENCE
Akrivia Automation Pvt. Ltd. | Jun 2023 – Aug 2026
Software Development Engineer | Visakhapatnam, India
• Facttwin (Feb 2024 – Aug 2026): Developed and scaled Machine Health Monitoring, a multi-tenant industrial automation SaaS platform supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ-based event-driven architecture and contributed to the SmartFactory project, developing backend services and APIs using Python and FastAPI.
• Improved API performance by 33% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.
• Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.
• Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (PostgreSQL + MongoDB) architecture for relational and time-series workloads.
• Akrivia HCM (Jun 2023 – Jan 2024): Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.
• Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.

Akrivia Automation Pvt. Ltd. | Mar 2022 – May 2023
Software Development Engineer Intern | Visakhapatnam, India
• Akrivia HCM (Mar 2022 – May 2023): Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance.
• Identified and resolved 30+ production issues in Angular and Hapi.js services during early deployment phases, reducing production incidents and improving overall system reliability.

PROJECTS
• Cortex | Python, FastAPI, pgvector, PostgreSQL, OpenAI API, Local LLMs
  Built RAG and tool-calling agent backend to query multi-repository codebases and documentation with real-time streaming. Optimized retrieval accuracy using recursive syntax-aware chunking, pgvector HNSW indexing, and cross-encoder re-ranking to minimize hallucinations. Implemented a custom agentic execution loop for code-symbol searches and integrated a dual-mode fallback supporting local quantized models alongside cloud APIs.

• Boltticket | Node.js, TypeScript, Redis, BullMQ, PostgreSQL, k6
  Engineered a high-concurrency distributed ticket booking platform sustaining 955 RPS (57K+ requests/min) with no error rate, achieving 3.05 ms median and 7.21 ms P95 latency through Redis Lua-based distributed locking and BullMQ-powered asynchronous workflows.

• LiveBoard | React, Node.js, Socket.io, HTML5 Canvas, MongoDB
  Built a real-time collaborative whiteboard using React, Socket.io, and HTML5 Canvas, enabling low-latency multi-user drawing, persistent history storage, custom tools, and image export capabilities.

• Face Filters | MediaPipe, OpenCV, TensorFlow
  Developed a real-time emotion recognition system with 82% accuracy, classifying 7 primary emotions to trigger dynamic facial filters.

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="resume-modal-dialog"
        className="relative w-full max-w-4xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-10 my-8 text-neutral-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Toolbar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              Official Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              id="resume-download-pdf-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-xs font-bold text-neutral-950 transition-colors shadow-sm cursor-pointer"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              id="resume-copy-text-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-300 transition-colors cursor-pointer"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
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

        {/* Printable Resume Sheet styled cleanly like the PDF */}
        <div id="printable-resume" className="space-y-7 bg-neutral-950 p-6 sm:p-10 rounded-xl border border-neutral-800/80 font-sans">
          
          {/* Header */}
          <div className="text-center border-b border-neutral-800 pb-5">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{personalInfo.name}</h1>
            
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-2 text-xs text-neutral-300 font-mono">
              <span className="text-cyan-400 font-medium">Portfolio</span>
              <span className="text-neutral-600">•</span>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-cyan-300">
                {personalInfo.phone}
              </a>
              <span className="text-neutral-600">•</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300">
                {personalInfo.email}
              </a>
              <span className="text-neutral-600">•</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                LinkedIn
              </a>
              <span className="text-neutral-600">•</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                GitHub
              </a>
              <span className="text-neutral-600">•</span>
              <a href={personalInfo.hackerrankUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                HackerRank
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 pb-1 border-b border-neutral-800">
              Summary
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 pb-1 border-b border-neutral-800">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs text-neutral-300">
              <div><strong className="text-white font-mono">Languages:</strong> Python, JavaScript, TypeScript, SQL</div>
              <div><strong className="text-white font-mono">Frameworks:</strong> FastAPI, React, TypeORM, Node.js, NestJS, Express.js, Angular</div>
              <div><strong className="text-white font-mono">Architecture:</strong> Microservices, Event-Driven Architecture, REST APIs, Multi-Tenant Systems, RBAC, SSO</div>
              <div><strong className="text-white font-mono">Databases:</strong> PostgreSQL, MySQL, MongoDB</div>
              <div><strong className="text-white font-mono">Caching & Messaging:</strong> Redis, RabbitMQ, Async Processing Pipelines</div>
              <div><strong className="text-white font-mono">Cloud & DevOps:</strong> AWS, Docker, Jenkins, CI/CD, Grafana</div>
              <div><strong className="text-white font-mono">AI Assisted Tools:</strong> Claude Code, Cursor IDE</div>
              <div><strong className="text-white font-mono">Practices:</strong> System Design, Agile/Scrum, Unit & Integration Testing, Performance Optimization</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 pb-1 border-b border-neutral-800">
              Experience
            </h3>
            
            <div className="space-y-6">
              {/* Role 1: SDE */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                  <h4 className="text-sm font-bold text-white">Akrivia Automation Pvt. Ltd.</h4>
                  <span className="text-xs font-mono text-cyan-400">Jun 2023 – Aug 2026</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-400 mb-3 italic">
                  <span>Software Development Engineer</span>
                  <span>Visakhapatnam, India</span>
                </div>

                <div className="space-y-3">
                  {/* Facttwin */}
                  <div className="space-y-1.5">
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-neutral-300 leading-relaxed">
                      <li>
                        <strong className="text-white">Facttwin (Feb 2024 – Aug 2026):</strong> Developed and scaled Machine Health Monitoring, a multi-tenant industrial automation SaaS platform supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ-based event-driven architecture and contributed to the SmartFactory project, developing backend services and APIs using Python and FastAPI.
                      </li>
                      <li>
                        Improved API performance by 33% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.
                      </li>
                      <li>
                        Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.
                      </li>
                      <li>
                        Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (PostgreSQL + MongoDB) architecture for relational and time-series workloads.
                      </li>
                    </ul>
                  </div>

                  {/* Akrivia HCM */}
                  <div className="space-y-1.5 pt-1">
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-neutral-300 leading-relaxed">
                      <li>
                        <strong className="text-white">Akrivia HCM (Jun 2023 – Jan 2024):</strong> Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.
                      </li>
                      <li>
                        Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Role 2: Intern */}
              <div className="pt-2 border-t border-neutral-800/60">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                  <h4 className="text-sm font-bold text-white">Akrivia Automation Pvt. Ltd.</h4>
                  <span className="text-xs font-mono text-cyan-400">Mar 2022 – May 2023</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-400 mb-3 italic">
                  <span>Software Development Engineer Intern</span>
                  <span>Visakhapatnam, India</span>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-neutral-300 leading-relaxed">
                  <li>
                    <strong className="text-white">Akrivia HCM (Mar 2022 – May 2023):</strong> Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance.
                  </li>
                  <li>
                    Identified and resolved 30+ production issues in Angular and Hapi.js services during early deployment phases, reducing production incidents and improving overall system reliability.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 pb-1 border-b border-neutral-800">
              Projects
            </h3>
            
            <div className="space-y-4 text-xs">
              {/* Cortex */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white">Cortex</h4>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[11px] font-mono text-cyan-300">Python, FastAPI, pgvector, PostgreSQL, OpenAI API, Local LLMs</span>
                </div>
                <p className="text-neutral-300 leading-relaxed pl-2">
                  • Built RAG and tool-calling agent backend to query multi-repository codebases and documentation with real-time streaming. Optimized retrieval accuracy using recursive syntax-aware chunking, pgvector HNSW indexing, and cross-encoder re-ranking to minimize hallucinations. Implemented a custom agentic execution loop for code-symbol searches and integrated a dual-mode fallback supporting local quantized models alongside cloud APIs.
                </p>
              </div>

              {/* Boltticket */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white">Boltticket</h4>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[11px] font-mono text-cyan-300">Node.js, TypeScript, Redis, BullMQ, PostgreSQL, k6</span>
                </div>
                <p className="text-neutral-300 leading-relaxed pl-2">
                  • Engineered a high-concurrency distributed ticket booking platform sustaining 955 RPS (57K+ requests/min) with no error rate, achieving 3.05 ms median and 7.21 ms P95 latency through Redis Lua-based distributed locking and BullMQ-powered asynchronous workflows.
                </p>
              </div>

              {/* LiveBoard */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white">LiveBoard</h4>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[11px] font-mono text-cyan-300">React, Node.js, Socket.io, HTML5 Canvas, MongoDB</span>
                </div>
                <p className="text-neutral-300 leading-relaxed pl-2">
                  • Built a real-time collaborative whiteboard using React, Socket.io, and HTML5 Canvas, enabling low-latency multi-user drawing, persistent history storage, custom tools, and image export capabilities.
                </p>
              </div>

              {/* Face Filters */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white">Face Filters</h4>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[11px] font-mono text-cyan-300">MediaPipe, OpenCV, TensorFlow</span>
                </div>
                <p className="text-neutral-300 leading-relaxed pl-2">
                  • Developed a real-time emotion recognition system with 82% accuracy, classifying 7 primary emotions to trigger dynamic facial filters.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 pb-1 border-b border-neutral-800">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <div>
                <h4 className="font-bold text-white">{personalInfo.education.institution}</h4>
                <span className="text-neutral-300">{personalInfo.education.degree} ({personalInfo.education.grade})</span>
              </div>
              <div className="text-neutral-400 font-mono mt-1 sm:mt-0 text-left sm:text-right">
                <div>{personalInfo.education.location}</div>
                <div className="text-cyan-400">{personalInfo.education.period}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
