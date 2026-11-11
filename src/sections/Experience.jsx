import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin, Building2 } from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 scroll-mt-36">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brandOrange/10 text-brandOrange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Career &amp; Academic Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080808] tracking-tight mb-4">
            Experience &amp; Education
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on software engineering internship experience combined with strong computer science academic foundations.
          </p>
        </div>

        {/* Dual Cards: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Work Experience Card */}
          <div className="p-8 rounded-3xl bg-lightBg border border-slate-200/90 shadow-sm hover:border-brandOrange/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 text-brandOrange flex items-center justify-center shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-brandOrange uppercase tracking-wider">
                    Work Experience
                  </span>
                  <h3 className="text-xl font-bold text-[#080808]">
                    Software Engineering Intern
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-slate-600 gap-2">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold">
                    <Building2 className="w-4 h-4 text-brandOrange" />
                    <span>Femtosoft Technologies</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Aug 2025 – Oct 2025</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0 mt-0.5" />
                    <span>Automated digital record management workflows, cutting manual data-retrieval time by an estimated 30% for operations.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0 mt-0.5" />
                    <span>Collaborated with senior engineers on sprint deliverables, consistently meeting deadlines across a 2-month internship cycle.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brandOrange flex-shrink-0 mt-0.5" />
                    <span>Produced and maintained structured technical documentation and project reports, improving cross-team information accuracy.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-700">Workflow Automation</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-700">Technical Documentation</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-700">Git Collaboration</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-700">Sprint Delivery</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-8 rounded-3xl bg-lightBg border border-slate-200/90 shadow-sm hover:border-brandOrange/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 text-brandOrange flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-brandOrange uppercase tracking-wider">
                    Higher Education
                  </span>
                  <h3 className="text-xl font-bold text-[#080808]">
                    B.E. Computer Science &amp; Engineering
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-slate-600 gap-2">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold">
                    <Building2 className="w-4 h-4 text-brandOrange" />
                    <span>Anna University Affiliated College, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2022 – 2026</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                  <p className="leading-relaxed">
                    Four-year comprehensive engineering program with in-depth study of core computer science principles, software engineering methodologies, and database systems.
                  </p>
                  
                  <div className="pt-2">
                    <span className="block text-xs font-bold text-slate-900 mb-2">Core Coursework:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'Object-Oriented Programming (OOP)'].map((course, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-700">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">Degree Status: Graduating 2026</span>
              <span className="font-bold text-emerald-600 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Active Enrollment</span>
              </span>
            </div>
          </div>

        </div>

        {/* Chronological Milestones Timeline */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#080808]">
              Chronological Journey
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Key academic milestones, project achievements, and professional growth over the years.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-10">
            {journeyTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brandOrange group-hover:scale-125 group-hover:bg-brandOrange transition-all shadow-sm" />

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-lightBg border border-slate-200/80 shadow-sm hover:border-brandOrange/40 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-[#080808] group-hover:text-brandOrange transition-colors">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-xs font-semibold text-slate-500">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-brandOrange/10 text-brandOrange font-mono text-xs font-bold">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}