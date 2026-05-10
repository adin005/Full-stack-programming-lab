import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#1a3a5c]">Home</Link>
        {" / "}
        <Link href="/category" className="hover:text-[#1a3a5c]">Shop</Link>
        {" / "}
        <span className="text-[#1a3a5c] font-medium">Luxury Spa Series 500</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Images */}
        <div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-4">
            <Image src="/Product_des.jpg" alt="Product" fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="relative h-20 rounded-xl overflow-hidden border-2 border-transparent hover:border-[#1a3a5c] cursor-pointer transition">
                <Image src="/Hottub_main_F.jpg" alt={`View ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded">Best Seller</span>
          <h1 className="text-3xl font-extrabold text-[#1a3a5c] mt-2 mb-2">Luxury Spa Series 500</h1>
          <div className="flex items-center gap-2 mb-4">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-500 text-sm">(42 reviews)</span>
          </div>
          <div className="text-4xl font-extrabold text-[#1a3a5c] mb-4">$4,999</div>
          <p className="text-gray-600 mb-6">The Luxury Spa Series 500 offers the ultimate relaxation experience with 50 powerful jets, LED lighting, and advanced water management. Perfect for families and relaxation enthusiasts.</p>

          <div className="space-y-3 mb-6 text-sm">
            {[["Capacity","5-6 Adults"],["Jets","50 Hydrotherapy Jets"],["Dimensions","7.5ft x 7.5ft x 3ft"],["Warranty","5 Years Full Coverage"],["Installation","Free Professional Setup"]].map(([k,v]) => (
              <div key={k} className="flex gap-4">
                <span className="font-semibold text-gray-700 w-28">{k}:</span>
                <span className="text-gray-600">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-semibold text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button className="px-3 py-2 hover:bg-gray-100">−</button>
              <span className="px-4 py-2 font-bold">1</span>
              <button className="px-3 py-2 hover:bg-gray-100">+</button>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/cart" className="flex-1 bg-[#1a3a5c] text-white py-3 rounded-xl font-bold text-center hover:bg-[#142d47] transition">Add to Cart</Link>
            <Link href="/checkout" className="flex-1 bg-yellow-400 text-[#1a3a5c] py-3 rounded-xl font-bold text-center hover:bg-yellow-300 transition">Buy Now</Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">Product Description</h2>
        <p className="text-gray-600 mb-4">Experience the pinnacle of hydrotherapy with the Luxury Spa Series 500. Engineered for therapeutic relief and relaxation, this hot tub features industry-leading technology...</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
          <li>50 strategically placed hydrotherapy jets for full body relief</li>
          <li>Energy-efficient insulation reduces operating costs by up to 40%</li>
          <li>Multi-color LED lighting system with smartphone control</li>
          <li>Advanced filtration system with UV-C sanitation</li>
          <li>Bluetooth audio system with waterproof speakers</li>
        </ul>
      </div>
    </div>
  );
}
