'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup menu saat item diklik (smooth scroll)
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <span className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Suanxa.Portfolio
        </span>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">Tentang</a>
          <a href="#experience" className="hover:text-white transition-colors">Pengalaman</a>
          <a href="#skills" className="hover:text-white transition-colors">Keahlian</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-600/20"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col px-6 py-6 space-y-4 text-zinc-300 font-medium">
            <a 
              href="#about" 
              onClick={handleNavClick}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Tentang
            </a>
            <a 
              href="#experience" 
              onClick={handleNavClick}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Pengalaman
            </a>
            <a 
              href="#skills" 
              onClick={handleNavClick}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Keahlian
            </a>
            <a 
              href="#projects" 
              onClick={handleNavClick}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Proyek
            </a>
            <a 
              href="#contact" 
              onClick={handleNavClick}
              className="px-4 py-2.5 rounded-xl hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Kontak
            </a>
            
            <div className="pt-2">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-full text-center block py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/20"
              >
                Hubungi Saya
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}