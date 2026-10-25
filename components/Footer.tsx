import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { navLinks, personalInfo } from "@/lib/data";

export default function Footer() {
  return <footer className="footer site-container">
    <div className="footer-top-art" aria-hidden="true">
      <span>Follow me ·</span><Image src="/figma/footer-avatar.png" width={589} height={589} alt="" sizes="(max-width: 700px) 165px, 420px" />
    </div>
    <div className="footer-panel">
      <div className="footer-main">
        <div className="footer-brand"><a href="#home" className="brand" aria-label="Back to home">n<span className="brand-star">✳</span>r<span className="brand-dot">.</span></a><p className="footer-name">{personalInfo.name}</p><p>{personalInfo.tagline}</p></div>
        <div className="footer-links"><h2>Professional Links</h2><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={`mailto:${personalInfo.email}`}>Email</a></div>
        <div className="footer-links"><h2>Quick Menu</h2>{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}<a href="#achievements">Achievements</a></div>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p><div className="footer-socials">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={16} /></a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={16} /></a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail size={16} /></a>
        <a href="#home" aria-label="Back to top"><ArrowUp size={16} /></a>
      </div></div>
    </div>
  </footer>;
}
