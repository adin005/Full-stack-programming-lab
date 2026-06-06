'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import API from '../../../../../lib/api';
import CustomerForm from '../../../../../components/CustomerForm';
import { ArrowLeft } from 'lucide-react';

export default function EditCustomerPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/customers/${id}`)
      .then(({ data }) => setCustomer(data.customer))
      .catch(() => toast.error('Customer not found'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="flex justify-center py-16">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href={`/dashboard/customers/${id}`} className="text-slate-400 hover:text-white">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Edit Customer</h1>
          <p className="text-slate-400 text-sm">{customer?.name}</p>
        </div>
      </div>
      <div className="card max-w-3xl">
        {customer && <CustomerForm initial={customer} customerId={id} />}
      </div>
    </div>
  );
}
