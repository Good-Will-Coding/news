import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer_section">
        <span className="footer_title">Daily Beagle </span>
            <ul>
                <li><Link to="/">Terms of Use</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Hire me</Link></li>
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
