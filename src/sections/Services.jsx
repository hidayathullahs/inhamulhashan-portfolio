import React from 'react';
import { 
  Globe, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench 
} from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = {
  Cpu,
  Layout,
  Server,
  Database,
  Wrench,
  Globe,
};

export function Services() {
  return (
    <section id="services" className="relative bg-[#080808] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 rounded-t-[40px] sm:rounded-t-[60px] shadow-[0_-15px_40px_rgba(0,0,0,0.5)] scroll-mt-36">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (Left Title, Right Subtext) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-brandOrange font-mono text-sm tracking-wider uppercase mb-2">
              <span className="w-6 h-0.5 bg-brandOrange" />
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              What I Specialize In
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
            From building predictive AI threat models and full-stack web applications to designing high-performance REST APIs and database architectures.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComp = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#111111] border border-white/10 hover:border-brandOrange/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_35px_rgba(255,106,0,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 border border-brandOrange/20 text-brandOrange flex items-center justify-center mb-6 group-hover:bg-brandOrange group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-brandOrange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 group-hover:border-brandOrange/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}