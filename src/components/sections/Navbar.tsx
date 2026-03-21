import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { DarkModeToggle } from '../ui/DarkModeToggle';

const navLinks = [
  { label: "Career", href: "#career" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 20) setDrawerOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'border-b border-black/10 shadow-sm' : 'border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#hero"
            style={{ fontFamily: 'var(--font-mono)' }}
            className="text-xl font-medium tracking-tight flex items-center gap-0 select-none"
          >
            <span className="text-accent font-bold">jeong</span>
            <span className="text-muted">.</span>
            <span className="text-text-main font-bold">dev</span>
            <span className="ml-0.5 text-accent-secondary cursor-blink font-bold">_</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-text-main transition-colors"
              >
                {link.label}
              </a>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setDrawerOpen((o) => !o)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-bg-alt shadow-2xl flex flex-col pt-24 px-8 gap-6 lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="text-xl font-bold text-text-main hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
