import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import Scroll from "react-scroll";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="Navbar">
      <main>
        <section className="logo">Ikechukwu & Chisomeje</section>

        <FaBars
          className="bar"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        />

        <section className='menu-container'>
          <ul>
          <li>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
                className="some-class"
                activeClass="some-active-class"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="info-container"
                spy={true}
                smooth={true}
                duration={500}
                className="some-class"
                activeClass="some-active-class"
              >
                Info
              </Link>
            </li>
            <li>
           
              <Link
                to="toast"
                spy={true}
                smooth={true}
                duration={500}
                className="some-class"
                activeClass="some-active-class"
              >
                Toast
              </Link>
            </li>
          </ul>
        </section>
      </main>
      {toggleNav && (
        <aside className="menu-container-mobile">
          <ul>
            <li>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
                className="some-class"
                activeClass="some-active-class"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="info-container "
                spy={true}
                smooth={true}
                duration={500}
                className="some-class"
                activeClass="some-active-class"
              >
                Info
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="toast"
                spy={true}
                smooth={true}
                duration={500}
                className="some-class"
                activeClass="some-active-class"
              >
                Toast
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
};
