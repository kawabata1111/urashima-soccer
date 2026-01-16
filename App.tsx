import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

// Pages
import { HomePage } from './components/HomePage';
import { SchoolPage } from './components/pages/SchoolPage';
import { PersonalPage } from './components/pages/PersonalPage';
import { StudioPage } from './components/pages/StudioPage';
import { FloatingNav } from './components/FloatingNav';

// Scroll to top on route change (except for hash links)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/school" element={<SchoolPage />} />
            <Route path="/service/personal" element={<PersonalPage />} />
            <Route path="/service/studio" element={<StudioPage />} />
          </Routes>
        </main>
        <FloatingNav />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;