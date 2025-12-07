import React from 'react';
import Footer from "@/components/Footer.jsx";

const menuLinks = [
  { path: "/", label: "#Hero" },
  { path: "/projects", label: "#Projects" },
  { path: "/contact", label: "#Contact" },
];

function IndexContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 text-white grid grid-rows-[33%_40%_28%]">
        <div></div>
        <div className="grid grid-cols-2 max-sm:grid-cols-none">

          <div className="grid grid-rows-2">
            <div className="flex flex-col justify-center items-center">
              <div>
                <div className="uppercase font-medium text-3xl tracking-tight max-sm:text-2xl">hi, im jack</div>
                <div className="uppercase font-medium text-7xl tracking-tight max-lg:text-5xl max-sm:text-4xl">software developer</div>
              </div>
            </div>
            <div className="grid grid-rows-2">
              <div className="flex items-center justify-center">
                <div className="text-center w-[80%] max-w-2xl uppercase font-medium tracking-tight">
                  Software developer from Melbourne specialising in JavaScript/TypeScript and Python, with experience in testing and DevOps.
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[50%] max-w-md">
                  <div className="flex justify-between">
                    <a
                      href="/contact"
                      className="group relative mt-6 uppercase font-medium tracking-tight text-white cursor-pointer"
                    >
                      <span>contact</span>
                      <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a
                      href="/projects"
                      className="group relative mt-6 uppercase font-medium tracking-tight text-white cursor-pointer"
                    >
                      <span>projects</span>
                      <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center max-sm:hidden">
            <div className="text-6xl uppercase tracking-tightn flex flex-col">
              <a
                href="/"
                className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#FF2727]"
              >
                #hero
              </a>
              <a
                href="/projects"
                className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#FF2727]"
              >
                #projects
              </a>
              <a
                href="/contact"
                className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#FF2727]"
              >
                #contact
              </a>
            </div>
          </div>
        </div>
        <div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default IndexContent;