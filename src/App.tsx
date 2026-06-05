import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { SectionWorks } from './components/SectionWorks';
import { SectionContact } from './components/SectionContact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-bg min-h-screen selection:bg-text-primary selection:text-bg">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <main>
          <Hero />
          <SectionWorks />
          <SectionContact />
        </main>
      )}
    </div>
  );
}