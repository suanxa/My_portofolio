'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Database, Smartphone, ExternalLink, X, ZoomIn } from 'lucide-react';

export default function Projects() {
  // State untuk mengontrol Modal Gambar yang diperbesar
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  // State untuk mengontrol Modal Detail Proyek
  const [activeProjectModal, setActiveProjectModal] = useState<any | null>(null);

  // Data detail proyek untuk popup
  const projectsData = [
    {
      id: 'stockify',
      title: 'Sistem Manajemen Inventaris (Stockify)',
      type: 'Web App',
      description: 'Platform manajemen stok barang terintegrasi dengan pemantauan data real-time, manajemen pengguna, serta fitur ekspor laporan ke format Excel.',
      fullDescription: 'Stockify dikembangkan untuk membantu bisnis mengelola inventaris gudang secara digital. Dilengkapi dengan kontrol hak akses pengguna, pemantauan barang masuk dan keluar secara real-time, notifikasi stok menipis, serta kemampuan mengekspor rekapitulasi data laporan bulanan langsung ke format spreadsheet Excel dengan akurat.',
      tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'Flowbite'],
      images: ['/stockify-1.png', '/stockify-2.png', '/stockify-3.png'],
      accentColor: 'cyan',
    },
    {
      id: 'wellness',
      title: 'Platform Wellness & GYM Management',
      type: 'Mobile & Web',
      description: 'Sistem manajemen keanggotaan berbasis web terpadu dengan aplikasi mobile fitness tracker berfitur offline-first serta pelacakan rute aktivitas.',
      fullDescription: 'Platform terpadu yang dirancang untuk mengelola member gym secara web, dikombinasikan dengan aplikasi mobile fitness tracker berbasis Android. Mengusung arsitektur local-first menggunakan SQLite agar aplikasi tetap dapat merekam aktivitas fisik, catatan kesehatan, dan pelacakan rute rute latihan secara offline.',
      tech: ['Flutter', 'Laravel', 'SQLite', 'MySQL', 'Flowbite', 'Maps',],
      images: ['/piai-1.png', '/piai-2.png', '/piai-3.png'],
      accentColor: 'emerald',
    }
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight mb-1">Proyek Pilihan</h2>
          <p className="text-sm text-zinc-400">Beberapa karya aplikasi web dan mobile yang pernah saya develop.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="group rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {project.id === 'stockify' ? <Database className="h-6 w-6" /> : <Smartphone className="h-6 w-6" />}
                </div>
                <span className="text-xs font-mono text-zinc-500">{project.type}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* DOKUMENTASI FOTO (3 FOTO KECIL DENGAN EFEK ZOOM) */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-zinc-300 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                  Dokumentasi Sistem <span className="text-[10px] font-normal text-zinc-500">(Klik foto untuk memperbesar)</span>:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {project.images.map((imgSrc, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveImage(imgSrc)}
                      className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 cursor-pointer group/img shadow-md hover:border-cyan-500/50 transition-all"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        fill
                        className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => setActiveProjectModal(project)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 cursor-pointer"
              >
                Lihat Detail Proyek <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL LIGHTBOX UNTUK MEMPERBESAR FOTO ================= */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 shadow-2xl">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors border border-zinc-700"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={activeImage}
              alt="Dokumentasi Diperbesar"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= MODAL DETAIL LENGKAP PROYEK ================= */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveProjectModal(null)}
        >
          <div 
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              {activeProjectModal.type} Detail
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-4">
              {activeProjectModal.title}
            </h3>

            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
              <p>{activeProjectModal.fullDescription}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Teknologi yang Digunakan:</h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.tech.map((t: string, i: number) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-zinc-800 text-cyan-300 text-xs font-mono border border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}