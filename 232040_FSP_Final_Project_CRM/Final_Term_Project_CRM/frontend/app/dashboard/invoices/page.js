'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import API from '../../../lib/api';
import Chatbot from '../../../components/Chatbot';
import { Plus, FileText, Trash2, Download } from 'lucide-react';
import { generateInvoicePDF } from '../../../lib/pdfGenerator';

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const { data } = await API.get('/invoices');
      setInvoices(data.invoices);
    } catch { toast.error('Failed to load invoices'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/invoices/${id}`);
      toast.success('Invoice deleted');
      setDeleteId(null);
      fetch();
    } catch { toast.error('Delete failed'); }
  };

  const handleDownload = async (invoice) => {
    try {
      generateInvoicePDF(invoice);
      toast.success('PDF downloaded!');
    } catch { toast.error('PDF generation failed'); }
  };

  const statusBadge = (status) => {
    const map = {
      Paid: 'bg-green-900 text-green-300',
      Pending: 'bg-yellow-900 text-yellow-300',
      Overdue: 'bg-red-900 text-red-300',
    };
    return <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${map[status] || ''}`}>{status}</span>;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Invoices</h1>
          <p className="text-slate-400 mt-1">{invoices.length} invoice{invoices.length !== 1 ? 's' : ''}</p>
        </div>
        <Link href="/dashboard/invoices/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Invoice
        </Link>
      </div>

      <div className="card p-0 overflow-hidden">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : invoices.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <FileText className="w-14 h-14 mx-auto mb-4 opacity-30" />
            <p>No invoices yet. <Link href="/dashboard/invoices/new" className="text-blue-400">Create one!</Link></p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-700/50 border-b border-slate-700">
                <tr className="text-slate-400">
                  <th className="text-left px-6 py-4 font-medium">Invoice #</th>
                  <th className="text-left px-6 py-4 font-medium">Customer</th>
                  <th className="text-left px-6 py-4 font-medium hidden md:table-cell">Due Date</th>
                  <th className="text-left px-6 py-4 font-medium">Amount</th>
                  <th className="text-left px-6 py-4 font-medium">Status</th>
                  <th className="text-left px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {invoices.map((inv) => (
                  <tr key={inv._id} className="hover:bg-slate-700/20 transition-colors">
                    <td className="px-6 py-4 font-mono text-blue-400 text-xs">{inv.invoiceNumber}</td>
                    <td className="px-6 py-4 font-medium text-white">{inv.customer?.name}</td>
                    <td className="px-6 py-4 text-slate-400 hidden md:table-cell">
                      {new Date(inv.dueDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-semibold text-green-400">
                      PKR {inv.totalAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">{statusBadge(inv.status)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleDownload(inv)}
                          className="p-1.5 text-slate-400 hover:text-green-400 hover:bg-green-900/20 rounded-lg transition-colors" title="Download PDF">
                          <Download className="w-4 h-4" />
                        </button>
                        <button onClick={() => setDeleteId(inv._id)}
                          className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors">
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
            <h3 className="text-lg font-semibold text-white mb-2">Delete Invoice?</h3>
            <p className="text-slate-400 text-sm mb-6">This cannot be undone.</p>
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
