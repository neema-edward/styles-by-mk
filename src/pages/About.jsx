export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brown-900 mb-6">Our Story</h1>
          <p className="text-2xl text-gold">Where Style Meets Precision</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-brown-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
              <p className="text-lg leading-relaxed text-brown-700">
                Styles by MK is a premium barbershop in Nairobi dedicated to delivering 
                exceptional grooming experiences. We combine modern techniques with 
                classic barbering traditions.
              </p>
            </div>

            <div className="bg-brown-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-brown-700">
                To help every gentleman leave our chair feeling confident, refreshed, 
                and looking sharp. Every cut tells a story — we help you tell yours.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-brown-900 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4 text-lg">
                <li>✓ Experienced professional barbers</li>
                <li>✓ Premium grooming products</li>
                <li>✓ Hot towel service included</li>
                <li>✓ Relaxing &amp; modern environment</li>
                <li>✓ Attention to every detail</li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-2xl font-medium text-brown-900">
                "Great hair doesn't happen by chance. It happens by appointment at Styles by MK."
              </p>
              <p className="text-gold mt-4 font-semibold">- MK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}