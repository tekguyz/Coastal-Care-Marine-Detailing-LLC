'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Facebook } from 'lucide-react';
import { COMPANY_CONFIG } from '@/components/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Prevent browser from restoring scroll position to the bottom/contact form on refresh
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      // Force initial load/refresh to always start at the absolute top of the viewport
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header id="navbar-root" className="sticky top-0 z-50 w-full bg-burgundy shadow-lg border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Left */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <a href="#" className="group flex flex-col justify-center select-none animate-fadeIn">
              <span className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wider leading-none group-hover:text-gold transition-colors duration-300">
                COASTAL CARE
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-gold tracking-[0.25em] leading-tight uppercase font-medium mt-1">
                MARINE DETAILING
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links - Center */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm tracking-wide transition-colors duration-250 relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Side CTA Slot */}
          <div className="hidden sm:flex items-center">
            {/* Item 1: Facebook link */}
            <a
              href={COMPANY_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center text-gold/85 hover:text-white transition-colors duration-250 p-2 mr-4"
              aria-label="Visit Facebook Page"
            >
              <Facebook className="w-5 h-5 animate-pulse-slow" />
            </a>

            {/* Item 2: Book Service sleek link */}
            <a
              href="#contact"
              className="text-white/85 hover:text-gold text-sm font-medium tracking-wide mr-6 transition-colors duration-250 border-b border-transparent hover:border-gold py-1"
            >
              Book Service
            </a>

            {/* Item 3: Tap-to-Call Button */}
            <a
              id="cta-nav-button"
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 px-4 py-2.5 border-2 border-gold text-gold hover:bg-gold hover:text-burgundy font-semibold text-sm tracking-wide transition-all duration-300 rounded-none shadow-md hover:shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_CONFIG.phone}</span>
            </a>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-none text-white hover:text-gold focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu with motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-burgundy border-t border-gold/15 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-black/20 transition-all rounded-none"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gold/15 flex flex-col gap-3">
                <p className="text-[10px] font-mono tracking-wider text-gold uppercase text-center">
                  Quick Mobile Booking
                </p>
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-burgundy hover:bg-white hover:text-burgundy font-bold text-center tracking-wide transition-all shadow-md active:scale-95"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>TAP TO CALL: {COMPANY_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
