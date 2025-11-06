import React from 'react';
import { Mail, FileText, Zap, CheckCircle2 } from 'lucide-react';

const IntegrationItem = ({ icon: Icon, name, description }) => (
  <div className="group rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const Integrations = () => {
  return (
    <section id="features" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Works where you work
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Plug into your existing tools
          </h2>
          <p className="mt-3 text-gray-600">
            Connect your stack in minutes. Automate workflows across communication, docs, and project management.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <IntegrationItem icon={Mail} name="Gmail" description="Draft and send replies, triage inboxes, chase follow‑ups." />
          <IntegrationItem icon={FileText} name="Notion" description="Log updates, generate pages, and keep clients in the loop." />
          <IntegrationItem icon={Zap} name="Zapier" description="Trigger automations across 5,000+ apps instantly." />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
