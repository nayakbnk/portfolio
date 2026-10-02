
import React from 'react';
import { GraduationCap, School, Star } from 'lucide-react';

const EDUCATION = [
    {
        number: '01',
        period: '2020 — 2022',
        title: 'HIGH SCHOOL',
        subtitle: 'CBSE',
        description: '97.2%',
        icon: School,
        rotation: '-rotate-1',
    },
    {
        number: '02',
        period: '2022 — 2024',
        title: 'HIGHER SECONDARY',
        subtitle: 'CBSE • PCMC',
        description: '95.6%',
        icon: GraduationCap,
        rotation: 'rotate-1',
    },
    {
        number: '03',
        period: '2024 — 2028',
        title: 'B.E. COMPUTER SCIENCE',
        subtitle: 'Canara Engineering College',
        description: '9.19 CGPA',
        icon: GraduationCap,
        rotation: '-rotate-1',
        current: true,
    },
];

export const Education: React.FC = () => {
    return (
        <section
            id="education"
            aria-label="Education"
            className="py-16 sm:py-24 border-t-[3px] border-[#111111] dark:border-[#FFFFFF] bg-[#F5F0E8] dark:bg-[#121214] transition-colors"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16">
                    <div className="inline-block bg-[#FFD84D] text-[#111111] font-black text-xs sm:text-sm px-3.5 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] uppercase tracking-widest -rotate-1">
                        THE JOURNEY SO FAR
                    </div>

                    <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] dark:text-[#F5F0E8]">
                        EDUCATION
                    </h2>
                </div>

                {/* Desktop Roadmap */}
                <div className="hidden lg:block">

                    <div className="grid grid-cols-3 gap-12 items-start">

                        {EDUCATION.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <React.Fragment key={item.number}>

                                    {/* Card */}
                                    <div className={`relative ${item.rotation}`}>

                                        {/* Number */}
                                        <div className="absolute -top-6 -left-5 z-10 w-12 h-12 flex items-center justify-center bg-[#FFD84D] border-[3px] border-[#111111] text-[#111111] font-black text-sm shadow-[4px_4px_0px_#111111]">
                                            {item.number}
                                        </div>

                                        {/* Education Card */}
                                        <div className="relative border-[3px] border-[#111111] dark:border-[#FFFFFF] p-6 sm:p-7 bg-[#FFD84D] shadow-[8px_8px_0px_#111111] dark:shadow-[8px_8px_0px_#000000]">

                                            {/* Current Badge */}
                                            {item.current && (
                                                <div className="absolute -top-4 -right-4 flex items-center gap-1 bg-[#111111] text-white px-3 py-1 border-2 border-[#111111] font-black text-[10px] uppercase tracking-wider rotate-2">
                                                    <Star size={11} fill="currentColor" />
                                                    CURRENT
                                                </div>
                                            )}

                                            {/* Icon */}
                                            <div className="w-12 h-12 flex items-center justify-center border-[3px] border-[#111111] bg-[#F5F0E8] text-[#111111] mb-6">
                                                <Icon size={24} strokeWidth={3} />
                                            </div>

                                            {/* Period */}
                                            <p className="font-mono font-black text-sm text-[#111111]/70 mb-2">
                                                {item.period}
                                            </p>

                                            {/* Title */}
                                            <h3 className="text-2xl sm:text-3xl font-black text-[#111111] uppercase leading-none">
                                                {item.title}
                                            </h3>

                                            {/* Subtitle */}
                                            <p className="mt-3 font-bold text-sm text-[#111111] uppercase">
                                                {item.subtitle}
                                            </p>

                                            {/* Description */}
                                            <p className="mt-5 text-sm font-medium text-[#111111]/75 leading-relaxed">
                                                {item.description}
                                            </p>

                                        </div>
                                    </div>

                                    {/* Connector */}
                                    {index < EDUCATION.length - 1 && (
                                        <div className="absolute" />
                                    )}

                                </React.Fragment>
                            );
                        })}
                    </div>

                    {/* Road Line */}
                    <div className="relative -mt-[25px] mx-[16%] h-10 flex items-center pointer-events-none">
                        <div className="w-full border-t-[5px] border-[#111111] dark:border-[#FFFFFF] border-dashed" />
                    </div>

                </div>

                {/* Mobile Roadmap */}
                <div className="lg:hidden relative">

                    {/* Vertical Road */}
                    <div className="absolute left-[23px] top-4 bottom-4 w-[4px] bg-[#111111] dark:bg-[#FFFFFF]" />

                    <div className="space-y-12">

                        {EDUCATION.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.number} className="relative pl-14">

                                    {/* Road Marker */}
                                    <div className="absolute left-0 top-5 w-12 h-12 flex items-center justify-center bg-[#FFD84D] border-[3px] border-[#111111] text-[#111111] font-black text-xs shadow-[3px_3px_0px_#111111]">
                                        {item.number}
                                    </div>

                                    {/* Education Card */}
                                    <div className="border-[3px] border-[#111111] dark:border-[#FFFFFF] p-5 bg-[#FFD84D] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#000000]">

                                        {/* Current Badge */}
                                        {item.current && (
                                            <div className="inline-flex items-center gap-1 bg-[#111111] text-white px-2.5 py-1 mb-4 border-2 border-[#111111] font-black text-[10px] uppercase">
                                                <Star size={10} fill="currentColor" />
                                                CURRENT
                                            </div>
                                        )}

                                        <div className="flex items-start gap-4">

                                            {/* Icon */}
                                            <div className="shrink-0 w-10 h-10 flex items-center justify-center border-2 border-[#111111] bg-[#F5F0E8] text-[#111111]">
                                                <Icon size={20} strokeWidth={3} />
                                            </div>

                                            <div>
                                                {/* Period */}
                                                <p className="font-mono font-black text-xs text-[#111111]/60">
                                                    {item.period}
                                                </p>

                                                {/* Title */}
                                                <h3 className="mt-1 text-xl font-black text-[#111111] uppercase leading-tight">
                                                    {item.title}
                                                </h3>

                                                {/* Subtitle */}
                                                <p className="mt-2 text-xs font-bold text-[#111111] uppercase">
                                                    {item.subtitle}
                                                </p>
                                            </div>

                                        </div>

                                        {/* Description */}
                                        <p className="mt-4 text-sm font-medium text-[#111111]/75 leading-relaxed">
                                            {item.description}
                                        </p>

                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

                {/* Bottom Tag */}
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-[#111111] text-[#FFFFFF] px-4 py-2 border-[3px] border-[#111111] shadow-[4px_4px_0px_#FFD84D] font-black text-xs uppercase tracking-wider rotate-1">
                        STILL LEARNING → ALWAYS BUILDING
                    </div>
                </div>

            </div>
        </section>
    );
};

