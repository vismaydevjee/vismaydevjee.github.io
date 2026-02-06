import React from 'react';
import { Section } from './ui/Section';
import { SpotlightCard } from './ui/SpotlightCard';
import { Bot, LineChart, Brain, Container, Code2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
  gridClass: string; // Control span for bento layout
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI Agents & Reasoning",
    icon: Bot,
    color: "#00f0ff", // Cyan
    gradient: "from-cyan-500/20 to-cyan-500/5",
    gridClass: "lg:col-span-3",
    skills: [
      "Agentic Architectures", "Chain-of-Thought", "Memory Systems", 
      "Tool Use", "Self-Correction", "Multi-Step Planning", 
      "NeMo Guardrails", "Semantic Caching"
    ]
  },
  {
    title: "Large Language Models",
    icon: Brain,
    color: "#bf00ff", // Violet
    gradient: "from-violet-500/20 to-violet-500/5",
    gridClass: "lg:col-span-3",
    skills: [
      "RAG Pipelines", "Fine-tuning (QLoRA)", "LlamaIndex", 
      "LangChain", "Prompt Engineering", "Evaluation (Ragas)", 
      "Vector Databases", "Context Window Opt."
    ]
  },
  {
    title: "Data Intelligence",
    icon: LineChart,
    color: "#10b981", // Emerald
    gradient: "from-emerald-500/20 to-emerald-500/5",
    gridClass: "lg:col-span-2",
    skills: [
      "PostgreSQL", "Snowflake", "Vector Search", "AWS S3/Glue", 
      "Textract", "Power BI", "Data Modeling"
    ]
  },
  {
    title: "Production Engineering",
    icon: Container,
    color: "#f59e0b", // Amber
    gradient: "from-amber-500/20 to-amber-500/5",
    gridClass: "lg:col-span-2",
    skills: [
      "Python", "Docker & K8s", "CI/CD Actions", "AWS Bedrock", 
      "FastAPI", "Terraform", "Microservices"
    ]
  },
  {
    title: "Core Frameworks",
    icon: Code2,
    color: "#3b82f6", // Blue
    gradient: "from-blue-500/20 to-blue-500/5",
    gridClass: "lg:col-span-2",
    skills: [
      "PyTorch", "TensorFlow", "HuggingFace", "OpenCV", 
      "NumPy/Pandas", "React/Next.js", "CUDA"
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="relative">
       <div className="mb-16">
          <h2 className="text-5xl font-display font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
       </div>
       
       {/* Bento Grid Layout: 6 columns total. 
           Top row = 3+3 (Halves). 
           Bottom row = 2+2+2 (Thirds). 
       */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {skillCategories.map((category, idx) => (
             <SpotlightCard 
                key={idx} 
                className={`flex flex-col h-full group ${category.gridClass}`}
                spotlightColor="rgba(255, 255, 255, 0.05)"
            >
                <div className="p-8 h-full flex flex-col relative z-10">
                    
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} border border-white/10 shadow-lg`}>
                            <category.icon size={24} style={{ color: category.color }} />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                            {category.title}
                        </h3>
                    </div>
                    
                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-3 content-start">
                        {category.skills.map((skill, sIdx) => (
                            <motion.span 
                                key={sIdx}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="relative px-4 py-2 text-sm font-mono font-medium text-slate-300 bg-white/[0.05] border border-white/10 rounded-lg cursor-default overflow-hidden transition-colors duration-300"
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/[0.02]" />
                                
                                <span className="relative z-10 hover:text-white transition-colors duration-200"
                                      onMouseEnter={(e) => {
                                        e.currentTarget.parentElement!.style.borderColor = category.color;
                                        e.currentTarget.parentElement!.style.backgroundColor = `${category.color}15`; // 15 = low hex opacity
                                        e.currentTarget.parentElement!.style.boxShadow = `0 0 15px -3px ${category.color}40`;
                                        e.currentTarget.style.color = category.color;
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.parentElement!.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.parentElement!.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.parentElement!.style.boxShadow = 'none';
                                        e.currentTarget.style.color = ''; // Reset to class default
                                      }}
                                >
                                    {skill}
                                </span>
                            </motion.span>
                        ))}
                    </div>
                </div>
             </SpotlightCard>
          ))}
       </div>
    </Section>
  );
};