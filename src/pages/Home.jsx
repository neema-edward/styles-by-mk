import { useState, useEffect } from 'react';
import BookingModal from '../components/BookingModal';

const slides = [
  `${import.meta.env.BASE_URL}images/style1.jpg`,
  `${import.meta.env.BASE_URL}images/style2.jpg`,
  `${import.meta.env.BASE_URL}images/style3.jpg`,
  `${import.meta.env.BASE_URL}images/style4.jpg`,
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">

        {/* Slideshow Images */}
        {slides.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: '90%',
              backgroundRepeat: 'no-repeat',
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 w-full">
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

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-gold w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}