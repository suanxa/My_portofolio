'use client'; // Wajib ada karena menggunakan fungsi klik interaktif

import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  // Fungsi aman untuk Email (mencegah bot email harvester)
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const user = "suryalanggaandexa";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  // Fungsi aman untuk WhatsApp
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const phone = "6288708240233"; // Format internasional tanpa tanda plus
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  // Fungsi aman untuk Instagram
  const handleInstagramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const username = "suryaandexa";
    window.open(`https://instagram.com/${username}`, '_blank');
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-900 text-center">
      <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Mari Berkolaborasi</h2>
      <p className="text-zinc-400 max-w-md mx-auto mb-8 text-sm sm:text-base">
        Punya proyek menarik atau ingin berdiskusi seputar pengembangan software? Pintu saya selalu terbuka.
      </p>

      {/* Tombol Aksi Cepat */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={handleEmailClick}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 cursor-pointer"
        >
          <Mail className="h-4 w-4" />
          Kirim Email
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-600/20 hover:scale-105 cursor-pointer"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </button>
      </div>

      {/* Kartu Detail Kontak & Media Sosial (Disamarkan untuk Keamanan Data) */}
      <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
        
        {/* Email Terproteksi */}
        <a 
          href="#email" 
          onClick={handleEmailClick}
          className="hover:text-cyan-400 transition-colors px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 flex items-center gap-2.5 text-sm group cursor-pointer"
        >
          <Mail className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>suryalanggaandexa[at]gmail.com</span>
        </a>

        {/* Instagram */}
        <a 
          href="#instagram" 
          onClick={handleInstagramClick}
          className="hover:text-pink-400 transition-colors px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-pink-500/50 flex items-center gap-2.5 text-sm group cursor-pointer"
        >
          <svg 
            className="h-4 w-4 text-pink-400 group-hover:scale-110 transition-transform" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          <span>@suryaandexa</span>
        </a>

        {/* WhatsApp Terproteksi */}
        <a 
          href="#whatsapp" 
          onClick={handleWhatsAppClick}
          className="hover:text-emerald-400 transition-colors px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/50 flex items-center gap-2.5 text-sm group cursor-pointer"
        >
          <MessageCircle className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span>+62 887-0824-xxxx (Klik untuk Chat)</span>
        </a>

      </div>
    </section>
  );
}