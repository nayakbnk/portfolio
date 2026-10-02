import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/projects';
import { Wrench, Code, Layout, Server, Database, Terminal } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const allCategories = ['ALL', ...TECH_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    activeCategory === 'ALL'
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((c) => c.title === activeCategory);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Code className="w-5 h-5" />;
      case 'Frontend':
        return <Layout className="w-5 h-5" />;
      case 'Backend':
        return <Server className="w-5 h-5" />;
      case 'Databases':
        return <Database className="w-5 h-5" />;
      case 'Tools':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills Section"
      className="py-16 sm:py-20 border-t-[3px] border-[#111111] dark:border-[#FFFFFF] bg-[#F5F0E8] dark:bg-[#121214] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-block bg-[#6EA8FE] text-[#111111] font-black text-xs sm:text-sm px-3 py-1 border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] mb-2 uppercase tracking-widest rotate-1">
              SKILLS & CAPABILITIES
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#111111] dark:text-[#F5F0E8] uppercase tracking-tight">
              MY TOOLBOX
            </h2>
          </div>


        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]/70 dark:text-[#F5F0E8]/70 mr-1 hidden sm:inline">
            FILTER:
          </span>
          {allCategories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-[#111111] dark:border-[#FFFFFF] transition-all cursor-pointer ${isSelected
                  ? 'bg-[#111111] dark:bg-[#FFD84D] text-[#FFD84D] dark:text-[#111111] shadow-[3px_3px_0px_#FFD84D] dark:shadow-[3px_3px_0px_#000000]'
                  : 'bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#FFD84D] dark:hover:bg-[#FFD84D] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px]'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#FFFFFF] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#000000] hover:shadow-[4px_4px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col justify-between"
            >
              {/* Category Header */}
              <div>
                <div
                  className="px-5 py-3 border-b-[3px] border-[#111111] dark:border-[#FFFFFF] flex items-center justify-between"
                  style={{ backgroundColor: category.accent }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="p-1 bg-[#111111] text-[#FFFFFF] border border-[#111111]">
                      {getCategoryIcon(category.title)}
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-xl text-[#111111] uppercase tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] font-black bg-[#111111] text-[#FFFFFF] px-2 py-0.5 border border-[#111111]">
                    {category.tag}
                  </span>
                </div>

                {/* Skills Tags List */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group inline-flex items-center gap-2 px-3 py-2 bg-[#F5F0E8] dark:bg-[#141418] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF]/60 shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#FFD84D] dark:hover:bg-[#FFD84D] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] transition-all"
                      >
                        <span className="w-2 h-2 bg-[#111111] dark:bg-[#FFD84D] rounded-none group-hover:bg-[#FF6B6B]" />
                        <span className="font-mono text-xs sm:text-sm font-bold tracking-tight">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-2.5 border-t-2 border-[#111111]/20 dark:border-[#FFFFFF]/20 bg-[#F5F0E8]/50 dark:bg-[#141418]/50 flex items-center justify-between text-[11px] font-mono font-bold text-[#111111]/70 dark:text-[#F5F0E8]/70">
                <span>{category.skills.length} TECHNOLOGIES</span>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
