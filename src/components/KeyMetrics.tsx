import { metricsData } from '../data/portfolioData';
import { Award, ShieldCheck, Zap, TrendingUp, Users } from 'lucide-react';

const metricIcons = {
  throughput: Zap,
  latency: TrendingUp,
  clients: Users,
  api_boost: ShieldCheck
};

export default function KeyMetrics() {
  return (
    <section className="py-8 border-y border-neutral-800/80 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metricsData.map((item) => {
            const IconComponent = metricIcons[item.id as keyof typeof metricIcons] || Zap;
            return (
              <div 
                key={item.id}
                id={`metric-card-${item.id}`}
                className="group relative p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700/80 transition-all hover:bg-neutral-900/70"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-neutral-400 font-medium">
                    {item.label}
                  </span>
                  <div className="p-2 rounded-lg bg-neutral-800/60 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 font-mono">
                  {item.value}
                </div>
                
                <p className="text-xs text-neutral-400 leading-snug">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
