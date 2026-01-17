import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MissionVisionMandate from '@/components/MissionVisionMandate';
import About from '@/components/About';
import Programs from '@/components/Programs';
import CoreValues from '@/components/CoreValues';
import SMT from '@/components/SMT';
import Activities from '@/components/Activities';
import Organogram from '@/components/Organogram';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection.jsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[rgb(138,201,9)]">
      <Header />
      <main>
        <Hero />
        <MissionVisionMandate />
        <About />
        <Programs />
        <CoreValues />
        <SMT />
        <Activities />
        <Organogram />
        <Contact />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
