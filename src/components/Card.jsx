import React from 'react';



function Card({ title, technologies, description, src, github, url, color }) {
  return (





    <div className="cardContainer min-h-screen flex justify-center items-center sticky top-0">
      <div
        className="w-4xl h-100 relative top-[-10%] rounded-2xl"
        style={{ backgroundColor: color }}
      >
        <div className="titlecontainer">
          <h2>{ title }</h2>
          <h3>{ technologies }</h3>
        </div>

        <div className="contentcontainer">
          <div className="descriptioncontainer">
            <p>{ description }</p>
            <a href={ github }>Github Code</a>
            <a href={ url }>Visit Site</a>
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

