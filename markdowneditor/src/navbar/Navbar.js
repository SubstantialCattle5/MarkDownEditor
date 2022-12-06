import React from "react";
import { navBarStyles } from "./navBarStyles";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={`relative flex flex-wrap items-center justify-between px-2 py-1 mb-3  ${navBarStyles.navBarMain}`}
      >
        <div
          className={`container px-4 mx-auto flex flex-wrap items-center justify-between `}
        >
          <div
            className={`w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`}
          >
            <a
              className={`leading-relaxed inline-block mr-4 py-2 whitespace-nowrap ${navBarStyles.navBarTitle}`}
              href="#1"
            >
              ReactEditor.md
            </a>
            <button
              className="cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className={`${navBarStyles.nabBarHamburger}`}>Menu</i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-danger"
          >
            <ul className={`flex flex-col lg:flex-row list-none lg:ml-auto `}>
              <li className="nav-item">
                <a
                  className={`px-3 py-2 flex items-center leading-snug hover:opacity-75 ${navBarStyles.navBarButtons}`}
                  href="#1"
                >
                  <span className={` ml-2`}>Theme</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
