import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`
        relative overflow-hidden
        bg-[#1c1c1e]/60
        backdrop-blur-xl 
        border border-white/[0.05] 
        rounded-2xl 
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
