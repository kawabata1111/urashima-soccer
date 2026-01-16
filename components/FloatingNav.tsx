import React, { useState, useEffect } from 'react';
import { CalendarCheck, ArrowUp, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const FloatingNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-4 z-40 flex-col items-end gap-3 pointer-events-none">
      
      {/* Top Scroll Button */}
      <button
        onClick={scrollToTop}
        className={`pointer-events-auto p-3 bg-white/90 text-[#595045] rounded-full shadow-lg border-2 border-[#94A684]/20 hover:bg-[#94A684] hover:text-white transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="トップへ戻る"
      >
        <ArrowUp size={20} />
      </button>

      {/* LINE Button */}
      <a
        href={COMPANY_INFO.line}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center p-0 w-14 h-14 bg-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
        aria-label="LINEで問い合わせ"
      >
        <span className="absolute right-full mr-3 bg-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-[#595045]">
          LINEで質問
        </span>
        <img src="/images/line-icon.png" alt="LINE" className="w-full h-full object-cover" />
      </a>

      {/* Reservation CTA Button */}
      <a
        href={COMPANY_INFO.reservationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2 pl-4 pr-5 py-3 bg-[#E6A57E] text-white rounded-[30px_30px_5px_30px] shadow-xl hover:bg-[#D6956E] hover:-translate-y-1 transition-all duration-300 animate-bounce-slow"
      >
        <div className="bg-white/20 p-1.5 rounded-full">
          <CalendarCheck size={20} />
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] opacity-90 font-bold mb-0.5">24時間受付中</span>
          <span className="text-sm font-black tracking-wide">無料体験予約</span>
        </div>
        
        {/* Decorative Badge */}
        <div className="absolute -top-2 -left-2 bg-[#94A684] text-white text-[10px] font-bold px-2 py-0.5 rounded-full transform -rotate-12 border border-white shadow-sm">
          簡単1分!
        </div>
      </a>
    </div>
  );
};
