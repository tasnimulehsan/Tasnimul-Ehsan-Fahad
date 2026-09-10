"use client";

import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full px-5 py-5" aria-label="Primary navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass px-5 py-3">
        <a href="#" className="font-black tracking-tight" aria-label="Tasnimul Ehsan Fahad home">
          TE<span className="text-gradient" aria-hidden="true">.</span>
        </a>

        <div className="hidden gap-7 text-sm text-zinc-400 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-white focus-visible:text-white">
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-full px-2 py-1 text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <a href="#contact" className="hidden rounded-full bg-white px-4 py-2 text-xs font-bold text-black md:block">
          LET&apos;S TALK ↗
        </a>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-6xl rounded-3xl glass p-5 md:hidden">
          <div className="grid gap-4">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
