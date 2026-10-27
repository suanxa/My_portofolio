import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Suanxa.Portfolio
        </span>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">Tentang</a>
          <a href="#skills" className="hover:text-white transition-colors">Keahlian</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
        </nav>
        <a
          href="#contact"
          className="text-xs font-semibold px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-600/20"
        >
          Hubungi Saya
        </a>
      </div>
    </header>
  );
}