import React from 'react';
import { BarChart3, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, delta, color = 'text-indigo-600' }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          {delta && (
            <span className="inline-flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUp className="w-3 h-3 mr-1" />{delta}
            </span>
          )}
        </div>
      </div>
      <div className={`p-2.5 rounded-lg bg-gray-50 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <section id="analytics" className="py-16 sm:py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-sm">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            Analytics
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Track time saved and productivity gains
          </h2>
          <p className="mt-3 text-gray-600">
            Real-time insights show how automation impacts your operations across clients and projects.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Clock} label="Time Saved (this week)" value="18h 24m" delta="+12%" />
          <StatCard icon={CheckCircle2} label="Tasks Completed" value="142" delta="+8%" color="text-emerald-600" />
          <StatCard icon={TrendingUp} label="Productivity Index" value="1.6x" delta="+0.2x" color="text-amber-600" />
          <StatCard icon={BarChart3} label="SLA Compliance" value="99.2%" delta="+0.5%" color="text-blue-600" />
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Daily automation summary</h3>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" /> 36 status updates sent to clients
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> 54 emails drafted and approved
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> 8 reports generated and shared
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> 12 Notion pages updated
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
