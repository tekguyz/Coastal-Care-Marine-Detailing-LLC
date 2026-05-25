'use client';

import { Check, Shield, CircleDot } from 'lucide-react';
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

  return (
    <section id="services" className="bg-white py-[clamp(4rem,8vw,7rem)] border-b border-gold/20 relative">
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

        {/* Categories Grid - 4 Columns with Cascading Stagger */}
        <motion.div 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1.5rem,2.5vw,3rem)]"
        >
          {SERVICES_DATA.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.015, 
                borderColor: 'rgba(109, 15, 20, 0.45)', 
                boxShadow: '0 12px 24px -10px rgba(109, 15, 20, 0.12)' 
              }}
              className="bg-sand/30 border border-gold/15 p-6 hover:border-burgundy/35 transition-colors duration-300 flex flex-col justify-between relative"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold/40" />

              <div className="space-y-6">
                {/* ID & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-bold text-gold/80">
                    {cat.id}
                  </span>
                  <Shield className="w-5 h-5 text-burgundy/40" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-burgundy leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate/75 font-light leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Service Bullets List */}
                <div className="h-[1px] bg-gold/15" />

                <ul className="space-y-3">
                  {cat.items.map((srv, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-slate/90">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-light leading-snug">{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom identifier */}
              <div className="pt-6 mt-8 border-t border-gold/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate/50">
                <span>Coastal Care Qualified</span>
                <span>Tier {cat.id}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
