import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/resumeDownload';
import { 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  Database, 
  Server, 
  Layers, 
  Zap,
  ArrowRight,
  Code2,
  Phone,
  MapPin,
  Award,
  Download,
  FileText,
  Loader2
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export default function Hero({ onOpenContact, onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      await downloadResumePdf('Anirudh_Pilla_Resume.pdf');
    } finally {
      setIsDownloading(false);
    }
  };
  const [activeTab, setActiveTab] = useState<'stack' | 'overview' | 'redis_sql'>('stack');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      
      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status & Availability Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-medium text-neutral-300 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalInfo.status}</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-400 font-mono">{personalInfo.experienceYears} Experience</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-400">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-neutral-300 flex flex-wrap items-center gap-2">
                <span>{personalInfo.profession}</span>
                <span className="text-neutral-600">•</span>
                <span className="text-base font-mono text-cyan-400 font-normal">
                  Microservices & Distributed Systems
                </span>
              </h2>
            </div>

            {/* Core Bio from Resume */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Software Development Engineer with <strong className="text-neutral-200 font-medium">4+ years</strong> of experience building scalable, distributed, multi-tenant SaaS platforms. Experienced in <strong className="text-neutral-200 font-medium">NestJS/Node.js microservices</strong>, <strong className="text-neutral-200 font-medium">RabbitMQ</strong> event-driven pipelines, <strong className="text-neutral-200 font-medium">Redis</strong> caching & distributed locking, and <strong className="text-neutral-200 font-medium">PostgreSQL/SQL</strong> optimization.
            </p>

            {/* Core Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-neutral-500 mr-1 uppercase tracking-wider">Core Stack:</span>
              {[
                { name: 'NestJS / Node.js', icon: Server, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
                { name: 'Microservices', icon: Layers, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
                { name: 'RabbitMQ / Event-Driven', icon: Zap, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
                { name: 'Redis (Lua / Locks)', icon: Zap, color: 'text-red-400 bg-red-500/10 border-red-500/20' },
                { name: 'PostgreSQL / SQL', icon: Database, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
                { name: 'React', icon: Code2, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <span
                    key={item.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border ${item.color}`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{item.name}</span>
                  </span>
                );
              })}
            </div>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenContact}
                id="hero-contact-btn"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadResume}
                disabled={isDownloading}
                id="hero-download-resume-pdf-btn"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-neutral-100 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-75 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 transition-all cursor-pointer"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>Download Resume (PDF)</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenResume}
                id="hero-resume-btn"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-neutral-400" />
                <span>Preview Resume</span>
              </button>
            </div>

            {/* Quick Contact & Social Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-neutral-800/80 text-sm text-neutral-400">
              {/* Copy Email Button */}
              <div className="flex items-center gap-2">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-cyan-400 font-mono text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  id="hero-copy-email-btn"
                  className="p-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              <div className="hidden sm:block text-neutral-700">|</div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <a 
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-cyan-400 font-mono text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.phone}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  id="hero-copy-phone-btn"
                  className="p-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-all cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              <div className="hidden sm:block text-neutral-700">|</div>

              {/* Social & Coding Links */}
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-link"
                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-link"
                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-[#0A66C2] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.hackerrankUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-hackerrank-link"
                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>HackerRank</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code / Engineering Terminal Preview */}
          <div className="lg:col-span-5">
            <div 
              id="hero-terminal-card"
              className="relative rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-neutral-400 text-[11px]">anirudh.sde.ts</span>
                </div>

                {/* Tab switchers */}
                <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded-md">
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'stack' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    resume.json
                  </button>
                  <button
                    onClick={() => setActiveTab('redis_sql')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'redis_sql' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    boltticket.lua
                  </button>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'overview' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    facttwin.sh
                  </button>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto min-h-[340px]">
                {activeTab === 'stack' && (
                  <div className="space-y-1">
                    <p className="text-neutral-500">// Software Development Engineer profile</p>
                    <p><span className="text-purple-400">export const</span> <span className="text-amber-300">anirudh</span> = &#123;</p>
                    <p className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-emerald-300">"Anirudh Pilla"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-300">role</span>: <span className="text-emerald-300">"Software Development Engineer"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-300">company</span>: <span className="text-emerald-300">"Akrivia Automation Pvt. Ltd."</span>,</p>
                    <p className="pl-4"><span className="text-cyan-300">location</span>: <span className="text-emerald-300">"Visakhapatnam, India"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-300">experience</span>: <span className="text-emerald-300">"4+ Years"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-300">architecture</span>: [</p>
                    <p className="pl-8"><span className="text-emerald-300">"NestJS Microservices & API Gateway"</span>,</p>
                    <p className="pl-8"><span className="text-emerald-300">"RabbitMQ Event-Driven Pipelines"</span>,</p>
                    <p className="pl-8"><span className="text-emerald-300">"Redis Lua Distributed Locking"</span>,</p>
                    <p className="pl-8"><span className="text-emerald-300">"Multi-Tenant SaaS & Data Isolation"</span></p>
                    <p className="pl-4">],</p>
                    <p className="pl-4"><span className="text-cyan-300">education</span>: <span className="text-emerald-300">"B.Tech CSE (CGPA: 9.16/10)"</span></p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'redis_sql' && (
                  <div className="space-y-1">
                    <p className="text-neutral-500">-- Boltticket: Atomic Redis Lua Ticket Lock (955 RPS)</p>
                    <p><span className="text-purple-400">local</span> lockKey = <span className="text-emerald-300">"ticket:inventory:"</span> .. KEYS[1]</p>
                    <p><span className="text-purple-400">local</span> current = redis.<span className="text-cyan-300">call</span>(<span className="text-emerald-300">"GET"</span>, lockKey)</p>
                    <p><span className="text-purple-400">if</span> tonumber(current) &gt; 0 <span className="text-purple-400">then</span></p>
                    <p className="pl-4">redis.<span className="text-cyan-300">call</span>(<span className="text-emerald-300">"DECR"</span>, lockKey)</p>
                    <p className="pl-4">redis.<span className="text-cyan-300">call</span>(<span className="text-emerald-300">"SET"</span>, <span className="text-emerald-300">"hold:"</span> .. ARGV[1], KEYS[1], <span className="text-emerald-300">"EX"</span>, 600)</p>
                    <p className="pl-4 text-emerald-400"><span className="text-neutral-500">-- Queue asynchronous confirmation to BullMQ / Postgres</span></p>
                    <p className="pl-4"><span className="text-purple-400">return</span> 1 <span className="text-emerald-500">-- 3.05ms median latency</span></p>
                    <p><span className="text-purple-400">else</span></p>
                    <p className="pl-4"><span className="text-purple-400">return</span> 0 <span className="text-neutral-500">-- Sold out, zero race conditions</span></p>
                    <p><span className="text-purple-400">end</span></p>
                  </div>
                )}

                {activeTab === 'overview' && (
                  <div className="space-y-1">
                    <p className="text-neutral-500"># Facttwin Industrial Automation Telemetry</p>
                    <p><span className="text-cyan-400">$</span> facttwin-cluster --enterprise-tenants 15</p>
                    <p className="text-neutral-400">-------------------------------------------</p>
                    <p><span className="text-neutral-400">[GATEWAY]</span>: <span className="text-emerald-400">NestJS API Gateway (+33% speedup)</span></p>
                    <p><span className="text-neutral-400">[MESSAGE_BUS]</span>: <span className="text-emerald-400">RabbitMQ Event Broker (Active)</span></p>
                    <p><span className="text-neutral-400">[DATA_TIER]</span>: <span className="text-emerald-400">Dual DB (MongoDB + SQL Server)</span></p>
                    <p><span className="text-neutral-400">[ONBOARDING]</span>: <span className="text-emerald-400">Automated Tenant Workflows (-20% time)</span></p>
                    <p><span className="text-neutral-400">[ANOMALY_DETECTION]</span>: <span className="text-cyan-300">Sub-10ms Redis Thresholding</span></p>
                    <p className="text-neutral-400">-------------------------------------------</p>
                    <p className="text-emerald-400 animate-pulse">● Facttwin & Akrivia HCM operating at enterprise scale.</p>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Akrivia Automation SDE</span>
                </span>
                <span className="text-neutral-500">NestJS • RabbitMQ • Redis • SQL</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
