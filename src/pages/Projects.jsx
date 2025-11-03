import React from 'react';
import ProjectsContent from "@/components/ProjectsContent.jsx";
import Footer from "@/components/Footer.jsx";
import {ArrowDown} from "lucide-react";

function Projects() {
  return (
    <main>
      <div className="min-h-screen hero">
        <h1 className="page-title">
        Projects <sup>(02)</sup>
        </h1>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-100/80 max-sm:text-sm"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-gray-100/80" />
      </div>

      <ProjectsContent />
    </main>
  );
}

export default Projects;