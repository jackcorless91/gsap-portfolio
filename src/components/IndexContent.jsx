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
      <section className="flex-1 text-white grid grid-rows-[35%_40%_25%]">
        <div>top</div>
        <div className="grid grid-cols-2">

          <div className="grid grid-rows-2 border">
            <div className="flex flex-col justify-center items-center">
              <div>
                <div className="text">hi, im jack</div>
                <div>software developer</div>
              </div>
            </div>
            <div className="border grid grid-rows-2">
              <div className="flex items-center justify-center">
                <div className="text-center w-[80%]">
                  Software developer from Melbourne specialising in JavaScript/TypeScript and Python, with experience in testing and DevOps.
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[50%]">
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="group relative mt-6 uppercase font-medium tracking-tight text-white cursor-pointer"
                    >
                      <span>button</span>
                      <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    <button
                      type="submit"
                      className="group relative mt-6 uppercase font-medium tracking-tight text-white cursor-pointer"
                    >
                      <span>button</span>
                      <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border flex flex-col justify-center items-center">
            <div>
              <div>#hero</div>
              <div>#projects</div>
              <div>#contact</div>
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