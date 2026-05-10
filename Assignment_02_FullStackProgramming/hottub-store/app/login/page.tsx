"use client";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="grid md:grid-cols-2 gap-0 max-w-4xl w-full shadow-2xl rounded-2xl overflow-hidden">
        {/* Left image */}
        <div className="relative hidden md:block">
          <Image src="/Login_page.jpg" alt="Login" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#1a3a5c]/70 flex flex-col justify-center px-10 text-white">
            <h2 className="text-3xl font-extrabold mb-3">Welcome Back!</h2>
            <p className="text-gray-200">Sign in to access your account, track orders, and manage your profile.</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-10">
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-[#1a3a5c]">Sign In</h1>
            <p className="text-gray-500 text-sm mt-1">Enter your credentials to access your account</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="you@example.com" className="border border-gray-300 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="••••••••" className="border border-gray-300 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#1a3a5c]" /> Remember me
              </label>
              <Link href="/forgot-password" className="text-[#1a3a5c] hover:underline font-medium">Forgot Password?</Link>
            </div>
            <Link href="/account" className="block w-full bg-[#1a3a5c] text-white text-center py-3 rounded-xl font-bold hover:bg-[#142d47] transition">
              Sign In
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#1a3a5c] font-bold hover:underline">Create one here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
