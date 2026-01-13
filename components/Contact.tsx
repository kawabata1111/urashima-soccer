import React from 'react';
import { Phone, MessageCircle, Calendar, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { GrassLine, NetPattern } from './Decorations';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative pt-32 pb-24 overflow-hidden bg-[#94A684] text-white">
      
      {/* Background Texture: Net Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg width="100%" height="100%">
          <rect width="100%" height="100%" fill="url(#netPattern)" className="text-white" />
        </svg>
      </div>

      {/* Top Border: Grass */}
      <div className="absolute top-0 left-0 w-full text-[#F9F7F2]">
        <GrassLine className="w-full h-12 md:h-16 text-[#F9F7F2]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
           <span className="font-bold tracking-widest uppercase text-sm">Join the Team</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">まずは無料体験へ！</h2>
        <p className="text-white/90 mb-12 text-lg">
          見学・ご相談もお気軽にどうぞ。<br />
          ピッチでお待ちしております。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Phone */}
          <a href={`tel:${COMPANY_INFO.phone}`} className="block group">
            <div 
              className="bg-[#F9F7F2] text-[#595045] p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white relative overflow-hidden"
              style={{ borderRadius: "20px" }}
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#94A684]/10 rounded-full"></div>
              <div className="bg-white w-14 h-14 flex items-center justify-center mx-auto mb-5 text-[#94A684] rounded-full shadow-sm">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">電話で予約</h3>
              <p className="text-xl font-black text-[#94A684] mb-2">{COMPANY_INFO.phone}</p>
              <p className="text-xs text-[#595045]/60">10:00〜20:00</p>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:${COMPANY_INFO.email}`} className="block group">
            <div 
              className="bg-[#F9F7F2] text-[#595045] p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white relative overflow-hidden"
              style={{ borderRadius: "20px" }}
            >
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-[#E6A57E]/10 rounded-full"></div>
              <div className="bg-white w-14 h-14 flex items-center justify-center mx-auto mb-5 text-[#E6A57E] rounded-full shadow-sm">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">メールで相談</h3>
              <p className="text-xs text-[#595045]/60 mb-3 break-all font-medium">{COMPANY_INFO.email}</p>
              <span className="text-[#E6A57E] font-bold text-sm border-b border-[#E6A57E] pb-0.5">メールを送る</span>
            </div>
          </a>

          {/* LINE */}
          <a href="#" className="block group">
            <div 
              className="bg-[#F9F7F2] text-[#595045] p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white relative overflow-hidden"
              style={{ borderRadius: "20px" }}
            >
               <div className="absolute right-1/2 -top-6 w-24 h-24 bg-[#94A684]/10 rounded-full blur-xl"></div>
              <div className="bg-white w-14 h-14 flex items-center justify-center mx-auto mb-5 text-[#94A684] rounded-full shadow-sm">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">LINEで相談</h3>
              <p className="text-sm text-[#595045]/60 mb-4">
                公式LINEから24時間<br />お問い合わせ可能
              </p>
              <span className="text-[#94A684] font-bold text-sm border-b border-[#94A684] pb-0.5">友達追加</span>
            </div>
          </a>

          {/* Web Reserve */}
          <a href={COMPANY_INFO.reservationUrl} target="_blank" rel="noopener noreferrer" className="block group">
             <div 
               className="bg-[#E6A57E] text-white p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-[#D6956E] relative overflow-hidden border-2 border-white/30"
               style={{ borderRadius: "20px" }}
             >
               {/* Stripe decoration */}
               <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_12px)]"></div>
               
               <div className="bg-white/20 w-14 h-14 flex items-center justify-center mx-auto mb-5 rounded-full relative z-10">
                <Calendar size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 relative z-10">Web予約</h3>
              <p className="text-sm text-white/90 mb-6 relative z-10">
                空き状況を確認して<br />その場で予約完了
              </p>
              <div className="bg-white text-[#E6A57E] py-2 px-6 font-bold text-sm inline-block rounded-full relative z-10 shadow-sm">予約サイトへ</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};