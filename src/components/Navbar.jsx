import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brown-900 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.jpg`}
            alt="Styles by MK Logo"
            className="h-10 w-auto object-contain"
          />
          <div>
            <h1 className="text-xl md:text-3xl font-bold tracking-wider">STYLES BY MK</h1>
            <p className="text-gold text-xs md:text-sm -mt-1">Premium Barbershop • Nairobi</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-lg">
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brown-900 px-6 pb-6 flex flex-col gap-4 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gold transition">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-gold transition">Services</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-gold transition">Gallery</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gold transition">About</Link>
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="bg-gold hover:bg-amber-300 text-brown-900 px-8 py-3 rounded-full font-semibold transition text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}