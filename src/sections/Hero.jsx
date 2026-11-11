import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  FileText, 
  Mail, 
  Globe, 
  Copy, 
  Check, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Database, 
  Brain
} from 'lucide-react';
import developerImg from '../assets/developer_illustration_2x.png';
import { personalInfo } from '../data/portfolioData';

const skillsList = [
  { name: 'Python', label: 'Primary & AI', icon: Cpu, color: 'text-amber-400 bg-amber-500/10' },
  { name: 'React.js', label: 'Modern Web', icon: Code2, color: 'text-cyan-400 bg-cyan-500/10' },
  { name: 'Flask / REST', label: 'Backend APIs', icon: Layers, color: 'text-emerald-400 bg-emerald-500/10' },
  { name: 'Scikit-learn', label: 'Machine Learning', icon: Brain, color: 'text-brandOrange bg-brandOrange/10' },
  { name: 'MySQL / Mongo', label: 'Databases', icon: Database, color: 'text-indigo-400 bg-indigo-500/10' },
  { name: 'Tailwind CSS', label: 'Modern UI/UX', icon: Sparkles, color: 'text-sky-400 bg-sky-500/10' },
];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[96vh] flex flex-col justify-center bg-[#FDFBF7] pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden scroll-mt-36">
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brandOrange/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-10 sm:mb-14">
          
          {/* LEFT COLUMN: Bold Typography, Script Accent & Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Master Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-black tracking-tight text-[#0F141C] leading-[1.03]">
                Software <br className="hidden sm:inline" />
                <span className="text-brandOrange">Engineer</span>{' '}
                <br className="hidden sm:inline" />
                Portfolio<span className="text-brandOrange">.</span>
              </h1>

              {/* Handwritten Script Accent */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-brandOrange font-serif italic text-base sm:text-lg">
                <span>— {personalInfo.title}</span>
                <span className="text-sm not-italic">&#9825;</span>
              </div>
            </div>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hello! I'm <strong className="text-slate-900 font-bold">{personalInfo.name}</strong>, a Computer Science Engineering graduate building intelligent software — from AI-powered malware detection and ML pipelines to modern full-stack web applications and robust REST APIs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-[#0D1117] hover:bg-black text-white text-sm font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 group"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 text-brandOrange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Inhamul_Hasan_Resume.pdf"
                className="px-7 py-4 rounded-full bg-brandOrange hover:bg-brandOrange-600 text-white text-sm font-bold shadow-[0_8px_25px_rgba(255,106,0,0.38)] hover:shadow-[0_12px_32px_rgba(255,106,0,0.58)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold border border-slate-300 shadow-sm hover:border-brandOrange transition-all flex items-center space-x-2"
              >
                <Mail className="w-4 h-4 text-brandOrange" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors flex items-center space-x-2"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Architectural Torus Portal & Developer Illustration Cutout (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-[340px] sm:w-[420px] lg:w-[460px] h-[430px] sm:h-[480px] lg:h-[510px] flex items-center justify-center">
              
              {/* Ambient Glow */}
              <div className="absolute w-[300px] sm:w-[370px] lg:w-[410px] h-[300px] sm:h-[370px] lg:h-[410px] rounded-full bg-brandOrange/25 blur-[40px] pointer-events-none" />

              {/* Iconic Architectural Orange Ring Portal */}
              <div className="relative w-[280px] sm:w-[350px] lg:w-[390px] h-[280px] sm:h-[350px] lg:h-[390px] rounded-full p-[14px] sm:p-[18px] bg-gradient-to-tr from-[#FF5500] via-[#FF6A00] to-[#FFA033] shadow-[0_24px_65px_rgba(255,106,0,0.45)] flex items-center justify-center z-0">
                {/* Inner Dark Circular Canvas */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#111625] via-[#0B0F19] to-[#06090E] overflow-hidden relative shadow-inner">
                  {/* Subtle warm center radial accent */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.15)_0%,transparent_70%)]" />
                </div>

                {/* Hand-Drawn Doodle Rays at Top-Right */}
                <div className="absolute -top-7 -right-2 text-brandOrange font-black text-xl sm:text-2xl select-none pointer-events-none flex space-x-1 rotate-12">
                  <span className="transform -rotate-12">/</span>
                  <span>/</span>
                  <span className="transform rotate-12">/</span>
                </div>
              </div>

              {/* Developer Illustration Cutout (3D Pop-out over the ring) */}
              <div className="absolute z-10 w-full h-full flex items-center justify-center pointer-events-none">
                <img
                  src={developerImg}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  className="h-[340px] sm:h-[410px] lg:h-[450px] w-auto max-w-none object-contain -translate-y-4 sm:-translate-y-6 lg:-translate-y-8 drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)] select-none"
                  loading="eager"
                />
              </div>

              {/* Left Floating Stat Badge */}
              <div className="hidden sm:flex absolute -left-2 sm:-left-6 top-10 sm:top-14 z-20 items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-md">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  ⚡
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Architecture</p>
                  <p className="text-xs font-black text-slate-900">Scalable &amp; Clean</p>
                </div>
              </div>

              {/* Hand-Drawn Arrow & Label Annotation */}
              <div className="hidden sm:flex absolute -left-2 sm:-left-4 bottom-12 z-20 items-center space-x-2">
                <span className="font-serif italic text-xs font-semibold text-slate-700 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-sm flex items-center space-x-1">
                  <span>AI/ML &amp; Full-Stack</span>
                  <span className="text-brandOrange text-sm">&#10549;</span>
                </span>
              </div>

              {/* Right Floating Stat Badge */}
              <div className="absolute -right-2 sm:-right-4 top-10 sm:top-14 z-20 flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-md">
                <div className="w-8 h-8 rounded-xl bg-brandOrange/10 text-brandOrange flex items-center justify-center font-bold text-sm">
                  🛡️
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Security ML</p>
                  <p className="text-xs font-black text-slate-900">&gt;90% Accuracy</p>
                </div>
              </div>

              {/* Bottom Credibility Card: Software Engineer Badge (No "open to work" dot) */}
              <div className="absolute -bottom-3 sm:-bottom-2 z-20 flex items-center space-x-3 bg-[#0B0F17]/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-transform">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brandOrange to-amber-400 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-xs font-extrabold text-white tracking-wide">{personalInfo.shortRole} &bull; AI/ML</span>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                    Python &bull; React &bull; Flask &bull; ML &bull; B.E. 2026
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM HORIZONTAL RIBBON: Direct Contact & Software Skills */}
        <div className="rounded-3xl bg-[#0C1017] text-white p-6 sm:p-7 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Contact Quick-Info (Left 4 cols) */}
            <div className="lg:col-span-4 space-y-2.5 border-b lg:border-b-0 lg:border-r border-white/10 pb-5 lg:pb-0 lg:pr-6 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-brandOrange flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Contact</span>
              </p>
              <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-brandOrange transition-colors block truncate">
                {personalInfo.email}
              </a>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Software Skills Icons (Right 8 cols) */}
            <div className="lg:col-span-8 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Software Stack
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {skillsList.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brandOrange/50 hover:bg-white/10 transition-all flex flex-col items-center justify-center text-center group"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 ${skill.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white group-hover:text-brandOrange transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        {skill.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}