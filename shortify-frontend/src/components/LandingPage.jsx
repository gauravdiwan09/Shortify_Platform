import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import DeveloperProfile from "./DeveloperProfile";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <Container className="text-center mt-5">
      <HeroSection /> {/* Your Hero Section */}
      <FeaturesSection /> {/* Your Features Section */}
      <TestimonialsSection /> {/* Your Testimonials Section */}
      <DeveloperProfile /> {/* Your Developer Profile */}
      <FAQSection /> {/* Optional FAQ Section */}
      <Footer /> {/* Your Footer */}
    </Container>
  );
};

export default LandingPage;
