import React from 'react';

export default function Skills() {
  const skillsList = [
    { name: 'Next.js / React', cat: 'Frontend Framework' },
    { name: 'Tailwind CSS', cat: 'Styling' },
    { name: 'TypeScript / JavaScript', cat: 'Language' },
    { name: 'Kotlin', cat: 'Mobile Development' },
    { name: 'Flutter', cat: 'Mobile Development' },
    { name: 'Laravel & TALL Stack', cat: 'Backend Web' },
    { name: 'Supabase / PostgreSQL', cat: 'Database & BaaS' },
    { name: 'Database (MySQL/SQLite)', cat: 'Storage' },
    { name: 'QGIS', cat: 'GIS / Mapping' },
    { name: 'Figma', cat: 'UI/UX Design' },
    { name: 'Git & GitHub', cat: 'Version Control' },
    { name: 'REST API', cat: 'Integration' },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
      <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Tech Stack & Keahlian</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skillsList.map((item, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:border-cyan-500/50 transition-all group">
            <p className="font-semibold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors">{item.name}</p>
            <p className="text-xs text-zinc-500">{item.cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}