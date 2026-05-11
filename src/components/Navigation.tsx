import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export function AnnouncementBar() {
  return (
    <div className="bg-authority text-white py-2 text-center text-sm font-medium px-4 overflow-hidden relative">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        Next cohort starts <span className="text-primary font-bold">June 2026</span> — only 12 seats left!
      </motion.p>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Academy', path: '/academy' },
    { name: 'For Business', path: '/business' },
    { name: 'Projects', path: '/projects' },
    { name: 'Masterclass', path: '/masterclass' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled || isOpen ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="./logo.png" 
              alt="Digital Loop" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.path ? "text-primary" : "text-authority/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-authority"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    pathname === link.path ? "bg-primary/10 text-primary" : "text-authority hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-primary flex justify-center items-center gap-2"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-authority text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block bg-white p-2 rounded-lg">
              <img src="./logo.png" alt="Digital Loop" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the shift towards an AI-literate Africa through world-class education and strategic consulting.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-6">Learning Path</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/academy" className="hover:text-primary">AI Academy</Link></li>
              <li><Link to="/masterclass" className="hover:text-primary">Free Masterclass</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Student Showcase</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/business" className="hover:text-primary">For Business</Link></li>
              <li><Link to="/business" className="hover:text-primary">Corporate Training</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Lagos, Nigeria</li>
              <li>hello@digitalloop.ai</li>
              <li>+234 (0) 123 456 7890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Digital Loop Int'l Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2341234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle size={32} />
    </a>
  );
}
