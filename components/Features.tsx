import React from 'react';
import { SectionTitle } from './SectionTitle';
import { FEATURES } from '../constants';
import { Users, Award, Sun, CalendarDays } from 'lucide-react';

const IconMap = {
  users: Users,
  award: Award,
  sun: Sun,
  calendar: CalendarDays
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="ウラトレの特徴"
          subtitle="選ばれる理由と「ウラトレ式トレーニング法」"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = IconMap[feature.iconName];
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-[#2563EB]/20 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg text-center"
              >
                <div className="w-16 h-16 mb-4 mx-auto text-[#22C55E] bg-[#F0FDF4] rounded-full flex items-center justify-center border-2 border-[#22C55E]/10 group-hover:scale-110 transition-transform group-hover:border-[#F97316] group-hover:text-[#F97316]">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#1E293B]">{feature.title}</h3>
                <p className="text-sm text-[#1E293B]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
