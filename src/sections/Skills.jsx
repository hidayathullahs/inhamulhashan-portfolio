import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Cpu, 
  Wrench,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categories = [
  { key: 'languages', label: 'Languages', icon: Code2 },
  { key: 'webFrameworks', label: 'Web & Frameworks', icon: Layers },
  { key: 'databases', label: 'Databases', icon: Database },
  { key: 'dataMlBasics', label: 'Data & ML Basics', icon: Cpu },
  { key: 'toolsPractices', label: 'Tools & Practices', icon: Wrench },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const displayedCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.key === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 scroll-mt-36">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brandOrange/10 text-brandOrange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080808] tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on technical competencies built through real-world software engineering, machine learning pipelines, and full-stack development.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-brandOrange text-white shadow-[0_4px_12px_rgba(255,106,0,0.35)]'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeCategory === cat.key
                  ? 'bg-brandOrange text-white shadow-[0_4px_12px_rgba(255,106,0,0.35)]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid: Symmetrical 3-top + 2-bottom responsive layout */}
        <div className={`grid gap-6 ${
          displayedCategories.length === 1 
            ? 'max-w-xl mx-auto' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6'
        }`}>
          {displayedCategories.map((cat, idx) => {
            const items = skillsData[cat.key] || [];
            const CatIcon = cat.icon;
            const colSpan = displayedCategories.length === 5
              ? (idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3')
              : (displayedCategories.length === 1 ? '' : 'lg:col-span-2');
            return (
              <div
                key={cat.key}
                className={`p-6 sm:p-7 rounded-3xl bg-[#FAF9F6] border border-slate-200 shadow-sm hover:border-brandOrange/40 hover:shadow-md transition-all flex flex-col justify-between ${colSpan}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-brandOrange/10 text-brandOrange flex items-center justify-center flex-shrink-0">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#080808]">
                      {cat.label}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {items.map((skill, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-medium text-slate-800 hover:border-brandOrange/40 transition-colors shadow-2xs"
                      >
                        <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                          <Check className="w-4 h-4 text-brandOrange flex-shrink-0" />
                          <span className="font-semibold text-slate-900 truncate">{skill.name}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-mono font-semibold text-slate-600 flex-shrink-0">
                          {skill.level}
                        </span>
                      </div>
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