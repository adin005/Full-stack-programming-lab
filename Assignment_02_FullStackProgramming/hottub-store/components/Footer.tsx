import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-extrabold mb-3">
            <span className="text-yellow-400">Hot</span>Tub<span className="text-yellow-400">Store</span>
          </h3>
          <p className="text-sm text-gray-300">Your trusted source for premium hot tubs and spas. Quality products, exceptional service.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-yellow-400">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/category" className="hover:text-white transition">Shop</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-yellow-400">Account</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/login" className="hover:text-white transition">Login</Link></li>
            <li><Link href="/register" className="hover:text-white transition">Register</Link></li>
            <li><Link href="/account" className="hover:text-white transition">My Account</Link></li>
            <li><Link href="/cart" className="hover:text-white transition">Shopping Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-yellow-400">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📞 1-800-HOT-TUBS</li>
            <li>📧 info@hottubstore.com</li>
            <li>📍 123 Spa Street, Relax City</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#2a4a6c] text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} HotTubStore. All rights reserved.
      </div>
    </footer>
  );
}
