import { Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Zap, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-modal-dialog"
        className="relative w-full max-w-3xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 my-8 text-neutral-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="project-modal-close-btn"
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-5 p-3 rounded-xl bg-neutral-950 border border-neutral-800">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-2">
              <span className="text-[11px] font-mono text-neutral-400 block">{metric.label}</span>
              <span className="text-base sm:text-lg font-extrabold text-cyan-400 font-mono mt-0.5 block">{metric.value}</span>
            </div>
          ))}
        </div>

        {/* System Architecture Flow Snippet */}
        {project.systemDiagramSnippet && (
          <div className="mb-5 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> System Architecture Dataflow
            </span>
            <div className="font-mono text-cyan-300 bg-neutral-900/90 p-2.5 rounded-lg border border-neutral-800/80 overflow-x-auto text-[11px]">
              {project.systemDiagramSnippet}
            </div>
          </div>
        )}

        {/* Detailed Description */}
        <div className="space-y-4 mb-6 text-sm text-neutral-300 leading-relaxed">
          <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Technical Problem & Architecture Solution
          </h4>
          <p>{project.longDescription}</p>
        </div>

        {/* Architecture Highlights */}
        <div className="space-y-2.5 mb-6">
          <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            System Design Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.architectureHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-800 text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-neutral-500 font-mono">
            Designed & Engineered by Anirudh Pilla
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              Close Overview
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
