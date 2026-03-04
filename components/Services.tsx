import React from 'react';
import { SectionTitle } from './SectionTitle';
import { SERVICES } from '../constants';
import { Dumbbell, Building2 } from 'lucide-react';
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
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="サービス紹介"
          subtitle="3つのメインサービス"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service) => {
            const Icon = IconMap[service.iconName];
            const linkPath = LinkMap[service.id] || '/';

            return (
              <Link
                to={linkPath}
                key={service.id}
                className="group relative bg-[#F9F7F2] rounded-2xl transition-all duration-500 hover:-translate-y-2 block overflow-hidden"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)"
                }}
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Smooth bottom fade */}
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#F9F7F2] to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-white/90 p-3 z-20 text-[#94A684] shadow-sm rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 pt-4">
                  <h3 className="text-xl font-bold mb-4 text-[#595045] group-hover:text-[#94A684] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#595045]/80 text-sm leading-relaxed mb-6 min-h-[60px]">
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
      </div>
    </section>
  );
};
