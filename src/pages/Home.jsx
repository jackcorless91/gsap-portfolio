import Menu from "@/components/Menu.jsx";
import React from "react";
import About from "@/components/About.jsx";

function Home() {
  return (
      <main>
        <div className="min-h-screen">
          <h1 className="page-title">
            index <sup>(01)</sup>
          </h1>
        </div>

        <About />
      </main>
  );
}

export default Home;