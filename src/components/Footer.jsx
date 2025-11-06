import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flames Blue. All rights reserved.</p>

          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" aria-label="GitHub" className="rounded p-2 transition hover:bg-gray-100">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded p-2 transition hover:bg-gray-100">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email" className="rounded p-2 transition hover:bg-gray-100">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
