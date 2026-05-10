"use client";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="grid md:grid-cols-2 gap-0 max-w-4xl w-full shadow-2xl rounded-2xl overflow-hidden">
        {/* Left image */}
        <div className="relative hidden md:block">
          <Image src="/Register.jpg" alt="Register" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#1a3a5c]/70 flex flex-col justify-center px-10 text-white">
            <h2 className="text-3xl font-extrabold mb-3">Join HotTubStore</h2>
            <p className="text-gray-200">Create an account to enjoy exclusive offers, track your orders, and more.</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-10">
          <div className="mb-6">
            <h1 className="text-2xl font-extrabold text-[#1a3a5c]">Create Account</h1>
            <p className="text-gray-500 text-sm mt-1">Fill in the details below to register</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" placeholder="John" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" placeholder="Doe" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="you@example.com" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="Min. 8 characters" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input type="password" placeholder="Repeat password" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
            </div>
            <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5 accent-[#1a3a5c]" />
              I agree to the{" "}
              <Link href="/checkout/terms" className="text-[#1a3a5c] hover:underline font-medium">Terms & Conditions</Link>
            </label>
            <Link href="/account" className="block w-full bg-[#1a3a5c] text-white text-center py-3 rounded-xl font-bold hover:bg-[#142d47] transition">
              Create Account
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1a3a5c] font-bold hover:underline">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
