import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer className="bg-gray-700">
      <div className="footer-upper p-8 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 sm:justify-between flex-wrap ">
            <h1 className="text-2xl">Get ready our support team 24/7.</h1>
            <button className="transition-all px-6 py-4 bg-green-400 text-white rounded-md flex items-center gap-2 active:translate-y-1">
              {" "}
              <BiSupport /> Get Support
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-16">
        <div className="footer-container flex justify-center text-center sm:text-left sm:justify-between flex-wrap gap-5">
          <div className="footer-content">
            <Link
              to="/"
              className="text-lg uppercase text-white mb-5 block font-poppins"
            >
              Akanda
            </Link>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <Link
              to="/"
              className="text-lg uppercase text-white mb-5 block font-poppins"
            >
              About
            </Link>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/blogs">Terms & Services</Link>
              </li>
              <li>
                <Link to="/">Latest News</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <Link
              to="/"
              className="text-lg uppercase text-white mb-5 block font-poppins"
            >
              Contact
            </Link>
            <ul>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Get Started</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <Link
              to="/"
              className="text-lg uppercase text-white mb-5 block font-poppins"
            >
              Help
            </Link>
            <ul>
              <li>
                <Link to="/">
                  <FaFacebook />
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaTwitter />
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaEnvelope />
                  Email: ashikmahmud@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-text py-20 text-center text-gray-300">
          <p>
            &copy; Copyright by {new Date().getFullYear()} by{" "}
            <span className="text-green-400">warehouse</span>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  .footer-container {
    position: relative;
    ul {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      @media (max-width: 500px) {
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }
      li {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        &::before {
          content: "";
          width: 10px;
          height: 1px;
          background: var(--accent-color);
          display: block;
        }
      }
      a {
        color: #ddd;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.5s ease;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;
export default Footer;
