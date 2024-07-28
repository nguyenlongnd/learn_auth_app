import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "../store/services/authService";
import { useState } from "react";
import OAuth from "./OAuth";

const SignIn = () => {
  const [signIn] = useSignInMutation();
  const [dataForm, setDataForm] = useState({});
  const navigate = useNavigate();
  const handleInputForm = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signIn(dataForm);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[500px] mx-auto">
      <h1 className="text-2xl text-slate-600 m-3 text-center font-black">
        sign in app
      </h1>
      <Form onSubmit={(event) => handleSignIn(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => handleInputForm(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleInputForm(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className=" w-full">
          Sign In
        </Button>
        <OAuth/>
      </Form>
      <div className="flex gap-2">
        <p>do not have account?</p>
        <div className="text-red-600">
          <Link to={"/sign-up"}> Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
