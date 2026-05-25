'use client';

import { ShieldCheck, Sparkles, Anchor } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_CONFIG } from '@/components/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 18 },
  },
};

export default function HeroContent() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="lg:col-span-7 flex flex-col justify-center space-y-8 text-white"
    >
      {/* Tiny Premium Tag */}
      <motion.div variants={itemVariants} className="flex items-center gap-2">
        <span className="w-8 h-[1px] bg-gold" />
        <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-gold uppercase font-semibold">
          ELITE YACHT & BOAT SERVICES
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1 
        variants={itemVariants}
        className="text-[clamp(2.5rem,6vw,5rem)] font-serif font-bold text-white leading-tight tracking-tight relative overflow-hidden"
      >
        Premium Mobile <br />
        <span className="text-gold">Boat Detailing.</span> <br />
        Right To Your Dock.
      </motion.h1>

      {/* Dividers & Accent Lines */}
      <motion.div variants={itemVariants} className="h-[2px] w-32 bg-gold/50 my-2" />

      {/* Tagline */}
      <motion.p 
        variants={itemVariants}
        className="text-base sm:text-lg lg:text-xl text-sand/90 font-light leading-relaxed max-w-2xl"
      >
        <strong className="text-white font-medium">{COMPANY_CONFIG.tagline}.</strong> Born and raised in the Florida Keys, Coastal Care brings elite, professional detailing, heavy oxidation restoration, and ceramic protection directly to your home, lift, or marina in {COMPANY_CONFIG.location}.
      </motion.p>

      {/* Feature Badges for Local Authority */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10"
      >
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-sm text-white">Licensed & Insured</h4>
            <p className="text-xs text-sand/70 font-mono">100% Secure Dockside Care</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-sm text-white">Ceramic Specialists</h4>
            <p className="text-xs text-sand/70 font-mono">Ultra-Hard Marine Coatings</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Anchor className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-sm text-white">Keys Born & Raised</h4>
            <p className="text-xs text-sand/70 font-mono">Proud Local Service</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
