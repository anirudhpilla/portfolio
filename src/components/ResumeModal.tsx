import { useState } from 'react';
import { personalInfo, experienceData, skillCategories, projectsData } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/resumeDownload';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Loader2,
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
  Sparkles
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedText, setCopiedText] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    try {
      setIsDownloading(true);
      await downloadResumePdf('Anirudh_Pilla_Resume.pdf');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyPlainText = () => {
    const text = `
ANIRUDH PILLA
Visakhapatnam, India | ${personalInfo.phone} | ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinUrl} | GitHub: ${personalInfo.githubUrl} | HackerRank: ${personalInfo.hackerrankUrl}

SUMMARY
${personalInfo.bio}

TECHNICAL SKILLS
- Languages: JavaScript, TypeScript, Python, SQL
- Frameworks: Node.js, NestJS, Express.js, React, Angular, TypeORM
- Architecture: Microservices, Event-Driven Architecture, REST APIs, Multi-Tenant Systems, RBAC, SSO
- Databases: PostgreSQL, MySQL, MongoDB, DynamoDB
- Caching & Messaging: Redis, RabbitMQ, Async Processing Pipelines
- Cloud & DevOps: Docker, Jenkins, CI/CD, Grafana
- AI-Assisted Tools: Claude Code, Cursor IDE
- Practices: System Design, Agile/Scrum, Unit & Integration Testing, Performance Optimization

EXPERIENCE
Akrivia Automation Pvt. Ltd. (Mar 2022 – Present) — Visakhapatnam, India
Software Development Engineer
• Facttwin (Feb 2024 – Present): Developed and scaled Machine Health Monitoring, a multi-tenant industrial automation SaaS platform supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ-based event-driven architecture.
• Improved API performance by 33% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.
• Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.
• Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (MongoDB + SQL Server) architecture for time-series and relational workloads.
• Akrivia HCM (Mar 2022 – Jan 2024): Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.
• Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance complexity.
• Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.
• Built reusable backend services and API integrations to support HR workflows, improving module scalability and enabling faster feature delivery across the platform.

PROJECTS
• Boltticket | Node.js, TypeScript, Redis, BullMQ, PostgreSQL, k6
  Engineered a high-concurrency distributed ticket booking platform sustaining 955 RPS (57K+ requests/min) with no error rate, achieving 3.05 ms median and 7.21 ms P95 latency through Redis Lua-based distributed locking and BullMQ-powered asynchronous workflows.
• LiveBoard | React, Node.js, Socket.io, HTML5 Canvas, MongoDB
  Built a real-time collaborative whiteboard using React, Socket.io, and HTML5 Canvas, enabling low-latency multi-user drawing, persistent history storage, custom tools, and image export capabilities.
• Face Filters | MediaPipe, OpenCV, TensorFlow
  Developed a real-time emotion recognition system with 82% accuracy, classifying 7 primary emotions to trigger dynamic facial filters.

EDUCATION
Raghu Engineering College — Visakhapatnam, India
B.Tech, Computer Science and Engineering (CGPA: 9.16/10) | Apr 2023
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
              Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              id="resume-download-pdf-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-75 text-xs font-bold text-neutral-950 transition-colors shadow-sm cursor-pointer"
              title="Download Resume PDF"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
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
        <div id="printable-resume" className="space-y-8 bg-neutral-950 p-6 sm:p-10 rounded-xl border border-neutral-800/80 font-sans">
          
          {/* Header */}
          <div className="text-center border-b border-neutral-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{personalInfo.name}</h1>
            
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-2 text-xs text-neutral-300 font-mono">
              <span>{personalInfo.location}</span>
              <span className="text-neutral-600">•</span>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-cyan-300">
                {personalInfo.phone}
              </a>
              <span className="text-neutral-600">•</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300">
                {personalInfo.email}
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-2 text-xs font-mono">
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
              <div><strong className="text-white font-mono">Languages:</strong> JavaScript, TypeScript, Python, SQL</div>
              <div><strong className="text-white font-mono">Frameworks:</strong> Node.js, NestJS, Express.js, React, Angular, TypeORM</div>
              <div><strong className="text-white font-mono">Architecture:</strong> Microservices, Event-Driven Architecture, REST APIs, Multi-Tenant Systems, RBAC, SSO</div>
              <div><strong className="text-white font-mono">Databases:</strong> PostgreSQL, MySQL, MongoDB, DynamoDB</div>
              <div><strong className="text-white font-mono">Caching & Messaging:</strong> Redis, RabbitMQ, Async Processing Pipelines</div>
              <div><strong className="text-white font-mono">Cloud & DevOps:</strong> Docker, Jenkins, CI/CD, Grafana</div>
              <div><strong className="text-white font-mono">AI-Assisted Tools:</strong> Claude Code, Cursor IDE</div>
              <div><strong className="text-white font-mono">Practices:</strong> System Design, Agile/Scrum, Unit & Integration Testing, Performance Optimization</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 pb-1 border-b border-neutral-800">
              Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h4 className="text-sm font-bold text-white">Akrivia Automation Pvt. Ltd.</h4>
                  <span className="text-xs font-mono text-cyan-400">Mar 2022 – Present</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-400 mb-3 italic">
                  <span>Software Development Engineer</span>
                  <span>Visakhapatnam, India</span>
                </div>

                <div className="space-y-4">
                  {/* Facttwin */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-semibold text-neutral-200">
                      • Facttwin (Feb 2024 – Present):
                    </h5>
                    <ul className="list-disc list-outside ml-5 space-y-1.5 text-xs text-neutral-300 leading-relaxed">
                      <li>Developed and scaled Machine Health Monitoring, a multi-tenant industrial automation SaaS platform supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ-based event-driven architecture.</li>
                      <li>Improved API performance by 33% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.</li>
                      <li>Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.</li>
                      <li>Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (MongoDB + SQL Server) architecture for time-series and relational workloads.</li>
                    </ul>
                  </div>

                  {/* Akrivia HCM */}
                  <div className="space-y-2 pt-2">
                    <h5 className="text-xs font-semibold text-neutral-200">
                      • Akrivia HCM (Mar 2022 – Jan 2024):
                    </h5>
                    <ul className="list-disc list-outside ml-5 space-y-1.5 text-xs text-neutral-300 leading-relaxed">
                      <li>Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.</li>
                      <li>Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance complexity.</li>
                      <li>Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.</li>
                      <li>Built reusable backend services and API integrations to support HR workflows, improving module scalability and enabling faster feature delivery across the platform.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 pb-1 border-b border-neutral-800">
              Projects
            </h3>
            
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white">Boltticket</h4>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[11px] font-mono text-neutral-400">Node.js, TypeScript, Redis, BullMQ, PostgreSQL, k6</span>
                </div>
                <p className="text-neutral-300 leading-relaxed pl-2">
                  • Engineered a high-concurrency distributed ticket booking platform sustaining 955 RPS (57K+ requests/min) with no error rate, achieving 3.05 ms median and 7.21 ms P95 latency through Redis Lua-based distributed locking and BullMQ-powered asynchronous workflows.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white">LiveBoard</h4>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[11px] font-mono text-neutral-400">React, Node.js, Socket.io, HTML5 Canvas, MongoDB</span>
                </div>
                <p className="text-neutral-300 leading-relaxed pl-2">
                  • Built a real-time collaborative whiteboard using React, Socket.io, and HTML5 Canvas, enabling low-latency multi-user drawing, persistent history storage, custom tools, and image export capabilities.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white">Face Filters</h4>
                  <span className="text-neutral-500">|</span>
                  <span className="text-[11px] font-mono text-neutral-400">MediaPipe, OpenCV, TensorFlow</span>
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
