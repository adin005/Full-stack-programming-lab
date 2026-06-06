'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import API from '../../../../lib/api';
import { ArrowLeft, Pencil, Mail, Phone, Building2, MapPin, FileText, Calendar } from 'lucide-react';

export default function CustomerDetailPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/customers/${id}`)
      .then(({ data }) => setCustomer(data.customer))
      .catch(() => toast.error('Customer not found'))
      .finally(() => setLoading(false));
  }, [id]);

  const statusBadge = (status) => {
    const map = { Active: 'badge-active', Lead: 'badge-lead', Inactive: 'badge-inactive' };
    return <span className={map[status] || 'badge-inactive'}>{status}</span>;
  };

  if (loading) return (
    <div className="flex justify-center py-16">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!customer) return (
    <div className="text-center py-16">
      <p className="text-slate-400">Customer not found.</p>
      <Link href="/dashboard/customers" className="text-blue-400 mt-2 inline-block">← Back to Customers</Link>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link href="/dashboard/customers" className="text-slate-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">{customer.name}</h1>
            <p className="text-slate-400 text-sm">{customer.company || 'No company'}</p>
          </div>
        </div>
        <Link href={`/dashboard/customers/${id}/edit`} className="btn-primary flex items-center gap-2">
          <Pencil className="w-4 h-4" /> Edit
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 card space-y-5">
          <div className="flex items-center justify-between border-b border-slate-700 pb-4">
            <h2 className="text-lg font-semibold text-white">Customer Details</h2>
            {statusBadge(customer.status)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InfoItem icon={Mail} label="Email" value={customer.email} />
            <InfoItem icon={Phone} label="Phone" value={customer.phone} />
            <InfoItem icon={Building2} label="Company" value={customer.company || '—'} />
            <InfoItem icon={MapPin} label="Address" value={customer.address || '—'} />
            <InfoItem icon={Calendar} label="Added On" value={new Date(customer.createdAt).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })} />
          </div>

          {customer.notes && (
            <div>
              <p className="text-slate-400 text-sm mb-2 flex items-center gap-2"><FileText className="w-4 h-4" /> Notes</p>
              <p className="text-slate-200 bg-slate-900 rounded-lg p-4 text-sm">{customer.notes}</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="card space-y-3 h-fit">
          <h2 className="text-lg font-semibold text-white border-b border-slate-700 pb-4">Quick Actions</h2>
          <Link href={`/dashboard/customers/${id}/edit`} className="btn-secondary w-full flex items-center justify-center gap-2">
            <Pencil className="w-4 h-4" /> Edit Customer
          </Link>
          <Link href={`/dashboard/invoices/new?customerId=${id}`} className="btn-primary w-full flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" /> Generate Invoice
          </Link>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div>
      <p className="text-slate-400 text-xs mb-1 flex items-center gap-1.5"><Icon className="w-3.5 h-3.5" />{label}</p>
      <p className="text-white text-sm font-medium">{value}</p>
    </div>
  );
}
