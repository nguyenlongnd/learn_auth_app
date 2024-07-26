import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../store/services/authService";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [SignUp, { data, error, isLoading }] = useSignUpMutation();
  console.log("signUpData", signUpData);
  const handleChangeForm = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await SignUp(signUpData).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  console.log("data 333", data);
  console.log("error 333", error);
  console.log("isLoading 333", isLoading);
  return (
    <div className="w-[500px] mx-auto">
      <h1 className="text-2xl text-slate-600 m-3 text-center font-black">
        sign up app sign up app
      </h1>
      <Form onSubmit={(event) => handleSignUp(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="userName"
            placeholder="userName"
            color="#ddd"
            onChange={(event) => handleChangeForm(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            onChange={(event) => handleChangeForm(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            onChange={(event) => handleChangeForm(event)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-full">
          Sign Up
        </Button>
      </Form>
      <div className="flex gap-2 mt-2">
        <p>Have an account?</p>
        <div className="text-red-600">
          <Link to={"/sign-in"}> Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
