import { Anchor, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { COMPANY_CONFIG } from '@/components/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-root" className="bg-charcoal text-white border-t border-gold/30">
      
      {/* Upper Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Brand Info (5 Cols) */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-serif font-bold text-white tracking-wider leading-none">
                COASTAL CARE
              </span>
              <span className="text-xs font-mono text-gold tracking-[0.25em] leading-tight uppercase font-medium mt-1">
                MARINE DETAILING
              </span>
            </div>
            
            <p className="text-sm text-sand/80 font-light leading-relaxed max-w-sm">
              {COMPANY_CONFIG.tagline}. Local, Keys-born premium mobile boat detailing, oxidation restoration, and ceramic coatings served directly to your private dock, boat lift, or marina slot.
            </p>

            <div className="text-xs text-gold/80 font-mono tracking-wider flex items-center gap-2">
              <Anchor className="w-4 h-4 text-gold shrink-0 animate-pulse" />
              <span>Serving {COMPANY_CONFIG.coverageArea}</span>
            </div>

            {/* High-visibility Facebook Link */}
            <div className="pt-2">
              <a 
                href={COMPANY_CONFIG.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy hover:bg-gold text-white hover:text-burgundy text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 shadow-md active:scale-95"
              >
                <Facebook className="w-4 h-4" />
                <span>Visit Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-gold uppercase tracking-widest font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-sand/80">
              <li>
                <a href="#services" className="hover:text-gold transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold transition-colors duration-200">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (4 Cols) */}
          <div className="md:col-span-6 lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-gold uppercase tracking-widest font-semibold">
              OFFICIAL CONTACT
            </h4>
            <ul className="space-y-3.5 text-sm font-light text-sand/85">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="hover:text-gold transition-colors duration-200 font-mono">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@coastalcaremarinedetailing.com" className="hover:text-gold transition-colors duration-200">
                  info@coastalcaremarinedetailing.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>
                  Mobile Service Key West,<br /> 
                  Florida Keys 33040
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Baseline Copyright Footer */}
      <div className="bg-black/40 border-t border-gold/15 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono tracking-wider text-sand/65">
          <div>
            &copy; {currentYear} {COMPANY_CONFIG.name}. All Rights Reserved.
          </div>
          <div>
            Built Offline-First | Key West Local Detailing Experts
          </div>
        </div>
      </div>

    </footer>
  );
}
