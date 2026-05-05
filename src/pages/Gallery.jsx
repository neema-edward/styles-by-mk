export default function Gallery() {
  // Update this array with your actual image names
  const images = [
    "/styles-by-mk/images/style1.jpg",
    "/styles-by-mk/images/style2.jpg",
    "/styles-by-mk/images/style3.jpg",
    "/styles-by-mk/images/style4.jpg",
    "/styles-by-mk/images/style5.jpg",
    "/styles-by-mk/images/style6.jpg",
];

  return (
    <section className="py-20 bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-gold text-2xl">stylesbymk</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-3xl group">
              <img 
                src={src} 
                alt={`Style ${i + 1}`}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = '/images/style1.jpeg'; // fallback image
                }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-gold mt-12 text-lg">
          Follow us on TikTok @stylesby_mk & Instagram @_stylebymk for more styles
        </p>
      </div>
    </section>
  );
}