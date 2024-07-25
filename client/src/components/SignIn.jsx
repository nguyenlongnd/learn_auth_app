import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-[500px] mx-auto">
      <h1 className="text-2xl text-slate-600 m-3 text-center font-black">
        sign in app
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
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
