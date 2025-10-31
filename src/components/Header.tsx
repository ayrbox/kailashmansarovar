"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

type MenuItem = {
  text: string;
  url: string;
};

const menuItems: MenuItem[] = [
  { text: "Home", url: "/#home" },
  { text: "Packages", url: "/#packages" },
  { text: "About", url: "/#about" },
  { text: "Contact", url: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Image
              alt="Kailash Mansarovar Logo"
              src="/logo.svg"
              width={120}
              height={120}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((m) => (
              <Link
                href={m.url}
                className="text-gray-700 hover:text-orange-600 transition"
                key={m.url}
              >
                {m.text}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t">
            {menuItems.map((m) => (
              <Link
                key={m.url}
                href={m.url}
                className="block py-2 text-gray-700 hover:text-orange-600"
              >
                {m.text}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
