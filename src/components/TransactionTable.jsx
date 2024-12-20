import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";
import Button from "react-bootstrap/Button";
import { IoAddCircle } from "react-icons/io5";
import { Form } from "react-bootstrap";
import { deleteTransactions } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";

export const TransactionTable = () => {
  const [displayTrans, setDisplayTrans] = useState([]);
  const { transactions, toggleModel, getTransactions } = useUser();

  const [idsToDelete, setIdsToDelete] = useState([]);

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
  console.log(idsToDelete);

  // Selecting the individual items
  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (value === "all") {
      checked
        ? setIdsToDelete(displayTrans.map((item) => item._id))
        : setIdsToDelete([]);
      return;
    }
    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      setIdsToDelete(idsToDelete.filter((id) => id !== value));
    }
    return;
  };

  const handleOnDelete = async () => {
    if (
      confirm(
        `Are you sure want to delete ${idsToDelete.length} transaction(s)?`
      )
    ) {
      const pending = deleteTransactions(idsToDelete);
      toast.promise(pending, {
        pending: "Please wait ... ",
      });
      const { status, message } = await pending;
      toast[status](message);
      status === "success" && getTransactions() && setIdsToDelete([]);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between pt-3 mb-4">
        <div>{displayTrans.length} transaction(s) found!</div>
        <div>
          <Form.Control input type="text" onChange={handleOnSearch} />
        </div>
        <div>
          <Button onClick={() => toggleModel(true)}>
            <IoAddCircle /> Add new transactions.
          </Button>
        </div>
      </div>
      <div>
        <Form.Check
          label="Select all."
          value={"all"}
          onChange={handleOnSelect}
          checked={displayTrans.length === idsToDelete.length}
        />
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
                <td>
                  <Form.Check
                    label={t.createdAt.slice(0, 10)}
                    value={t._id}
                    onChange={handleOnSelect}
                    checked={idsToDelete.includes(t._id)}
                  />
                </td>
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
      {idsToDelete.length > 0 && (
        <div className="d-grid">
          <Button variant="danger" onClick={handleOnDelete}>
            {" "}
            Delete {idsToDelete.length} transaction(s).
          </Button>
        </div>
      )}
    </>
  );
};
