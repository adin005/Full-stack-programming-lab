"use client";
import Link from "next/link";
import Image from "next/image";

export default function EditShippingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#1a3a5c] mb-8">Shipping Address</h1>
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-4 space-y-1">
            {[
              { href: "/account", label: "Dashboard", icon: "🏠" },
              { href: "/account/orders", label: "My Orders", icon: "📦" },
              { href: "/account/edit", label: "Edit Profile", icon: "✏️" },
              { href: "/account/edit-billing", label: "Billing Address", icon: "💳" },
              { href: "/account/edit-shipping", label: "Shipping Address", icon: "🚚", active: true },
              { href: "/login", label: "Logout", icon: "🚪" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${item.active ? "bg-[#1a3a5c] text-white" : "text-gray-700 hover:bg-[#1a3a5c] hover:text-white"}`}>
                <span>{item.icon}</span>{item.label}
              </Link>
            ))}
          </div>
        </aside>
        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="relative h-40 rounded-2xl overflow-hidden mb-6">
              <Image src="/Edit shipping address.jpg" alt="Shipping" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1a3a5c]/60 flex items-center px-8">
                <div>
                  <h2 className="text-white text-2xl font-extrabold">Shipping Address</h2>
                  <p className="text-gray-300 text-sm">Update your delivery information</p>
                </div>
              </div>
            </div>
            <label className="flex items-center gap-2 mb-5 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-[#1a3a5c]" />
              Same as billing address
            </label>
            <div className="grid grid-cols-2 gap-5">
              {[["First Name","John"],["Last Name","Doe"],["Phone","+1 555-000-0000"],["Email","john@example.com"]].map(([label,val]) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input type="text" defaultValue={val} className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
                </div>
              ))}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input type="text" defaultValue="456 Delivery Ave" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                <input type="text" placeholder="Apt, Suite, etc." className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              {[["City","Brooklyn"],["State","NY"],["ZIP Code","11201"],["Country","United States"]].map(([label,val]) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input type="text" defaultValue={val} className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
                </div>
              ))}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Instructions (Optional)</label>
                <textarea rows={3} placeholder="Ring doorbell, leave at back door, etc." className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c] resize-none" />
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button className="bg-[#1a3a5c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#142d47] transition">Save Address</button>
              <Link href="/account" className="border border-gray-300 px-8 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition">Cancel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
