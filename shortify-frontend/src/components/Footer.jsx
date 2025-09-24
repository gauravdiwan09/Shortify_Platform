import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer py-5" style={{ background: "#222", color: "#fff" }}>
      <Container>
        <Row className="justify-content-center">
          {/* Footer Brand */}
          <Col lg={4} md={6} className="text-center mb-4">
            <h3 className="text-primary mb-3">Shortify</h3>
            <p className="lead">
              The most powerful URL shortening and analytics platform. Create, track, and optimize your links effortlessly.
            </p>
            <div className="social-links">
              <a href="#" className="me-3 text-light"><i className="fab fa-facebook"></i></a>
              <a href="#" className="me-3 text-light"><i className="fab fa-twitter"></i></a>
              <a href="#" className="me-3 text-light"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>

          {/* Footer Links */}
          <Col lg={2} md={6} className="mb-4">
            <h5>Product</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Features</a></li>
              <li><a href="#" className="text-light">Pricing</a></li>
              <li><a href="#" className="text-light">API Docs</a></li>
              <li><a href="#" className="text-light">Integrations</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
              <li><a href="#" className="text-light">Blog</a></li>
              <li><a href="#" className="text-light">Careers</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Privacy Policy</a></li>
              <li><a href="#" className="text-light">Terms of Service</a></li>
              <li><a href="#" className="text-light">Cookie Policy</a></li>
              <li><a href="#" className="text-light">GDPR</a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright & Contact */}
        <hr className="my-4" style={{ borderColor: '#495057' }} />
        <Row className="text-center">
          <Col md={6}>
            <p className="text-light small">© 2025 Shortify. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <p className="text-light small"><i className="fas fa-envelope me-2"></i> support@shortify.app</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
