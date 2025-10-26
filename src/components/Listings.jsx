import { MapPin, BedDouble, Bath, Car } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Penthouse at Aurora Tower',
    price: '$2,450,000',
    address: '1280 Skyline Ave, Floor 38',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1740&auto=format&fit=crop',
    beds: 3,
    baths: 3,
    parking: 2,
  },
  {
    id: 2,
    title: 'Glasshouse Residence',
    price: '$1,290,000',
    address: '560 Harbor Blvd, Unit 1902',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1740&auto=format&fit=crop',
    beds: 2,
    baths: 2,
    parking: 1,
  },
  {
    id: 3,
    title: 'Skyline Vista Loft',
    price: '$3,200,000',
    address: '77 Crescent Park, PH A',
    image:
      'https://images.unsplash.com/photo-1756711368863-2203d79ae231?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTa3lsaW5lJTIwVmlzdGElMjBMb2Z0fGVufDB8MHx8fDE3NjE0NjY0NjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    beds: 4,
    baths: 3,
    parking: 2,
  },
];

function Card({ p }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow">{p.price}</div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
          <MapPin size={16} /> {p.address}
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1"><BedDouble size={16} /> {p.beds} bd</span>
          <span className="inline-flex items-center gap-1"><Bath size={16} /> {p.baths} ba</span>
          <span className="inline-flex items-center gap-1"><Car size={16} /> {p.parking} prkg</span>
        </div>
        <div className="mt-5">
          <a href="#contact" className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">Request Info</a>
        </div>
      </div>
    </div>
  );
}

export default function Listings() {
  return (
    <section id="listings" className="relative -mt-12 bg-white pb-16 pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Featured Listings</h2>
            <p className="mt-2 text-gray-600">Handpicked homes that embody modern, luxurious city living.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
