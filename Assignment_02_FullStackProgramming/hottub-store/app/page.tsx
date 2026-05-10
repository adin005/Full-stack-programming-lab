import Link from "next/link";
import Image from "next/image";

const featured = [
  { id: 1, name: "Luxury Spa Series 500", price: 4999, img: "/Hottub_main_F.jpg", tag: "Best Seller" },
  { id: 2, name: "Relaxation Pro 3000", price: 3499, img: "/Hottub_main_F.jpg", tag: "New" },
  { id: 3, name: "Family Retreat XL", price: 5999, img: "/Hottub_main_F.jpg", tag: "Popular" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1a3a5c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 z-10">
            <span className="bg-yellow-400 text-[#1a3a5c] text-xs font-bold px-3 py-1 rounded-full uppercase">New Collection 2025</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-4 leading-tight">
              Relax in <span className="text-yellow-400">Ultimate</span> Luxury
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Discover our premium range of hot tubs and spas. Transform your backyard into a personal oasis.
            </p>
            <div className="flex gap-4">
              <Link href="/category" className="bg-yellow-400 text-[#1a3a5c] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">Shop Now</Link>
              <Link href="/about" className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition">Learn More</Link>
            </div>
          </div>
          <div className="flex-1 relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/Hottub_main_F.jpg" alt="Hot Tub" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🚚", title: "Free Delivery", sub: "On orders over $2000" },
            { icon: "🔧", title: "Expert Install", sub: "Professional setup" },
            { icon: "🛡️", title: "5-Year Warranty", sub: "Full coverage" },
            { icon: "📞", title: "24/7 Support", sub: "Always here for you" },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center p-4">
              <span className="text-4xl mb-2">{f.icon}</span>
              <span className="font-bold text-[#1a3a5c]">{f.title}</span>
              <span className="text-sm text-gray-500">{f.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#1a3a5c]">Featured Products</h2>
          <Link href="/category" className="text-yellow-600 font-semibold hover:underline">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group">
              <div className="relative h-56 overflow-hidden">
                <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-yellow-400 text-[#1a3a5c] text-xs font-bold px-2 py-1 rounded">{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#1a3a5c] mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-3">Premium quality hot tub with advanced features</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-extrabold text-[#1a3a5c]">${p.price.toLocaleString()}</span>
                  <Link href={`/product/${p.id}`} className="bg-[#1a3a5c] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#142d47] transition">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold text-[#1a3a5c] mb-4">Ready to Find Your Perfect Hot Tub?</h2>
          <p className="text-[#1a3a5c]/80 mb-6">Browse our full collection and find the perfect spa for your home and budget.</p>
          <Link href="/category" className="bg-[#1a3a5c] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#142d47] transition">Browse All Products</Link>
        </div>
      </section>
    </div>
  );
}
