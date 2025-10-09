import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router";

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
      <div className="menu-bar">
        <div className="menu-logo">
          <a>JACK CORLESS</a>
        {/*  replace a with Link react router when I figure out how to use it lol */}
        </div>
        <div className="menu-open " onClick={ toggleMenu }>
          <p>MENU</p>
        </div>
      </div>

      {/*menu overlay*/}
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <a href="/">JACK CORLESS</a>
          </div>
          <div className="menu-close" onClick={ toggleMenu }>
            <p>CLOSE</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, key) => (
              <div className="menu-link-item" key={ key }>
                <div className="menu-link-item-holder">
                  <a href={ link.path } className="menu-link">
                    { link.label }
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">GitHub &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>jackdcorless@proton.me</p>
              <p>+61 437 128 864</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>Melbourne: 00:00:00</p>
        {/*  implement live time with seconds*/}
        </div>

      </div>
    </nav>
  );
}

export default Menu;