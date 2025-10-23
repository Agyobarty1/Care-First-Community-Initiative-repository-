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
import Donate from '@/components/Donate';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
        <Donate />
      </main>
      <Footer />
    </div>
  );
};

export default App;
