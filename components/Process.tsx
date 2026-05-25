'use client';

import { motion } from 'motion/react';
import { CalendarRange, Compass, ShieldAlert, BadgeCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '@/components/constants';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: <CalendarRange className="w-6 h-6 text-gold" />,
      title: 'Secure Scheduling',
      desc: `Connect with our dispatch team at ${COMPANY_CONFIG.phone} or use our digital callback deck to lock in an exact service slot matching your vessel's location and detailing needs.`,
    },
    {
      num: '02',
      icon: <Compass className="w-6 h-6 text-gold" />,
      title: 'On-Site Assessment',
      desc: 'We deploy directly to your dock or slip. Our team conducts a thorough structural walkaround to evaluate oxidation severity, gelcoat condition, and target spots.',
    },
    {
      num: '03',
      icon: <ShieldAlert className="w-6 h-6 text-gold" />,
      title: 'Precision Execution',
      desc: 'Utilizing commercial-grade foam cannons, heavy marine rotary polishers, and premium polymer sealants, we systematically restore and seal your boat with absolute precision.',
    },
    {
      num: '04',
      icon: <BadgeCheck className="w-6 h-6 text-gold" />,
      title: 'Final Sign-Off',
      desc: 'We conduct a comprehensive post-service walkthrough with you to verify that every square inch meets our flagship elite standards before leaving your dock pristine.',
    },
  ];

  const horizontalSlideVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (idx: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        delay: idx * 0.15,
        ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number], // Premium cubic bezier for high deceleration smoothness
      },
    }),
  };

  return (
    <section id="process" className="bg-charcoal text-white py-[clamp(4rem,8vw,7rem)] border-b border-gold/20 relative overflow-hidden">
      
      {/* Structural Framing Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C8A25D_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headers */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-burgundy/40 border border-gold/30 rounded-none text-xs font-mono text-gold uppercase tracking-widest font-semibold">
            <span>OPERATIONAL WORKFLOW</span>
          </div>
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-serif font-bold text-white leading-none tracking-tight">
            The Dockside Process
          </h2>
          <p className="text-base sm:text-lg text-sand/70 font-light leading-relaxed max-w-2xl">
            A systematic, worry-free approach to mobile detailing designed around your schedule, built to deliver stunning results on-site.
          </p>
        </div>

        {/* 4-Step Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,2vw,2rem)]">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={horizontalSlideVariants}
              whileHover={{ 
                scale: 1.02, 
                borderColor: 'rgba(200, 162, 93, 0.45)',
                boxShadow: '0 10px 30px -15px rgba(200, 162, 93, 0.15)'
              }}
              className="bg-black/40 border border-gold/15 p-6 relative flex flex-col justify-between hover:border-gold/45 transition-colors duration-300 group"
            >
              {/* Massive Elegant Outlined Step Number Overlay */}
              <span className="absolute top-4 right-4 text-6xl font-mono text-gold opacity-[0.12] font-black group-hover:text-gold group-hover:opacity-20 transition-all duration-300 select-none">
                {step.num}
              </span>

              <div className="space-y-6">
                {/* Icon block */}
                <div id={`process-icon-container-${idx}`} className="p-3 bg-burgundy/30 border border-gold/20 inline-block rounded-none">
                  {step.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand/75 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
