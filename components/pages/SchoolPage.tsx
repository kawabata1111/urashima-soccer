import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { Button } from '../Button';
import { COMPANY_INFO } from '../../constants';
import { HandDrawnHex, TacticArrow } from '../Decorations';
import { CheckCircle2, Clock, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SchoolPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
      {/* Breadcrumb / Back */}
      <div className="mb-8">
        <Link to="/" className="text-[#94A684] font-bold hover:underline flex items-center gap-2">
          &larr; ホームに戻る
        </Link>
      </div>

      {/* Header Section */}
      <div className="relative mb-16 bg-white p-8 md:p-12 rounded-[30px] border border-[#94A684]/20 shadow-sm overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#94A684]/10 rounded-bl-full -mr-10 -mt-10"></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1 bg-[#E6A57E] text-white text-sm font-bold mb-4 rounded-full">
            小学生対象
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#595045] mb-6">
            サッカースクール<br/>
            <span className="text-[#94A684] text-2xl md:text-3xl">浦崎式「個」の育成メソッド</span>
          </h1>
          <p className="text-[#595045]/80 text-lg leading-relaxed max-w-3xl">
            チーム練習だけでは補いきれない「個人の技術」「判断力」「身体操作」を徹底的に磨きます。<br/>
            少人数制だからこそできる、一人ひとりの癖や特徴に合わせた指導が特徴です。
          </p>
        </div>
      </div>

      {/* 5 Elements Grid */}
      <SectionTitle title="5つの指導ポイント" subtitle="バランスの取れた成長をサポート" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
        {['技術 (Skill)', '戦術 (Tactics)', 'フィジカル (Physical)', 'メンタル (Mental)', '社会性 (Social)'].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-[#94A684]/20 text-center shadow-[0_4px_0_#94A684] hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-[#F9F7F2] rounded-full mx-auto mb-3 flex items-center justify-center text-[#94A684] font-bold">
              {idx + 1}
            </div>
            <h3 className="font-bold text-[#595045]">{item}</h3>
          </div>
        ))}
      </div>

      {/* Schedule & Class Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        <div className="bg-white p-8 rounded-[30px] shadow-sm relative">
           <TacticArrow className="absolute -top-6 -left-4 w-24 text-[#E6A57E]" />
           <h2 className="text-2xl font-bold text-[#595045] mb-6 flex items-center gap-3">
             <CalendarDays className="text-[#94A684]" /> クラス・スケジュール
           </h2>
           
           <div className="space-y-6">
             <div className="border-b border-[#F9F7F2] pb-6">
               <div className="flex justify-between items-baseline mb-2">
                 <h3 className="text-xl font-black text-[#94A684]">U-9 クラス</h3>
                 <span className="text-sm font-bold bg-[#F9F7F2] px-3 py-1 rounded-full text-[#595045]">小学1〜3年生</span>
               </div>
               <div className="flex items-center gap-2 text-[#595045] font-medium mb-2">
                 <Clock size={18} /> 16:15 〜 17:00
               </div>
               <p className="text-sm text-[#595045]/70">
                 ボールに触れる楽しさを知り、基本的なボールコントロールと身体の動かし方を学びます。
               </p>
             </div>

             <div>
               <div className="flex justify-between items-baseline mb-2">
                 <h3 className="text-xl font-black text-[#94A684]">U-12 クラス</h3>
                 <span className="text-sm font-bold bg-[#F9F7F2] px-3 py-1 rounded-full text-[#595045]">小学4〜6年生</span>
               </div>
               <div className="flex items-center gap-2 text-[#595045] font-medium mb-2">
                 <Clock size={18} /> 17:30 〜 18:15
               </div>
               <p className="text-sm text-[#595045]/70">
                 実戦で使える技術と、状況判断（脳トレ）を組み合わせた高度なトレーニングを行います。
               </p>
             </div>
           </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#E6A57E] text-white p-8 rounded-[30px] shadow-lg relative overflow-hidden">
            <HandDrawnHex className="absolute top-[-20px] right-[-20px] w-40 h-40 text-white/10" />
            <h3 className="text-xl font-bold mb-4">料金システム</h3>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-4">
              <p className="text-sm mb-1 opacity-90">1回あたり</p>
              <p className="text-4xl font-black">1,500<span className="text-lg">円</span></p>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 size={16}/> 入会金・年会費なし</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16}/> 都度払いシステムで通いやすい</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16}/> 兄弟割引あり</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[30px] shadow-sm flex-grow flex flex-col justify-center items-center text-center">
             <h3 className="text-lg font-bold text-[#595045] mb-4">まずは体験から！</h3>
             <p className="text-[#595045]/70 mb-6 text-sm">
               実際のトレーニングの雰囲気を感じてください。<br/>
               見学のみも大歓迎です。
             </p>
             <a href={COMPANY_INFO.reservationUrl} target="_blank" rel="noopener noreferrer" className="w-full">
               <Button fullWidth variant="primary">無料体験を予約する</Button>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};