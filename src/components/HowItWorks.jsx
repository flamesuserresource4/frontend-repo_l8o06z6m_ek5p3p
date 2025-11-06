import React from 'react';
import { Zap, Settings, MessageSquare, Timer } from 'lucide-react';

const Step = ({ step, title, description, icon: Icon }) => (
  <div className="relative p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow">
      <Icon className="w-5 h-5" />
    </div>
    <div className="ml-0">
      <h4 className="text-lg font-semibold text-gray-900">{step}. {title}</h4>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
            <Zap className="w-4 h-4 text-indigo-600" />
            How it works
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Set it once. Let it run on autopilot.
          </h2>
          <p className="mt-3 text-gray-600">
            Define your rules and schedules — the agent handles the rest across your tools.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step step={1} title="Connect" description="Authorize Gmail, Notion, Slack, and other tools in one place." icon={Settings} />
          <Step step={2} title="Compose" description="Describe your workflow: triggers, actions, approvals, and recipients." icon={MessageSquare} />
          <Step step={3} title="Schedule" description="Run on a cadence, or trigger via events — with logs and alerts." icon={Timer} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
