import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

export const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(true);
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

        {/* <section className='menu-container'>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
          </ul>
        </section> */}
      </main>
      {toggleNav && (
        <aside className="menu-container-mobile">
          <ul>
            <li>Link</li>
            <li>
              <ScrollLink
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
                className="some-class"
                activeClass="some-active-class"
              >
                Gallery
              </ScrollLink>
            </li>
            <li>Info</li>
            <li>Toast</li>
          </ul>
        </aside>
      )}
    </div>
  );
};
