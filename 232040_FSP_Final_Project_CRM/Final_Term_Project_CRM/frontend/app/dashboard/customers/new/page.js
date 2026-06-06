'use client';
import Link from 'next/link';
import CustomerForm from '../../../../components/CustomerForm';
import { ArrowLeft } from 'lucide-react';

export default function NewCustomerPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard/customers" className="text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Add Customer</h1>
          <p className="text-slate-400 text-sm mt-0.5">Fill in the details below</p>
        </div>
      </div>
      <div className="card max-w-3xl">
        <CustomerForm />
      </div>
    </div>
  );
}
