'use client'; // Wajib ada karena menggunakan state interaktif (useState)

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Layers } from 'lucide-react';

export default function Hero() {
  // State untuk menyimpan urutan 2 foto (efek tumpukan kartu)
  const [photos, setPhotos] = useState([
    '/Profile.png',   // Foto utama (depan)
    '/Profile-2.jpeg', // Foto cadangan (belakang)
  ]);

  // Fungsi untuk menukar posisi foto saat diklik
  const handlePhotoClick = () => {
    setPhotos((prev) => [prev[1], prev[0]]);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-10 md:pb-24">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        
        {/* KOLOM KIRI: Teks & Tombol */}
        <div className="md:col-span-7 flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6 shadow-inner">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Software Engineer & Full-Stack Developer
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Membangun Solusi Digital, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 animate-gradient">
              Web & Mobile Berkinerja Tinggi
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
            Freshgraduate dengan skill dan kompetensi pada bidang teknologi Informasi, berfokus pada pemrograman aplikasi dan website baik backend dan frontend, database serta design. Berpengalaman dalam mengerjakan berbagai proyek mulai dari sistem informasi kampus, e-commerce dan membership & partner sistem, serta memiliki kesenangan atau hobi pada hal-hal yang berkaitan dengan alam, seperti mengexplorasi tempat atau wisata dan mendokumentasikan hal-hal tersebut.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-white/10 hover:scale-105"
            >
              Lihat Proyek
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Diskusi Proyek
            </a>
          </div>
        </div>

        {/* KOLOM KANAN: Tumpukan Foto Interaktif (Card Stack) */}
        <div className="md:col-span-5 flex justify-center relative w-full mt-6 md:mt-0">
          {/* Efek Cahaya / Glow Beranimasi di Belakang Foto */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-3xl blur-xl opacity-40 animate-pulse"></div>

          {/* Wrapper Tumpukan Kartu */}
          <div 
            onClick={handlePhotoClick}
            className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] cursor-pointer group select-none"
            title="Klik untuk mengganti foto"
          >
            {/* Kartu Belakang (Background Stack) */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl translate-x-4 translate-y-4 rotate-3 scale-95 opacity-60 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500">
              <Image
                src={photos[1]}
                alt="Foto Profil Cadangan"
                fill
                className="object-cover object-center md:grayscale"
              />
            </div>

            {/* Kartu Depan (Main Card) */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl z-10 transition-all duration-500 group-hover:scale-[1.02]">
              <Image
                src={photos[0]}
                alt="Foto Profil Utama"
                fill
                priority
                className="object-cover object-center md:grayscale md:hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Badge Petunjuk Klik di Pojok */}
              <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-300 text-[11px] font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Layers className="h-3 w-3 text-cyan-400" />
                Ganti Foto
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}