import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#94A684] inline-block relative pb-3">
        {title}
        {/* Organic underline */}
        <span 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-[#E6A57E]/70"
          style={{ borderRadius: '45% 55% 26% 74% / 69% 36% 64% 31%' }}
        ></span>
      </h2>
      {subtitle && <p className="text-[#595045] text-sm md:text-base mt-5 opacity-90">{subtitle}</p>}
    </div>
  );
};