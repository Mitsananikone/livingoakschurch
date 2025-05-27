import React, { useState, useEffect } from "react";
import styles from "./contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className={styles.contactContainer}>
      {/* Social Media Box (commented out) */}
      {/* <div className={styles.socialMediaBox}>
        <h2 className={styles.socialMediaTitle}>Follow us on <br />social media!</h2>
        <div className={styles.socialMediaIcons}>
          {isClient && (
            <>
              <div
                className={styles.icon}
                onClick={() => window.open("https://www.facebook.com/profile.php?id=61565398850141", "_blank")}
              >
                <img
                  src="/images/facebook-icon.png"
                  alt="Facebook"
                  className={styles.logoImage}
                />
              </div>
              <div
                className={styles.icon}
                onClick={() => window.open("https://instagram.com", "_blank")}
              >
                <img
                  src="/images/instagram-icon.png"
                  alt="Instagram"
                  className={styles.logoImage}
                />
              </div>
              <div
                className={styles.icon}
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                <img
                  src="/images/x-icon.png"
                  alt="Twitter"
                  className={styles.logoImage}
                />
              </div>
              <div
                className={styles.icon}
                onClick={() => window.open("https://snapchat.com", "_blank")}
              >
                <img
                  src="/images/snapchat-icon.png"
                  alt="Snapchat"
                  className={styles.logoImage}
                />
              </div>
            </>
          )}
        </div>
      </div> */}

      {/* Form Wrapper */}
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Contact Us</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.inputLabel}>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.inputLabel}>Phone (Optional):</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.inputLabel}>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              />
            </div>
            {status && <p className={styles.statusMessage}>{status}</p>}
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;