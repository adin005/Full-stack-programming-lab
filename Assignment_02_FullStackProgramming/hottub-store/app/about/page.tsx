import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-[#1a3a5c] mb-2">About Us</h1>
      <p className="text-gray-500 mb-10">Learn more about HotTubStore and our mission.</p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">Founded in 2005, HotTubStore has been dedicated to providing premium quality hot tubs and spas to customers across the country. We believe everyone deserves a place to relax and rejuvenate.</p>
          <p className="text-gray-600 mb-4">With over 20 years of experience in the industry, our team of experts is committed to helping you find the perfect hot tub for your home and lifestyle.</p>
          <p className="text-gray-600">We partner with the world&apos;s leading manufacturers to bring you the finest selection of hot tubs at competitive prices.</p>
        </div>
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/About us.jpg" alt="About Us" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { title: "Our Mission", icon: "🎯", desc: "To provide the highest quality hot tubs and exceptional customer service, making luxury relaxation accessible to everyone." },
          { title: "Our Vision", icon: "🌟", desc: "To be the most trusted hot tub retailer, known for quality products, expert advice, and lifelong customer relationships." },
          { title: "Our Values", icon: "💎", desc: "Integrity, quality, and customer satisfaction guide everything we do. We stand behind every product we sell." },
        ].map((v) => (
          <div key={v.title} className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4">{v.icon}</div>
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">{v.title}</h3>
            <p className="text-gray-600 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1a3a5c] rounded-2xl p-10 text-white text-center mb-12">
        <h2 className="text-3xl font-extrabold mb-6">Our Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[["20+","Years Experience"],["10,000+","Happy Customers"],["500+","Products"],["50+","Expert Staff"]].map(([n,l]) => (
            <div key={l}>
              <div className="text-4xl font-extrabold text-yellow-400">{n}</div>
              <div className="text-gray-300 text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/contact" className="bg-[#1a3a5c] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#142d47] transition inline-block">Get In Touch</Link>
      </div>
    </div>
  );
}
