"use client";

import { useState } from "react";
import styles from "./page.module.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: false, error: false, loading: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: false, error: false, loading: true });

    // Invalid data
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, error: true, loading: false });
      return;
    }

    try {
      const result = await emailjs.send(
        "service_mgmdgvh", // EmailJS Service ID
        "template_kq0oisn", // EmailJS Template ID
        {
          from_name: formData.name, // Matches the template {{from_name}}
          to_name: "Sue Sue",       // Matches the template {{to_name}}
          message: formData.message, // Matches the template {{message}}
          reply_to: formData.email,  // Matches the template {{reply_to}}
        },
        "ylu8vyrNKWL6vA0pY" // EmailJS Public Key
      );

      if (result.status === 200) {
        setStatus({ success: true, error: false, loading: false });
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({ success: false, error: true, loading: false });
    }
  };

  return (
    <div>
      <h1 className={styles.pageTitle}>Contact</h1>
      <form className={styles.contactForm} id="contact-form" autoComplete="off" onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">Name:</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <label className={styles.label} htmlFor="email">Email:</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <label className={styles.label} htmlFor="message">Message:</label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
        ></textarea>
        {status.error && <p style={{ color: "red" }}>Failed to send the message. Please try again.</p>}
        {status.success && <p style={{ color: "green" }}>Message sent successfully!</p>}
        <input
          className={styles.submit}
          type="submit"
          value={status.loading ? "Sending..." : "Submit"}
          disabled={status.loading}
        />
      </form>
      <br />
    </div>
  );
}
