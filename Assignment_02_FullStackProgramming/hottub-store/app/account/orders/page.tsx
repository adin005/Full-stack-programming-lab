import Link from "next/link";

const orders = [
  { id: "#10042", date: "Apr 15, 2026", items: "Luxury Spa Series 500", total: "$5,816.88", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
  { id: "#10031", date: "Mar 2, 2026", items: "Chemical Starter Kit", total: "$89.00", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
  { id: "#10028", date: "Feb 11, 2026", items: "Spa Cover Protector ×2", total: "$298.00", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
  { id: "#10015", date: "Dec 22, 2025", items: "Relaxation Pro 3000", total: "$3,499.00", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
];

export default function OrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#1a3a5c] mb-8">My Orders</h1>
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-4 space-y-1">
            {[
              { href: "/account", label: "Dashboard", icon: "🏠" },
              { href: "/account/orders", label: "My Orders", icon: "📦", active: true },
              { href: "/account/edit", label: "Edit Profile", icon: "✏️" },
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
        <div className="md:col-span-3 space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-[#1a3a5c] text-lg">{order.id}</span>
                    <span className={`${order.statusColor} px-2 py-1 rounded-full text-xs font-bold`}>{order.status}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{order.items}</p>
                  <p className="text-gray-400 text-xs mt-1">Ordered on {order.date}</p>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-xl text-[#1a3a5c]">{order.total}</div>
                  <Link href={`/account/orders/${order.id}`} className="text-sm text-[#1a3a5c] hover:underline font-medium">View Details →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
