import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { TransactionTable } from "../components/TransactionTable";
import { TransactionForm } from "../components/TransactionForm";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { CustomModel } from "../components/CustomModel";

const Transaction = () => {
  const { getTransactions } = useUser();
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <Container className="p-5">
      <Row className="bg-dark rounded">
        <div>
          <CustomModel>
            <TransactionForm />
          </CustomModel>
          <hr />
          <TransactionTable />
        </div>
      </Row>
    </Container>
  );
};
export default Transaction;
