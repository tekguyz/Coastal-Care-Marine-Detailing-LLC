import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="landing-page-root" className="flex flex-col min-h-screen selection:bg-gold selection:text-burgundy">
      
      {/* 1. STICKY BRAND NAVIGATION BAR */}
      <Navbar />

      <main className="flex-grow">
        
        {/* 2. HIGH-CONVERTING EDITORIAL HERO SECTION */}
        <Hero />

        {/* 4. DETAIL PACKAGES & MENUS SERVICES LIST */}
        {/* Note: Managed as a custom modular placeholder */}
        <Services />

        {/* 5. BRAND STORY & CREW MANIFESTO SECTION */}
        {/* Note: Managed as a custom modular placeholder */}
        <About />

        {/* 6. METHODICAL FOUR-STEP RESTORATION PROCESS FLOW */}
        {/* Note: Managed as a custom modular placeholder */}
        <Process />

        {/* 7. HIGH-CONVERTING BOOKING & CONSULTATION FORM */}
        {/* Note: Managed as a custom modular placeholder */}
        <Contact />

      </main>

      {/* 9. DETAILED BASELINE PROFESSIONAL FOOTER Block */}
      <Footer />

    </div>
  );
}
