import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
export const Footer = () => {
  return (
    <Container fluid className="p-5  footer">
      <Row className="text-center">
        <Col>
          &copy; Copy right all reaserved. || Made by &nbsp;
          <a href="http://www.dineshbudhathoki.com" target="_blank">
            Dinesh Budhathoki
          </a>
        </Col>
      </Row>
    </Container>
  );
};
