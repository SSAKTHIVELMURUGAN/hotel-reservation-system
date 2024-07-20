// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css'; // Ensure you create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="download-section">
          <Col md={6}>
            <h5>Download Fasgo App for Exciting Offers</h5>
            <div className="app-download">
              <Button href="https://apps.apple.com/" target="_blank" className="app-store-btn">
                <img src="/path/to/app-store-logo.png" alt="App Store" />
                Download on the App Store
              </Button>
              <Button href="https://play.google.com/" target="_blank" className="google-play-btn">
                <img src="/path/to/google-play-logo.png" alt="Google Play" />
                Get it on Google Play
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="info-links">
          <Col md={3} className="footer-section">
            <h5>About Us</h5>
            <ul>
              <li><a href="/about">About Fasgo</a></li>
              <li><a href="/careers">Teams / Careers</a></li>
              <li><a href="/blogs">Blogs</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Support</h5>
            <ul>
              <li><a href="/official-blog">Official Fasgo Blog</a></li>
              <li><a href="/investor-relations">Investor Relations</a></li>
              <li><a href="/oyo-circle">Fasgo Circle</a></li>
              <li><a href="/oyo-frames">Fasgo Frames</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Policies</h5>
            <ul>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/guest-policies">Guest Policies</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/trust-safety">Trust And Safety</a></li>
              <li><a href="/cyber-security">Cyber Security</a></li>
              <li><a href="/cyber-awareness">Cyber Security Awareness</a></li>
              <li><a href="/responsible-disclosure">Responsible Disclosure</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Hotels in Popular Locations</h5>
            <ul>
              <li><a href="/hotels/goa">Hotels in Goa</a></li>
              <li><a href="/hotels/delhi">Hotels in Delhi</a></li>
              <li><a href="/hotels/mumbai">Hotels in Mumbai</a></li>
              <li><a href="/hotels/bangalore">Hotels in Bangalore</a></li>
              <li><a href="/hotels/chennai">Hotels in Chennai</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Fasgo. All Rights Reserved.</p>
            <p className="tagline">Discover, Book, and Enjoy with Fasgo – Your Travel Companion.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
