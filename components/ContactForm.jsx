"use client";
import { useState } from "react";
import { org } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = (f.elements.name?.value || "").trim();
    const email = (f.elements.email?.value || "").trim();
    const subject = (f.elements.subject?.value || "").trim();
    const message = (f.elements.message?.value || "").trim();
    const subj = subject || `Website inquiry from ${name || "a visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}\n`;
    window.location.href =
      `mailto:${org.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    setStatus(`Opening your email app to send to ${org.email}…`);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div>
        <label htmlFor="cf-email">Your Email</label>
        <input id="cf-email" name="email" type="email" placeholder="you@rutgers.edu" required />
      </div>
      <div>
        <label htmlFor="cf-subject">Subject</label>
        <input id="cf-subject" name="subject" type="text" placeholder="What's this about?" />
      </div>
      <div>
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" placeholder="Write your message here…" required />
      </div>
      <button type="submit" className="btn btn--primary">Send via Email</button>
      <p className="form__note">
        This opens your email app with a message to <strong>{org.email}</strong>.
      </p>
      <p className="form__status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
