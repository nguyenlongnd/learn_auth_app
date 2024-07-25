import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-[500px] mx-auto">
      <h1 className="text-2xl text-slate-600 m-3 text-center font-black">
        sign up app
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <div>
        <p>do not have account?</p>
        <Link to={"/sign-up"}> Sign up</Link>
      </div>
    </div>
  );
};

export default SignUp;
