import React, { useEffect, useState } from "react";

function Skills(props) {
  //   const [renderr, setrenderr] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  function changeWidth() {
    // console.log("width");
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener("resize", changeWidth);
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    // console.log("canvas");
    let widt, radi, font;
    if (windowWidth > 1000) {
      widt = (window.innerWidth * 39) / 100;
      radi = (window.innerWidth * 39) / 200;
      font = 22;
    } else if (windowWidth > 850) {
      widt = (window.innerWidth * 45) / 100;
      radi = (window.innerWidth * 45) / 200;
      font = 18;
    } else if (windowWidth > 750) {
      widt = (window.innerWidth * 45) / 100;
      radi = (window.innerWidth * 45) / 200;
      font = 16;
    } else if (windowWidth > 600) {
      widt = (window.innerWidth * 60) / 100;
      radi = (window.innerWidth * 60) / 200;
      font = 20;
    } else if (windowWidth > 400) {
      widt = (window.innerWidth * 70) / 100;
      radi = (window.innerWidth * 70) / 200;
      font = 16;
    } else {
      widt = (window.innerWidth * 80) / 100;
      radi = (window.innerWidth * 80) / 200;
      font = 12;
    }

    // console.log(widt);

    const texts = [
      "HTML5",
      "Javascript",
      "C++",
      "BootStrap5",
      "SQL",
      "CSS",
      "Python",
      "Java",
      // "PostgreSQL",
      "MongoDB",
      // "Android",
      "Algorithms",
      "Data Structures",
      "React",
      // "Socket.io",
      "NodeJS",
      "JQuery",
      // "Redux",
      // "C Lang.",
      "Express",
      "OOPS",
    ];
    const counts = [1, 2, 4, 5, 4, 2, 1];

    const options = {
      tilt: Math.PI / 9,
      initialVelocityX: 0.09,
      initialVelocityY: 0.09,
      initialRotationX: Math.PI * 0.14,
      initialRotationZ: 0,
    };

    wordSphere(canvas, texts, counts, options);

    /**
     * WordSphere
     * Written by Hyojun Kim in 2017. Licensed in MIT.
     */
    function wordSphere(canvas, texts, counts, options) {
      const π = Math.PI; // happy math!
      const {
        width = widt,
        height = widt,
        // radius = props.rad,
        radius = radi - 40,
        // padding = 50,
        fontSize = font,
        tilt = 0,
        initialVelocityX = 0,
        initialVelocityY = 0,
        initialRotationX = 0,
        initialRotationZ = 0,
      } = options;

      let vx = initialVelocityX,
        vy = initialVelocityY;
      let rx = initialRotationX,
        rz = initialRotationZ;

      // canvas setup
      let ctx = canvas.getContext("2d");
      ctx.textAlign = "center";

      // Hi-DPI support
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(2, 2);

      // scrolling
      let clicked = false;
   
      canvas.addEventListener("mousedown", (event) => {
        clicked = true;
        
      });
      canvas.addEventListener("mousemove", (event) => {
        if (!clicked) return;
       

        if (!looping) startLoop();
      });
      canvas.addEventListener("mouseup", (e) => (clicked = false));
      canvas.addEventListener("mouseleave", (e) => (clicked = false));

      function rot(x, y, t) {
        return [
          x * Math.cos(t) - y * Math.sin(t),
          x * Math.sin(t) + y * Math.cos(t),
        ];
      }

      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let ix = 0,
          iz = 0;
        // i = 1;
        for (const text of texts) {
          const degZ = (π / (counts.length - 1)) * iz;
          const degX = ((2 * π) / counts[iz]) * ix;

          let x = radius * Math.sin(degZ) * Math.cos(degX);
          let y = radius * Math.sin(degZ) * Math.sin(degX);
          let z = radius * Math.cos(degZ) + 8 * (ix % 2); /* randomness */

          // camera transform
          [y, z] = rot(y, z, tilt);
          [x, z] = rot(x, z, rz);
          [x, y] = rot(x, y, rx);

          // convert to cartesian and then draw.
          const alpha = 0.7 + 0.4 * (x / radius);
          const size = fontSize + 2 + 5 * (x / radius);
          // ctx.fillStyle = `rgba(0,0,0,${alpha})`;
          ctx.fillStyle = `rgba(38,38,38,${alpha})`;

          ctx.font = `${size}px 'Alkatra', cursive`;
          
          ctx.fillText(text, y + width / 2, -z + height / 2);

          ix--;
          if (ix < 0) {
            iz++;
            ix = counts[iz] - 1;
          }
          // i++;
        }
      }

      // renderer
      let looping = false;
      function rendererLoop() {
        if (looping) window.requestAnimationFrame(rendererLoop);
        render();

        // deacceleration - dirty code xD
        if (vx > 0) vx = vx - 0.01;
        if (vy > 0) vy = vy - 0.01;
        if (vx < 0) vx = vx + 0.01;
        if (vy > 0) vy = vy + 0.01;
        // if (vx == 0 && vy == 0) stopLoop();

        rz += vy * 0.01;
        rx += vx * 0.01;
      }

      function startLoop() {
        looping = true;
        window.requestAnimationFrame(rendererLoop);
      }

      // document.querySelector(".canva").addEventListener("onmouseout", () => {
      //   stopLoop();
      //   console.log("stop");
      // });

      // function stopLoop() {
      //   looping = false;
      // }
      startLoop();
    }
  }, [windowWidth]);
  function animat() {
    // console.log("ok");
    // setrenderr(true);
  }
  animat();

  return (
    <div style={{ width: "100%" }}>
      <canvas
        id="canvas"
        className="canva"
        // style={{ border: "1px solid red", cursor: "pointer", width:"100%"}}
      ></canvas>
    </div>
  );
}

export default Skills;