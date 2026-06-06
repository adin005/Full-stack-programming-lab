'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import API from '../../lib/api';
import { useAuth } from '../../lib/AuthContext';
import Chatbot from '../../components/Chatbot';
import { Users, UserCheck, UserPlus, UserX, FileText, Plus, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const chatbotOpen = searchParams.get('chatbot') === 'open';
  const [stats, setStats] = useState({ total: 0, active: 0, leads: 0, inactive: 0, invoices: 0 });
  const [recentCustomers, setRecentCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [custRes, invRes] = await Promise.all([
          API.get('/customers'),
          API.get('/invoices'),
        ]);
        const customers = custRes.data.customers;
        setStats({
          total: customers.length,
          active: customers.filter((c) => c.status === 'Active').length,
          leads: customers.filter((c) => c.status === 'Lead').length,
          inactive: customers.filter((c) => c.status === 'Inactive').length,
          invoices: invRes.data.invoices.length,
        });
        setRecentCustomers(customers.slice(0, 5));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const statCards = [
    { label: 'Total Customers', value: stats.total, icon: Users, color: 'text-blue-400', bg: 'bg-blue-900/30' },
    { label: 'Active', value: stats.active, icon: UserCheck, color: 'text-green-400', bg: 'bg-green-900/30' },
    { label: 'Leads', value: stats.leads, icon: UserPlus, color: 'text-yellow-400', bg: 'bg-yellow-900/30' },
    { label: 'Inactive', value: stats.inactive, icon: UserX, color: 'text-slate-400', bg: 'bg-slate-700/30' },
    { label: 'Invoices', value: stats.invoices, icon: FileText, color: 'text-purple-400', bg: 'bg-purple-900/30' },
  ];

  const statusBadge = (status) => {
    const map = { Active: 'badge-active', Lead: 'badge-lead', Inactive: 'badge-inactive' };
    return <span className={map[status] || 'badge-inactive'}>{status}</span>;
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome back, {user?.name?.split(' ')[0]} 👋</h1>
          <p className="text-slate-400 mt-1">Here's what's happening with your customers today.</p>
        </div>
        <Link href="/dashboard/customers/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Customer
        </Link>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {statCards.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="card flex flex-col gap-3">
            <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{loading ? '...' : value}</p>
              <p className="text-sm text-slate-400">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Customers */}
      <div className="card">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Recent Customers</h2>
          </div>
          <Link href="/dashboard/customers" className="text-sm text-blue-400 hover:text-blue-300">View all →</Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : recentCustomers.length === 0 ? (
          <div className="text-center py-8 text-slate-400">
            <Users className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p>No customers yet. <Link href="/dashboard/customers/new" className="text-blue-400">Add one!</Link></p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="pb-3 text-left font-medium">Name</th>
                  <th className="pb-3 text-left font-medium hidden md:table-cell">Company</th>
                  <th className="pb-3 text-left font-medium hidden sm:table-cell">Phone</th>
                  <th className="pb-3 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {recentCustomers.map((c) => (
                  <tr key={c._id} className="hover:bg-slate-700/30 transition-colors">
                    <td className="py-3 font-medium text-white">
                      <Link href={`/dashboard/customers/${c._id}`} className="hover:text-blue-400">{c.name}</Link>
                    </td>
                    <td className="py-3 text-slate-400 hidden md:table-cell">{c.company || '—'}</td>
                    <td className="py-3 text-slate-400 hidden sm:table-cell">{c.phone}</td>
                    <td className="py-3">{statusBadge(c.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Chatbot defaultOpen={chatbotOpen} />
    </div>
  );
}
