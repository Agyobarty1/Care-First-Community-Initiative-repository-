import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MissionVisionMandate from '@/components/MissionVisionMandate';
import About from '@/components/About';
import Programs from '@/components/Programs';
import CoreValues from '@/components/CoreValues';
import SMT from '@/components/SMT';
import Activities from '@/components/Activities';
import Impact from '@/components/Impact';
import Organogram from '@/components/Organogram';
import News from '@/components/News';
import Reports from '@/components/Reports';
import Publications from '@/components/Publications';
import Gallery from '@/components/Gallery';
import WorkWithUs from '@/components/WorkWithUs';
import BusinessOpportunities from '@/components/BusinessOpportunities';
import TendersCareers from '@/components/TendersCareers';
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
        <CoreValues />
        <SMT />
        <Organogram />
        <Programs />
        <Activities />
        <Impact />
        <News />
        <Reports />
        <Publications />
        <Gallery />
        <WorkWithUs />
        <BusinessOpportunities />
        <TendersCareers />
        <Contact />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
