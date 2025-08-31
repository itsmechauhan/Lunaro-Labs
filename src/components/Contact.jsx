import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [popup, setPopup] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   const serviceID = "service_b49pwh8";
  const templateID = "template_7bzcl3p";
  const publicKey = "R4uuTkt5yqdX8PChP";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )
      .then(
        () => {
          setFormData({ name: "", email: "", subject: "", message: "" });
          setPopup(true);
          setProgress(0);

          // Auto close after 4s
          setTimeout(() => setPopup(false), 4000);
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  // Progress bar animation
  useEffect(() => {
    if (popup) {
      let i = 0;
      const interval = setInterval(() => {
        i += 1;
        setProgress(i * (100 / 40)); // 40 steps over 4s
        if (i >= 40) clearInterval(interval);
      }, 100);
    }
  }, [popup]);

  return (
    <section className="contact-page" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">📩 Contact Us</h1>
        <p className="contact-subtitle">
          Have questions? We'd love to hear from you. Fill out the form below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Send Message 🚀
          </button>
        </form>
      </div>

      {/* Popup */}
      {popup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setPopup(false)}>
              ❌
            </button>
            <h3>✅ Message Sent!</h3>
            <p>
              The team will contact you soon. <br /> Please check your mail 📧
            </p>

            {/* Progress bar */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
