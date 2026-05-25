'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_CONFIG } from '@/components/constants';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Maintenance Wash');
  const [vesselInfo, setVesselInfo] = useState('');
  const [botField, setBotField] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) return '';
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    if (errorMsg && formatted.replace(/\D/g, '').length === 10) {
      setErrorMsg('');
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (!name || digits.length < 10 || !serviceNeeded) {
      setErrorMsg('Please enter a valid 10-digit phone number (###) ###-#### and satisfy all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    const formData = new FormData();
    formData.append('form-name', 'dockside-contact');
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('service-needed', serviceNeeded);
    if (vesselInfo) formData.append('vessel-info', vesselInfo);
    if (botField) formData.append('bot-field', botField);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => {
        setSubmitted(true);
        setName('');
        setPhone('');
        setVesselInfo('');
        setServiceNeeded('Maintenance Wash');
      })
      .catch((err) => {
        console.error('Netlify post submission tracking error:', err);
        setSubmitted(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-burgundy text-white py-[clamp(4rem,7vw,6.5rem)] border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#C8A25D_1px,transparent_1px),linear-gradient(to_bottom,#C8A25D_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (Span: 5) - Dispatch Authority Card */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-gold tracking-[0.25em] uppercase block font-semibold">[ DOCKSIDE SCHEDULING ]</span>
            <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-serif font-bold text-white leading-tight tracking-tight">Mobile Dispatch Boundaries</h2>
            
            <div className="h-[2px] w-24 bg-gold/50" />

            <p className="text-sm sm:text-base text-sand/90 font-light leading-relaxed">
              Based out of Key West, our fully self-contained mobile detailing units bring master craftsmanship directly to your vessel&apos;s location. We service all private docks, residential lifts, storage yards, and commercial marinas across the Lower Keys. If your boat is on the water or on a trailer in our territory, our team drops anchor right at your side.
            </p>

            <div className="p-4 border border-gold/20 bg-black/10 text-xs text-sand/80 font-mono leading-relaxed space-y-2">
              <span className="text-gold font-bold">✓ ALL LOWER KEYS PORTS INCLUDED</span>
              <p>Key West, Stock Island, Big Coppitt, Geiger Key, Sugarloaf Key up to MM 25. Under 15-minute response target.</p>
            </div>
          </div>

          {/* Right Column (Span: 7) - The Streamlined Intake Form */}
          <div className="lg:col-span-7 w-full animate-fadeIn">
            <div className="bg-sand text-slate-800 border border-gold/30 p-5 sm:p-8 shadow-2xl relative">
              {/* Corner highlights mirroring hero triage form */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-burgundy/25" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-burgundy/25" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-burgundy/25" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-burgundy/25" />

              <div className="mb-6">
                <span className="text-xs font-mono text-burgundy tracking-widest uppercase block font-bold mb-1">[ INTEL INTAKE ]</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-burgundy">Secure Detailing Slot</h3>
              </div>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-4">
                  <div className="inline-flex p-3 bg-burgundy/5 border border-burgundy/15"><CheckCircle2 className="w-10 h-10 text-burgundy animate-pulse" /></div>
                  <h3 className="text-xl font-serif font-bold text-burgundy">Request Filed with Excellence</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-light">
                    Thank you for choosing Coastal Care. A detailing superintendent will inspect your request and call you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="px-5 py-2.5 bg-burgundy hover:bg-charcoal text-white font-mono text-xs uppercase tracking-widest font-semibold transition-colors duration-250 border-none">
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form name="dockside-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleFormSubmit} className="space-y-4">
                  <input type="hidden" name="form-name" value="dockside-contact" />
                  <div className="hidden">
                    <label htmlFor="contact-bot-field">
                      Don&apos;t fill: <input id="contact-bot-field" name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-[11px] font-mono uppercase tracking-wider text-burgundy block font-bold">Full Name *</label>
                      <input id="contact-name" type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Capt. James Miller" className="w-full bg-white text-slate-900 border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-burgundy placeholder:text-slate-400 transition-colors" />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-[11px] font-mono uppercase tracking-wider text-burgundy block font-bold">Phone Number *</label>
                      <input id="contact-phone" type="tel" name="phone" required value={phone} onChange={handlePhoneChange} placeholder="e.g. (305) 393-1813" className="w-full bg-white text-slate-900 border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-burgundy placeholder:text-slate-400 transition-colors" />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-service-needed" className="text-[11px] font-mono uppercase tracking-wider text-burgundy block font-bold">Service Needed *</label>
                      <div className="relative">
                        <select id="contact-service-needed" name="service-needed" required value={serviceNeeded} onChange={(e) => setServiceNeeded(e.target.value)} className="w-full bg-white text-slate-900 border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-burgundy appearance-none cursor-pointer">
                          <option value="Maintenance Wash">Maintenance Wash</option>
                          <option value="Protection & Sealant">Protection & Sealant</option>
                          <option value="Full Restoration">Full Restoration</option>
                          <option value="Specialty Cleaning">Specialty Cleaning</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-605">
                          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-vessel-info" className="text-[11px] font-mono uppercase tracking-wider text-burgundy block font-bold">Boat Specs & Location (Optional)</label>
                      <input id="contact-vessel-info" type="text" name="vessel-info" value={vesselInfo} onChange={(e) => setVesselInfo(e.target.value)} placeholder="e.g. 28ft Whaler at Key West Marina" className="w-full bg-white text-slate-900 border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-burgundy placeholder:text-slate-400 transition-colors" />
                    </div>
                  </div>

                  {errorMsg && (
                    <p id="contact-error" className="text-xs font-mono text-red-600 font-bold">{errorMsg}</p>
                  )}

                  <div className="space-y-3 pt-2">
                    <button id="submit-contact-form" type="submit" disabled={submitting} className="w-full py-3.5 bg-burgundy text-white hover:bg-charcoal hover:text-white border-none duration-305 font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer">
                      <span>{submitting ? 'FILING REQUEST...' : 'SUBMIT DETAILING REQUEST'}</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 font-mono">
                      Urgent request? Call us directly at{' '}
                      <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-burgundy font-bold hover:underline">{COMPANY_CONFIG.phone}</a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
