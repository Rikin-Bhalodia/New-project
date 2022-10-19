import React, { useEffect } from "react";
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsa/DrawSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

function Elegance() {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      var tl = gsap.timeline({
        yoyo: true,
        scrollTrigger: {
          trigger: ".draw-me",
          opacity: 0,
          markers: false,
        },
      });
      gsap.set(".draw-me", { opacity: 0, drawSVG: 0 });
      tl.to(".draw-me", {
        duration: 2,
        drawSVG: true,
        delay: 1,
        opacity: 1,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="678"
      height="359"
      fill="none"
      viewBox="0 0 678 359"
      style={{
        width: "1200px",
        height: "200px",
        // position: "absolute",
        // left: "200px",
        // top: "-100px",
      }}
    >
      <path
        className="draw-me"
        fontFamily="Beatlys"
        fill="none"
        stroke="#A75B41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10"
        d="M84.7 167.06c-26.04 20.58-76.02 36.96-65.1 12.18 9.24-2.1 17.22-4.62 24.78-10.5 14.28-10.92 3.36-15.96 1.26-16.38-2.1-.84-4.2-.84-6.3-.84-4.62.84-8.4 2.52-11.76 4.2-6.72 4.2-11.76 10.08-15.96 16.38-11.34 21.42 3.36 25.2 8.82 25.62 13.02.42 35.7-6.72 65.94-28.98.42-.42-1.26-2.1-1.68-1.68zm-52.08-4.2c2.52-2.1 5.04-3.78 7.56-4.62 5.04-1.68 10.5-.42 1.26 7.14-2.52 2.52-10.08 7.14-19.74 9.66 3.36-4.2 7.14-8.4 10.92-12.18zm154.645 8.4c.42-.42-1.26-2.1-1.68-1.68-85.26 84.84-107.1 63-91.14-.42 61.74-78.12 92.82-124.74 97.02-150.78 1.26-9.24-9.66-18.06-31.5 5.88-17.64 18.9-31.5 41.16-43.68 64.26-12.18 23.1-22.68 47.46-29.82 72.66-20.16 71.82 4.62 110.88 100.8 10.08zm-23.52-143.22c5.04-6.3 10.5-11.34 13.02-13.02 4.62-2.94 10.92-2.94 10.08 2.52-5.04 30.66-55.86 97.44-90.3 141.12 14.28-53.76 51.66-110.88 67.2-130.62zm89.939 139.02c-26.04 20.58-76.02 36.96-65.1 12.18 9.24-2.1 17.22-4.62 24.78-10.5 14.28-10.92 3.36-15.96 1.26-16.38-2.1-.84-4.2-.84-6.3-.84-4.62.84-8.4 2.52-11.76 4.2-6.72 4.2-11.76 10.08-15.96 16.38-11.34 21.42 3.36 25.2 8.82 25.62 13.02.42 35.7-6.72 65.94-28.98.42-.42-1.26-2.1-1.68-1.68zm-52.08-4.2c2.52-2.1 5.04-3.78 7.56-4.62 5.04-1.68 10.5-.42 1.26 7.14-2.52 2.52-10.08 7.14-19.74 9.66 3.36-4.2 7.14-8.4 10.92-12.18zm148.345 5.88c-13.02 6.72-28.56 17.64-40.74 26.88 1.26-5.04 6.3-28.98 6.3-36.54-.42-3.36-8.82-12.18-11.34-8.82-2.52 2.94-10.5 10.92-10.5 11.34-2.1-2.94-4.62-5.46-8.4-6.3a18.766 18.766 0 00-11.76 0c-7.14 2.1-13.02 7.14-17.64 12.18-5.04 5.46-9.66 13.02-10.92 20.58-1.26 8.82 9.66 7.14 13.02 5.88 19.74-7.98 48.3-36.54 48.3-36.54v1.68c-.42 5.88-2.1 12.6-3.36 18.48a410.295 410.295 0 01-8.82 30.24c-3.78 2.94-7.56 6.3-11.34 9.66-19.74 17.64-34.44 31.92-50.82 52.92-7.98 10.5-15.96 21.42-23.1 32.76-6.72 11.34-13.86 23.1-17.22 36.96-.42 3.78-1.26 7.56.84 12.18 1.26 2.52 3.36 4.62 5.88 5.46 2.52.42 4.2.84 6.3.84 7.98 0 14.7-3.36 20.58-7.14 11.76-7.98 20.58-18.9 28.14-29.82 25.2-36.12 41.58-78.54 54.18-119.7 13.02-10.92 28.98-22.68 43.26-31.08.42-.42-.42-2.1-.84-2.1zm-87.36 17.22c-2.94 1.68-5.88 3.36-8.4 4.2h-1.26v-.84c1.68-4.62 6.72-10.5 10.08-15.54 7.56-8.4 18.06-17.64 28.56-10.5-9.24 8.4-18.48 17.22-28.98 22.68zm15.96 66.36c-10.08 24.36-18.06 42.42-32.34 64.26-7.56 10.5-15.54 21-25.62 28.14-5.04 3.36-10.5 5.88-15.96 5.88-13.44-.42 3.78-32.76 10.5-43.68 6.72-11.34 14.28-21.84 22.26-32.34 15.96-21 29.82-35.28 48.72-53.76 2.1-1.68 3.78-3.36 5.88-5.46-4.2 12.6-8.4 24.78-13.44 36.96zm164.857-83.16c-46.2 28.14-62.16 29.4-44.1-12.18 0-1.26-3.36-3.78-4.2-4.62-1.26-.84-3.36-.84-4.2.84l-2.52 2.52c-10.08-5.88-23.52-.42-32.34 6.3-4.62 3.36-8.82 7.56-12.6 12.18-1.68 2.52-3.36 4.62-5.04 7.56-4.62 11.34 1.26 15.12 9.66 12.18 6.3-2.1 18.06-11.34 22.26-14.7 5.46-5.04 10.92-9.66 16.38-14.7-14.28 33.6.42 42.42 57.96 6.72.42-.42-.42-2.52-1.26-2.1zm-76.02 6.3c-4.2 3.36-8.4 6.3-13.02 9.24-2.1 1.26-4.62 2.52-6.72 2.94h-.42c0-.42.42-1.26.84-1.68.84-2.1 2.1-4.2 3.36-6.3 2.94-3.78 6.3-7.98 10.08-11.34 6.72-6.3 15.54-11.76 24.78-10.5a187.88 187.88 0 01-18.9 17.64zm172.915-6.3c-48.3 39.48-45.36 25.2-53.76 2.94-3.36-10.08-14.28-22.26-41.58 6.3 1.68-6.72 10.08-20.16 12.6-23.1 2.1-1.68-2.94-5.46-9.66-1.26-3.78 2.52-13.44 26.46-13.44 37.38-.42 4.2 5.04 3.78 5.04 3.78 26.46-38.64 33.6-31.92 39.48-13.02 8.4 28.14 23.1 20.58 62.58-10.92.84-.42-.84-2.52-1.26-2.1zm67.798-.42c-14.28 10.5-31.08 18.06-45.36 22.68-25.62 7.98-24.36-23.1-2.1-39.06 2.52-1.26 5.46-2.1 7.98-.84 2.1.84 3.36 4.2 2.94 7.14v2.52s.42 2.1 2.1 1.68c0 0 2.94-9.66 4.2-12.18v-.42c.42 0 .42 0 .42-.42.42-1.26-2.52-1.26-2.94-.42l-1.68 3.36c-.84-1.68-1.68-2.94-3.36-4.2-3.78-2.52-22.26-2.52-34.86 22.68-8.82 17.64 4.2 31.08 28.14 23.52 16.38-5.46 32.34-14.28 46.2-24.36.42-.42-.84-2.52-1.68-1.68zm67.636-1.68c-26.04 20.58-76.02 36.96-65.1 12.18 9.24-2.1 17.22-4.62 24.78-10.5 14.28-10.92 3.36-15.96 1.26-16.38-2.1-.84-4.2-.84-6.3-.84-4.62.84-8.4 2.52-11.76 4.2-6.72 4.2-11.76 10.08-15.96 16.38-11.34 21.42 3.36 25.2 8.82 25.62 13.02.42 35.7-6.72 65.94-28.98.42-.42-1.26-2.1-1.68-1.68zm-52.08-4.2c2.52-2.1 5.04-3.78 7.56-4.62 5.04-1.68 10.5-.42 1.26 7.14-2.52 2.52-10.08 7.14-19.74 9.66 3.36-4.2 7.14-8.4 10.92-12.18z"
      ></path>
    </svg>
  );
}

export default Elegance;
