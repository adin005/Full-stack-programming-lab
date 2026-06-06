'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import API from '../../../lib/api';
import Chatbot from '../../../components/Chatbot';
import { Plus, Search, Trash2, Pencil, Eye, Users } from 'lucide-react';

const STATUSES = ['All', 'Active', 'Lead', 'Inactive'];

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [deleteId, setDeleteId] = useState(null);

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      if (statusFilter !== 'All') params.status = statusFilter;
      const { data } = await API.get('/customers', { params });
      setCustomers(data.customers);
    } catch {
      toast.error('Failed to load customers');
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter]);

  useEffect(() => {
    const timer = setTimeout(fetchCustomers, 300);
    return () => clearTimeout(timer);
  }, [fetchCustomers]);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/customers/${id}`);
      toast.success('Customer deleted');
      setDeleteId(null);
      fetchCustomers();
    } catch {
      toast.error('Delete failed');
    }
  };

  const statusBadge = (status) => {
    const map = { Active: 'badge-active', Lead: 'badge-lead', Inactive: 'badge-inactive' };
    return <span className={map[status] || 'badge-inactive'}>{status}</span>;
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Customers</h1>
          <p className="text-slate-400 mt-1">{customers.length} record{customers.length !== 1 ? 's' : ''} found</p>
        </div>
        <Link href="/dashboard/customers/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Customer
        </Link>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input className="input pl-9" placeholder="Search by name..."
            value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-2 flex-wrap">
          {STATUSES.map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${statusFilter === s ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="card p-0 overflow-hidden">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : customers.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <Users className="w-14 h-14 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No customers found</p>
            <p className="text-sm mt-1">Try changing your search or filter</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-700/50 border-b border-slate-700">
                <tr className="text-slate-400">
                  <th className="text-left px-6 py-4 font-medium">#</th>
                  <th className="text-left px-6 py-4 font-medium">Name</th>
                  <th className="text-left px-6 py-4 font-medium hidden md:table-cell">Email</th>
                  <th className="text-left px-6 py-4 font-medium hidden sm:table-cell">Phone</th>
                  <th className="text-left px-6 py-4 font-medium hidden lg:table-cell">Company</th>
                  <th className="text-left px-6 py-4 font-medium">Status</th>
                  <th className="text-left px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {customers.map((c, i) => (
                  <tr key={c._id} className="hover:bg-slate-700/20 transition-colors">
                    <td className="px-6 py-4 text-slate-500">{i + 1}</td>
                    <td className="px-6 py-4 font-medium text-white">{c.name}</td>
                    <td className="px-6 py-4 text-slate-400 hidden md:table-cell">{c.email}</td>
                    <td className="px-6 py-4 text-slate-400 hidden sm:table-cell">{c.phone}</td>
                    <td className="px-6 py-4 text-slate-400 hidden lg:table-cell">{c.company || '—'}</td>
                    <td className="px-6 py-4">{statusBadge(c.status)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/dashboard/customers/${c._id}`}
                          className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-colors" title="View">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link href={`/dashboard/customers/${c._id}/edit`}
                          className="p-1.5 text-slate-400 hover:text-yellow-400 hover:bg-yellow-900/20 rounded-lg transition-colors" title="Edit">
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button onClick={() => setDeleteId(c._id)}
                          className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-white mb-2">Delete Customer?</h3>
            <p className="text-slate-400 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="btn-secondary flex-1">Cancel</button>
              <button onClick={() => handleDelete(deleteId)} className="btn-danger flex-1">Delete</button>
            </div>
          </div>
        </div>
      )}

      <Chatbot />
    </div>
  );
}
