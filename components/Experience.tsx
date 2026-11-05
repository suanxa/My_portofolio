import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Freelance IT Support (Customer Engineer)",
      company: "PT Intikom Berlian Mustika",
      period: "2026",
      aboutCompany: "PT Intikom Berlian Mustika (Intikom) adalah perusahaan penyedia jasa teknologi informasi (TI), konsultan TI, dan system integrator di Indonesia yang berdiri sejak tahun 1990.",
      tasks: [
        "Replace dan menginstalasi perangkat PC BANK BSI.",
        "Join Domain kantor cabang ke pusat.",
        "Memastikan internet perangkat terhubung dengan IP Address yang benar.",
        "Memastikan perangkat pendukung lainnya seperti Printer, Scanner, dan Passbook dapat berfungsi dan terhubung dengan PC."
      ],
      skills: ["IT Support", "Troubleshooting", "Network Configuration", "System Integration", "Hardware Maintenance"]
    },
  ];

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-900">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-3">Pengalaman Kerja</h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          Rekam jejak profesional dalam mengelola infrastruktur IT, implementasi sistem, dan dukungan teknis.
        </p>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            {/* Titik Indikator Timeline */}
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-zinc-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors"></div>

            {/* Kartu Pengalaman */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-cyan-400" />
                  {exp.role}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 font-medium">
                  <Calendar className="h-3 w-3 text-emerald-400" />
                  {exp.period}
                </span>
              </div>

              <h4 className="text-sm font-medium text-cyan-400 mb-3">{exp.company}</h4>

              {/* Deskripsi Singkat Perusahaan */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {exp.aboutCompany}
              </p>

              {/* Poin-Poin Tugas & Tanggung Jawab */}
              <ul className="space-y-2 mb-6">
                {exp.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="text-zinc-300 text-sm leading-relaxed flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              {/* Tag Skill */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}