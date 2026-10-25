"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import Section from "./Section";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [notice, setNotice] = useState(false);
  return <Section id="contact" title="Let’s Connect" subtitle="Feel free to reach out — I'm always open to new opportunities and conversations.">
    <div className="contact-layout">
      <div className="contact-copy">
        <p className="contact-intro">Whether you have a question, an opportunity, or just want to say hello — my inbox is always open. I&apos;ll do my best to get back to you soon.</p>
        <a className="email-link" href={`mailto:${personalInfo.email}`}>{personalInfo.email}<ArrowUpRight size={24} /></a>
        <p className="contact-location"><MapPin size={17} />{personalInfo.location}</p>
        <div className="contact-socials">
          <a href={`mailto:${personalInfo.email}`}><Mail size={18} />Email</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={18} />LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={18} />GitHub</a>
        </div>
      </div>
      <form className="contact-form glass-panel" onSubmit={event => { event.preventDefault(); setNotice(true); }} aria-describedby="contact-form-info">
        <div className="form-heading"><span className="eyebrow">Say hello</span><Send size={20} aria-hidden="true" /></div>
        <label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" type="text" placeholder="Your name" required />
        <label htmlFor="contact-email">Email</label><input id="contact-email" name="email" autoComplete="email" type="email" placeholder="your@email.com" required />
        <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={4} placeholder="Your message..." required />
        <button className="metal-button" type="submit">Send Message <ArrowUpRight size={18} /></button>
        <p id="contact-form-info" className="form-note">Preview form only. Message sending is not connected. Please use the email link to get in touch.</p>
        {notice && <p className="form-status" role="status">Your message has not been sent. This form is a preview. <a href={`mailto:${personalInfo.email}`}>Email Nidhi directly <ArrowUpRight size={14} /></a></p>}
      </form>
    </div>
  </Section>;
}
