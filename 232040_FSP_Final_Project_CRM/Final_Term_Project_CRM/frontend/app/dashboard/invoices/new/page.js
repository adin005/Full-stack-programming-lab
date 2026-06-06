'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import API from '../../../../lib/api';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';

const emptyItem = () => ({ description: '', quantity: 1, unitPrice: 0 });

export default function NewInvoicePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedCustomer = searchParams.get('customerId');

  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    customer: preselectedCustomer || '',
    items: [emptyItem()],
    dueDate: '',
    status: 'Pending',
    notes: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    API.get('/customers').then(({ data }) => setCustomers(data.customers));
  }, []);

  const setItem = (idx, key, value) => {
    const items = [...form.items];
    items[idx] = { ...items[idx], [key]: key === 'description' ? value : Number(value) };
    setForm({ ...form, items });
  };

  const addItem = () => setForm({ ...form, items: [...form.items, emptyItem()] });
  const removeItem = (idx) => setForm({ ...form, items: form.items.filter((_, i) => i !== idx) });

  const total = form.items.reduce((s, i) => s + i.quantity * i.unitPrice, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.customer) { toast.error('Select a customer'); return; }
    if (!form.dueDate) { toast.error('Set a due date'); return; }
    if (form.items.some((i) => !i.description)) { toast.error('Fill all item descriptions'); return; }
    setLoading(true);
    try {
      await API.post('/invoices', form);
      toast.success('Invoice created!');
      router.push('/dashboard/invoices');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create invoice');
    } finally { setLoading(false); }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard/invoices" className="text-slate-400 hover:text-white">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">New Invoice</h1>
          <p className="text-slate-400 text-sm">Generate invoice for a customer</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        {/* Customer + Date */}
        <div className="card grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="label">Customer *</label>
            <select className="input" value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} required>
              <option value="">Select customer...</option>
              {customers.map((c) => <option key={c._id} value={c._id}>{c.name} — {c.company || c.email}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Due Date *</label>
            <input type="date" className="input" value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })} required />
          </div>
          <div>
            <label className="label">Status</label>
            <select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              {['Pending', 'Paid', 'Overdue'].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Items */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Invoice Items</h2>
            <button type="button" onClick={addItem} className="btn-secondary flex items-center gap-1.5 text-sm py-1.5 px-3">
              <Plus className="w-4 h-4" /> Add Item
            </button>
          </div>

          <div className="space-y-3">
            {/* Header */}
            <div className="grid grid-cols-12 gap-2 text-xs text-slate-400 font-medium px-1">
              <span className="col-span-6">Description</span>
              <span className="col-span-2">Qty</span>
              <span className="col-span-3">Unit Price (PKR)</span>
              <span className="col-span-1"></span>
            </div>
            {form.items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                <input className="input col-span-6 text-sm" placeholder="Service description"
                  value={item.description} onChange={(e) => setItem(idx, 'description', e.target.value)} />
                <input type="number" className="input col-span-2 text-sm" min="1" value={item.quantity}
                  onChange={(e) => setItem(idx, 'quantity', e.target.value)} />
                <input type="number" className="input col-span-3 text-sm" min="0" value={item.unitPrice}
                  onChange={(e) => setItem(idx, 'unitPrice', e.target.value)} />
                <button type="button" onClick={() => removeItem(idx)}
                  disabled={form.items.length === 1}
                  className="col-span-1 p-1.5 text-slate-400 hover:text-red-400 disabled:opacity-30 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 mt-4 pt-4 flex justify-end">
            <div className="text-right">
              <p className="text-slate-400 text-sm">Total Amount</p>
              <p className="text-2xl font-bold text-green-400">PKR {total.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="card">
          <label className="label">Notes</label>
          <textarea className="input resize-none" rows={3} placeholder="Additional notes..."
            value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        </div>

        <div className="flex gap-3">
          <Link href="/dashboard/invoices" className="btn-secondary flex-1 text-center">Cancel</Link>
          <button type="submit" className="btn-primary flex-1" disabled={loading}>
            {loading ? 'Creating...' : 'Create Invoice'}
          </button>
        </div>
      </form>
    </div>
  );
}
