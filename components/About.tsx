'use client';

import { motion } from 'motion/react';
import { COMPANY_CONFIG } from '@/components/constants';

export default function About() {
  return (
    <section id="about" className="bg-sand py-[clamp(4rem,8vw,7rem)] border-b border-gold/25 relative overflow-hidden">
      
      {/* Editorial Decorative Background Details */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burgundy/[0.02] rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/[0.02] rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,4rem)] items-start">
          
          {/* Left Column (Span: 5) - The Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono text-gold tracking-[0.25em] uppercase block font-semibold">
                LOCAL IDENTITY
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-serif font-bold text-burgundy leading-none tracking-tight">
                Born & Raised <br />In The Florida Keys.
              </h2>
              <p className="text-[10px] sm:text-xs font-mono text-burgundy tracking-[0.16em] uppercase font-bold pt-2">
                KEY WEST & LOWER KEYS MOBILE EXECUTIONS
              </p>
            </div>
            
            {/* Visual Trim - Sharp branded Accent Line */}
            <div className="h-[2px] w-24 bg-gold/60" />
            
            <p className="text-sm font-mono text-slate/60 uppercase tracking-widest pt-2">
              Authentic Marine Preservation
            </p>
          </motion.div>

          {/* Right Column (Span: 7) - The Story */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-slate"
          >
            <p className="text-base sm:text-lg text-slate font-light leading-relaxed">
              At <strong className="font-semibold text-burgundy">{COMPANY_CONFIG.name}</strong>, marine maintenance isn&apos;t just a service—it&apos;s an authentic reflection of our local upbringing. Born and raised in the Florida Keys, we have spent our entire lives on these waters. We understand exactly what the intense tropical sun, brutal humidity, and high salinity do to gelcoats, marine metals, and canvas.
            </p>

            {/* Branded separating rule */}
            <div className="h-[1px] w-full bg-gold/20 my-4" />

            <p className="text-sm sm:text-base text-slate/85 font-light leading-relaxed">
              We built this company to provide local boat owners and marinas with an uncompromising standard of dockside care. As a fully mobile operation, we eliminate the logistics and hassle of moving your vessel. We bring commercial equipment, master-level craftsmanship, and true native reliability straight to your private lift, dock, or marina slip in <strong className="text-burgundy font-medium">{COMPANY_CONFIG.location}</strong> and throughout <strong className="text-burgundy font-medium">{COMPANY_CONFIG.coverageArea}</strong>.
            </p>

            {/* Micro Details Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-xs font-mono">
              <div>
                <span className="block text-[10px] text-slate/50 uppercase tracking-[0.1em] mb-1">FOUNDED BY</span>
                <span className="font-semibold uppercase text-burgundy">KEYS NATIVES</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate/50 uppercase tracking-[0.1em] mb-1">SERVICE AREA</span>
                <span className="font-semibold uppercase text-burgundy">KEY WEST & LOWER KEYS</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate/50 uppercase tracking-[0.1em] mb-1">MOBILE FLEET</span>
                <span className="font-semibold uppercase text-burgundy">SELF-CONTAINED</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
