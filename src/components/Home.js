import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="section" id="home">        
      <div className="home-text">
        Hey, I am Shruti Garg
      </div>
      <div className="about-content">
        <p>
          I am a sincere and highly passionate college student working and
          developing my skills towards software development at Chitkara
          University. I am seeking an opportunity to utilize my knowledge of
          various languages such as CPP, Java, etc. to effectively serve your
          company in an internship position.
        </p>
        <a
          href="https://drive.google.com/file/d/1I4i-Vz1-N2XerLE1RObufrOUQ_imjIGA/view?usp=sharing"
          className="btn-resume"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
