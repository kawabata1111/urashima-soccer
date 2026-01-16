import React from 'react';
import { SectionTitle } from './SectionTitle';
import { MapPin, Train, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Access: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-white relative overflow-hidden">
       {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9F7F2] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>

      <div className="container mx-auto">
        <SectionTitle 
          title="アクセス" 
          subtitle="スタジオへの行き方" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Info */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-[#F9F7F2] p-8 rounded-[30px] border border-[#94A684]/20 relative">
               {/* Pin decoration */}
              <div className="absolute -top-3 left-8 w-4 h-4 rounded-full bg-[#E6A57E] shadow-sm border-2 border-white"></div>
              
              <h3 className="text-xl font-bold text-[#595045] mb-6 flex items-center gap-2">
                <MapPin className="text-[#94A684]" />
                {COMPANY_INFO.facilityName}
              </h3>

              <div className="space-y-6 text-[#595045]">
                <div>
                  <p className="text-sm text-[#94A684] font-bold mb-1">住所</p>
                  <p className="text-lg font-medium">
                    〒171-0052<br />
                    東京都豊島区南長崎5-9-10-1F<br />
                    <span className="text-sm opacity-80">（ときわ荘通り沿い）</span>
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#94A684] font-bold mb-1">最寄り駅</p>
                  <div className="flex flex-col gap-2">
                    <p className="flex items-center gap-2">
                      <Train size={18} className="text-[#E6A57E]" />
                      <span>大江戸線 <span className="font-bold">落合南長崎駅</span> 徒歩8分</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Train size={18} className="text-[#E6A57E]" />
                      <span>西武池袋線 <span className="font-bold">東長崎駅</span> 徒歩7分</span>
                    </p>
                  </div>
                </div>

                 <div>
                  <p className="text-sm text-[#94A684] font-bold mb-1">営業時間</p>
                  <p className="flex items-center gap-2">
                    <Clock size={18} className="text-[#E6A57E]" />
                    <span>{COMPANY_INFO.hours}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <a 
                href="https://goo.gl/maps/placeholder" // Replace with actual Google Maps Link if available or use generic search
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#94A684] font-bold border-b-2 border-[#94A684] hover:text-[#E6A57E] hover:border-[#E6A57E] transition-colors pb-1"
              >
                Googleマップで開く &rarr;
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] rounded-[30px] overflow-hidden shadow-lg border-4 border-white relative z-10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.966375618218!2d139.6845347764136!3d35.72703817257256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ed3999999999%3A0x0!2zMzXCsDQzJzM3LjMiTiAxMznCsDQxJzEyLjQiRQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};