import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="pricing" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <SectionTitle title="料金プラン" subtitle="分かりやすく、通いやすい料金設定" light />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {PRICING_PLANS.map((plan, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-3 font-bold text-sm md:text-base rounded-full transition-all duration-300 ${
                activeTab === index
                  ? 'bg-white text-[#1E293B] shadow-md scale-105'
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              {plan.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="max-w-2xl mx-auto bg-white p-10 rounded-3xl min-h-[300px] flex flex-col justify-center animate-fade-in-up"
          style={{
            boxShadow: "0 20px 50px -20px rgba(0,0,0,0.3)"
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1E293B] relative inline-block">
              {PRICING_PLANS[activeTab].category}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#EFF6FF] rounded-full"></span>
            </h3>
          </div>

          <div className="space-y-8">
            {PRICING_PLANS[activeTab].items.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between items-center border-b border-[#FAFAFA] pb-6 last:border-0 last:pb-0">
                <div className="flex items-start gap-4 mb-2 sm:mb-0">
                  <div className="bg-[#EFF6FF] p-1.5 rounded-full text-[#F97316] mt-0.5 shadow-sm">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1E293B]">{item.name}</h4>
                    <p className="text-sm text-[#1E293B]/60 mt-1">{item.details}</p>
                    {item.note && <p className="text-xs text-[#F97316] mt-2 font-medium">{item.note}</p>}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#2563EB] tracking-tight">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-[#1E293B]/40">
            ※表示価格はすべて税込みです。
          </div>
        </div>
      </div>
    </section>
  );
};
