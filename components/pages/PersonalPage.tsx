import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { Button } from '../Button';
import { COMPANY_INFO, PERSONAL_PROGRAMS, PERSONAL_DESCRIPTION } from '../../constants';
import { Check, Dumbbell, Trophy, HeartPulse, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PersonalPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
      <div className="mb-8">
        <Link to="/" className="text-[#94A684] font-bold hover:underline flex items-center gap-2">
          &larr; ホームに戻る
        </Link>
      </div>

      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 bg-[#8FB1CC] text-white text-sm font-bold mb-4 rounded-full">
          {PERSONAL_DESCRIPTION.target}対象
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-[#595045] mb-4">
          パーソナルトレーニング
        </h1>
        <p className="text-[#595045]/80 text-lg mb-4">
          サッカー・ゴルフなどに特化したプログラム、<br/>
          様々なダイエットプログラムを提供致します。
        </p>
        <div className="inline-flex items-center gap-2 bg-[#F9F7F2] px-4 py-2 rounded-full text-sm text-[#595045]">
          <Clock size={16} className="text-[#94A684]" />
          <span className="font-bold">{PERSONAL_DESCRIPTION.schedule}</span>
        </div>
      </div>

      {/* Programs Grid */}
      <SectionTitle title="プログラム一覧" subtitle="お客様の目的に合わせたトレーニング" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {PERSONAL_PROGRAMS.map((program, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-[#94A684]/20 shadow-sm text-center hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-[#595045] mb-2">{program.name}</h3>
            <p className="text-[#94A684] font-black text-xl">{program.price}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: Trophy,
            title: "競技力向上",
            desc: "サッカー、ゴルフなど、各種スポーツに必要な身体の使い方、体幹、瞬発力を強化します。",
            color: "text-[#E6A57E]"
          },
          {
            icon: Dumbbell,
            title: "ボディメイク",
            desc: "ダイエット、筋力アップ、姿勢改善。理想の身体作りを無理なく継続できるメニューでサポート。",
            color: "text-[#94A684]"
          },
          {
            icon: HeartPulse,
            title: "健康維持・持久力",
            desc: "運動不足解消、持久力アップ。個人の体力レベルに合わせて調整します。",
            color: "text-[#8FB1CC]"
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[40px_20px] shadow-sm border border-[#F9F7F2] hover:shadow-md transition-shadow">
            <item.icon size={48} className={`mb-4 ${item.color}`} />
            <h3 className="text-xl font-bold text-[#595045] mb-3">{item.title}</h3>
            <p className="text-[#595045]/70 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing & Flow */}
      <div className="bg-[#FFFBF0] p-8 md:p-12 rounded-[50px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(90deg,#94A684,#94A684_20px,transparent_20px,transparent_40px)] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="料金・流れ" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm w-full">
              <div className="text-center border-b border-[#F9F7F2] pb-4 mb-4">
                <h3 className="text-lg font-bold text-[#595045]">初回体験</h3>
                <p className="text-3xl font-black text-[#E6A57E]">無料</p>
                <p className="text-xs text-gray-400">カウンセリング込み (60分)</p>
              </div>
              <ul className="text-sm space-y-3 text-[#595045]/80">
                <li className="flex gap-2"><Check size={16} className="text-[#94A684]"/> 現状の課題ヒアリング</li>
                <li className="flex gap-2"><Check size={16} className="text-[#94A684]"/> 身体の動きチェック</li>
                <li className="flex gap-2"><Check size={16} className="text-[#94A684]"/> 体験トレーニング</li>
              </ul>
            </div>
            
            <div className="hidden md:block text-[#94A684] font-black text-2xl">&rarr;</div>

            <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm w-full border-2 border-[#94A684]/10">
              <div className="text-center border-b border-[#F9F7F2] pb-4 mb-4">
                <h3 className="text-lg font-bold text-[#595045]">通常セッション</h3>
                <p className="text-3xl font-black text-[#94A684]">3,000<span className="text-base font-medium">円 / 回</span></p>
                <p className="text-xs text-gray-400">都度払い (60分)</p>
              </div>
              <p className="text-sm text-center text-[#595045]/80 mb-4">
                入会金・月会費はありません。<br/>
                自分のペースで通えます。
              </p>
              <div className="text-center">
                 <a href={COMPANY_INFO.reservationUrl} target="_blank" rel="noopener noreferrer">
                   <Button variant="primary">予約する</Button>
                 </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-bold text-[#595045] mb-2">【ご予約可能時間】</p>
            <p className="text-[#595045]/80">
              <span className="font-bold">{PERSONAL_DESCRIPTION.schedule}</span><br/>
              <span className="text-xs">※完全予約制です。Webまたはお電話にてご予約ください。</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};