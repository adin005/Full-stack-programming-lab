"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1a3a5c] text-white shadow-lg">
      {/* Top bar */}
      <div className="bg-[#142d47] text-sm py-1 px-4 flex justify-between items-center">
        <span className="flex items-center gap-1"><Phone size={13}/> 1-800-HOT-TUBS</span>
        <div className="flex gap-4">
          <Link href="/login" className="hover:text-yellow-400 transition">Login</Link>
          <Link href="/register" className="hover:text-yellow-400 transition">Register</Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-400">Hot</span>Tub<span className="text-yellow-400">Store</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/category" className="hover:text-yellow-400 transition">Shop</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About Us</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative hover:text-yellow-400 transition">
            <ShoppingCart size={22}/>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#1a3a5c] text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>
          </Link>
          <Link href="/account" className="hover:text-yellow-400 transition hidden md:block">
            <User size={22}/>
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#142d47] px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/category" onClick={() => setOpen(false)} className="hover:text-yellow-400 transition">Shop</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-yellow-400 transition">About Us</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-yellow-400 transition">Contact</Link>
          <Link href="/account" onClick={() => setOpen(false)} className="hover:text-yellow-400 transition">My Account</Link>
        </nav>
      )}
    </header>
  );
}
