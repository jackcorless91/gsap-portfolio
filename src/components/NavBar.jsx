import React from "react";

const navLinks = [
  { path: "", label: "Home" },
  { path: "", label: "Projects" },
  { path: "", label: "Contact" },
  { path: "", label: "Home" },
]


function NavBar() {
  return (
    <nav className="fixed w-full h-16">
      <div className="flex justify-between items-center h-full text-2xl">
        <div className="ml-3 flex justify-center items-center">jack corless</div>
        <a className="mr-3 flex justify-center items-center">menu</a>
      {/*  add hover effects to menu button */}
      </div>
    </nav>
  );
}

export default NavBar;