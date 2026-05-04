export default function Footer() {
  return (
    <footer className="bg-brown-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gold mb-4">STYLES BY MK</h3>
        <p className="text-gray-400 mb-6">Premium Grooming Experience in Nairobi</p>
        
        <div className="flex justify-center gap-8 text-2xl mb-8">
          <a href="https://www.tiktok.com/@stylesbymk" target="_blank" rel="noopener noreferrer" className="hover:text-gold">♬</a>
        </div>

        <p className="text-gray-500">📍 Nairobi, Kenya</p>
        <p className="text-gray-500 mt-1">© 2026 Styles by MK. All Rights Reserved.</p>
      </div>
    </footer>
  );
}