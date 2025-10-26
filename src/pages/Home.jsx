import Menu from "@/components/Menu.jsx";
import React from "react";
import IndexContent from "@/components/IndexContent.jsx";

function Home() {
  return (
      <main>
        <div className="min-h-screen hero">
          <h1 className="page-title">
            index <sup>(01)</sup>
          </h1>
        </div>

        <IndexContent />
      </main>
  );
}

export default Home;