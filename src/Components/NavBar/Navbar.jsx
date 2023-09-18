import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="  ">
      <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose className="" /> : <AiOutlineMenu />}
      </div>

      <ul
        className={`md:flex absolute md:static text-2xl  bg-black p-6 text-white ${
          open ? "top-16" : "-top-60"
        }`}
      >
        {routes.map((route, indx) => (
          <>
            <Link route={route} />
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
