import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { supabase } from '../supabaseClient';
import { X } from 'lucide-react';

const SERVICES = [
  { name: 'Signature Haircut', price: 1500 },
  { name: 'Haircut + Beard', price: 2500 },
  { name: 'Beard Grooming', price: 1200 },
  { name: 'Luxury Shave', price: 1800 },
];

const MPESA_NUMBER = '0712608661';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1 = form, 2 = payment, 3 = confirm, 4 = success
  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', date: '', time: '', message: ''
  });
  const [mpesaCode, setMpesaCode] = useState('');
  const [loading, setLoading] = useState(false);

  const selectedService = SERVICES.find(s => s.name === formData.service);
  const deposit = selectedService ? Math.ceil(selectedService.price * 0.1) : 0;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleConfirm = async () => {
    if (!mpesaCode.trim()) {
      alert('Please enter your M-Pesa transaction code.');
      return;
    }
    setLoading(true);
    try {
      const bookingData = { ...formData, mpesa_code: mpesaCode, deposit_paid: deposit };

      const { error } = await supabase.from('bookings').insert([bookingData]).select();
      if (error) throw error;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...bookingData, deposit, mpesa_code: mpesaCode },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStep(3);
    } catch (err) {
      console.error(err);
      alert('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setFormData({ name: '', phone: '', service: '', date: '', time: '', message: '' });
      setMpesaCode('');
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[95vh] overflow-auto">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-brown-900">
            {step === 1 && 'Book Appointment'}
            {step === 2 && 'Pay Deposit'}
            {step === 3 && 'Booking Confirmed!'}
          </h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-black">
            <X size={28} />
          </button>
        </div>

        <div className="p-6">

          {/* STEP 1 - Booking Form */}
          {step === 1 && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Full Name *" required
                value={formData.name} onChange={handleChange}
                className="w-full p-4 border rounded-2xl" />

              <input type="tel" name="phone" placeholder="Phone / WhatsApp *" required
                value={formData.phone} onChange={handleChange}
                className="w-full p-4 border rounded-2xl" />

              <select name="service" required value={formData.service} onChange={handleChange}
                className="w-full p-4 border rounded-2xl">
                <option value="">Select Service *</option>
                {SERVICES.map(s => (
                  <option key={s.name} value={s.name}>
                    {s.name} - KSh {s.price.toLocaleString()}
                  </option>
                ))}
              </select>

              {/* Show deposit info as soon as service is selected */}
              {selectedService && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm">
                  <p className="font-semibold text-brown-900">💰 Deposit Required</p>
                  <p className="text-gray-600 mt-1">
                    A <strong>10% deposit of KSh {deposit}</strong> is required to confirm your booking.
                    You'll pay the remaining <strong>KSh {selectedService.price - deposit}</strong> at the shop.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="date" required value={formData.date} onChange={handleChange}
                  className="p-4 border rounded-2xl" />
                <input type="time" name="time" required value={formData.time} onChange={handleChange}
                  className="p-4 border rounded-2xl" />
              </div>

              <textarea name="message" placeholder="Special requests (optional)" rows="3"
                value={formData.message} onChange={handleChange}
                className="w-full p-4 border rounded-2xl" />

              <button type="submit"
                className="w-full bg-brown-900 hover:bg-brown-700 text-white py-4 rounded-2xl text-lg font-semibold">
                Proceed to Payment →
              </button>
            </form>
          )}

          {/* STEP 2 - M-Pesa Payment */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Summary */}
              <div className="bg-brown-50 rounded-2xl p-4 space-y-1 text-sm">
                <p><span className="font-semibold">Name:</span> {formData.name}</p>
                <p><span className="font-semibold">Service:</span> {formData.service}</p>
                <p><span className="font-semibold">Date:</span> {formData.date} at {formData.time}</p>
                <p><span className="font-semibold">Total Price:</span> KSh {selectedService?.price.toLocaleString()}</p>
              </div>

              {/* M-Pesa Instructions */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 space-y-3">
                <p className="font-bold text-green-800 text-lg">📱 Pay via M-Pesa</p>
                <p className="text-sm text-gray-700">Send the deposit to confirm your booking:</p>

                <div className="bg-white rounded-xl p-4 text-center space-y-1 border border-green-200">
                  <p className="text-sm text-gray-500">Send Money to</p>
                  <p className="text-3xl font-bold text-green-700">{MPESA_NUMBER}</p>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="text-3xl font-bold text-brown-900">KSh {deposit}</p>
                </div>

                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Go to M-Pesa on your phone</li>
                  <li>Select <strong>Send Money</strong></li>
                  <li>Enter number: <strong>{MPESA_NUMBER}</strong></li>
                  <li>Enter amount: <strong>KSh {deposit}</strong></li>
                  <li>Enter your PIN and confirm</li>
                  <li>Copy the <strong>transaction code</strong> from the SMS</li>
                </ol>
              </div>

              {/* Transaction Code Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter M-Pesa Transaction Code *
                </label>
                <input
                  type="text"
                  placeholder="e.g. QHX4K2L8OP"
                  value={mpesaCode}
                  onChange={(e) => setMpesaCode(e.target.value.toUpperCase())}
                  className="w-full p-4 border rounded-2xl font-mono text-lg tracking-widest"
                  maxLength={12}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Found in the M-Pesa confirmation SMS you received.
                </p>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(1)}
                  className="flex-1 border border-brown-900 text-brown-900 py-4 rounded-2xl font-semibold">
                  ← Back
                </button>
                <button onClick={handleConfirm} disabled={loading}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold">
                  {loading ? 'Confirming...' : 'Confirm Booking ✓'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 - Success */}
          {step === 3 && (
            <div className="text-center py-8 space-y-4">
              <div className="text-6xl">✅</div>
              <h3 className="text-2xl font-bold text-green-600">Booking Confirmed!</h3>
              <p className="text-gray-600">
                Thank you <strong>{formData.name}</strong>! Your deposit of <strong>KSh {deposit}</strong> has been received.
              </p>
              <p className="text-gray-600">
                We'll confirm your appointment via WhatsApp shortly.
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 text-sm text-left space-y-1">
                <p><span className="font-semibold">Service:</span> {formData.service}</p>
                <p><span className="font-semibold">Date:</span> {formData.date} at {formData.time}</p>
                <p><span className="font-semibold">M-Pesa Code:</span> {mpesaCode}</p>
                <p><span className="font-semibold">Balance due at shop:</span> KSh {selectedService ? selectedService.price - deposit : 0}</p>
              </div>
              <button onClick={handleClose}
                className="w-full bg-brown-900 text-white py-4 rounded-2xl font-semibold">
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}