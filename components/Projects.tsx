import React from 'react';
import { Section } from './ui/Section';
import { SpotlightCard } from './ui/SpotlightCard';
import { ArrowUpRight, Github, Lock } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Multi-Modal Retrieval System",
    problem: "Contextual responses needed for complex multimodal queries.",
    approach: "Combined retrieval, reasoning, and backend services via FastAPI.",
    result: "Optimized latency and scalability with focus on reliability.",
    tech: ["FastAPI", "Vector DB", "Docker", "AWS"],
    link: "https://github.com/BigDataIA-Fall2024-TeamA6/Assignment_4"
  },
  {
    title: "Safety Data Warehouse",
    problem: "Fragmented safety data hindering analysis.",
    approach: "Built warehouse using Talend, SQL Server, and Tableau.",
    result: "Enabled comprehensive safety analytics and data-driven policy.",
    tech: ["Talend", "SQL Server", "Tableau", "Azure"],
    link: "#",
    image: "/Safety_dwh.png"
  },
  {
    title: "VerifAI Deepfake Detection",
    problem: "Need for biometric verification to detect deepfakes.",
    approach: "Developed AI-driven tool for identity verification via CV.",
    result: "Real-time deepfake detection integrated with infrastructure.",
    tech: ["Python", "OpenCV", "PyTorch", "React"],
    link: "https://github.com/vismaydevjee/verifai-proof-of-human",
    image: "/VerifAI.png"
  }
];

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="mb-16">
        <h2 className="text-5xl font-display font-bold text-white mb-4">Selected Works</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <SpotlightCard key={idx} className="flex flex-col h-full group" spotlightColor="rgba(191, 0, 255, 0.2)">
            
            {/* Project Image Area */}
            <div className="h-48 w-full bg-gradient-to-br from-white/5 to-white/[0.02] border-b border-white/5 relative overflow-hidden">
               {project.image ? (
                 <div className="absolute inset-0 w-full h-full">
                   <div className="absolute inset-0 bg-[#03000a]/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                   <img 
                     src={project.image} 
                     alt={project.title}
                     className="w-full h-full object-cover object-top opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                 </div>
               ) : (
                 <>
                   <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                   <div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg">
                      <Lock size={16} className="text-slate-400" />
                   </div>
                 </>
               )}
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.approach} {project.result}
              </p>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                        View GitHub <ArrowUpRight size={16} />
                    </a>
                    <div className="flex-grow" />
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={20} className="text-slate-500 hover:text-white transition-colors cursor-pointer" />
                    </a>
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
};