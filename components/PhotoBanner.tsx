import React from 'react';

interface PhotoBannerProps {
  image: string;
  text: string;
  subtext?: string;
}

export const PhotoBanner: React.FC<PhotoBannerProps> = ({ image, text, subtext }) => (
  <div className="relative h-[250px] md:h-[350px] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-[#3D3529]/60" />
    <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
      <div>
        <p className="text-2xl md:text-4xl font-bold text-white">{text}</p>
        {subtext && <p className="mt-4 text-white/70 text-sm md:text-base">{subtext}</p>}
      </div>
    </div>
  </div>
);
