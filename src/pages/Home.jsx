import Menu from "@/components/Menu.jsx";
import React from "react";
import IndexContent from "@/components/IndexContent.jsx";
import { ArrowDown } from "lucide-react";
import CursorHint from "@/components/CursorHint.jsx";

function Home() {
  return (
      <main>
        <div className="min-h-screen hero">
          <h1 className="page-title">
            index <sup>(01)</sup>
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-gray-100/80 max-sm:text-sm"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-gray-100/80" />
        </div>

        <IndexContent />
      </main>
  );
}

export default Home;