import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FinancialTips } from "../components/FinancialTips";
import { SignUpForm } from "../components/SignUpForm";
export const SignUp = () => {
  return (
    <Container className="p-3">
      <Row className="signUp rounded">
        <Col>
          <FinancialTips />
        </Col>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
};
