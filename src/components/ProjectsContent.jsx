import React, { useRef } from 'react';
import Card from "@/components/Card.jsx";
import { projects } from "@/data/projectsData.js";
import { motion, useScroll } from "framer-motion"


function ProjectsContent() {

  // when to start scroll and when to end scroll, 'start' of position sticky, 'end' of viewport
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  console.log(scrollYProgress); // Inside ProjectsContent


  return (
    <section
      ref={ container }
      className="min-h-[calc(100vh-4.5rem) md:min-h-[calc(100vh-5.5rem)] ">
      { projects.map((project, index) => {
        const targetScale = 1 - ((projects.length - index) * 0.05);
        return <Card
          key={ index }
          i={ index } { ...project }
          progress={ scrollYProgress }
          range={[ index * 0.25, 1 ]}
          targetScale={ targetScale }
        />
      })}
    </section>
  );
}

export default ProjectsContent;