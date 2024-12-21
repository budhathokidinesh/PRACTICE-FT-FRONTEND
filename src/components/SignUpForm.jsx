import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { toast } from "react-toastify";
import { postNewUser } from "../../helpers/axiosHelper";
import useForm from "../hooks/useForm";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const fields = [
    {
      label: "Name",
      placeholder: "Type your name",
      type: "text",
      required: true,
      name: "name",
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "Type your Email",
      type: "email",
      required: true,
      name: "email",
      value: form.email,
    },
    {
      label: "Password",
      placeholder: "****",
      type: "password",
      required: true,
      name: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      placeholder: "****",
      type: "password",
      required: true,
      name: "confirmPassword",
      value: form.confirmPassword,
    },
  ];
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  //   console.log(name, value);
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password does not match. Please try later");
    }
    const { status, message } = await postNewUser(rest);
    toast[status](message);
    status === "success" && setForm(initialState);
  };
  return (
    <div className="border rounded p-5">
      <h4 className="mb-4">Sign Up Now!</h4>
      <Form onSubmit={handleOnSubmit}>
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
