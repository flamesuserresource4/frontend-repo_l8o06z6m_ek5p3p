import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Zap, Mail } from 'lucide-react';

const HeroSpline = () => {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-black/5 shadow-sm text-sm text-gray-700">
          <Zap className="w-4 h-4 text-amber-500" />
          AI Workflow Automation Agent
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 max-w-4xl">
          Automate client tasks like a smart virtual assistant
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl">
          From status updates and email replies to report generation — let AI handle repetitive work while you focus on high‑impact decisions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#analytics"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
          >
            <Rocket className="w-5 h-5" />
            See Analytics
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 font-medium border border-gray-200 shadow-sm hover:border-gray-300 transition"
          >
            <Mail className="w-5 h-5 text-indigo-600" />
            Automate Emails
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          Works with Notion, Zapier, Gmail and more
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
