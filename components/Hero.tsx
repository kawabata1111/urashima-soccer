import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { COMPANY_INFO } from '../constants';

const IMAGES = [
  '/images/school-cones.jpg',
  '/images/hero-1.png',
  '/images/hero-2.jpg',
];

export const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full h-[85vh] min-h-[600px] md:min-h-[700px] overflow-hidden flex items-center justify-center">

      {/* Full-width background images */}
      {IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#595045]/80 via-[#595045]/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#595045]/30 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1 bg-[#E6A57E] text-white text-sm font-bold mb-4 rounded-full shadow-sm">
            豊島区・南長崎
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            独自の「ウラトレ式」<br />
            <span className="text-[#94A684] text-4xl md:text-6xl relative inline-block drop-shadow-lg">
              ウラトレ
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E6A57E]/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-white/90 mb-8 font-medium leading-relaxed text-lg">
            チーム練習だけでは足りない「個」の力。<br />
            サッカースクール・パーソナル・スタジオ。<br />
            ここから、あなたの<span className="text-[#E6A57E] font-bold">新しい可能性</span>を描き出します。
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href={COMPANY_INFO.reservationUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="group shadow-lg">
                無料体験・予約する
                <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Image indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-[#E6A57E] w-7' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`画像${index + 1}を表示`}
          />
        ))}
      </div>
    </section>
  );
};
