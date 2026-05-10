import Image from "next/image";
import Link from "next/link";

const cartItems = [
  { id: 1, name: "Luxury Spa Series 500", price: 4999, qty: 1 },
  { id: 2, name: "Spa Cover Protector", price: 149, qty: 2 },
  { id: 3, name: "Chemical Starter Kit", price: 89, qty: 1 },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#1a3a5c] mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/Shopping Cart.jpg" alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1a3a5c]">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">SKU: HTB-{item.id.toString().padStart(4,"0")}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden text-sm">
                    <button className="px-3 py-1.5 hover:bg-gray-100 font-bold">−</button>
                    <span className="px-4 py-1.5 font-bold">{item.qty}</span>
                    <button className="px-3 py-1.5 hover:bg-gray-100 font-bold">+</button>
                  </div>
                  <span className="font-extrabold text-[#1a3a5c]">${(item.price * item.qty).toLocaleString()}</span>
                </div>
              </div>
              <button className="text-red-400 hover:text-red-600 transition text-xl">✕</button>
            </div>
          ))}

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-bold text-[#1a3a5c] mb-3">Promo Code</h3>
            <div className="flex gap-3">
              <input type="text" placeholder="Enter promo code" className="border border-gray-300 rounded-lg px-3 py-2 flex-1 text-sm focus:outline-none focus:border-[#1a3a5c]" />
              <button className="bg-[#1a3a5c] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#142d47] transition">Apply</button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between text-gray-600"><span>Shipping</span><span className="text-green-600 font-semibold">Free</span></div>
              <div className="flex justify-between text-gray-600"><span>Tax (8%)</span><span>${(subtotal * 0.08).toFixed(2)}</span></div>
              <hr />
              <div className="flex justify-between font-extrabold text-lg text-[#1a3a5c]">
                <span>Total</span>
                <span>${(subtotal * 1.08).toLocaleString()}</span>
              </div>
            </div>
            <Link href="/checkout" className="block w-full bg-yellow-400 text-[#1a3a5c] text-center py-3 rounded-xl font-bold hover:bg-yellow-300 transition mb-3">
              Proceed to Checkout
            </Link>
            <Link href="/category" className="block w-full text-center text-sm text-gray-500 hover:text-[#1a3a5c] transition">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
