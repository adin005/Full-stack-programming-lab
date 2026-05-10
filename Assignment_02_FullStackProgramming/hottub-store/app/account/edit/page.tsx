"use client";
import Link from "next/link";
import Image from "next/image";

export default function EditAccountPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#1a3a5c] mb-8">Edit Profile</h1>
      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-4 space-y-1">
            {[
              { href: "/account", label: "Dashboard", icon: "🏠" },
              { href: "/account/orders", label: "My Orders", icon: "📦" },
              { href: "/account/edit", label: "Edit Profile", icon: "✏️", active: true },
              { href: "/account/edit-billing", label: "Billing Address", icon: "💳" },
              { href: "/account/edit-shipping", label: "Shipping Address", icon: "🚚" },
              { href: "/login", label: "Logout", icon: "🚪" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${item.active ? "bg-[#1a3a5c] text-white" : "text-gray-700 hover:bg-[#1a3a5c] hover:text-white"}`}>
                <span>{item.icon}</span>{item.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Form */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="relative h-44 rounded-2xl overflow-hidden mb-6">
              <Image src="/Edit Account.jpg" alt="Edit Account" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1a3a5c]/60 flex items-center px-8">
                <div>
                  <h2 className="text-white text-2xl font-extrabold">Edit Your Profile</h2>
                  <p className="text-gray-300 text-sm">Update your personal information</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[["First Name","John"],["Last Name","Doe"],["Email Address","john@example.com"],["Phone Number","+1 555-000-0000"]].map(([label, val]) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input type="text" defaultValue={val} className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
                </div>
              ))}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input type="password" placeholder="Enter current password to change" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input type="password" placeholder="New password" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="bg-[#1a3a5c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#142d47] transition">Save Changes</button>
              <Link href="/account" className="border border-gray-300 px-8 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition">Cancel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
