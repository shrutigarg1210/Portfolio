import React from "react";
import Meteoride from "../assets/Meteoride.png";
import tetris from "../assets/tetris.png";
import port from "../assets/port.png";
import shortner from "../assets/shortner.png";
import inprogress from "../assets/inprogress.png";
import "./ProjectStyle.css";

const Projectimages = [
  {
    imgsrc: Meteoride,
    title: "Meteoride",
    view: "https://meteoride.netlify.app",
    source: "https://github.com/shrutigarg1210/Meteoride",
  },
  {
    imgsrc: tetris,
    title: "Tetris",
    view: "https://tetrisgamebyshruti.netlify.app/",
    source: "https://github.com/shrutigarg1210/Tetris",
  },

  {
    imgsrc: port,
    title: "Portfolio",
    view: "meteoride.netlify.app",
    source: "https://github.com/shrutigarg1210/Meteoride",
  },
  // {
  //     imgsrc:shortner,
  //     title: "URLShortner",
  //     view: "https://url-shortener-by-shruti.netlify.app",
  //     source: "https://github.com/shrutigarg1210/URLshortner",
  // },

  {
    imgsrc: inprogress,
    title: "Stock Price Predictor",
    view: "https://colab.research.google.com/drive/1qWjVX2JJAWANeOOOFiQuEz3r8c7wdI3U?usp=sharing",
    source: "https://github.com/shrutigarg1210/Stock_price_predictor.git",
  },
];

const Project = () => {
  return (
    <div className="grid-container" id="project">
      {Projectimages.map((val, index) => (
        <div key={index} className="grid-item">
          <img className="image" src={val.imgsrc} alt={`val ${index + 1}`} />
          <div className="overlay">
            <div className="title">{val.title}</div>
            <div className="grid-links">
              <a href={val.view} className="site" target="_blank">
                Site
              </a>
              <a href={val.source} className="source" target="_blank">
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
