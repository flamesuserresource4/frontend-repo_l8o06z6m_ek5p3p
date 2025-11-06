import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="showcase" className="border-t border-black/5 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Showcase</h2>
              <p className="mt-3 text-gray-600">A simple section to demonstrate layout and typography.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100" />
                  <h3 className="mt-4 text-lg font-semibold">Card {i}</h3>
                  <p className="mt-1 text-sm text-gray-600">Crisp cards with subtle shadows to keep the focus on your content.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
