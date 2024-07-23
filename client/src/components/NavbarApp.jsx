const NavbarApp = () => {
  return (
    <div className="flex h-16 bg-slate-300 justify-between px-10 items-center">
      <div>
        <h2 className="text-2xl">Auth App</h2>
      </div>
      <div>
        <ul className="flex gap-5 text-2xl">
          <li>home</li>
          <li>About us</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarApp;
