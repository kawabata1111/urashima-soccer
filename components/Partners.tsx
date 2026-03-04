import React from 'react';
import { SectionTitle } from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="ジュニアアスリート支援"
          subtitle="スポーツに取り組むすべての子どもたちへ"
        />

        {/* Mission with photo background */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/junior-athlete.png)' }}
            />
            <div className="absolute inset-0 bg-[#3D3529]/70" />
            <div className="relative z-10 p-10 md:p-14 text-center text-white">
              <p className="text-lg md:text-xl leading-relaxed">
                ウラトレは<span className="font-bold">サッカー、ゴルフ、その他スポーツ</span>を行う<br className="hidden md:block" />
                ジュニアアスリートを応援するスタジオです。
              </p>
              <p className="text-white/60 mt-4 leading-relaxed">
                競技の枠を超えて、成長期の子どもたちの身体づくりと<br className="hidden md:block" />
                メンタルの土台をサポートします。<br />
                ジュニアゴルファーの育成支援にも力を入れています。
              </p>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-xs text-[#595045]/40 font-bold tracking-[0.2em] uppercase mb-8">
            Official Partners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LAzzy JAPAN */}
            <a
              href="https://lazzy-japan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#F9F7F2] p-8 rounded-2xl border border-[#94A684]/10 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <h3 className="text-2xl font-black text-[#595045] group-hover:text-[#94A684] transition-colors tracking-wide">
                LAzzy JAPAN
              </h3>
              <p className="text-xs text-[#595045]/40 mt-2 mb-5">lazzy-japan.com</p>
              <span className="inline-flex items-center gap-1.5 text-[#E6A57E] text-sm font-bold border-b border-[#E6A57E]/30 pb-0.5 group-hover:border-[#E6A57E] transition-colors">
                サイトを見る
                <ExternalLink size={13} />
              </span>
            </a>

            {/* ATHLETA */}
            <a
              href="https://www.athleta.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#F9F7F2] p-8 rounded-2xl border border-[#94A684]/10 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <h3 className="text-2xl font-black text-[#595045] group-hover:text-[#94A684] transition-colors tracking-wide">
                ATHLETA
              </h3>
              <p className="text-xs text-[#595045]/40 mt-2 mb-5">athleta.co.jp</p>
              <span className="inline-flex items-center gap-1.5 text-[#E6A57E] text-sm font-bold border-b border-[#E6A57E]/30 pb-0.5 group-hover:border-[#E6A57E] transition-colors">
                サイトを見る
                <ExternalLink size={13} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
