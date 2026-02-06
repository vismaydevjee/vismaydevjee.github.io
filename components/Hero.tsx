import React from 'react';
import { motion } from 'framer-motion';
import { Avatar } from './ui/Avatar';
import { ArrowDown, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full bg-[#03000a] z-0">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SYSTEM ONLINE // AI ENGINEER
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text   bg-gradient-to-b from-white to-white/20 ">
              ARCHITECTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">INTELLIGENCE</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed border-l-2 border-white/10 pl-6"
          >
            I build the neural pathways of modern business. Specializing in 
            <span className="text-white font-medium"> RAG Systems</span>, 
            <span className="text-white font-medium"> LLM Evaluation</span>, and 
            <span className="text-white font-medium"> High-Scale Data Pipelines</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
             <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
               View Deployed Systems
             </a>            
             <a 
               href="/Resume.pdf" 
               download="Vismay_Devjee_Resume.pdf"
               className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-full hover:bg-cyan-950/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
             >
               <Download size={20} />
               Download Resume
             </a>
          </motion.div>
        </div>

        {/* Avatar / Visual */}
        <motion.div 
          className="order-1 lg:order-2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Holographic Portal Effect */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full blur-[60px] opacity-20 animate-pulse" />
             <div className="relative z-10 p-8 border border-white/10 bg-white/5 rounded-full backdrop-blur-sm shadow-2xl shadow-cyan-900/20">
                <Avatar />
             </div>
             
             {/* Orbiting Elements */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/5 border-dashed"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-white/5 opacity-50"
             />
          </div>
        </motion.div>

      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
