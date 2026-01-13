import React from 'react';
import { SectionTitle } from './SectionTitle';
import { FEATURES } from '../constants';
import { Users, Award, Sun, CalendarDays } from 'lucide-react';
import { HandDrawnHex, NetPattern } from './Decorations';

const IconMap = {
  users: Users,
  award: Award,
  sun: Sun,
  calendar: CalendarDays
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Pattern: Faint Hexagons (Soccer Net structure) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-[#595045]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexGrid" width="100" height="174" patternUnits="userSpaceOnUse">
              <path d="M50 0 L100 29 L100 87 L50 116 L0 87 L0 29 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 87 L50 174" stroke="currentColor" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="ウラトレの特徴" 
          subtitle="選ばれる理由と「浦崎式トレーニング法」"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = IconMap[feature.iconName];
            return (
              <div 
                key={index} 
                className="relative group p-6 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Hexagon Card Shape */}
                <div className="absolute inset-0 bg-white border border-[#94A684]/20 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-shadow group-hover:shadow-lg"
                     style={{ 
                       clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                       borderRadius: "20px" // CSS clip-path usually overrides border-radius, using custom SVG bg might be better but let's try a simpler approach for the card container
                     }}
                >
                  {/* Subtle Net Pattern inside card */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
                    <rect width="100%" height="100%" fill="url(#netPattern)" className="text-[#94A684]" />
                  </svg>
                </div>

                {/* Content - Need to pad heavily because of Hex shape */}
                <div className="relative z-10 flex flex-col items-center text-center py-10 px-4 h-full justify-center">
                  <div className="w-16 h-16 mb-4 text-[#94A684] bg-[#F9F7F2] rounded-full flex items-center justify-center border-2 border-[#94A684]/10 group-hover:scale-110 transition-transform group-hover:border-[#E6A57E] group-hover:text-[#E6A57E]">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#595045]">{feature.title}</h3>
                  <p className="text-sm text-[#595045]/80 leading-relaxed max-w-[200px]">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#94A684]/30 rounded-full"></div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#94A684]/30 rounded-full"></div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};