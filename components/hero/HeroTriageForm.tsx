'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_CONFIG } from '@/components/constants';

export default function HeroTriageForm() {
  const [step, setStep] = useState(1);
  const [careProfile, setCareProfile] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) return '';
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhoneNumber(formatted);
    if (error) {
      const digits = formatted.replace(/\D/g, '');
      if (digits.length === 10) {
        setError('');
      }
    }
  };

  const handleProfileSelect = (profile: string) => {
    setCareProfile(profile);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const digits = phoneNumber.replace(/\D/g, '');
    if (digits.length < 10) {
      setError('Please enter a full 10-digit phone number (###) ###-####.');
      return;
    }
    setError('');

    const formData = new FormData();
    formData.append('form-name', 'hero-callback');
    formData.append('care-profile', careProfile);
    formData.append('phone', phoneNumber);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('Netlify post submission error:', err);
        setSubmitted(true);
      });
  };

  const careProfiles = [
    { id: 'Washing', name: 'Washing', subtitle: 'Maintenance & Wash Packages' },
    { id: 'Ceramic Shield', name: 'Ceramic Shield', subtitle: 'Long-term Protective Coating' },
    { id: 'Oxidation Overhaul', name: 'Oxidation Overhaul', subtitle: 'Paint Correction & Buffing' },
    { id: 'Specialty Cleaning', name: 'Specialty Cleaning', subtitle: 'Acid Wash, Rust & Mold' },
  ];

  return (
    <div className="lg:col-span-5 w-full">
      <div 
        id="dockside-triage-panel" 
        className="bg-sand border border-gold/30 p-6 sm:p-8 shadow-2xl relative min-h-[460px] flex flex-col justify-between text-slate-800"
      >
        {/* Luxury Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-burgundy/20" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-burgundy/20" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-burgundy/20" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-burgundy/20" />

        <div className="space-y-6 flex-grow flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-burgundy tracking-widest uppercase block mb-1 font-bold">
              [ DOCKSIDE TRIAGE ]
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-burgundy leading-tight">
              Request Fast Service
            </h3>
            <p className="text-xs text-slate-705 mt-1 leading-normal font-light">
              Get a quick callback or secure your elite marine inspection slots.
            </p>
          </div>

          <div className="h-[1px] bg-burgundy/10" />

          <div className="flex-grow flex flex-col justify-center">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-burgundy/15 p-6 text-center space-y-4 shadow-sm"
              >
                <CheckCircle className="w-10 h-10 text-burgundy mx-auto animate-pulse" />
                <div>
                  <h4 className="font-serif font-bold text-lg text-burgundy">Callback Slotted!</h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                    We received your request for <strong className="text-burgundy uppercase">{careProfile}</strong>. We will call you at your number <strong className="text-slate-900 font-semibold">{phoneNumber}</strong> shortly.
                  </p>
                </div>
                <button 
                  onClick={() => { setSubmitted(false); setStep(1); setCareProfile(''); setPhoneNumber(''); }}
                  className="text-xs border-2 border-burgundy hover:bg-burgundy hover:text-white text-burgundy px-4 py-2 font-mono transition-colors font-bold cursor-pointer"
                >
                  RESET TRIAGE
                </button>
              </motion.div>
            ) : (
              <div className="relative">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <p className="text-xs font-mono text-burgundy tracking-wider uppercase font-bold">
                        1. What does your boat need?
                      </p>
                      <div className="grid grid-cols-1 gap-2.5">
                        {careProfiles.map((p) => (
                          <button
                            key={p.id}
                            onClick={() => handleProfileSelect(p.id)}
                            className="w-full text-left p-3.5 border border-slate-300 hover:border-burgundy/60 bg-white hover:bg-burgundy/5 transition-all duration-200 group flex items-start justify-between cursor-pointer"
                          >
                            <div>
                              <h5 className="text-sm font-semibold text-slate-900 group-hover:text-burgundy transition-colors font-serif">
                                {p.name}
                              </h5>
                              <p className="text-[10px] text-slate-500 font-light mt-0.5">
                                {p.subtitle}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-burgundy group-hover:translate-x-1 transition-all self-center" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -25 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-mono text-burgundy tracking-wider uppercase font-bold">
                          2. Secure your Callback
                        </p>
                        <button 
                          type="button"
                          onClick={handleBack}
                          className="text-[11px] font-mono text-slate-500 hover:text-burgundy flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>Back</span>
                        </button>
                      </div>

                      <div className="mb-2 p-3 bg-white border border-burgundy/15 flex flex-col shadow-sm">
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-semibold">SELECTED CARE:</span>
                        <span className="text-sm font-serif font-bold text-burgundy mt-0.5">{careProfile}</span>
                      </div>

                      <form 
                        id="hero-callback-form"
                        name="hero-callback" 
                        onSubmit={handleSubmit}
                        data-netlify="true"
                        className="space-y-3"
                      >
                        <input type="hidden" name="form-name" value="hero-callback" />
                        <input type="hidden" name="care-profile" value={careProfile} />

                        <div className="relative">
                          <label htmlFor="hero-phone-field" className="sr-only">Phone Number</label>
                          <input
                            id="hero-phone-field"
                            type="tel"
                            name="phone"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="Enter Your Phone Number"
                            className="w-full bg-white border border-slate-300 text-slate-900 placeholder-slate-450 px-4 py-3.5 focus:outline-none focus:border-burgundy text-sm tracking-widest font-mono font-medium"
                            required
                          />
                        </div>

                        {error && (
                          <p id="hero-phone-error" className="text-xs text-red-650 font-mono font-bold leading-normal">
                            {error}
                          </p>
                        )}

                        <button
                          id="hero-callback-submit"
                          type="submit"
                          className="w-full py-3.5 bg-burgundy hover:bg-charcoal text-white font-bold text-center duration-300 shadow-md active:scale-95 text-xs uppercase font-mono tracking-widest flex items-center justify-center gap-2 cursor-pointer border-none"
                        >
                          <span>Confirm Callback Request</span>
                          <ArrowRight className="w-4 h-4 text-white" />
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-burgundy/10 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
              <span className="font-semibold">Direct Hotline:</span>
              <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-burgundy hover:text-gold font-bold transition-colors">
                {COMPANY_CONFIG.phone}
              </a>
            </div>
            <p className="text-[9px] text-center text-slate-500 font-mono leading-relaxed">
              Licensed Keys Crew | Under 15 Min Target Dispatch response
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
