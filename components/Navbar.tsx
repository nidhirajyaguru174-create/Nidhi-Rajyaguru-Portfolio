"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-warm-border bg-ivory/95 shadow-sm backdrop-blur-sm"
          : "border-transparent bg-ivory"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <a href="#home" className="group flex min-w-0 items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-plum text-sm font-semibold text-ivory transition-colors group-hover:bg-terracotta">
            {personalInfo.name.charAt(0)}
          </span>
          <span className="truncate text-sm font-semibold tracking-tight text-plum sm:text-base">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-warm-gray transition-colors hover:bg-rose-light/40 hover:text-plum focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md p-2 text-plum transition-colors hover:bg-rose-light/40 focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden border-warm-border transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 bg-ivory px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-medium text-warm-gray transition-colors hover:bg-rose-light/40 hover:text-plum focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
