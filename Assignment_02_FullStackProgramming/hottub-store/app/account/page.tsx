import Image from "next/image";
import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#1a3a5c] mb-8">My Account</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center mb-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-4 border-[#1a3a5c]">
              <Image src="/My Account.jpg" alt="Profile" fill className="object-cover" />
            </div>
            <div className="font-bold text-[#1a3a5c]">John Doe</div>
            <div className="text-gray-500 text-sm">john@example.com</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 space-y-1">
            {[
              { href: "/account", label: "Dashboard", icon: "🏠" },
              { href: "/account/orders", label: "My Orders", icon: "📦" },
              { href: "/account/edit", label: "Edit Profile", icon: "✏️" },
              { href: "/account/edit-billing", label: "Billing Address", icon: "💳" },
              { href: "/account/edit-shipping", label: "Shipping Address", icon: "🚚" },
              { href: "/login", label: "Logout", icon: "🚪" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#1a3a5c] hover:text-white transition">
                <span>{item.icon}</span>{item.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <div className="md:col-span-3 space-y-6">
          {/* Welcome */}
          <div className="bg-[#1a3a5c] rounded-2xl p-6 text-white flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-extrabold mb-1">Welcome back, John! 👋</h2>
              <p className="text-gray-300 text-sm">Manage your orders, profile, and account settings here.</p>
            </div>
            <Link href="/category" className="bg-yellow-400 text-[#1a3a5c] px-5 py-2 rounded-xl font-bold hover:bg-yellow-300 transition text-sm">Shop Now</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[["3", "Total Orders"],["$15,234","Total Spent"],["2","Wishlist Items"]].map(([v,l]) => (
              <div key={l} className="bg-white rounded-2xl shadow-md p-5 text-center">
                <div className="text-2xl font-extrabold text-[#1a3a5c]">{v}</div>
                <div className="text-gray-500 text-sm">{l}</div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#1a3a5c] text-lg">Recent Orders</h3>
              <Link href="/account/orders" className="text-sm text-[#1a3a5c] hover:underline font-medium">View All →</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 font-semibold text-gray-600 rounded-tl-lg">Order #</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Date</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Product</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Total</th>
                    <th className="text-left p-3 font-semibold text-gray-600 rounded-tr-lg">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["#10042","Apr 15, 2026","Luxury Spa 500","$4,999","Delivered"],
                    ["#10031","Mar 2, 2026","Chemical Kit","$89","Delivered"],
                    ["#10028","Feb 11, 2026","Spa Cover","$149","Delivered"],
                  ].map(([no,date,prod,total,status]) => (
                    <tr key={no} className="border-t hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#1a3a5c]">{no}</td>
                      <td className="p-3 text-gray-600">{date}</td>
                      <td className="p-3 text-gray-600">{prod}</td>
                      <td className="p-3 font-semibold">{total}</td>
                      <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">{status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
