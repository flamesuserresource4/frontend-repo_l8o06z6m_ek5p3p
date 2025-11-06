import React from 'react';
import HeroSpline from './components/HeroSpline';
import Integrations from './components/Integrations';
import Analytics from './components/Analytics';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSpline />
      <Integrations />
      <Analytics />
      <HowItWorks />

      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} AI Workflow Automation Agent — All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#analytics" className="hover:text-gray-900">Analytics</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
