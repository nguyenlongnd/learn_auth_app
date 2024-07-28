import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/slices/authSlice";

const HomePage = () => {
  const user = useSelector(selectCurrentUser);
  console.log("user", user);
  return (
    <div>
      <h1 className="m-5">React Router DOM</h1>
      <p>
        The react-router-dom package contains bindings for using React Router in
        web applications. Please see the Getting Started guide for more
        information on how to get started with React Router.
      </p>
    </div>
  );
};

export default HomePage;
