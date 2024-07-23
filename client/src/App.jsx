import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AboutPage from "./components/AboutPage";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
