'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import API from '../lib/api';

const STATUSES = ['Lead', 'Active', 'Inactive'];

export default function CustomerForm({ initial = {}, customerId = null }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: initial.name || '',
    email: initial.email || '',
    phone: initial.phone || '',
    company: initial.company || '',
    address: initial.address || '',
    status: initial.status || 'Lead',
    notes: initial.notes || '',
  });
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Name, email and phone are required');
      return;
    }
    setLoading(true);
    try {
      if (customerId) {
        await API.put(`/customers/${customerId}`, form);
        toast.success('Customer updated!');
      } else {
        await API.post('/customers', form);
        toast.success('Customer added!');
      }
      router.push('/dashboard/customers');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Full Name *</label>
          <input className="input" placeholder="Ahmed Khan" value={form.name} onChange={set('name')} required />
        </div>
        <div>
          <label className="label">Email Address *</label>
          <input className="input" type="email" placeholder="ahmed@example.com" value={form.email} onChange={set('email')} required />
        </div>
        <div>
          <label className="label">Phone Number *</label>
          <input className="input" placeholder="0300-1234567" value={form.phone} onChange={set('phone')} required />
        </div>
        <div>
          <label className="label">Company</label>
          <input className="input" placeholder="TechCorp Pakistan" value={form.company} onChange={set('company')} />
        </div>
        <div>
          <label className="label">Address</label>
          <input className="input" placeholder="Blue Area, Islamabad" value={form.address} onChange={set('address')} />
        </div>
        <div>
          <label className="label">Status</label>
          <select className="input" value={form.status} onChange={set('status')}>
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="label">Notes</label>
        <textarea className="input resize-none" rows={3} placeholder="Additional notes..." value={form.notes} onChange={set('notes')} />
      </div>
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={() => router.back()} className="btn-secondary flex-1">Cancel</button>
        <button type="submit" className="btn-primary flex-1" disabled={loading}>
          {loading ? 'Saving...' : customerId ? 'Update Customer' : 'Add Customer'}
        </button>
      </div>
    </form>
  );
}
