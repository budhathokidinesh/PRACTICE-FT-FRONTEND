import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SignInForm } from "../components/SignInForm";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

export const Login = () => {
  return (
    <Container className="p-5">
      <Row className="login p-5 rounded">
        <Col md={6}>
          <SignInForm />
        </Col>
        <Col md={6}>
          <div
            className="d-flex flex-column justify-content-center fs-1"
            style={{
              height: "100%",
            }}
          >
            <div className="text-danger text-decoration-line-through">
              <BsGraphDownArrow /> &nbsp; Reduce your expenses.
            </div>
            <div className="text-success">
              <BsGraphUpArrow />
              &nbsp; Increase your saving
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
