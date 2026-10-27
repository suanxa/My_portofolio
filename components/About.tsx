'use client'; // Wajib ada karena menggunakan state interaktif (useState)

import React, { useState } from 'react';
import Image from 'next/image';
import { Code2, Cpu, Compass, Award, ZoomIn, X } from 'lucide-react';

export default function About() {
  // State untuk mengontrol Modal Gambar Sertifikat yang diperbesar
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Daftar 7 sertifikat dengan nama file /sertif-X.png
  const certificatesList = [
    {
      title: 'Database Foundation Certificate',
      issuer: 'Lembaga / Oracle',
      year: '2024',
      image: '/sertif-1.png',
    },
    {
      title: 'Java Fundamentals Certificate',
      issuer: 'Lembaga / Oracle',
      year: '2024',
      image: '/sertif-2.png',
    },
    {
      title: 'Java Programming Certificate',
      issuer: 'Lembaga / Oracle',
      year: '2024',
      image: '/sertif-3.png',
    },
    {
      title: 'Database Programming with SQL Certificate',
      issuer: 'Lembaga / Platform D',
      year: '2024',
      image: '/sertif-4.png',
    },
    {
      title: 'Red Hat Certified System Administrator',
      issuer: 'Lembaga / Red Hat',
      year: '2024',
      image: '/sertif-5.png',
    },
    {
      title: 'Magang Jogja Certificate',
      issuer: 'Lembaga / Seven Inc',
      year: '2022',
      image: '/sertif-6.png',
    },
    {
      title: 'Dasar Kepemimpinan Certificate',
      issuer: 'Lembaga / Future Leader Group',
      year: '2022',
      image: '/sertif-7.jpeg',
    },
  ];

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
      {/* Bagian Atas: Narasi & 3 Kartu Keahlian Utama */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Tentang Saya</h2>
          <p className="text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
            Saya merupakan lulusan D3 Manajemen Informatika dengan latar belakang pendidikan SMK jurusan Audio Video/Elektronika. Saya memiliki ketertarikan pada bidang teknologi informasi, khususnya pengembangan aplikasi dan sistem informasi.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
            Dengan latar belakang pendidikan yang menggabungkan bidang elektronika dan informatika, saya terbiasa mempelajari hal-hal teknis, berpikir analitis, serta mencari solusi terhadap berbagai permasalahan.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
            Di luar bidang teknologi, saya memiliki minat pada traveling dan kegiatan outdoor yang berkaitan dengan alam, seperti mendaki gunung dan menjelajahi tempat-tempat baru.
          </p>
          <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
            Saya senantiasa terbuka terhadap pengalaman dan peluang baru untuk mengembangkan keterampilan, memperluas wawasan, serta meningkatkan kemampuan diri secara profesional.
          </p>
        </div>

        {/* Grid 3 Kartu Karakteristik */}
        <div className="grid gap-4">
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/50 transition-all">
            <Code2 className="h-6 w-6 text-cyan-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">Software Development</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Fokus pada pengembangan aplikasi web dan sistem informasi menggunakan teknologi modern (Next.js, Laravel, Flutter).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-teal-500/50 transition-all">
            <Cpu className="h-6 w-6 text-teal-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">Technical & Analytical</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Berbekal dasar elektronika dan informatika, terbiasa memecahkan masalah teknis secara logis, teliti, dan analitis.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/50 transition-all">
            <Compass className="h-6 w-6 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">Nature & Traveling</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Menyukai aktivitas luar ruangan, mendaki gunung, menjelajah alam, serta mendokumentasikan setiap perjalanan.
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Sertifikasi & Lisensi */}
      <div className="border-t border-zinc-900/80 pt-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Sertifikasi & Lisensi</h3>
            <p className="text-xs text-zinc-400">Bukti keahlian dan pelatihan profesional yang pernah ditempuh (Klik gambar untuk memperbesar).</p>
          </div>
        </div>

        {/* Grid 4 Kolom (Sangat pas untuk 7 item: Baris 1 isi 4, Baris 2 isi 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificatesList.map((cert, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-cyan-500/50 transition-all group"
            >
              <div>
                {/* Thumbnail Gambar Sertifikat */}
                <div 
                  onClick={() => setActiveImage(cert.image)}
                  className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 cursor-pointer group/img mb-3 shadow-md"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="flex justify-between items-start mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-cyan-400 text-[10px] font-mono">
                    {cert.year}
                  </span>
                </div>
                
                <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {cert.title}
                </h4>
                
                <p className="text-xs text-zinc-400 line-clamp-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL LIGHTBOX AMAN TANPA ERROR ================= */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center p-2 rounded-xl border border-zinc-700 bg-zinc-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors border border-zinc-700 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
            
            <img
              src={activeImage}
              alt="Sertifikat Diperbesar"
              className="max-h-[80vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}