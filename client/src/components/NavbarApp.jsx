import { Link } from "react-router-dom";

const NavbarApp = () => {
  return (
    <div className="flex h-16 bg-slate-300 justify-between px-10 items-center">
      <div>
        <h2 className="text-2xl">Auth App</h2>
      </div>
      <div>
        <ul className="flex gap-5 text-2xl">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/sign-in"}>Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarApp;
