import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-indigo-50 to-white" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Build beautiful apps faster with Flames Blue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            A modern React + FastAPI starter with clean components, tasteful animation,
            and sensible defaults so you can focus on your product.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-500"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Live Demo
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-100/60 via-transparent to-white/60" />
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop"
              alt="Showcase"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
