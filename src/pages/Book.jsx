import { useState } from 'react';
import BookingModal from '../components/BookingModal';

export default function Book() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <section className="min-h-screen bg-brown-50 flex items-center py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold text-brown-900 mb-8">Book Your Appointment</h1>
        <p className="text-2xl text-brown-700">Get the premium grooming experience you deserve.</p>
      </div>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}