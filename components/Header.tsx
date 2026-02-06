import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <nav className={`
          pointer-events-auto
          flex items-center justify-between
          w-full max-w-3xl
          p-2 pl-6 pr-2
          rounded-full
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          border
          relative
          overflow-hidden
          ${scrolled 
            ? 'bg-black/30 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ring-1 ring-white/5' 
            : 'bg-white/[0.01] backdrop-blur-sm border-white/[0.05] shadow-2xl shadow-black/50'
          }
        `}>
          {/* Glass Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-b ${scrolled ? 'from-white/10 via-white/5 to-transparent' : 'from-white/[0.02] to-transparent'} pointer-events-none transition-all duration-500`} />

          <a href="#home" className="relative z-10 text-sm font-bold text-white tracking-widest uppercase flex items-center gap-1 shrink-0">
            Vismay<span className="text-cyan-400">.</span>AI
          </a>

          {/* Visual Separator */}
          <div className="hidden md:block w-px h-5 bg-white/10 mx-4 relative z-10" />

          <div className="hidden md:flex items-center justify-center gap-8 relative z-10 flex-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-300 px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-10 shrink-0">
              <a 
                href="#contact"
                className="px-6 py-2.5 text-xs font-bold text-black bg-white hover:bg-cyan-50 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                Contact Me
              </a>
              
              <button 
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={18} />
              </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-3xl flex items-center justify-center transition-all duration-500">
            <button 
                className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
            >
                <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href}
                        className="text-4xl font-display font-bold text-white hover:text-cyan-400 transition-colors tracking-tight"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
      )}
    </>
  );
};