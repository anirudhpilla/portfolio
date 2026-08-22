import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Zap, 
  Layers, 
  Server,
  Sparkles,
  Info
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Backend & Microservices', 'Distributed Systems', 'Full-Stack'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-neutral-950/60 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Highlighted Projects & Systems
            </h2>
            <p className="text-neutral-400 text-base mt-2 max-w-xl">
              Production architectures engineered for high throughput, sub-millisecond cache latency, and data integrity.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-cyan-500 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group flex flex-col rounded-2xl bg-neutral-900/40 border border-neutral-800/90 hover:border-neutral-700/90 transition-all hover:bg-neutral-900/70 p-6 md:p-8 relative shadow-xl overflow-hidden"
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                    title="View GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors cursor-pointer"
                    title="View System Breakdown"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>System Details</span>
                  </button>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 
                onClick={() => onSelectProject(project)}
                className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer mb-2"
              >
                {project.title}
              </h3>

              <p className="text-xs text-neutral-400 mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Metrics Pills */}
              <div className="grid grid-cols-3 gap-2 my-auto py-3 px-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 mb-5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-[10px] font-mono text-neutral-500 block truncate">{m.label}</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400 block mt-0.5">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-neutral-800/60 mt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-950 text-neutral-300 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
