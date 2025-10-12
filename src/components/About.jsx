import React from 'react';

function About() {
  return (
    <section
      className="min-h-[calc(100vh-4.5rem)] md:min-h-[calc(100vh-5.5rem)] text-white grid grid-rows-3 gap-1 pt-8">
      <div className="text-[12vw] w-screen tracking-tight uppercase text-center">Software developer</div>
      {/* add sm screen for font, wrap to second line ? */}
      <div className="flex justify-center items-center">
        <div className="w-80 h-full grid grid-rows-[25%_50%_25%]">
          <div className="flex justify-center items-center flex-col tracking-tight text">
            im jack
          </div>
          <div className="flex justify-center items-center">
            a software developer from Melbourne specialising in Javascript/typescript, with experience in python & golang.
          </div>
          <div className="flex justify-center items-center">25%
          {/* connect and view my work button */}
          </div>

        </div>
        <div className="border-white border-solid outline w-80 h-full">photo container</div>
      </div>
      <div>other ?</div>
    </section>

  );
}

export default About;