import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router";

import "./menu.css"

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];


function Menu() {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="menu-container" ref={container}>
      {/* menu-bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <a href="/">JACK CORLESS</a>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>

      {/* menu-overlay */}
      <div className="menu-overlay">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <a href="/">JACK CORLESS</a>
          </div>
          <div className="menu-close">
            <p onClick={toggleMenu}>Close</p>
          </div>
        </div>

        {/* menu overlay items */}
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a className="menu-link" href={link.path}>
                    {link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">GitHub &#8599;</a>
              <a href="#">Resume &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>jackdcorless@proton.me</p>
              <p>0923 3984 23</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>Melbourne, 00:00:00</p>
        </div>
      </div>
    </nav>
  );
}

export default Menu;