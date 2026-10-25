"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => { if (window.innerWidth >= 1100) setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [isOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label={`${personalInfo.name} home`}>n<span className="brand-star">✳</span>r<span className="brand-dot">.</span></a>
        <ul className="desktop-nav">{navLinks.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
        {personalInfo.resume ? <a className="nav-cta" href={personalInfo.resume} target="_blank" rel="noopener noreferrer">Resume <Download size={16} /></a> : <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>}
        <button ref={menuButton} className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>
          {isOpen ? "Close" : "Menu"}{isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!isOpen}>
        {navLinks.map((link, i) => <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}><span>0{i + 1}</span>{link.label}<ArrowUpRight size={18} /></a>)}
        <a href="#achievements" onClick={() => setIsOpen(false)}><span>07</span>Achievements<ArrowUpRight size={18} /></a>
      </nav>
    </header>
  );
}
