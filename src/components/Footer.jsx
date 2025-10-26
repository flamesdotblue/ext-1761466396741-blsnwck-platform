import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Skyline Realty</h3>
            <p className="mt-2 text-sm text-gray-600">Boutique real estate firm specializing in contemporary, design-forward urban properties.</p>
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2"><MapPin size={16} /> 500 Market St, Suite 2400</div>
              <div className="flex items-center gap-2"><Phone size={16} /> (415) 555-0199</div>
              <div className="flex items-center gap-2"><Mail size={16} /> hello@skylinerealty.com</div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a href="#listings" className="hover:text-gray-900">Listings</a></li>
              <li><a href="#home" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">Neighborhoods</a></li>
              <li><a href="#" className="hover:text-gray-900">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Stay in the know</h4>
            <p className="mt-3 text-sm text-gray-600">Get new listings and market insights delivered to your inbox.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" required placeholder="Your email" className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
              <button className="rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-black">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Skyline Realty. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
