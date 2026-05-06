import { useState } from 'react';
import BookingModal from '../components/BookingModal';

export default function Book() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <section className="min-h-screen bg-brown-50 flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold text-brown-900 mb-8">Book Your Appointment</h1>
        <p className="text-2xl text-brown-700 mb-10">Get the premium grooming experience you deserve.</p>
        
        {!modalOpen && (
          <button
            onClick={() => setModalOpen(true)}
            className="bg-gold hover:bg-amber-300 text-brown-900 text-xl font-semibold px-12 py-5 rounded-full transition-all duration-300"
          >
            Book Your Appointment
          </button>
        )}
      </div>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}