import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // 👈 smooth scroll
import "./css/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  // 👇 for Home/Logo click
  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/"); // redirect to home
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + About */}
        <div className="footer-about">
          <h2 className="logo" onClick={handleHomeClick} style={{cursor: "pointer"}}>
            Lunaro Labs
          </h2>
          <p>
            Shaping the future of technology through innovative internship
            programs
          </p>
          <h3 className="social-title">Follow Us On Social Media</h3>
          
          <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <span className="icon"><FaLinkedin /></span>
                </a>
              <a href="https://t.me" target="_blank" rel="noreferrer">
                <span className="icon"><FaTelegramPlane /></span>
                </a>
       {/*       <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <span className="icon"><FaInstagram /></span>
                </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <span className="icon"><FaTwitter /></span>
                </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <span className="icon"><FaFacebook /></span>
                </a>  
                */}
</div>
</div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            {/* Scroll inside same page */}
            <li>
              <span onClick={handleHomeClick} style={{cursor: "pointer"}}>Home</span>
            </li>
            <li>
              <ScrollLink to="about" smooth duration={600} offset={-70}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="internships" smooth duration={600} offset={-70}>
                Internships
              </ScrollLink>
            </li>
       
            <li>
              <ScrollLink to="internships" smooth duration={600} offset={-70}>
                Apply Now
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth duration={600} offset={-70}>
                Contact Us
              </ScrollLink>
            </li>
            

            {/* React Router Pages */}
            <li><Link to="/verification">Verification</Link></li>
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/refund">Cancellation & Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-heading">Contact</h3>
          <p><MdLocationOn /> Bangalore, Karnataka</p>
          <p><MdEmail /> contact@futureinterns.com</p>
          </div>
      </div>

    <div className="footer-bottom">
  <p>
    {new Date().getFullYear()} © All rights reserved by{" "}
    <span className="highlight">Lunaro-Labs</span>
  </p>
</div>
    </footer>
  );
};

export default Footer;
