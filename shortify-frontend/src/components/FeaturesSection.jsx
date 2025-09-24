import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'fas fa-bolt',
      title: 'Instant URL Shortening',
      description: 'Convert long URLs into short, shareable links in seconds with our lightning-fast service.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Real-time Analytics',
      description: 'Track link performance with detailed analytics including clicks, locations, and referrers.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Custom Short URLs',
      description: 'Create branded, memorable short URLs that reflect your brand and boost recognition.'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Analytics Dashboard',
      description: 'Access comprehensive insights through our intuitive dashboard to optimize your links.'
    }
  ];

  return (
    <section id="features" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">
              Everything you need to manage, track, and optimize your links effectively
            </p>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className="feature-card text-center h-100">
                <Card.Body>
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <Card.Title className="h5 mb-3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
