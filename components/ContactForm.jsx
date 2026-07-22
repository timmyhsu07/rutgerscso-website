"use client";
import { useRef, useState } from "react";
import { org } from "@/lib/data";

const FIELDS = [
  {
    id: "name",
    label: "01 / Name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
    required: true,
  },
  {
    id: "email",
    label: "02 / Rutgers email",
    type: "email",
    placeholder: "you@rutgers.edu",
    autoComplete: "email",
    required: true,
  },
  {
    id: "subject",
    label: "03 / Subject",
    type: "text",
    placeholder: "What is this about?",
  },
];

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const form = formRef.current;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const read = (key) => String(data.get(key) || "").trim();
    const name = read("name");
    const subject =
      read("subject") || `Website inquiry from ${name || "a visitor"}`;
    const body = `Name: ${name}\nEmail: ${read("email")}\n\n${read("message")}\n`;

    setStatus(`Opening your email app for ${org.email}…`);
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={onSubmit} noValidate>
      {FIELDS.map((field) => (
        <div className="field" key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            required={field.required}
          />
        </div>
      ))}
      <div className="field">
        <label htmlFor="message">04 / Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what is on your mind"
          required
        />
      </div>
      <div className="submit-row">
        <button className="submit-button" type="submit">
          Send via email ↗
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
