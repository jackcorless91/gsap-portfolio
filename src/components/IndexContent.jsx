import React from 'react';
import Footer from "@/components/Footer.jsx";

function IndexContent() {
  return (
    <section className="min-h-[calc(100vh-4.5rem-5.75rem)] md:min-h-[calc(100vh-5.5rem-5.75rem)] text-white grid grid-rows-3 gap-1 pt-8">
      <div className="text-[11.5vw] w-screen tracking-tight uppercase text-center font-medium">Software developer</div>
      {/* add sm screen for font, wrap to second line ? */}
      <div className="flex justify-center items-center">
        <div className="w-80 h-full grid grid-rows-[25%_50%_25%]">
          <div className="flex justify-end text-center flex-col tracking-tight uppercase text-6xl">
            im jack
          </div>
          <div className="flex justify-center items-center text-center text-[]">
            a software developer from Melbourne specialising in Javascript/typescript, with experience in python & golang.
          </div>
          <div className="flex justify-between items-center">
            <button className="uppercase">view my work</button>
            <button className="uppercase">get in touch</button>
          {/* add animations and styling on buttons */}
          </div>

        </div>
        {/*<div className="w-80 h-full flex justify-center items-center">*/}
        {/*  <div className="bg-white h-[85%] w-[85%] flex justify-center items-center">*/}
        {/*    <div className="text-black">photo</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div>other ?</div>
      <Footer />
    </section>

  );
}

export default IndexContent;