import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { COMPANY_INFO } from '../constants';
import { SoccerBallSketch, TacticArrow } from './Decorations';

const IMAGES = [
  'https://picsum.photos/id/1058/1200/800', // Kid activity
  '/images/hero-1.png',                   // ユーザー指定画像1
  '/images/hero-2.jpg',                   // ユーザー指定画像2
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
    <section id="hero" className="relative w-full h-[85vh] min-h-[600px] md:min-h-[700px] overflow-hidden flex items-start pt-32 md:pt-0 md:items-center justify-center">
      
      {/* Background Decor: Giant Faint Soccer Ball Outline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] opacity-[0.03] text-[#595045] pointer-events-none animate-spin-slow" style={{ animationDuration: '60s' }}>
         <SoccerBallSketch className="w-full h-full" />
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div className="relative order-2 lg:order-1">
          {/* Tactic Arrow Decoration */}
          <div className="absolute -top-12 -left-8 w-32 rotate-12 opacity-60">
            <TacticArrow />
            <span className="absolute -top-2 right-0 text-sm font-handwriting text-[#E6A57E] rotate-6 font-bold transform translate-x-4">Attack!</span>
          </div>

          <div className="bg-[#F9F7F2]/90 backdrop-blur-sm p-8 md:p-10 rounded-[30px_10px_40px_10px] shadow-sm border border-[#94A684]/20 relative">
             {/* "Pin" decoration */}
            <div className="absolute -top-3 left-1/2 w-4 h-4 rounded-full bg-[#E6A57E] shadow-sm border-2 border-white"></div>

            <div className="inline-block px-4 py-1 bg-[#E6A57E] text-white text-sm font-bold mb-4 rounded-full shadow-sm transform -rotate-1">
              豊島区・南長崎
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#595045] mb-6 leading-tight">
              独自の「浦崎式」<br />
              <span className="text-[#94A684] text-4xl md:text-6xl relative inline-block">
                ウラトレ
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E6A57E]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-[#595045] mb-8 font-medium leading-relaxed opacity-90 text-lg">
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

        {/* Right: Image in Soccer Ball Patch Shape */}
        <div className="relative order-1 lg:order-2 hidden lg:flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            
            {/* Organic/Ball Shape Mask */}
            <div 
              className="absolute inset-0 overflow-hidden shadow-xl border-4 border-white bg-white"
              style={{ borderRadius: '46% 54% 47% 53% / 54% 41% 59% 46%' }} 
            >
               {IMAGES.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform ${
                    index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
              {/* Overlay Texture */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#94A684]/40 to-transparent mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Decorative "Satellites" - Little hexagons floating */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#F9F7F2] rounded-full flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '3s' }}>
              <SoccerBallSketch className="w-16 h-16 text-[#94A684]" />
            </div>
            <div className="absolute -bottom-8 -left-4 bg-white px-4 py-3 rounded-[20px_0_20px_0] shadow-md transform -rotate-3 border border-[#E6A57E]/30">
               <p className="font-bold text-[#E6A57E] text-sm">少人数制 &times; 脳トレ</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};