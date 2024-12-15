import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { TransactionTable } from "../components/TransactionTable";
import { TransactionForm } from "../components/TransactionForm";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";

const Transaction = () => {
  const { getTransactions } = useUser();
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <Container className="p-5">
      <Row className="bg-dark rounded">
        <Col md={6}>
          <TransactionForm />
          <hr />
          <TransactionTable />
        </Col>
      </Row>
    </Container>
  );
};
export default Transaction;
