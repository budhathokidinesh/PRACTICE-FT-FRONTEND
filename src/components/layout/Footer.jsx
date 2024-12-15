import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
export const Footer = () => {
  return (
    <Container fluid className="bg-dark p-5">
      <Row className="text-center">
        <Col>
          &copy; Copy right all reaserved. || Made by &nbsp;
          <a href="dineshbudhathoki.com">Dinesh Budhathoki</a>
        </Col>
      </Row>
    </Container>
  );
};
