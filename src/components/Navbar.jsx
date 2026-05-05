import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-brown-900 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/images/logo.jpg" 
            alt="Styles by MK Logo" 
            className="h-14 w-auto object-contain"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-wider">STYLES BY MK</h1>
            <p className="text-gold text-sm -mt-1">Premium Barbershop • Nairobi</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-lg">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/services" className="hover:text-gold transition">Services</Link>
          <Link to="/gallery" className="hover:text-gold transition">Gallery</Link>
          <Link to="/about" className="hover:text-gold transition">About</Link>

          <Link 
            to="/book" 
            className="bg-gold hover:bg-amber-300 text-brown-900 px-8 py-3 rounded-full font-semibold transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}