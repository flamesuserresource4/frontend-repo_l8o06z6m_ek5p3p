import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span>Flames Blue</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#features" className="transition hover:text-gray-900">Features</a>
          <a href="#showcase" className="transition hover:text-gray-900">Showcase</a>
          <a href="#contact" className="transition hover:text-gray-900">Contact</a>
          <a
            href="#get-started"
            className="rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-500"
          >
            Get Started
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#features" className="py-2">Features</a>
            <a href="#showcase" className="py-2">Showcase</a>
            <a href="#contact" className="py-2">Contact</a>
            <a
              href="#get-started"
              className="mt-2 rounded-md bg-indigo-600 px-4 py-2 text-center text-white shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
