import React from "react";
import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";

export const TransactionTable = () => {
  const { transactions } = useUser();
  console.log(transactions);
  const balance = transactions.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Type</th>
          <th>Title</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 &&
          transactions.map((t, i) => (
            <tr key={t._id}>
              <td>{i + 1}</td>
              <td>{t.createdAt.slice(0, 10)}</td>
              <td>{t.type}</td>
              <td>{t.title}</td>
              {t.type === "expenses" && <td>-${t.amount}</td>}
              {t.type === "income" && <td>${t.amount}</td>}
            </tr>
          ))}
        {/* <tr>
          <td>1</td>
          <td>12-12-2024</td>
          <td>Income</td>
          <td>Salary</td>
          <td>$1000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>12-12-2024</td>
          <td>Expenses</td>
          <td>Shopping</td>
          <td>-$200</td>
        </tr> */}
        <tr className="fw-bold">
          <td>3</td>
          <td colSpan={2}>Total</td>

          <td colSpan={2}>${balance}</td>
        </tr>
      </tbody>
    </Table>
  );
};
