import React from 'react';
import { SectionTitle } from './SectionTitle';
import { MapPin, Train, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Access: React.FC = () => {
  return (
    <section id="access" className="py-24 px-4 container mx-auto">
      <SectionTitle 
        title="アクセス" 
        subtitle="スタジオへの行き方" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        
        {/* Left: Info Card */}
        <div 
          className="bg-white p-8 md:p-10 order-2 lg:order-1 flex flex-col justify-center"
          style={{ 
            borderRadius: "30px 20px 40px 25px",
            boxShadow: "0 20px 40px -20px rgba(0,0,0,0.05)"
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#FFFBF0] rounded-full flex items-center justify-center text-[#E6A57E] shadow-sm">
              <MapPin size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#595045]">
              {COMPANY_INFO.facilityName}
            </h3>
          </div>

          <div className="space-y-8 pl-2 relative">
             {/* Dotted line decoration */}
            <div className="absolute left-[19px] top-10 bottom-6 w-0 border-l-2 border-dashed border-[#F9F7F2]"></div>

            <div className="relative group">
              <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-[#94A684] border-4 border-white shadow-sm z-10"></div>
              <p className="text-xs text-[#94A684] font-bold mb-1 tracking-wider uppercase">Address</p>
              <p className="text-lg font-bold text-[#595045] leading-relaxed">
                〒171-0052<br />
                東京都豊島区南長崎5-9-10-1F<br />
                <span className="text-sm opacity-60 font-medium">（ときわ荘通り沿い）</span>
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-[#E6A57E] border-4 border-white shadow-sm z-10"></div>
              <p className="text-xs text-[#E6A57E] font-bold mb-1 tracking-wider uppercase">Station</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-[#595045] font-medium">
                  <Train size={16} className="text-[#595045]/40" />
                  <span>大江戸線 <span className="font-bold border-b-2 border-[#FFFBF0]">落合南長崎駅</span> 徒歩8分</span>
                </p>
                <p className="flex items-center gap-2 text-[#595045] font-medium">
                  <Train size={16} className="text-[#595045]/40" />
                  <span>西武池袋線 <span className="font-bold border-b-2 border-[#FFFBF0]">東長崎駅</span> 徒歩7分</span>
                </p>
              </div>
            </div>

            <div className="relative group">
               <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-[#8FB1CC] border-4 border-white shadow-sm z-10"></div>
              <p className="text-xs text-[#8FB1CC] font-bold mb-1 tracking-wider uppercase">Hours</p>
              <p className="flex items-center gap-2 text-[#595045] font-bold text-lg">
                <Clock size={18} className="text-[#595045]/40" />
                <span>{COMPANY_INFO.hours}</span>
              </p>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-dashed border-[#F9F7F2] text-center">
             <a 
                href="https://www.google.com/maps/search/?api=1&query=東京都豊島区南長崎5-9-10"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#F9F7F2] text-[#595045] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#94A684] hover:text-white transition-all transform hover:scale-105 shadow-sm"
              >
                Googleマップで見る
              </a>
          </div>
        </div>

        {/* Right: Map Card */}
        <div 
          className="order-1 lg:order-2 bg-white p-2 shadow-lg h-[400px] lg:h-auto min-h-[400px]"
          style={{ 
             borderRadius: "40px 25px 30px 40px",
             transform: "rotate(1deg)"
          }}
        >
          <div 
            className="w-full h-full overflow-hidden"
            style={{ borderRadius: "35px 20px 25px 35px" }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.966375618218!2d139.6845347764136!3d35.72703817257256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ed3999999999%3A0x0!2zMzXCsDQzJzM3LjMiTiAxMznCsDQxJzEyLjQiRQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};