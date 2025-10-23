import React from 'react';
import { motion, useTransform } from "framer-motion";


function Card({i, title, technologies, description, src, github, url, color, progress, range, targetScale }) {

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="min-h-screen flex justify-center items-center sticky top-0">
      <motion.div
        className="card-container w-4xl max-w-[80%] h-[32vh] min-h-100 absolute -translate-y-[10%] rounded-2xl grid grid-rows-[25%_75%] max-sm:grid-rows-[30%_70%] bg-black border border-solid border-gray-400 text-white"
        style={{
          scale,
          // backgroundColor: color,
          top: `calc(30% + ${i * 24}px)`
        }}
      >
        {/* title container */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold tracking-tight uppercase text-center text-4xl max-sm:text-3xl">{ title }</h2>
          <h3 className="font-medium text-center">{ technologies }</h3>
        </div>
        {/* content container */}
        <div className="grid grid-cols-2 max-sm:grid-cols-1">
          <div className="grid grid-rows-[60%_40%] max-sm:grid-rows-[70%_30%]">
            <div className="flex justify-center items-center">
              <div className="flex w-[80%] h-full">
                <p className="description max-h-full overflow-y-scroll">{ description }</p>
              </div>
            </div>
            <div className="uppercase font-medium tracking-tight h-full w-full flex justify-center items-center">
              <div className="ctn flex w-[80%] items-center justify-between">
                <a
                  href={ github }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-6 group relative w-max cursor-pointer"
                >
                  <span>Github Code</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </a>
                <a
                  href={ url }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-6 group relative w-max cursor-pointer"
                >
                  <span>Visit Site</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center max-sm:hidden">
            <div className="w-[80%] h-[90%] rounded-2xl bg-white">
              <img
                src={ src }
                alt="image"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;

