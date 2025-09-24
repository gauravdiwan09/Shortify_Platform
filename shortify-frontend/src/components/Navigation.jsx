import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <i className="fas fa-link me-2"></i>
          Shortify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/#features">Features</Nav.Link>
            <Nav.Link as={Link} to="/#testimonials">Testimonials</Nav.Link>
            <Nav.Link as={Link} to="/#about">About</Nav.Link>
            <Nav.Link as={Link} to="/#faq">FAQ</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button as={Link} to="/login" variant="outline-primary" className="me-2">
              Login
            </Button>
            <Button as={Link} to="/register" variant="primary">
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
