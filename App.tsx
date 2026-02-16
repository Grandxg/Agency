import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProofSection } from './components/ProofSection';
import { SolutionSection } from './components/SolutionSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProofSection />
        <ProblemSection />
        <SolutionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;