import { Home, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/60 rounded-2xl border border-white/40 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2 text-gray-900">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Home size={18} />
              </span>
              <span className="font-semibold tracking-tight">Skyline Realty</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#listings" className="text-gray-700 hover:text-gray-900">Buy</a>
              <a href="#listings" className="text-gray-700 hover:text-gray-900">Rent</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">Sell</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
              <Phone size={16} />
              Schedule a Tour
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
