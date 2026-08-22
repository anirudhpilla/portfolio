import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Server, 
  Database, 
  Layout, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';

const categoryIcons = {
  backend: Server,
  databases: Database,
  frontend: Layout,
  devops: Cpu,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Engineering Stack
            </h2>
            <p className="text-neutral-400 text-base mt-2 max-w-xl">
              Proven proficiency across the full application lifecycle with deep emphasis on high-concurrency Node.js microservices, Redis caching, SQL optimization, and React frontends.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800/80">
            <button
              onClick={() => setSelectedCategory('all')}
              id="skill-filter-all"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                id={`skill-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Architecture Banner for Core Stack */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-neutral-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center md:text-left">
            <div className="md:col-span-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Architecture Blueprint
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                How My Core Stack Delivers High Throughput
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Zero-bottleneck data flow from client trigger to persistent storage.
              </p>
            </div>

            <div className="md:col-span-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-2 p-3 bg-neutral-950/80 rounded-xl border border-neutral-800/80">
              <div className="flex-1 min-w-[70px] text-center p-2 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <span className="block text-[11px] font-mono text-cyan-400 font-bold">React UI</span>
                <span className="text-[10px] text-neutral-400">Interactive</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-600 shrink-0 hidden sm:block" />
              <div className="flex-1 min-w-[70px] text-center p-2 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <span className="block text-[11px] font-mono text-emerald-400 font-bold">Node.js</span>
                <span className="text-[10px] text-neutral-400">Microservices</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-600 shrink-0 hidden sm:block" />
              <div className="flex-1 min-w-[70px] text-center p-2 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <span className="block text-[11px] font-mono text-red-400 font-bold">Redis</span>
                <span className="text-[10px] text-neutral-400">Cache / Locks</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-600 shrink-0 hidden sm:block" />
              <div className="flex-1 min-w-[70px] text-center p-2 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <span className="block text-[11px] font-mono text-blue-400 font-bold">SQL DB</span>
                <span className="text-[10px] text-neutral-400">ACID Storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons] || Server;
            return (
              <div
                key={category.id}
                id={`skill-category-${category.id}`}
                className="rounded-2xl bg-neutral-900/50 border border-neutral-800/90 p-6 hover:border-neutral-700/80 transition-all shadow-lg"
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-neutral-800">
                  <div className="p-2.5 rounded-xl bg-neutral-800 text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-neutral-400">{category.description}</p>
                  </div>
                </div>

                {/* Skills list inside category */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/60 hover:border-neutral-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="text-sm font-semibold text-neutral-200">
                            {skill.name}
                          </span>
                          {skill.isPrimary && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                              Core
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono text-neutral-400">
                          {skill.experience}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Real-world use case / description */}
                      <p className="text-xs text-neutral-400 leading-snug">
                        <span className="text-neutral-500 font-mono text-[11px]">Usage: </span>
                        {skill.useCase}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
