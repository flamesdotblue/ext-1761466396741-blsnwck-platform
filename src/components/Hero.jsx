import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/0" />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Discover elevated living in the heart of the city
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90">
            Curated selection of modern residences with skyline views, impeccable design, and unparalleled amenities.
          </p>
          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search by city, neighborhood, or address"
              className="w-full rounded-xl border border-white/30 bg-white/80 px-4 py-3 text-gray-900 placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white hover:bg-black">
              Explore Homes
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/90 max-w-md">
            <div className="rounded-lg bg-white/10 px-4 py-3 backdrop-blur border border-white/20">Luxury</div>
            <div className="rounded-lg bg-white/10 px-4 py-3 backdrop-blur border border-white/20">Modern</div>
            <div className="rounded-lg bg-white/10 px-4 py-3 backdrop-blur border border-white/20">Urban</div>
          </div>
        </div>
      </div>
    </section>
  );
}
