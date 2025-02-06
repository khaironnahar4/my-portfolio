import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      
      {/* <li>
        <a href="#resume">Resume</a>
      </li> */}
    </>
  );
  return (
    <nav className="navbar z-50 fixed top-0 right-0 left-0 max-w-7xl mx-auto glassEffect">
      <div className="navbar-start">
        <Link to={"/"} className="text-3xl primaryColor font-bold">
          KN
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-6 rounded-full border border-base-300">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="#contact"
          className="px-10 py-3 border border-gray-500 rounded-full hidden lg:inline"
        >
          Contact me
        </a>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-0 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
