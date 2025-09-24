import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center text-center hero-content">
          <Col lg={8}>
            <h1 className="display-4 fw-bold mb-4">
              Shorten, Track, and Share URLs with Ease!
            </h1>
            <p className="lead mb-5">
              Create short, branded links and monitor their performance with real-time analytics. 
              Perfect for marketers, businesses, and content creators.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button size="lg" className="cta-button">
                <i className="fas fa-rocket me-2"></i>
                Get Started Free
              </Button>
              <Button variant="outline-light" size="lg">
                <i className="fas fa-play me-2"></i>
                Watch Demo
              </Button>
            </div>
            <div className="mt-4">
              <small className="opacity-75">
                <i className="fas fa-check me-2"></i>
                No credit card required • Free forever plan available
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
