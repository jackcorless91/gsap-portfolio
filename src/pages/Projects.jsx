import React from 'react';
import ProjectsContent from "@/components/ProjectsContent.jsx";
import Footer from "@/components/Footer.jsx";

function Projects() {
  return (
    <main>
      <div className="min-h-screen">
        <h1 className="page-title">
        Projects <sup>(02)</sup>
        </h1>
      </div>

      <ProjectsContent />
    </main>
  );
}

export default Projects;