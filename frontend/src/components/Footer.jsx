import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import '../../src/App.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <span onClick={() => handleLinkClick('/about')} >About Us</span>
        <span onClick={() => handleLinkClick('/b2b')} >B2B Marketplace</span>
        <span onClick={() => handleLinkClick('/newss')} >News</span>
        <span onClick={() => handleLinkClick('/classifiedss')} >Classifieds</span>
        <span onClick={() => handleLinkClick('/opportunities')} >Opportunities</span>
        <span onClick={() => handleLinkClick('/events')} >Events</span>
        <span onClick={() => handleLinkClick('/experts')} >Experts</span>
        <span onClick={() => handleLinkClick('/contact')} >Contact us</span>
      </div>
      <div className="footer-bottom">
        <span>Copyright @ 2024 The Aviationspace</span>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <span className="linkedin-icon">in</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
