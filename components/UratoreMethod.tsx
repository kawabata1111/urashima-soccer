import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Target, RotateCcw, Zap } from 'lucide-react';

const PILLARS = [
  {
    number: '01',
    title: 'サッカーの基礎の徹底',
    subtitle: '止める、蹴る、運ぶ',
    description: '当たり前に思うかもしれませんが、そこを疎かにした事で才能が開花せず諦めていく子をたくさんみてきました。基礎の連続を徹底します。',
    icon: Target,
  },
  {
    number: '02',
    title: 'トライアンドエラー',
    subtitle: '失敗から学べ',
    description: '失敗を恐れずにチャレンジする力を育てます。失敗こそが成長の最大のチャンス。何度でも挑戦できる環境がここにあります。',
    icon: RotateCcw,
  },
  {
    number: '03',
    title: '個人の身体能力の底上げ',
    subtitle: 'ゴールデンエイジを逃さない',
    description: '判断能力・マインド・反応速度など、12歳までのゴールデンエイジは、あらゆる神経系の発達において2度とこない貴重な期間です。',
    icon: Zap,
  },
];

export const UratoreMethod: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="ウラトレ式とは"
          subtitle="サッカーの本質・原理原則から学ぶ独自メソッド"
        />

        {/* Philosophy statement with image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-[#1E293B]/80">
              足が速い、身体が大きいなどの
              <span className="font-bold text-[#1E293B]">フィジカルベースの個体差重視ではなく、</span>
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#1E293B]/80 mt-3">
              状況に応じた適切な判断ができる、
            </p>
            <p className="text-2xl md:text-3xl font-black text-[#2563EB] mt-6">
              「サッカーIQ」が高い子を育てる。
            </p>
            <p className="text-[#1E293B]/60 mt-4 leading-relaxed">
              つまりサッカーの本質、原理原則の部分から学べるのがウラトレ式。
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden h-[350px] shadow-lg">
            <img
              src="/images/uratore-method.jpg"
              alt="試合で活躍する選手"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.number} className="relative bg-[#FAFAFA] p-8 rounded-2xl border border-[#22C55E]/10">
                <span className="text-6xl font-black text-[#22C55E]/10 absolute top-4 right-6 leading-none">{pillar.number}</span>
                <div className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center text-[#22C55E] mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-1">{pillar.title}</h3>
                <p className="text-sm font-bold text-[#F97316] mb-3">{pillar.subtitle}</p>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center bg-[#FAFAFA] py-10 px-6 rounded-2xl">
          <p className="text-xl md:text-2xl font-bold text-[#1E293B]">
            サッカーIQを育て、技術を自分の物に。
          </p>
          <p className="text-xl md:text-2xl font-bold text-[#2563EB] mt-2">
            試合で活躍する選手へ。
          </p>
        </div>
      </div>
    </section>
  );
};
