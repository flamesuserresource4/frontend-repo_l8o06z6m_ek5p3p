import { Sparkles, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Pre-styled components with Tailwind, smooth animations, and thoughtful defaults.'
  },
  {
    icon: Shield,
    title: 'Secure & Scalable',
    desc: 'FastAPI backend with CORS, schema validation, and a MongoDB-ready setup.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Vite-powered dev experience with instant reloads and optimized builds.'
  },
  {
    icon: Globe,
    title: 'API-first',
    desc: 'Clear separation of concerns with a clean API layer ready for growth.'
  }
];

export default function Features() {
  return (
    <section id="features" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need</h2>
          <p className="mt-3 text-gray-600">A focused toolkit to ship quickly without sacrificing quality.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <f.icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
