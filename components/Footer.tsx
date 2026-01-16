import React from 'react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';
import { MapPin, Instagram, Mail, User, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="access" className="bg-[#595045] text-[#F9F7F2] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Social */}
          <div>
            <h3 className="text-2xl font-black text-[#94A684] mb-5 tracking-wider">URATORE</h3>
            <p className="text-[#F9F7F2]/70 text-sm mb-8 leading-relaxed">
              地域密着型のスポーツ複合施設。<br />
              お子様から大人まで、地域の皆様の<br />
              健康と笑顔をサポートします。
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#F9F7F2]/10 flex items-center justify-center hover:bg-[#94A684] transition-colors" style={{ borderRadius: '43% 57% 70% 30% / 30% 30% 70% 70%' }}>
                <Instagram size={20} />
              </a>
              <a href={COMPANY_INFO.line} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform overflow-hidden" style={{ borderRadius: '43% 57% 70% 30% / 30% 30% 70% 70%' }}>
                <img src="/images/line-icon.png" alt="LINE" className="w-full h-full object-cover mix-blend-multiply" />
              </a>
            </div>
          </div>

          {/* Access */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-[#94A684]">アクセス・会社情報</h4>
            <div className="space-y-4 text-sm text-[#F9F7F2]/80">
              <p><span className="font-bold text-[#E6A57E] mr-2">会社名</span> {COMPANY_INFO.name}</p>
              <p className="flex items-center gap-3">
                <User size={16} className="text-[#94A684] shrink-0" />
                <span>{COMPANY_INFO.representative}</span>
              </p>
              <p><span className="font-bold text-[#E6A57E] mr-2">施設名</span> {COMPANY_INFO.facilityName}</p>
              <p className="flex items-start gap-3">
                <MapPin size={16} className="text-[#94A684] mt-1 shrink-0" />
                <span>{COMPANY_INFO.postalCode} {COMPANY_INFO.address}</span>
              </p>
              <p className="pl-7 text-xs text-[#F9F7F2]/50">（{COMPANY_INFO.stations}）</p>
              <p><span className="font-bold text-[#E6A57E] mr-2">TEL</span> {COMPANY_INFO.phone}</p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-[#94A684] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </p>
              <p><span className="font-bold text-[#E6A57E] mr-2">営業時間</span> {COMPANY_INFO.hours}</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#94A684]">サイトマップ</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#F9F7F2]/80 hover:text-[#E6A57E] text-sm transition-colors relative inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-[#F9F7F2]/80 hover:text-[#E6A57E] text-sm transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[#F9F7F2]/10 pt-8 text-center text-xs text-[#F9F7F2]/40">
          &copy; {new Date().getFullYear()} URATORE (LLC URA). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};