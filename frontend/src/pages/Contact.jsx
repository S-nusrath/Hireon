import React from "react";
import "./Contact.css"; // We'll create this CSS for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Have questions or feedback? Reach out to us!
        </p>

        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: shaikmahammadrehan99@gmail.com</p>
            <p>Phone: +91 9032488339</p>
            <p>Address: Australia,Singapore,USA,India</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
