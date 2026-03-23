import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16 relative z-10">
      <h2 className={`text-3xl md:text-4xl font-bold inline-block relative pb-3 ${light ? 'text-white' : 'text-[#2563EB]'}`}>
        {title}
        <span
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-[#F97316]/70 rounded-full"
        ></span>
      </h2>
      {subtitle && <p className={`text-sm md:text-base mt-5 ${light ? 'text-white/70' : 'text-[#1E293B] opacity-90'}`}>{subtitle}</p>}
    </div>
  );
};
