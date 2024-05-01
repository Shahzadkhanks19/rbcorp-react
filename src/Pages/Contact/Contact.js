import React, { useState, useEffect } from "react";
import "../Contact/contact.css";
import videoSrc from "../Contact/Images/contact-hero.mp4";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleFocus = (e) => {
    e.target.parentNode.classList.add("focus");
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove("focus");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", {
        name,
        email,
        phone,
        message,
      });
      alert("Message sent successfully");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      alert("Failed to send message");
    }
  };
  useEffect(() => {
    document.title = "RB Corp | Contact Us";
  }, []);

  return (
    <>
      <div className="container-fluid gx-0">
        <div className="contact-hero">
          <video preload="auto" autoPlay muted loop id="video-bg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="contact-hero-content">
            <h1>
              Get in <span>Touch</span>
            </h1>
            <p>RB CORP</p>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Reach out to us for personalized support, expert guidance, and
              collaborative solutions tailored to your needs.
            </p>

            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt"></i> &nbsp; &nbsp;
                <a
                  href="https://maps.app.goo.gl/3wh4FmcKh3NHpmbo9"
                  className="mt-1 text-decoration-none text-dark"
                >
                  3rd Floor, Landmark Tower, South City, Sector 41, Gurugram,
                  Haryana, 122001
                </a>
              </div>
              <div className="information">
                <i className="fas fa-envelope"></i> &nbsp; &nbsp;
                <a
                  href="mailto:royaltiesbcosmetics@gmail.com"
                  className="mt-1 text-decoration-none text-dark"
                >
                  contact@rbcorp.com
                </a>
              </div>
              <div className="information">
                <i className="fas fa-phone"></i>&nbsp;&nbsp;
                <a
                  href="tel:+918527999563"
                  className="mt-1 text-decoration-none text-dark"
                >
                  +91 8527999563
                </a>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="!#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="!#">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="!#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="!#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="!#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form onSubmit={handleSubmit}>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  value={name}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label className={name ? "active" : ""}>Full Name</label>
                <span>Full Name</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={email}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label className={email ? "active" : ""}>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  pattern="[6-9]{1}[0-9]{9}"
                  value={phone}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <label className={phone ? "active" : ""}>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  value={message}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                ></textarea>
                <label className={message ? "active" : ""}>Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="form-btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
