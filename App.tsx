import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ReelsSection } from './components/ReelsSection';
import { DevelopmentSection } from './components/DevelopmentSection';
import { SolutionSection } from './components/SolutionSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <ReelsSection />
        <DevelopmentSection />
        <SolutionSection />
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;