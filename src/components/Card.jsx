import React from 'react';



function Card({ title, technologies, description, src, github, url, color }) {
  return (
    <div className="cardContainer min-h-screen flex justify-center items-center sticky top-0">
      <div
        className="w-4xl h-100 relative top-[-10%] rounded-2xl grid grid-rows-[25%_75%]"
        style={{ backgroundColor: color }}
      >
        <div className="titlecontainer flex flex-col items-center justify-center">
          <h2 className="font-semibold tracking-tight uppercase text-4xl">{ title }</h2>
          <h3>{ technologies }</h3>
        </div>

        <div className="contentcontainer grid grid-cols-2">
          <div className="descriptioncontainer grid grid-rows-[70%_30%]">
            <p className="text-center h-full w-full">{ description }</p>
            <div className="btncontainer uppercase font-medium h-full w-full flex justify-center items-center">

              <div className="ctn flex w-[80%] justify-between">
                <a href={ github }>Github Code</a>
                <a href={ url }>Visit Site</a>
              </div>

            </div>
          </div>
          <div className="photocontainer">
            <img
              src={ src }
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

