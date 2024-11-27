'use client';  // Ensure to use client-side rendering

import { useState } from "react";
import './contact.css';  // Ensure path is correct

// Define a type for the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("Please enter a valid email address.");
      return;
    }

    if (formData.name && formData.email && formData.message) {
      setFormStatus("Thank you for reaching out! I will get back to you soon.");
    } else {
      setFormStatus("Please fill out all fields.");
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">Contact Me</h1>
              <p className="main-para">
                Feel free to reach out to me for any queries or project collaborations. I&apos;d love to hear from you!
              </p>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="social-links">
        <div className="container">
          <div className="main">
            <h3>Connect with Me</h3>
            <div className="iconsDiv">
              <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/sheikh-atiqa-48682a2b6/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/Sheikhatiqaofficial" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
