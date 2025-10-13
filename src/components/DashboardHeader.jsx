import React from "react";
import { Navbar, Container } from "react-bootstrap";

const DashboardHeader = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
      <Container fluid>
        <Navbar.Brand className="fw-bold text-primary">HR Dashboard</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default DashboardHeader;
