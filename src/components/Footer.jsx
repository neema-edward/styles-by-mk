import { Instagram, Music, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-bold text-gold mb-4">STYLES BY MK</h3>
            <p className="text-gray-400">Premium Barbershop in Nairobi CBD</p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
              <MapPin size={20} /> Location
            </h4>
            <p className="text-gray-400">
              Town CBD<br />
              Beaver House, 2nd Floor
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
              <Phone size={20} /> Contact
            </h4>
            <p className="text-gray-400">
              Call / WhatsApp: <a href="tel:0712608661" className="hover:text-gold">0712 608 661</a>
            </p>
            <p className="text-gray-400 mt-2">
              Book Online: <a href="https://calendly.com/davidmuigai241" target="_blank" rel="noopener noreferrer" className="hover:text-gold underline">calendly.com/davidmuigai241</a>
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-8 mt-12">
          <a href="https://www.instagram.com/_stylebymk" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition text-4xl">
            <Instagram />
          </a>
          <a href="https://www.tiktok.com/@stylesby_mk" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition text-4xl">
            <Music />
          </a>
        </div>

        <div className="text-center text-gray-500 mt-12 text-sm">
          © 2026 Styles by MK. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}