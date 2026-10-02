import React from 'react';
import { ACHIEVEMENTS } from '../data/projects';
import { Trophy, Award, Code2, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 stroke-[2.5]" />;
      case 'Award':
        return <Award className="w-6 h-6 stroke-[2.5]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 stroke-[2.5]" />;
      default:
        return <Sparkles className="w-6 h-6 stroke-[2.5]" />;
    }
  };

  return (
    <section
      id="achievements"
      aria-label="Achievements and Recognition Section"
      className="py-16 sm:py-20 border-t-[3px] border-[#111111] dark:border-[#FFFFFF] bg-[#F5F0E8] dark:bg-[#121214] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block bg-[#A7E86B] text-[#111111] font-black text-xs sm:text-sm px-3.5 py-1 border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] mb-2 uppercase tracking-widest rotate-1">
              MILESTONES & RECOGNITION
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#111111] dark:text-[#F5F0E8] uppercase tracking-tight">
              ACHIEVEMENTS
            </h2>
          </div>


        </div>

        {/* 3 Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.title}
              className="bg-[#FFFFFF] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#111111] dark:hover:shadow-[4px_4px_0px_#000000] transition-all flex flex-col justify-between"
            >
              {/* Top Banner */}
              <div>
                <div
                  className="px-5 py-3.5 border-b-[3px] border-[#111111] dark:border-[#FFFFFF] flex items-center justify-between text-[#111111]"
                  style={{ backgroundColor: item.accentColor }}
                >
                  <div className="p-2 bg-[#FFFFFF] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] text-[#111111]">
                    {getIcon(item.iconName)}
                  </div>


                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="font-display font-black text-2xl text-[#111111] dark:text-[#F5F0E8] uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>

                  <div className="inline-block bg-[#F5F0E8] dark:bg-[#141418] border border-[#111111] dark:border-[#FFFFFF]/40 px-2.5 py-1 text-xs font-mono font-bold text-[#111111] dark:text-[#F5F0E8] mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-[#111111]/85 dark:text-[#F5F0E8]/85 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
