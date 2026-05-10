import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#1a3a5c] mb-2">Checkout</h1>
      <div className="flex gap-2 text-sm text-gray-500 mb-8">
        <span className="text-[#1a3a5c] font-semibold">Shipping</span>
        <span>→</span>
        <span className="text-[#1a3a5c] font-semibold">Payment</span>
        <span>→</span>
        <span>Confirmation</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" placeholder="John" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" placeholder="Doe" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" placeholder="123 Main Street" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" placeholder="New York" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input type="text" placeholder="10001" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]">
                  <option>Select State</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                  <option>Florida</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-2">Payment Information</h2>
            <div className="relative h-40 rounded-xl overflow-hidden mb-6">
              <Image src="/Payment Form.jpg" alt="Payment" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1a3a5c]/60 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Secure Payment Gateway</span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input type="text" placeholder="MM / YY" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input type="text" placeholder="123" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                <input type="text" placeholder="John Doe" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
            </div>
          </div>

          <label className="flex items-start gap-3 bg-white rounded-2xl shadow-md p-6 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 mt-0.5 accent-[#1a3a5c]" />
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <Link href="/checkout/terms" className="text-[#1a3a5c] font-semibold hover:underline">Terms & Conditions</Link>
              {" "}and{" "}
              <Link href="/about" className="text-[#1a3a5c] font-semibold hover:underline">Privacy Policy</Link>
            </span>
          </label>

          <button className="w-full bg-yellow-400 text-[#1a3a5c] py-4 rounded-xl font-extrabold text-lg hover:bg-yellow-300 transition shadow-lg">
            🔒 Place Order – $5,621.64
          </button>
        </div>

        {/* Summary */}
        <div>
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm text-gray-600 mb-4">
              <div className="flex justify-between"><span>Luxury Spa Series 500 ×1</span><span>$4,999</span></div>
              <div className="flex justify-between"><span>Spa Cover ×2</span><span>$298</span></div>
              <div className="flex justify-between"><span>Chemical Kit ×1</span><span>$89</span></div>
              <hr />
              <div className="flex justify-between"><span>Subtotal</span><span>$5,386</span></div>
              <div className="flex justify-between"><span>Shipping</span><span className="text-green-600 font-semibold">Free</span></div>
              <div className="flex justify-between"><span>Tax (8%)</span><span>$430.88</span></div>
              <hr />
              <div className="flex justify-between font-extrabold text-lg text-[#1a3a5c]">
                <span>Total</span><span>$5,816.88</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
              🔒 SSL Secured Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
