import { Form, Button } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import useForm from "../hooks/useForm";

const initialState = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};

export const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const fields = [
    {
      label: "Title",
      placeholder: "Salary",
      type: "text",
      required: true,
      name: "title",
      value: form.title,
    },
    {
      label: "Amount",
      placeholder: "1234",
      type: "number",
      required: true,
      name: "amount",
      value: form.amount,
    },
    {
      label: "Transaction Date",
      type: "date",
      required: true,
      name: "tdate",
      value: form.tdate,
    },
  ];
  return (
    <div className="border rounded p-5">
      <h4 className="mb-4">Add your transaction!</h4>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange} required>
            <option value="">--Select--</option>
            <option value="income">Income</option>
            <option value="expenses">Expensess</option>
          </Form.Select>
        </Form.Group>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
