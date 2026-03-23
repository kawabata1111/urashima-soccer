import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (isHome && element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-[#2563EB]/10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0,0)}>
          <img src="/images/uratore-logo.png" alt="ウラトレ" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-xl font-black text-[#2563EB] tracking-wider group-hover:text-[#1D4ED8] transition-colors font-heading">URATORE</span>
            <span className="text-[10px] text-[#1E293B] font-bold">豊島サッカースクール＆スタジオ</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-[#1E293B] hover:text-[#2563EB] font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#F97316] after:transition-all hover:after:w-full hover:after:rounded-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href={COMPANY_INFO.reservationUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="accent" className="text-sm py-2 px-6">無料体験予約</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#1E293B]"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FAFAFA] border-b border-[#2563EB]/20 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col p-6 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-3 px-4 text-[#1E293B] font-bold border-b border-dashed border-[#2563EB]/20 hover:bg-white/50 rounded-lg transition-colors"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-4">
            <a href={COMPANY_INFO.reservationUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Button variant="accent" fullWidth>無料体験予約フォーム</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
