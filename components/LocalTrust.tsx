'use client';

import { MapPin, Anchor, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocalTrust() {
  const trustBlocks = [
    {
      icon: <MapPin className="w-6 h-6 text-burgundy" />,
      title: '100% Mobile Dockside Care',
      desc: 'We deploy directly to your home lift, private slip, or local Key West marina, arriving fully self-contained and equipped for on-site execution.',
    },
    {
      icon: <Anchor className="w-6 h-6 text-burgundy" />,
      title: 'Born & Raised in the Keys',
      desc: 'Locally owned and operated with authentic native expertise in defending hulls against the intense Florida Keys sun, high salinity, and tropical elements.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-burgundy" />,
      title: 'Elite Marine Standards',
      desc: 'Committed to flawless craftsmanship. We use specialized commercial foam cannons, heavy mildew extraction, and premium polymer sealants.',
    },
  ];

  return (
    <section id="local-trust" className="bg-sand py-[clamp(4rem,7vw,6.5rem)] border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,3vw,3rem)] md:divide-x md:divide-gold/25">
          {trustBlocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              className={`flex flex-col space-y-4 ${idx > 0 ? 'md:pl-10 lg:pl-12' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div id={`trust-icon-wrapper-${idx}`} className="p-2.5 bg-white border border-gold/30 rounded-none shadow-sm flex items-center justify-center shrink-0">
                  {block.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-burgundy tracking-tight">
                  {block.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate/85 font-light leading-relaxed">
                {block.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
