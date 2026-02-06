import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};
