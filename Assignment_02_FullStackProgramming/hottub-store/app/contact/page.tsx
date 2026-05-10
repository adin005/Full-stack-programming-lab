"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-[#1a3a5c] mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-10">We&apos;d love to hear from you. Get in touch with our team.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-[#1a3a5c] mb-2">Message Sent!</h2>
              <p className="text-gray-600">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Send Us a Message</h2>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c]">
                    <option>Product Inquiry</option>
                    <option>Order Status</option>
                    <option>Technical Support</option>
                    <option>Returns & Refunds</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-[#1a3a5c] resize-none" />
                </div>
                <button onClick={() => setSubmitted(true)} className="w-full bg-[#1a3a5c] text-white py-3 rounded-lg font-bold hover:bg-[#142d47] transition">
                  Send Message
                </button>
              </div>
            </>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/Contact us.jpg" alt="Contact" fill className="object-cover" />
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            {[
              { icon: "📞", title: "Phone", info: "1-800-HOT-TUBS", sub: "Mon–Fri, 9am–6pm EST" },
              { icon: "📧", title: "Email", info: "info@hottubstore.com", sub: "We reply within 24 hours" },
              { icon: "📍", title: "Address", info: "123 Spa Street, Relax City, CA 90210", sub: "Visit our showroom" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className="text-3xl">{c.icon}</div>
                <div>
                  <div className="font-bold text-[#1a3a5c]">{c.title}</div>
                  <div className="text-gray-700 text-sm">{c.info}</div>
                  <div className="text-gray-400 text-xs">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
