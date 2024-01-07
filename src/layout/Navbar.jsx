import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div
        className={`md:flex md:justify-between md:items-center  md:pb-5 bg-white py-4 ${
          open ? "pb-36" : "pb-3"
        }`}
      >
        <div>
          <h1 className="text-3xl font-bold  pl-7 md:ml-10">
            MERN Authentication
          </h1>
        </div>
        <div
          onClick={toggleMenu}
          className="absolute text-2xl top-6 right-8 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
             bg-white lg:mr-40 md:mr-14  w-full md:w-auto md:pl-0 pl-9 transition-all
              duration-500 ease-in left-0 ${open ? "block" : "hidden"}`}
          >
            <li className="text-xl mx-4">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xl mx-4">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="text-xl mx-4">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
