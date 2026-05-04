import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { supabase } from '../supabaseClient';
import { X } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', date: '', time: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Trying to save:", formData);

      const { data, error } = await supabase
        .from('bookings')
        .insert([formData])
        .select();

      if (error) {
        console.error("Supabase Insert Error:", error);
        alert("Supabase Error: " + error.message);
        return;
      }

      console.log("✅ Saved successfully:", data);

      // Optional: Send Email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);

      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: '', phone: '', service: '', date: '', time: '', message: '' });
      }, 2000);

    } catch (err) {
      console.error("Catch Error:", err);
      alert("Failed to submit. Please check console.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[95vh] overflow-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold text-brown-900">Book Appointment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={28} />
          </button>
        </div>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-bold text-green-600">✅ Booking Received!</h3>
              <p className="mt-4">We'll confirm via WhatsApp shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange}
                className="w-full p-4 border rounded-2xl" />
              
              <input type="tel" name="phone" placeholder="Phone / WhatsApp *" required value={formData.phone} onChange={handleChange}
                className="w-full p-4 border rounded-2xl" />

              <select name="service" required value={formData.service} onChange={handleChange}
                className="w-full p-4 border rounded-2xl">
                <option value="">Select Service *</option>
                <option value="Signature Haircut">Signature Haircut - KSh 1,500</option>
                <option value="Haircut + Beard">Haircut + Beard - KSh 2,500</option>
                <option value="Beard Grooming">Beard Grooming - KSh 1,200</option>
                <option value="Luxury Shave">Luxury Shave - KSh 1,800</option>
              </select>

              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="date" required value={formData.date} onChange={handleChange} className="p-4 border rounded-2xl" />
                <input type="time" name="time" required value={formData.time} onChange={handleChange} className="p-4 border rounded-2xl" />
              </div>

              <textarea name="message" placeholder="Special requests (optional)" rows="3" value={formData.message} onChange={handleChange}
                className="w-full p-4 border rounded-2xl" />

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brown-900 hover:bg-brown-700 text-white py-5 rounded-2xl text-xl font-semibold"
              >
                {loading ? "Submitting..." : "Confirm Booking"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}