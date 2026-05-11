/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AnnouncementBar, Navbar, Footer, FloatingWhatsApp } from './components/Navigation';
import Home from './pages/Home';
import Academy from './pages/Academy';
import Business from './pages/Business';
import Projects from './pages/Projects';
import { Masterclass, About, Contact } from './pages/Masterclass';
import { X } from 'lucide-react';

function ExitIntentModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exit-intent-shown')) {
        setShow(true);
        sessionStorage.setItem('exit-intent-shown', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
          className="absolute inset-0 bg-authority/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full p-8 text-center"
        >
          <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-gray-400 hover:text-authority">
            <X size={24} />
          </button>
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <X size={40} className="rotate-45" />
          </div>
          <h3 className="text-3xl font-display font-bold text-authority mb-4">Wait! Don't leave yet.</h3>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Grab our free "AI Implementation Roadmap for African Professionals" before you go. Join the next free masterclass.
          </p>
          <button 
            onClick={() => {
              setShow(false);
              window.location.href = '/masterclass';
            }} 
            className="w-full btn-primary py-4"
          >
            Claim My Free Spot
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ExitIntentModal />
      <div className="min-h-screen flex flex-col font-sans text-authority selection:bg-primary/20 selection:text-primary">
        <AnnouncementBar />
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/academy" element={<PageTransition><Academy /></PageTransition>} />
              <Route path="/business" element={<PageTransition><Business /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/masterclass" element={<PageTransition><Masterclass /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}


