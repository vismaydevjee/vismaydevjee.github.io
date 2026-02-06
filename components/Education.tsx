import React from 'react';
import { Section } from './ui/Section';
import { SpotlightCard } from './ui/SpotlightCard';
import { GraduationCap, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" className="py-12 relative">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Academic Background</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Masters Degree */}
        <SpotlightCard className="h-full group" spotlightColor="rgba(0, 240, 255, 0.15)">
            <div className="relative p-8 h-full flex flex-col z-10">
                {/* Background Watermark */}
                <GraduationCap 
                    className="absolute -right-6 -bottom-6 text-white/[0.02] group-hover:text-cyan-500/[0.3] transition-colors duration-500" 
                    size={180} 
                />

                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-cyan-950/30 border border-cyan-900/50 rounded-xl">
                        <Award className="text-cyan-400" size={24} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/20 border border-cyan-900/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
                        <span className="relative flex h-2 w-2">
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        2023 — 2025
                    </div>
                </div>

                <div className="mb-auto">
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                        Master of Science in Information Systems
                    </h3>
                    <p className="text-lg text-cyan-400/90 font-medium">Northeastern University</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-sm text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-slate-500" />
                        Boston, MA
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
                         Completed
                    </div>
                </div>
            </div>
        </SpotlightCard>

        {/* Bachelors Degree */}
        <SpotlightCard className="h-full group" spotlightColor="rgba(191, 0, 255, 0.15)">
            <div className="relative p-8 h-full flex flex-col z-10">
                 {/* Background Watermark */}
                 <GraduationCap 
                    className="absolute -right-6 -bottom-6 text-white/[0.02] group-hover:text-violet-500/[0.3] transition-colors duration-500" 
                    size={180} 
                />

                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-violet-950/30 border border-violet-900/50 rounded-xl">
                        <GraduationCap className="text-violet-400" size={24} />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">
                        2018 — 2022
                    </div>
                </div>

                <div className="mb-auto">
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-violet-100 transition-colors">
                        Bachelor of Engineering
                    </h3>
                    <p className="text-lg text-violet-400/90 font-medium">University of Mumbai</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-sm text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-slate-500" />
                        Mumbai, India
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-violet-500/50" />
                         Completed
                    </div>
                </div>
            </div>
        </SpotlightCard>
      </div>
    </Section>
  );
};