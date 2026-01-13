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

  // Helper to handle navigation: scroll if home, navigate if not
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // href looks like "/#hero"
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (isHome && element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // If not home, standard link behavior (handled by a tag or Link component) works best with absolute path, 
      // but standard anchor with ID requires matching ID on page.
      // Since we use absolute paths in NAV_ITEMS (e.g. /#hero), standard <a> works well with backend router or hash router.
      // But purely client side, we might need a delay or useEffect to scroll after nav.
      // For simplicity in this environment, we stick to standard <a> behavior which browser handles well for /#id.
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F9F7F2]/90 backdrop-blur-sm border-b border-[#94A684]/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col group" onClick={() => window.scrollTo(0,0)}>
          <span className="text-2xl font-black text-[#94A684] tracking-wider group-hover:text-[#839674] transition-colors">URATORE</span>
          <span className="text-[10px] text-[#595045] font-bold">豊島サッカースクール＆スタジオ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => handleNavClick(item.href)}
              className="text-[#595045] hover:text-[#94A684] font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E6A57E] after:transition-all hover:after:w-full hover:after:rounded-full"
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
          className="md:hidden p-2 text-[#595045]"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F9F7F2] border-b border-[#94A684]/20 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col p-6 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="py-3 px-4 text-[#595045] font-bold border-b border-dashed border-[#94A684]/20 hover:bg-white/50 rounded-lg transition-colors"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-4">
             <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center justify-center gap-2 py-3 bg-[#94A684] text-white rounded-[255px_15px_225px_15px/15px_225px_15px_255px] font-bold shadow-sm">
               <Phone size={18} />
               電話で予約
             </a>
             <a href={COMPANY_INFO.reservationUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
               <Button variant="accent" fullWidth>無料体験予約フォーム</Button>
             </a>
          </div>
        </div>
      )}
    </header>
  );
};