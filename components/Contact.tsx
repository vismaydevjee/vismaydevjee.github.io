import React from 'react';
import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { Mail, Linkedin, Github, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pb-32">
        <GlassCard className="p-12 text-center bg-gradient-to-b from-cyan-900/10 to-transparent">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                Want to talk RAG evaluation, LLM validation, or analytics systems?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                    href="https://calendly.com/devjeevismay/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-amber-500 bg-white/5 border border-amber-500/90 rounded-xl transition-all hover:text-white hover:bg-amber-600 hover:border-amber-600 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                >
                    <Calendar size={20} />
                    Calendly
                </a>
                <a 
                    href="mailto:devjeevismay@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)]"
                >
                    <Mail size={20} />
                    Email Me
                </a>
                <a 
                    href="https://linkedin.com/in/vismaydevjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-[#0077b5] hover:border-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]"
                >
                    <Linkedin size={20} />
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/vismaydevjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-violet-600 hover:border-violet-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                >
                    <Github size={20} />
                    GitHub
                </a>
            </div>
        </GlassCard>
    </Section>
  );
};