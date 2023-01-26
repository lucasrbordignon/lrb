import React from "react";
import { Heading } from "./Heading";


export function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="w-screen container px-8 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between gap-[256px] lg:w-auto lg:static lg:block lg:justify-start">
          <Heading size='lg'>
            <h1 className='text-yellow-500'>LRB</h1>
          </Heading>
            {/* <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-yellow-500"
              href="#pablo"
            >
              LRB
            </a> */}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars text-yellow-500 hover:text-yellow-300"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >            

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Heading size='sm'><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="">CONTACT</a></Heading>
              </li>
              <li className="nav-item">
                <Heading size='sm'><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.linkedin.com/in/lucasrbordignon/">LINKEDIN</a></Heading>
              </li>
              <li className="nav-item">
                <Heading size='sm'><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://www.instagram.com/lucasrbordignon/">INSTAGRAM</a></Heading>
              </li>
              <li className="nav-item">
                <Heading size='sm'><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://github.com/lucasrbordignon">GITHUB</a></Heading>   
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
