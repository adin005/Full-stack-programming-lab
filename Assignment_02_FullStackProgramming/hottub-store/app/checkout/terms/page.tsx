import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative h-48 rounded-2xl overflow-hidden mb-8 shadow">
        <Image src="/Terms & Conditions.jpg" alt="Terms" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1a3a5c]/70 flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Terms & Conditions</h1>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-10 space-y-8 text-sm text-gray-700 leading-relaxed">
        <p className="text-gray-400 text-xs">Last updated: May 1, 2026</p>

        {[
          { title: "1. Acceptance of Terms", body: "By accessing and using HotTubStore's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services." },
          { title: "2. Products and Pricing", body: "All prices listed on our website are in US dollars and are subject to change without notice. We reserve the right to modify or discontinue any product at any time. Prices do not include taxes or delivery charges unless specifically stated." },
          { title: "3. Ordering and Payment", body: "By placing an order, you confirm that all information provided is accurate and complete. We accept major credit cards, debit cards, and approved financing options. Orders are subject to acceptance and availability." },
          { title: "4. Delivery and Installation", body: "Delivery times are estimates and may vary. Professional installation is included with qualifying purchases. You are responsible for ensuring adequate access and space for delivery and installation." },
          { title: "5. Returns and Refunds", body: "Products may be returned within 30 days of purchase in their original condition. Custom orders are non-refundable. Refunds will be processed within 5-10 business days after we receive and inspect the returned item." },
          { title: "6. Warranty", body: "All hot tubs come with a manufacturer's warranty. Extended warranty options are available. Warranty covers defects in materials and workmanship under normal use. It does not cover damage due to misuse, neglect, or unauthorized modifications." },
          { title: "7. Privacy Policy", body: "We collect and use your personal information to process orders and improve our services. We do not sell or share your information with third parties except as required to fulfill your order. Please review our full Privacy Policy for details." },
          { title: "8. Contact Information", body: "For questions about these Terms & Conditions, please contact us at legal@hottubstore.com or call 1-800-HOT-TUBS." },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">{section.title}</h2>
            <p>{section.body}</p>
          </div>
        ))}

        <div className="pt-4 text-center">
          <Link href="/checkout" className="bg-[#1a3a5c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#142d47] transition inline-block">
            Back to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
