import React from 'react';
import { SectionTitle } from './SectionTitle';
import { SERVICES } from '../constants';
import { Dumbbell, Building2 } from 'lucide-react';
import { HandDrawnHex } from './Decorations';
import { Link } from 'react-router-dom';

const SoccerBallIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 17l-4.5-2.5 1.7-5.3h5.6l1.7 5.3z"></path>
  </svg>
);

const IconMap = {
  soccer: SoccerBallIcon,
  dumbbell: Dumbbell,
  building: Building2
};

const LinkMap: Record<string, string> = {
  soccer: '/service/school',
  personal: '/service/personal',
  studio: '/service/studio'
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 container mx-auto">
      <SectionTitle 
        title="サービス紹介" 
        subtitle="3つのメインサービス" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES.map((service, index) => {
          const Icon = IconMap[service.iconName];
          const linkPath = LinkMap[service.id] || '/';
          
          return (
            <Link 
              to={linkPath}
              key={service.id} 
              className="group relative bg-white transition-all duration-500 hover:-translate-y-2 block"
              style={{ 
                borderRadius: "20px",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)"
              }}
            >
              {/* Top "Clip" visual for clipboard look */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#595045]/10 rounded-full z-20 border border-white/50 backdrop-blur-sm"></div>

              <div className="h-56 overflow-hidden relative rounded-t-[20px]">
                 <div className="absolute inset-0 bg-[#595045]/10 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                 {/* Wavy separator */}
                 <div className="absolute bottom-0 left-0 w-full h-8 bg-white" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}></div>
                
                <div 
                  className="absolute top-4 right-4 bg-white/90 p-3 z-20 text-[#94A684] shadow-sm rounded-xl"
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <div className="p-8 pt-4 relative">
                 {/* Background Hex pattern decoration */}
                <div className="absolute top-10 right-4 text-[#94A684]/10 w-24 h-24 rotate-12 pointer-events-none">
                   <HandDrawnHex />
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#595045] group-hover:text-[#94A684] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#595045]/80 text-sm leading-relaxed mb-6 min-h-[60px] relative z-10">
                  {service.description}
                </p>
                <div className="text-right border-t border-dashed border-[#595045]/10 pt-4">
                  <span className="text-[#E6A57E] text-sm font-bold flex items-center justify-end group-hover:gap-2 transition-all cursor-pointer">
                    詳細を見る &rarr;
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};