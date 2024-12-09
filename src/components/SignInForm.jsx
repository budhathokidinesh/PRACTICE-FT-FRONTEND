import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { toast } from "react-toastify";
import { loginUser, postNewUser } from "../../helpers/axiosHelper";
import useForm from "../hooks/useForm";
import { useUser } from "../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
};

export const SignInForm = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { form, handleOnChange } = useForm(initialState);

  const goTo = location?.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    user?._id && navigate(goTo);
  }, [user?._id, navigate, goTo]);

  const fields = [
    {
      label: "User name",
      placeholder: "Type your name",
      type: "text",
      required: true,
      name: "name",
    },
    {
      label: "Email",
      placeholder: "Type your Email",
      type: "email",
      required: true,
      name: "email",
    },
    {
      label: "Password",
      placeholder: "****",
      type: "password",
      required: true,
      name: "password",
    },
  ];
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  //   console.log(name, value);
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const pendingRes = loginUser(form);
    toast.promise(pendingRes, {
      pending: "Please wait...",
    });
    const { status, message, user, accessJWT } = await pendingRes;
    toast[status](message);
    console.log(user, accessJWT);
    setUser(user);
    localStorage.setItem("accessJWT", accessJWT);

    // const { confirmPassword, ...rest } = form;
    // if (confirmPassword !== rest.password) {
    //   return toast.error("Password does not match. Please try later");
    // }
    // const { status, message } = await postNewUser(rest);
    // toast[status](message);
  };
  return (
    <div className="border rounded p-5">
      <h4 className="mb-4">Sign In Now!</h4>
      <hr />
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
