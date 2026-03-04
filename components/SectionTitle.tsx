import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16 relative z-10">
      <h2 className={`text-3xl md:text-4xl font-bold inline-block relative pb-3 ${light ? 'text-white' : 'text-[#94A684]'}`}>
        {title}
        {/* Organic underline */}
        <span
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-[#E6A57E]/70"
          style={{ borderRadius: '45% 55% 26% 74% / 69% 36% 64% 31%' }}
        ></span>
      </h2>
      {subtitle && <p className={`text-sm md:text-base mt-5 ${light ? 'text-white/70' : 'text-[#595045] opacity-90'}`}>{subtitle}</p>}
    </div>
  );
};
