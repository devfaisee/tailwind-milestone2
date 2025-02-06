"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#004AAD] text-white">
      <div className="text-2xl font-bold">Travel Explorer</div>
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-[#FF6B00]">Home</Link>
        <Link href="/about" className="hover:text-[#FF6B00]">About</Link>
        <Link href="/destinations" className="hover:text-[#FF6B00]">Destinations</Link>
        <Link href="/contact" className="hover:text-[#FF6B00]">Contact</Link>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
}
