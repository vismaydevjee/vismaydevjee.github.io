import React from 'react';
import { Section } from './ui/Section';
import { SpotlightCard } from './ui/SpotlightCard';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    company: "Fidelity Investments",
    role: "AI Developer",
    period: "2025 – Present",
    location: "Boston, MA",
    description: [
      "Built LLM features enabling automated reasoning over large docs.",
      "Architected RAG pipelines integrating structured & unstructured data.",
      "Developed model evaluation pipelines using precision/recall testing."
    ]
  },
  {
    company: "Deloitte / Amazon",
    role: "Data Engineer",
    period: "2022 – 2023",
    location: "Remote",
    description: [
      "Built backend data-processing systems for large-scale ML workflows.",
      "Implemented validation logic for multi-stage pipelines.",
      "Supported CI/CD aligned with enterprise standards."
    ]
  },
  {
    company: "StayVista",
    role: "Data Analyst Intern",
    period: "Feb 2022 – Oct 2022",
    location: "Mumbai, India",
    description: [
      "Built automated reporting dashboards and Excel-based tools, achieving 20% operational efficiency improvement.",
      "Delivered data-driven insights to leadership, supporting strategic decision-making in fast-paced startup environment."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="relative">
      <div className="mb-16">
        <h2 className="text-5xl font-display font-bold text-white mb-4">Trajectory</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
      </div>

      <div className="space-y-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent opacity-30 md:left-1/2 md:-ml-[1px]" />

        {experiences.map((exp, idx) => (
          <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Timeline Node */}
            <div className="absolute left-[11px] md:left-1/2 md:-ml-[9px] w-[18px] h-[18px] rounded-full bg-[#03000a] border-4 border-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.5)] z-10" />

            {/* Content Side */}
            <div className="w-full md:w-1/2 pl-12 md:pl-0">
               <SpotlightCard className={`p-8 ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <div className="text-cyan-400 font-mono text-sm mt-1">{exp.company}</div>
                    </div>
                    <span className="text-xs font-bold text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-slate-400 leading-relaxed list-disc list-inside marker:text-cyan-500">
                            {item}
                        </li>
                    ))}
                  </ul>
               </SpotlightCard>
            </div>
            
            {/* Empty Side for layout balance */}
            <div className="hidden md:block w-1/2" />
          </div>
        ))}
      </div>
    </Section>
  );
};
