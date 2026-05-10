"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="grid md:grid-cols-2 gap-0 max-w-4xl w-full shadow-2xl rounded-2xl overflow-hidden">
        <div className="relative hidden md:block">
          <Image src="/Forget password.jpg" alt="Forgot Password" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#1a3a5c]/70 flex flex-col justify-center px-10 text-white">
            <h2 className="text-3xl font-extrabold mb-3">Password Reset</h2>
            <p className="text-gray-200">We&apos;ll send you an email with instructions to reset your password.</p>
          </div>
        </div>
        <div className="bg-white p-10 flex flex-col justify-center">
          {sent ? (
            <div className="text-center">
              <div className="text-6xl mb-4">📧</div>
              <h2 className="text-2xl font-bold text-[#1a3a5c] mb-2">Email Sent!</h2>
              <p className="text-gray-600 mb-6">Check your inbox for password reset instructions.</p>
              <Link href="/login" className="bg-[#1a3a5c] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#142d47] transition inline-block">Back to Login</Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-extrabold text-[#1a3a5c] mb-2">Forgot Password?</h1>
              <p className="text-gray-500 text-sm mb-8">Enter your email address and we&apos;ll send you a reset link.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="border border-gray-300 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
                </div>
                <button onClick={() => setSent(true)} className="w-full bg-[#1a3a5c] text-white py-3 rounded-xl font-bold hover:bg-[#142d47] transition">
                  Send Reset Link
                </button>
                <p className="text-center text-sm text-gray-500">
                  Remember your password?{" "}
                  <Link href="/login" className="text-[#1a3a5c] font-bold hover:underline">Sign in</Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
