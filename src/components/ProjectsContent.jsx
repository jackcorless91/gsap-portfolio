import React from 'react';
import Card from "@/components/Card.jsx";
import { projects } from "@/data/projectsData.js";


function ProjectsContent() {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] md:min-h-[calc(100vh-5.5rem)] ">
      { projects.map((projects, index) => {
        return <Card key={ index } { ...projects } />
      })}
    </section>
  );
}

export default ProjectsContent;