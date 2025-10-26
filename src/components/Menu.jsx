import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router";

import "./menu.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LiveClock from "@/components/LiveClock.jsx";

const menuLinks = [
  { path: "/", label: "#Hero" },
  { path: "/projects", label: "#Projects" },
  { path: "/contact", label: "#Contact" },
];

function Menu() {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useGSAP(
    () => {
      // scoped selector so queries only run inside this container
      const q = gsap.utils.selector(container);

      // initial state
      gsap.set(q(".menu-link-item-holder"), { y: 120 });

      // build timeline — note the corrected selector (with .) and "-=0.75" position
      tl.current = gsap
        .timeline({ paused: true })
        .to(
          q(".menu-overlay"),
          {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
          }
        )
        .to(
          q(".menu-link-item-holder"),
          {
            y: 0,
            duration: 1.1,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.75" // START this tween 0.75s before the previous tween finishes
        );
    },
    { scope: container }
  );

  useEffect(() => {
    if (!tl.current) return;
    if (isMenuOpen) tl.current.play();
    else tl.current.reverse();
  }, [isMenuOpen]);

  return (
    <nav className="menu-container" ref={container}>
      {/* menu-bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <a
            className="menu-a"
            href="/"
          >
            JACK CORLESS</a>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p className="menu-p">Menu</p>
        </div>
      </div>

      {/* menu-overlay */}
      <div className="menu-overlay">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <a
              className="menu-a"
              href="/"
            >
              JACK CORLESS</a>
          </div>
          <div className="menu-close">
            <p
              className="menu-p"
              onClick={toggleMenu}
            >
              Close</p>
          </div>
        </div>

        {/* menu overlay items */}
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p className="menu-p">&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a
                    className="menu-link menu-a"
                    href={link.path}
                  >
                    {link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-a m-[2px] group relative w-max cursor-pointer"
              >
                <span> LinkedIn &#8599;</span>
                <span className="absolute -bottom-0.25 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </a>
              {/* adjust to css with so many buttons */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-a m-[2px] group relative w-max cursor-pointer"
              >
                <span>GitHub &#8599;</span>
                <span className="absolute -bottom-0.25 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-a m-[2px] group relative w-max cursor-pointer"
              >
                <span>Resume &#8599;</span>
                <span className="absolute -bottom-0.25 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </a>
            </div>
            <div className="menu-info-col">
              <p className="menu-p">jackdcorless@proton.me</p>
              <p className="menu-p">+61 437 128 864</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p className="menu-p">
            <LiveClock />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Menu;