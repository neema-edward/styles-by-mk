import ServiceCard from '../components/ServiceCard';

const services = [
  { title: "Signature Haircut", price: "KSh 1,500", desc: "Precision fade or scissor cut with hot towel finish" },
  { title: "Haircut + Beard Combo", price: "KSh 2,500", desc: "Complete grooming package" },
  { title: "Beard Grooming", price: "KSh 1,200", desc: "Shape, trim, line-up & premium oil" },
  { title: "Luxury Straight Razor Shave", price: "KSh 1,800", desc: "Traditional hot towel shave" },
  { title: "Kids Haircut", price: "KSh 1,000", desc: "Gentle cut for young gentlemen" },
  { title: "Hair & Scalp Treatment", price: "KSh 2,000", desc: "Deep conditioning & therapy" },
];

export default function Services() {
  return (
    <section className="py-20 bg-brown-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brown-900">Our Services</h1>
          <p className="text-xl text-brown-700 mt-4">Expert cuts. Timeless style.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}