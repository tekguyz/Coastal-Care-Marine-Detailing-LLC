'use client';

import HeroContent from './HeroContent';
import HeroTriageForm from './HeroTriageForm';

export default function HeroRoot() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] bg-burgundy text-white flex flex-col justify-center overflow-hidden py-[clamp(4rem,8vw,7rem)] border-b border-gold/30"
    >
      {/* Decorative Gold Radial Grid Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C8A25D_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2.5rem,4vw,5rem)] items-center">
          
          {/* Main Editorial Copy Block - Left (7 Cols) */}
          <HeroContent />

          {/* Dockside Triage Conversion Zone - Right (5 Cols) */}
          <HeroTriageForm />

        </div>
      </div>
    </section>
  );
}
