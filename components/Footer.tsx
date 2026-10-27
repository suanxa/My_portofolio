'use client'; // Menandai ini sebagai Client Component agar aman dari error prerender

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
      <p>© suryaandexa</p>
    </footer>
  );
}