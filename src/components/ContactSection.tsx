import { useState, FormEvent } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Send, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2,
  ExternalLink,
  Phone,
  Award,
  Download,
  FileText
} from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

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

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || `Connecting regarding opportunity - from ${senderName || 'Software Recruiter'}`
    )}&body=${encodeURIComponent(
      `Hi Anirudh,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    )}`;
    
    window.open(mailtoUrl, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-neutral-950">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Discussion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Scalable
          </h2>
          <p className="text-neutral-400 text-base mt-2">
            Looking for a Software Development Engineer with deep expertise in NestJS/Node.js microservices, distributed systems, Redis caching, and SQL? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Social Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Direct Email</span>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-cyan-300 transition-colors font-mono block mt-1"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Number Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  id="contact-copy-phone-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Phone</span>
              <a 
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-emerald-300 transition-colors font-mono block mt-1"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Social Channels (GitHub, LinkedIn, HackerRank) */}
            <div className="grid grid-cols-3 gap-3">
              
              {/* GitHub Card */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-card"
                className="group p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/90 hover:border-neutral-700 transition-all hover:bg-neutral-900 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-neutral-800 text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-cyan-400" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-cyan-300">GitHub</h4>
                <p className="text-[10px] text-neutral-400 font-mono truncate">@anirudhpilla</p>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-card"
                className="group p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/90 hover:border-neutral-700 transition-all hover:bg-neutral-900 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-[#0A66C2]/20 text-[#0A66C2]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-cyan-400" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-cyan-300">LinkedIn</h4>
                <p className="text-[10px] text-neutral-400 font-mono truncate">in/AnirudhPilla</p>
              </a>

              {/* HackerRank Card */}
              <a
                href={personalInfo.hackerrankUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-hackerrank-card"
                className="group p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/90 hover:border-neutral-700 transition-all hover:bg-neutral-900 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-emerald-400" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-emerald-300">HackerRank</h4>
                <p className="text-[10px] text-neutral-400 font-mono truncate">@anirudhxdev</p>
              </a>

            </div>

            {/* Location & Status */}
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-neutral-200 font-medium">{personalInfo.status}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Direct Resume Download Link */}
            <a
              href="/Anirudh_Pilla_Resume.pdf"
              download="Anirudh_Pilla_Resume.pdf"
              id="contact-download-resume-btn"
              className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 hover:border-cyan-400 text-xs text-neutral-200 transition-all hover:bg-neutral-900 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-cyan-300">Download Official Resume</div>
                  <div className="text-[10px] text-neutral-400">PDF • Microservices & Distributed Systems</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            </a>

          </div>

          {/* Right Column: Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 shadow-2xl backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your details below to compose an instant message to <span className="text-cyan-400 font-mono">{personalInfo.email}</span>.
                </p>
              </div>

              {sentSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Your email client was opened with the drafted message. Thanks for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Hiring Manager"
                      id="contact-form-name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="recruiter@company.com"
                      id="contact-form-email"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="SDE Role / Microservices & Backend Discussion"
                    id="contact-form-subject"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Anirudh, we were impressed by your work at Akrivia Automation on Facttwin and Boltticket, and would love to discuss an opportunity..."
                    id="contact-form-message"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-y"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
