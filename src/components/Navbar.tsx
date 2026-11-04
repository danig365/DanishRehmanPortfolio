import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useTheme } from '../hooks/useTheme';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = navLinks.map((l) => l.id);

const hireMeUrl = `${personalInfo.whatsapp}?text=${encodeURIComponent(
  "Hi Danish, I saw your portfolio and I'd like to discuss a project."
)}`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 150);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu: close on Escape and stop the page scrolling behind it
  useEffect(() => {
    if (!isMobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isMobileOpen]);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <>
      <motion.nav
        aria-label="Main"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mobile-safe ${
          isScrolled ? 'glass-nav' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-safe container-safe">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" onClick={closeMenu} aria-label="Danish Rehman - back to top" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl glass-badge flex items-center justify-center transition-all duration-300">
                <Terminal className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <span className="font-mono text-lg font-semibold text-slate-800 dark:text-white">
                <span className="text-sky-600 dark:text-sky-400/70">&gt;</span> danish
                <span className="text-sky-600/50 dark:text-sky-400/50 animate-pulse">_</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-xl ${
                    activeSection === link.id
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 dark:text-gray-500 hover:text-slate-700 dark:hover:text-gray-300'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 glass-badge rounded-xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-mono">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                  </motion.div>
                </AnimatePresence>
              </button>
              <a
                href={hireMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] font-semibold text-sm rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-all hover:shadow-lg backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Hire Me
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                className="w-10 h-10 flex items-center justify-center rounded-xl glass-badge text-slate-500 dark:text-gray-400 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
                className="w-10 h-10 flex items-center justify-center rounded-xl glass-badge text-slate-500 dark:text-gray-400 transition-colors"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#f0f4f8]/95 dark:bg-[#080c12]/95 backdrop-blur-2xl md:hidden pt-20 mobile-safe mobile-no-overflow"
          >
            <div className="flex flex-col items-center gap-2 p-6 mobile-padding container-safe">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`w-full text-center py-3 text-lg font-mono rounded-xl transition-colors ${
                    activeSection === link.id
                      ? 'text-slate-900 dark:text-white glass-badge'
                      : 'text-slate-500 dark:text-gray-500'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={hireMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Hire Me on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
