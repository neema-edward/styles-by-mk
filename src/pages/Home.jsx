import { useState } from 'react';
import BookingModal from '../components/BookingModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="background-section h-screen flex items-center relative"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="overlay absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              STYLES BY MK
            </h1>
            <p className="text-3xl text-gold mb-10">Premium Barbershop • Nairobi</p>
            
            <button 
              onClick={() => setModalOpen(true)}
              className="bg-gold hover:bg-amber-300 text-brown-900 text-2xl font-semibold px-12 py-6 rounded-full transition-all duration-300"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}