import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Luxury Spa Series 500", price: 4999, rating: 5, reviews: 42, tag: "Best Seller" },
  { id: 2, name: "Relaxation Pro 3000", price: 3499, rating: 4, reviews: 31, tag: "New" },
  { id: 3, name: "Family Retreat XL", price: 5999, rating: 5, reviews: 18, tag: "Popular" },
  { id: 4, name: "Compact Comfort 200", price: 1999, rating: 4, reviews: 55, tag: "" },
  { id: 5, name: "Premium Wellness Spa", price: 7499, rating: 5, reviews: 12, tag: "Premium" },
  { id: 6, name: "Budget Bliss Series", price: 1499, rating: 3, reviews: 88, tag: "Sale" },
];

export default function CategoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-[#1a3a5c] mb-3">Categories</h3>
              <ul className="space-y-2 text-sm">
                {["All Hot Tubs","2-Person Spas","4-Person Spas","6-Person Spas","Swim Spas","Accessories"].map(c => (
                  <li key={c}><button className="text-gray-600 hover:text-[#1a3a5c] hover:font-semibold transition w-full text-left">{c}</button></li>
                ))}
              </ul>
            </div>
            <hr />
            <div>
              <h3 className="font-bold text-[#1a3a5c] mb-3">Price Range</h3>
              <div className="space-y-2 text-sm">
                {["Under $2,000","$2,000 – $4,000","$4,000 – $6,000","Over $6,000"].map(p => (
                  <label key={p} className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#1a3a5c]" /> {p}
                  </label>
                ))}
              </div>
            </div>
            <hr />
            <div>
              <h3 className="font-bold text-[#1a3a5c] mb-3">Rating</h3>
              <div className="space-y-2 text-sm">
                {[5,4,3].map(r => (
                  <label key={r} className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#1a3a5c]" />
                    {"⭐".repeat(r)} & up
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-[#1a3a5c]">All Hot Tubs</h1>
              <p className="text-gray-500 text-sm mt-1">{products.length} products found</p>
            </div>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1a3a5c]">
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
            </select>
          </div>

          <div className="relative h-56 rounded-2xl overflow-hidden mb-8 shadow">
            <Image src="/Catagory page.jpg" alt="Shop Banner" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#1a3a5c]/60 flex items-center justify-center">
              <h2 className="text-white text-3xl font-extrabold">Summer Sale – Up to 30% Off!</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  <Image src="/Hottub_main_F.jpg" alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  {p.tag && <span className="absolute top-2 left-2 bg-yellow-400 text-[#1a3a5c] text-xs font-bold px-2 py-1 rounded">{p.tag}</span>}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1a3a5c] mb-1">{p.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {"⭐".repeat(p.rating)}<span className="text-xs text-gray-400 ml-1">({p.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-extrabold text-[#1a3a5c]">${p.price.toLocaleString()}</span>
                    <Link href={`/product/${p.id}`} className="bg-[#1a3a5c] text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#142d47] transition">View</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
