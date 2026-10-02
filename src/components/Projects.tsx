
import React from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onPlaceholderClick?: (type: string, name: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({

}) => {
  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="py-16 sm:py-24 border-t-[3px] border-[#111111] dark:border-[#FFFFFF] bg-[#F5F0E8] dark:bg-[#121214] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#FFD84D] text-[#111111] font-black text-xs sm:text-sm px-3.5 py-1 border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] mb-2.5 uppercase tracking-widest -rotate-1">
            PORTFOLIO HIGHLIGHTS
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}

            />
          ))}
        </div>

        {/* Bottom Callout Note */}
        <div className="mt-12 bg-[#FFFFFF] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] p-5 sm:p-6 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#FFD84D] text-[#111111] border-2 border-[#111111] font-mono text-sm font-black">
              ⚡
            </span>

            <div>
              <h4 className="font-display font-black text-sm sm:text-base text-[#111111] dark:text-[#F5F0E8] uppercase tracking-wide">
                LOOKING FOR SOURCE CODE OR REPOSITORIES?
              </h4>

              <p className="text-xs sm:text-sm text-[#111111]/80 dark:text-[#F5F0E8]/80 font-medium">
                Each project maintains modular separation, comprehensive test setups, and clean TypeScript typing.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/nayakbnk"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 bg-[#111111] dark:bg-[#FFD84D] text-[#FFFFFF] dark:text-[#111111] font-black text-xs uppercase tracking-wider border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#FFD84D] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#FFD84D] dark:hover:bg-[#FFFFFF] hover:text-[#111111] transition-all"
          >
            VIEW GITHUB REPOSITORIES →
          </a>
        </div>

      </div>
    </section>
  );
};


