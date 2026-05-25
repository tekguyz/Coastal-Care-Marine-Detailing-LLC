'use client';

import { Check, CircleDot, Waves, Shield, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '@/components/constants';

export default function Services() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  // Maps clean, high-contrast maritime icons dynamically to categories
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case '01':
        return <Waves className="w-5 h-5 text-burgundy" />;
      case '02':
        return <Shield className="w-5 h-5 text-burgundy" />;
      case '03':
        return <Sparkles className="w-5 h-5 text-burgundy" />;
      case '04':
        return <Zap className="w-5 h-5 text-burgundy" />;
      default:
        return <Shield className="w-5 h-5 text-burgundy" />;
    }
  };

  return (
    <section id="services" className="bg-white py-[clamp(4rem,8vw,7rem)] border-b border-neutral-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-burgundy/5 border border-burgundy/15 rounded-none text-xs font-mono text-burgundy uppercase tracking-widest font-semibold">
            <CircleDot className="w-3.5 h-3.5" />
            <span>CATEGORIZED MARINE SERVICES</span>
          </div>
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-serif font-bold text-burgundy leading-none tracking-tight">
            Core Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate/75 font-light leading-relaxed max-w-2xl">
            Professional mobile detailing solutions grouped into dedicated treatment profiles. No shortcuts, no compromises.
          </p>
        </div>

        {/* Categories Grid - 4 Columns with Clean Geometric Dividers */}
        <motion.div 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200/60 border-t border-b border-neutral-200/60 py-8"
        >
          {SERVICES_DATA.map((cat) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: 'var(--color-sand)',
                transition: { duration: 0.2 }
              }}
              className="p-6 transition-all duration-300 flex flex-col justify-between relative bg-transparent group"
            >
              <div className="space-y-5">
                {/* 1. Top Element: Contextual Burgundy Icon */}
                <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
                  {getCategoryIcon(cat.id)}
                </div>

                {/* 2. Divider Line: Premium Minimal Accent Line */}
                <div className="h-[1px] bg-neutral-200/60 w-12 group-hover:w-20 transition-all duration-300" />

                {/* 3. Category Header Text & 4. Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-burgundy leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate/75 font-light leading-relaxed min-h-[48px]">
                    {cat.description}
                  </p>
                </div>

                {/* Internal Divider line before bullets */}
                <div className="h-[1px] bg-neutral-200/40" />

                {/* 5. Verified Service Bullet-List */}
                <ul className="space-y-3">
                  {cat.items.map((srv, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-slate/90">
                      <Check className="w-3.5 h-3.5 text-burgundy shrink-0 mt-0.5" />
                      <span className="text-xs font-light leading-snug">{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}