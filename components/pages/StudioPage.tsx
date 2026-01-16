import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { Button } from '../Button';
import { COMPANY_INFO } from '../../constants';
import { Music, Users, Layout, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudioPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
      <div className="mb-8">
        <Link to="/" className="text-[#94A684] font-bold hover:underline flex items-center gap-2">
          &larr; ホームに戻る
        </Link>
      </div>

      {/* Hero-like area */}
      <div className="relative rounded-[40px] overflow-hidden h-[400px] mb-12 shadow-lg group">
        <img 
          src="/images/service-studio.png" 
          alt="Studio Interior" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
          <div className="text-white">
            <span className="inline-block px-4 py-1 bg-[#94A684] text-white text-sm font-bold mb-3 rounded-full">
              土日祝 10:00 - 21:00
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-2">レンタルスタジオ</h1>
            <p className="text-lg opacity-90">
              ダンス、ヨガ、撮影、ワークショップに。<br/>
              地域最安値級のフリースペース。
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Info */}
        <div className="lg:col-span-2">
          <SectionTitle title="施設・設備" subtitle="快適な空間をご提供します" />
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F9F7F2] mb-8">
            <h3 className="font-bold text-[#595045] text-xl mb-6 border-l-4 border-[#E6A57E] pl-4">利用用途</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {['ダンス練習', 'ヨガ・ピラティス', '演劇稽古', '写真・動画撮影', '会議・セミナー', '個展・ギャラリー', 'ママ会', 'ワークショップ'].map((tag, i) => (
                 <span key={i} className="bg-[#F9F7F2] text-[#595045] text-sm py-2 px-3 rounded-lg text-center font-medium">
                   {tag}
                 </span>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white p-6 rounded-2xl flex items-start gap-4">
                <Layout className="text-[#94A684] shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-[#595045]">広さ・床</h4>
                  <p className="text-sm text-[#595045]/70 mt-1">
                    約30平米。足腰に優しいクッション性のあるフローリング採用。
                  </p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl flex items-start gap-4">
                <Music className="text-[#94A684] shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-[#595045]">音響設備</h4>
                  <p className="text-sm text-[#595045]/70 mt-1">
                    Bluetoothスピーカー完備。スマホから好きな音楽を流せます。
                  </p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl flex items-start gap-4">
                <Layout className="text-[#94A684] shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-[#595045]">大型鏡</h4>
                  <p className="text-sm text-[#595045]/70 mt-1">
                    壁一面の大型ミラー完備。ダンスやフォームチェックに最適。
                  </p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-2xl flex items-start gap-4">
                <Wifi className="text-[#94A684] shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-[#595045]">その他</h4>
                  <p className="text-sm text-[#595045]/70 mt-1">
                    更衣スペース、空調、トイレ、電源、Wi-Fi完備。
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Sidebar Pricing */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[30px] shadow-lg sticky top-24 border-t-8 border-[#94A684]">
             <h3 className="text-xl font-bold text-[#595045] mb-6 text-center">ご利用料金</h3>
             
             <div className="text-center mb-6">
               <p className="text-sm text-[#595045]/80 mb-1 font-bold">土日祝 10:00 - 21:00</p>
               <div className="flex items-end justify-center gap-1 text-[#94A684] font-black leading-none my-3">
                 <span className="text-4xl">2,000</span>
                 <span className="text-lg mb-1">円</span>
               </div>
               <p className="text-xs text-[#595045]/60">1コマ（45分）あたり</p>
             </div>

             <div className="space-y-4 mb-8">
               <div className="text-sm text-[#595045]/80 bg-[#F9F7F2] p-4 rounded-xl">
                 <span className="font-bold block mb-1">キャンセル規定</span>
                 前日・当日: 100%<br/>
                 3日前〜: 50%
               </div>
             </div>

             <a href={COMPANY_INFO.reservationUrl} target="_blank" rel="noopener noreferrer">
               <Button fullWidth variant="accent">空き状況を確認・予約</Button>
             </a>
             
             <p className="text-xs text-center mt-4 text-[#595045]/50">
               ※定期利用をご希望の方は<br/>お問い合わせフォームよりご相談ください。
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};