import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How does URL shortening work?',
      answer: 'Our URL shortening service takes your long URL and creates a shorter, more manageable version that redirects to your original link. The process is instant and the short links never expire unless you choose to delete them.'
    },
    {
      question: 'How long do shortened links last?',
      answer: 'Shortened links created with Shortify last forever by default. You have full control over your links and can delete them anytime from your dashboard. We also offer custom expiration dates for premium users.'
    },
    {
      question: 'Can I track my link\'s performance?',
      answer: 'Absolutely! Every shortened link comes with detailed analytics including total clicks, geographic data, referrer information, device types, and click timestamps. You can view all this data in real-time through our analytics dashboard.'
    },
    {
      question: 'Is there a free plan available?',
      answer: 'Yes! We offer a generous free plan that includes URL shortening, basic analytics, and up to 1,000 links per month. Premium plans offer additional features like custom domains, advanced analytics, and higher limits.'
    },
    {
      question: 'Can I use custom domains?',
      answer: 'Custom domains are available on our premium plans. This allows you to use your own branded domain for shortened links, enhancing your brand recognition and trust with your audience.'
    }
  ];

  return (
    <section id="faq" className="py-5" style={{ background: '#f8f9fa' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about Shortify
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion>
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index} key={index} className="faq-item mb-3">
                  <Accordion.Header className="fw-semibold">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="text-muted">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;
