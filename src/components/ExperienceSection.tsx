import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Layers, Sparkles, TrendingUp } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Production Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Experience (4+ Years)
            </h2>
            <p className="text-neutral-400 text-base mt-2 max-w-2xl">
              Software Development Engineer with proven experience designing multi-tenant SaaS platforms, event-driven architectures, and high-performance microservices for enterprise clients.
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-300">
            <span className="text-cyan-400 font-bold">Akrivia Automation</span> • Mar 2022 – Present
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-10">
          {experienceData.map((exp) => (
            <div 
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className="p-6 md:p-10 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 shadow-xl"
            >
              {/* Primary Role & Company Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-neutral-800 text-cyan-400">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <span className="text-sm font-semibold text-cyan-400 font-mono">
                        {exp.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-neutral-300 my-5 leading-relaxed">
                {exp.summary}
              </p>

              {/* Sub-Products Breakdown (Facttwin & Akrivia HCM) */}
              {exp.subProducts && exp.subProducts.length > 0 && (
                <div className="space-y-8 my-6">
                  {exp.subProducts.map((prod, pIdx) => (
                    <div 
                      key={pIdx}
                      className="p-5 md:p-6 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-800/60">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-cyan-400" />
                          <h4 className="text-base font-bold text-white">
                            {prod.name}
                          </h4>
                        </div>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-neutral-900 text-cyan-300 border border-neutral-800">
                          {prod.period}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-400">
                        {prod.description}
                      </p>

                      <div className="space-y-2.5">
                        {prod.points.map((point, ptIdx) => (
                          <div key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Technology Badges */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-neutral-500 mr-2 uppercase tracking-wider">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-950 text-neutral-300 border border-neutral-800"
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
