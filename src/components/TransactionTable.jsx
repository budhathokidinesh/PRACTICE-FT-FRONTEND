import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";
import Button from "react-bootstrap/Button";
import { IoAddCircle } from "react-icons/io5";
import { Form } from "react-bootstrap";

export const TransactionTable = () => {
  const [displayTrans, setDisplayTrans] = useState([]);
  const { transactions } = useUser();
  useEffect(() => {
    setDisplayTrans(transactions);
  }, [transactions]);

  const balance = displayTrans.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredArg = transactions.filter(({ title }) => {
      return title.toLowerCase().includes(value.toLowerCase());
    });
    setDisplayTrans(filteredArg);
  };

  // const actBalance = Math.sign(balance);
  return (
    <>
      <div className="d-flex justify-content-between pt-3 mb-4">
        <div>{displayTrans.length} transaction(s) found!</div>
        <div>
          <Form.Control input type="text" onChange={handleOnSearch} />
        </div>
        <div>
          <Button variant="primary">
            <IoAddCircle /> Add new transactions.
          </Button>
        </div>
      </div>
      <Table striped hover size="sm">
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
          {displayTrans.length > 0 &&
            displayTrans.map((t, i) => (
              <tr key={t._id}>
                <td>{i + 1}</td>
                <td>{t.createdAt.slice(0, 10)}</td>
                <td>{t.type}</td>
                <td>{t.title}</td>
                {t.type === "expenses" && <td className="out">-${t.amount}</td>}
                {t.type === "income" && <td className="in">${t.amount}</td>}
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
            <td colSpan={2}>Total</td>
            {balance < 0 && (
              <td colSpan={2} className="out">
                {balance}
              </td>
            )}
            {balance >= 0 && (
              <td colSpan={2} className="in">
                ${balance}
              </td>
            )}
          </tr>
        </tbody>
      </Table>
    </>
  );
};
