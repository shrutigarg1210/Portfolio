import React from "react";
import "./Contact.css";
import { IoIosSchool } from "react-icons/io";
import { FaGit, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="section" id="contact">
      <h1 className="contact-heading">Contact</h1>
      <div className="contact-container">
        <div className="contact-left">
          <div>
            Interested in working together? Fill out the form below with some
            info about your project and I will get back to you as soon as I can.
            Please allow a couple days for me to respond.
          </div>
          <div>
            <IoIosSchool
              size={20}
              style={{ color: "Black", marginRight: "2rem" }}
            />{" "}
            Chitkara University, Chandigarh NH 7, 64, Tehsil, Rajpura, Punjab
            140401
          </div>
          <div className="email">
            <h4 style={{ color: "Black" }}>
              <FaMailBulk
                size={20}
                style={{ color: "Black", marginRight: "2rem" }}
              />
              shrutigarg749@gmail.com
            </h4>
          </div>
          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "Black", marginRight: "2rem" }}
            />
            +91 9466535669
          </div>
          <div>
            <div>Connect with me:</div>
            <div className="social">
            <a href="https://www.linkedin.com/in/shrutigarg21/">
              <span className="linkedin">
                <FaLinkedin size={20} style={{ color: "Black"}} />
              </span>
            </a>
            <a href="https://github.com/shrutigarg1210">
              <span className="git">
                <FaGit size={20} style={{ color: "Black" }} />
              </span>
            </a>
            </div>
           
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <input
              type="text"
              className="contact-name"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="contact-email"
              placeholder="Your Email"
            />
            <textarea
              type="text"
              className="contact-message"
              placeholder="Message..."
            />
            <input type="submit" className="contact-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
