import { Outlet } from "react-router-dom";
import Navbar from "./components/NavbarApp";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="m-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
