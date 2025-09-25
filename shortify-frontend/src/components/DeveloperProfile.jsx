import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import myPhoto from '../assets/gaurav2.jpg'; 

const DeveloperProfile = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="developer-profile text-center">
              {/* Developer Avatar */}
              <div className="developer-avatar mb-3">
                <img
                  src={myPhoto}
                  alt="Developer Avatar"
                  className="rounded-circle shadow"
                  style={{ width: '160px', height: '160px', objectFit: 'cover' }}
                />
              </div>

              {/* Profile Info */}
              <h3 className="mb-3">Meet the Creator</h3>
              <h4 className="text-primary mb-3">Gaurav Diwan</h4>
              <p className="lead text-muted mb-4">
                Full-stack developer passionate about creating tools that simplify digital workflows. 
                As a tech enthusiast, I am always looking for opportunities to expand my horizons. 
                I am eager to explore different domains and connect with professionals.
              </p>

              {/* Social Links */}
              <div className="social-links mb-4">
                <a href="https://www.linkedin.com/in/gauravdiwan09/" className="me-3">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="https://github.com/gauravdiwan09" className="me-3">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fas fa-envelope fa-lg"></i>
                </a>
              </div>

              {/* Buy Coffee Button */}
              <Button variant="outline-primary">
                <i className="fas fa-coffee me-2"></i>
                Buy me a coffee
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DeveloperProfile;
