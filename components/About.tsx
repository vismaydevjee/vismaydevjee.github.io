import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { SpotlightCard } from './ui/SpotlightCard';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  ArrowUpRight, 
  ShieldCheck, 
  TrendingUp,
  ArrowUpDown,
  Layers,
  Server,
  Terminal,
  Activity,
  Zap,
  Pause,
  Play,
  Briefcase,
  Target,
  Cpu
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Simulation loop for the pipeline visualization
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 3500); // 3.5s per stage to allow animations to complete
    return () => clearInterval(interval);
  }, [isPaused]);

  const pipelineStages = [
    {
      id: "intake",
      label: "INTAKE & SCOPE",
      sub: "Hierarchical Orchestration",
      icon: Layers,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      metrics: { "Latency": "15ms", "Class": "Fund_Type_A" },
      desc: "Query mapped to category summaries to prune 90% of irrelevant search space."
    },
    {
      id: "retrieve",
      label: "HYBRID RETRIEVAL",
      sub: "Structure-Aware Chunking",
      icon: Database,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      metrics: { "Chunks": "150", "Dense": "Top-50", "Key": "Fund_Name" },
      desc: "Parallel execution of dense vectors and keyword filters on atomic table chunks."
    },
    {
      id: "rank",
      label: "RERANKING",
      sub: "Cross-Encoder Scoring",
      icon: ArrowUpDown,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      metrics: { "In": "50", "Out": "5", "Score": "0.98" },
      desc: "High-latency, high-precision pass to reorder contexts by semantic relevance."
    },
    {
      id: "validate",
      label: "COMPLIANCE GATE",
      sub: "Grounding & Citations",
      icon: ShieldCheck,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      metrics: { "Citation": "PASS", "Hallucination": "0%" },
      desc: "Verification layer ensuring every claim links back to a retrieved chunk."
    },
    {
      id: "generate",
      label: "GENERATION",
      sub: "Audit-Ready Response",
      icon: Terminal,
      color: "text-white",
      bg: "bg-white/10",
      border: "border-white/20",
      metrics: { "Tokens": "450", "Time": "1.2s" },
      desc: "Final LLM synthesis with strict system prompts for tone and formatting."
    }
  ];

  // --- Visualizations for each stage ---

  const PyramidVisual = () => (
    <div className="flex flex-col items-center justify-center h-48 w-full gap-1">
      {/* Top Layer: Category Summaries */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-24 h-12 bg-blue-500/20 border border-blue-400/50 flex items-center justify-center relative"
        style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0% 100%)' }}
      >
        <div className="text-[9px] font-bold text-blue-200 mt-2">Category</div>
      </motion.div>

      {/* Middle Layer: Document Summaries */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="w-40 h-14 bg-blue-500/10 border border-blue-400/30 flex items-center justify-center relative"
        style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)' }}
      >
        <div className="text-[9px] font-bold text-blue-200/80">Document Summaries</div>
      </motion.div>

      {/* Bottom Layer: All Vectors */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="w-56 h-16 bg-blue-500/5 border border-blue-400/10 flex items-center justify-center relative"
        style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0% 100%)' }}
      >
        <div className="flex gap-1 flex-wrap justify-center px-8 opacity-40">
           {Array.from({ length: 12 }).map((_, i) => (
             <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
           ))}
        </div>
      </motion.div>
    </div>
  );

  const HybridVisual = () => (
    <div className="flex items-center justify-center h-48 w-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
         {/* Central Processor */}
         <motion.div 
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           className="w-16 h-16 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-400 flex items-center justify-center z-10"
         >
            <Database size={24} />
         </motion.div>
      </div>

      {/* Left Stream: Dense */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: -40, opacity: 1 }}
        className="absolute left-10 flex flex-col items-center gap-2"
      >
        <div className="text-[10px] text-cyan-300 font-mono">VECTOR</div>
        <div className="w-24 h-2 bg-gradient-to-r from-transparent to-cyan-500 rounded-full" />
      </motion.div>

      {/* Right Stream: Keyword */}
      <motion.div 
         initial={{ x: 100, opacity: 0 }}
         animate={{ x: 40, opacity: 1 }}
         className="absolute right-10 flex flex-col items-center gap-2"
      >
        <div className="text-[10px] text-cyan-300 font-mono">KEYWORD</div>
        <div className="w-24 h-2 bg-gradient-to-l from-transparent to-cyan-500 rounded-full" />
      </motion.div>

      {/* Particles converging */}
       <motion.div 
         className="absolute w-full h-full flex items-center justify-center pointer-events-none"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
       >
         <div className="w-40 h-40 rounded-full border border-cyan-500/20 animate-ping" />
       </motion.div>
    </div>
  );

  const RerankVisual = () => (
    <div className="flex flex-col gap-2 w-48 mx-auto h-48 justify-center">
      {[
        { width: "90%", color: "bg-slate-700", score: "0.65" },
        { width: "100%", color: "bg-violet-500", score: "0.98" },
        { width: "80%", color: "bg-slate-700", score: "0.42" },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          layout
          initial={{ y: idx === 1 ? 20 : 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className={`h-10 rounded-lg border border-white/5 flex items-center px-3 justify-between ${item.color === 'bg-violet-500' ? 'bg-violet-500/20 border-violet-400/50' : 'bg-white/5'}`}
          style={{ width: item.width }}
        >
           <div className="w-16 h-2 bg-white/20 rounded-full" />
           <span className="text-[10px] font-mono text-white/70">{item.score}</span>
        </motion.div>
      ))}
    </div>
  );

  const GateVisual = () => (
    <div className="flex items-center justify-center h-48 w-full relative">
       <motion.div 
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         className="w-32 h-40 bg-emerald-900/20 border border-emerald-500/30 rounded-lg flex items-col items-center justify-center relative overflow-hidden"
       >
         <div className="space-y-3 w-full px-4">
             <div className="w-full h-2 bg-emerald-500/20 rounded-full" />
             <div className="w-3/4 h-2 bg-emerald-500/20 rounded-full" />
             <div className="w-full h-2 bg-emerald-500/20 rounded-full" />
         </div>
         
         {/* Scanning Line */}
         <motion.div 
           initial={{ top: 0 }}
           animate={{ top: "100%" }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
         />

         {/* Checkmark */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[1px]"
         >
            <ShieldCheck size={40} className="text-emerald-400" />
         </motion.div>
       </motion.div>
    </div>
  );

  const GenerationVisual = () => (
    <div className="h-48 w-full p-4 font-mono text-xs flex flex-col gap-2">
       <div className="flex gap-2 items-center text-slate-500">
          <Terminal size={14} />
          <span>response_stream</span>
       </div>
       <div className="flex-1 bg-black/40 rounded-lg p-3 border border-white/10 text-slate-300 leading-relaxed overflow-hidden">
         <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
         >
            Based on the fund prospectus (Section 4.2), the liquidity risk is classified as...
         </motion.span>
         <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-white ml-1 align-middle"
         />
       </div>
    </div>
  );

  const getActiveVisual = () => {
    switch(activeStage) {
      case 0: return <PyramidVisual />;
      case 1: return <HybridVisual />;
      case 2: return <RerankVisual />;
      case 3: return <GateVisual />;
      case 4: return <GenerationVisual />;
      default: return <PyramidVisual />;
    }
  };

  return (
    <Section id="about" className="relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* ROW 1: THE "WHY" (Outcome Focused) */}
        <div className="md:col-span-2 h-full">
            <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Bridging the gap between <span className="text-cyan-400">Research</span> and <span className="text-violet-500">Production</span>.
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        I design evaluation, data, and compliance layers that make AI deployable in regulated environments. My work turns unstructured document chaos into validated, decision-ready metrics using advanced RAG architectures.
                    </p>
                </div>
                {/* Business Impact Pills */}
                <div className="flex flex-wrap gap-4">
                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                        <TrendingUp size={18} className="text-emerald-400" />
                        <div>
                            <div className="text-white font-bold text-sm">40+ hrs/mo</div>
                            <div className="text-[10px] text-slate-500 uppercase">Saved via Automation</div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                        <Zap size={18} className="text-amber-400" />
                        <div>
                            <div className="text-white font-bold text-sm">23% Lift</div>
                            <div className="text-[10px] text-slate-500 uppercase">Response Quality</div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                        <Briefcase size={18} className="text-red-500" />
                        <div>
                            <div className="text-white font-bold text-sm">C-Suite</div>
                            <div className="text-[10px] text-slate-500 uppercase">AI Roadmap (CRO + VP Risk)</div>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </div>

        {/* Card 2: Recall Metric (High Signal) - REDESIGNED */}
        <div className="h-full">
            <SpotlightCard className="h-full p-6 flex flex-col" spotlightColor="rgba(0, 240, 255, 0.2)">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                         <div className="p-2.5 bg-cyan-950/30 rounded-xl border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                            <Target size={20} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white tracking-wide">RETRIEVAL ACCURACY</div>
                            <div className="text-[10px] text-cyan-300/60 font-mono mt-0.5">EVAL_SET: 12K_DOCS</div>
                        </div>
                    </div>
                    
                     {/* Status Pulse */}
                    <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400">LIVE</span>
                    </div>
                </div>

                {/* Main Metric Display */}
                <div className="relative mb-6">
                    <div className="flex items-baseline gap-1">
                        <span className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter">94.2</span>
                        <span className="text-2xl font-bold text-cyan-500">%</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="text-sm font-medium text-slate-400">Recall@5</div>
                         <div className="h-1 w-1 rounded-full bg-slate-600" />
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                             <ArrowUpRight size={12} />
                             <span>12.4% Lift</span>
                        </div>
                    </div>
                </div>

                 {/* Technical Breakdown / Visualization */}
                <div className="mt-auto space-y-4">
                    
                    {/* Comparison Bar */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-mono font-medium">
                            <span className="text-slate-500">BASELINE (BM25)</span>
                            <span className="text-slate-500">TARGET</span>
                        </div>
                        <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                             {/* Baseline Marker */}
                            <div className="absolute top-0 bottom-0 left-0 w-[82%] bg-white/10 border-r border-white/20 z-10" />
                            
                            {/* Actual Progress */}
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "94.2%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan-400 z-20 shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
                            />
                        </div>
                         <div className="flex justify-between text-[10px] font-mono">
                            <span className="text-white/40">82.0%</span>
                            <span className="text-cyan-400">94.2%</span>
                        </div>
                    </div>

                    {/* Secondary Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                         <div className="bg-white/[0.03] rounded-lg p-2 border border-white/5">
                             <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-1">Mean Precision</div>
                             <div className="text-white font-mono text-sm">0.918</div>
                         </div>
                          <div className="bg-white/[0.03] rounded-lg p-2 border border-white/5">
                             <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-1">Latency (P99)</div>
                             <div className="text-white font-mono text-sm">142ms</div>
                         </div>
                    </div>
                </div>

            </SpotlightCard>
        </div>

        {/* ROW 2: SYSTEM ARCHITECTURE VISUALIZATION (THE HERO) */}
        <div className="md:col-span-3">
            <SpotlightCard className="p-0 overflow-hidden min-h-[600px] flex flex-col" spotlightColor="rgba(120, 119, 198, 0.1)">
                
                {/* 1. Header Area: Architecture Summary */}
                <div className="border-b border-white/10 p-6 md:px-8 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-green-500 tracking-wider">SYSTEM ONLINE // PRODUCTION PIPELINE</span>
                    </div>
                    <p className="text-sm md:text-base text-slate-300 max-w-4xl leading-relaxed">
                        <span className="text-white font-medium">Architecture Summary:</span> A user query is progressively narrowed through <span className="text-blue-300">hierarchical summaries</span>, precision-retrieved via <span className="text-cyan-300">structure-aware chunking</span>, re-ranked for <span className="text-violet-300">semantic accuracy</span>, and validated by a <span className="text-emerald-300">compliance gate</span> before generation.
                    </p>
                </div>

                {/* 2. The Neural Circuit Board (Main Vis) */}
                <div className="flex-1 relative bg-[#050505] p-6 md:p-8">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full relative z-10">
                        
                        {/* LEFT COL: Pipeline Stages List (Connected Panel Design) */}
                        <div className="flex flex-col h-full gap-4">
                            
                            {/* Main Sequence Panel */}
                            <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col overflow-hidden">
                                
                                {/* Header */}
                                <div className="p-4 border-b border-white/10 bg-white/[0.05] flex items-center justify-between shrink-0">
                                    <div className="flex items-center gap-3">
                                         <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                                             <Cpu size={16} />
                                         </div>
                                         <div>
                                             <div className="text-sM font-bold tracking-wider text-white">
                                                 AI WORKFLOW
                                             </div>
                                             <div className="text-[12px] text-slate-400 font-mono">
                                                 End-to-End Execution Flow
                                             </div>
                                         </div>
                                    </div>
                                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                                </div>

                                {/* Stages List */}
                                <div className="flex-1 flex flex-col relative">
                                    {pipelineStages.map((stage, idx) => {
                                        const isActive = activeStage === idx;
                                        return (
                                            <div 
                                                key={stage.id}
                                                className={`
                                                    relative p-4 transition-all duration-300 cursor-pointer
                                                    border-b border-white/5 last:border-0
                                                    flex-1 flex flex-col justify-center
                                                    ${isActive 
                                                        ? `${stage.bg}` 
                                                        : 'hover:bg-white/5 bg-transparent'
                                                    }
                                                `}
                                                onClick={() => setActiveStage(idx)}
                                            >
                                                {/* Active State Highlights */}
                                                {isActive && (
                                                    <motion.div 
                                                        layoutId="active-glow"
                                                        className={`absolute left-0 top-0 bottom-0 w-1 bg-current ${stage.color}`}
                                                    />
                                                )}

                                                <div className="flex items-center justify-between relative z-10">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-lg bg-black/40 border border-white/5 transition-colors duration-300 ${isActive ? stage.color : 'text-slate-500'}`}>
                                                            <stage.icon size={16} />
                                                        </div>
                                                        <div>
                                                            <div className={`text-sm font-bold tracking-wider transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                                                                {stage.label}
                                                            </div>
                                                            <div className="text-[12px] text-slate-500 font-mono hidden md:block">
                                                                {stage.sub}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {isActive && (
                                                        <Activity size={14} className={`${stage.color} animate-pulse`} />
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Independent Auto Cycle Control */}
                            <div 
                                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors group shrink-0"
                                onClick={() => setIsPaused(!isPaused)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg bg-black/40 border border-white/5 ${!isPaused ? 'text-green-400' : 'text-amber-500'}`}>
                                        {!isPaused ? <Play size={16} /> : <Pause size={16} />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold tracking-wider text-slate-400 group-hover:text-white">
                                            AUTO-CYCLE
                                        </div>
                                        <div className="text-[12px] text-slate-500 font-mono">
                                            {!isPaused ? "Running" : "Paused"}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={`w-9 h-5 rounded-full relative transition-colors duration-300 border border-white/10 ${!isPaused ? 'bg-green-500/20' : 'bg-slate-800'}`}>
                                    <motion.div 
                                        animate={{ x: !isPaused ? 18 : 2 }}
                                        className={`absolute top-0.5 w-3.5 h-3.5 rounded-full shadow-sm ${!isPaused ? 'bg-green-400' : 'bg-amber-400'}`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COL: Dynamic "Console" Visualization */}
                        <SpotlightCard 
                            className="lg:col-span-2 p-0 overflow-hidden bg-black/40 border-white/10 h-full" 
                            spotlightColor="rgba(255, 255, 255, 0.05)"
                        >
                            <div className="flex flex-col h-full">
                                {/* Console Header */}
                                <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    </div>
                                    <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
                                        <Server size={10} />
                                        rga-pipeline-v2.0
                                    </div>
                                </div>

                                {/* Active Stage Detail View */}
                                <div className="flex-1 p-8 flex flex-col justify-center items-center relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeStage}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full max-w-md"
                                        >
                                            {/* Dynamic Visualization Area */}
                                            <div className="flex justify-center mb-8 h-48">
                                                {getActiveVisual()}
                                            </div>

                                            {/* Description */}
                                            <div className="text-center mb-8">
                                                <h3 className={`text-xl font-bold mb-2 ${pipelineStages[activeStage].color}`}>
                                                    {pipelineStages[activeStage].label}
                                                </h3>
                                                <p className="text-sm text-slate-400 leading-relaxed">
                                                    {pipelineStages[activeStage].desc}
                                                </p>
                                            </div>

                                            {/* Live Telemetry Grid for this Stage */}
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {Object.entries(pipelineStages[activeStage].metrics).map(([key, value]) => (
                                                    <div key={key} className="bg-white/5 border border-white/5 rounded px-3 py-2 text-center">
                                                        <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">{key}</div>
                                                        <div className="text-sm font-mono text-white">{value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Global Telemetry Footer */}
                                <div className="h-12 bg-white/[0.02] border-t border-white/5 flex items-center px-6 gap-6 overflow-x-auto">
                                    <div className="flex items-center gap-2 min-w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-mono text-slate-400">STATUS: HEALTHY</span>
                                    </div>
                                    <div className="w-px h-4 bg-white/10" />
                                    <div className="text-[10px] font-mono text-slate-400 min-w-fit">
                                        Total Requests: <span className="text-white">14,203</span>
                                    </div>
                                    <div className="w-px h-4 bg-white/10" />
                                    <div className="text-[10px] font-mono text-slate-400 min-w-fit">
                                        Avg Latency: <span className="text-white">840ms</span>
                                    </div>
                                    <div className="w-px h-4 bg-white/10" />
                                    <div className="text-[10px] font-mono text-slate-400 min-w-fit">
                                        Error Rate: <span className="text-emerald-400">0.02%</span>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </SpotlightCard>
        </div>

      </div>
    </Section>
  );
};