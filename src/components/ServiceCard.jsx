export default function ServiceCard({ title, price, desc }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-brown-100">
      <h3 className="text-2xl font-semibold text-brown-900 mb-3">{title}</h3>
      <p className="text-4xl font-bold text-gold mb-6">{price}</p>
      <p className="text-brown-700 leading-relaxed">{desc}</p>
    </div>
  );
}