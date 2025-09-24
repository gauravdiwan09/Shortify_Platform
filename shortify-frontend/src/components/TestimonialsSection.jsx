import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Digital Marketing Manager',
      company: 'TechCorp',
      testimonial: 'Shortify has made link tracking and shortening super easy! A must-have tool for marketers. The analytics are incredibly detailed.',
      initial: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'Content Creator',
      company: 'CreativeStudio',
      testimonial: 'I love the analytics dashboard. It helps me track and optimize my URLs effortlessly. The custom branding feature is fantastic!',
      initial: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Social Media Manager',
      company: 'BrandBoost',
      testimonial: 'The real-time tracking has revolutionized how we measure our social media campaigns. Shortify is simply the best URL shortener.',
      initial: 'ER'
    }
  ];

  return (
    <section id="testimonials" className="py-5" style={{ background: '#f8f9fa' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">What Our Users Say</h2>
            <p className="section-subtitle">
              Join thousands of satisfied users who trust Shortify for their link management needs
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Carousel interval={5000} className="testimonial-carousel">
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial-card">
                    <div className="testimonial-avatar">
                      {testimonial.initial}
                    </div>
                    <blockquote className="mb-4">
                      <p className="lead">"{testimonial.testimonial}"</p>
                    </blockquote>
                    <div>
                      <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                      <p className="text-muted mb-0">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
