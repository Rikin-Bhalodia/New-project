import gsap from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

function Avenue() {
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
        duration: 3,
        drawSVG: true,
        delay: 1,
        opacity: 1,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <svg
      viewBox="0 0 319.5 209.33"
      style={{
        width: "200px",
        position: "absolute",
        left: "150px",
        top: "50px",
      }}
    >
      <path
        className="draw-me"
        fontFamily="Beatlys"
        d="M173 123.894c-9.25-.5-19.5-1-28.5-1.25 2.25-7.25 7.25-24.5 7.25-24.5s10.75-39 13.75-59c1.75-10.25 2.5-28.5-.25-31.25-2.5-3-8.25-7.75-27 11.5-26.75 30.5-49.25 64-71.75 97.5-1.75 2.25-4.25 7-6 9.5-13.75 1.5-26.75 3.25-40.25 6.5H20c-1 .25.25 2.25 1.25 2.25 11.5-1.25 22.75-1.75 34-1.25-18.25 28-36.5 56.25-54.25 84.5v.25c-.5.5 3 2 3.5 1.25 17.75-29 36.25-57.75 55.25-86.25.5 0 .5.25 1 .25 13 1 26.25 3 37.75 9 11.25 6 18.75 17.75 18 30.5 0 5-.75 10-2 15-2.75 7.5-5.25 14.75-8 22v.5c-.75 1.75 6.25 4.25 7 2.5v-.25c11.25-29 21.25-57.5 30.25-87.5 10.25-.25 18.5-.25 28.5-.5 1 0 1.75-1.25.75-1.25zm-51.75 45.75c-.5-2.25-1-4.5-1.25-6.75-1.25-3.25-2.25-6.75-4.5-9.5-3.5-6.25-9.5-10.25-15.25-13.75-12-6.25-22.5-8-35.5-9 1.5-3.25 61.75-5 71.75-5-5 15-10 29-15.25 44zm16-47.25c-14 0-59.25 1.5-71.75 3.25 1.25-1.75 3.25-5.75 4.5-7.5 22.75-33 45.25-66.75 72.25-96.5 3.5-3.5 7-7 10.75-10s6.5-4.5 8.25-2c1.75 2.25 1 11.5 1 14 0 4.75-1.25 9.75-1.75 14.75-3.25 19.5-9 39-14.75 58-2.25 8-5.75 18.25-8.5 26zm76.281-13.75c-10.75-2-24.25 15.75-33 28.5-.25-10.25 1.25-19.25 3.25-24.25 0-2-5.5-4-6-2.25-2 6.5-3.5 15.75-1.5 36.25 0 1 2 .5 2.5-.25 5.75-11.5 25.5-39.75 34.5-36.75.75-.5 1.25-1 .25-1.25zm44.207 15.5c-15.5 12.25-45.25 22-38.75 7.25 5.5-1.25 10.25-2.75 14.75-6.25 8.5-6.5 2-9.5.75-9.75-1.25-.5-2.5-.5-3.75-.5-2.75.5-5 1.5-7 2.5-4 2.5-7 6-9.5 9.75-6.75 12.75 2 15 5.25 15.25 7.75.25 21.25-4 39.25-17.25.25-.25-.75-1.25-1-1zm-31-2.5c1.5-1.25 3-2.25 4.5-2.75 3-1 6.25-.25.75 4.25-1.5 1.5-6 4.25-11.75 5.75 2-2.5 4.25-5 6.5-7.25zm89.301 3.75c-28.75 23.5-27 15-32 1.75-2-6-8.5-13.25-24.75 3.75 1-4 6-12 7.5-13.75 1.25-1-1.75-3.25-5.75-.75-2.25 1.5-8 15.75-8 22.25-.25 2.5 3 2.25 3 2.25 15.75-23 20-19 23.5-7.75 5 16.75 13.75 12.25 37.25-6.5.5-.25-.5-1.5-.75-1.25zm47.106-.25c-21.5 16.25-28.5 14.75-25.5 6 1-3.75 3.5-9.75 4.75-13.75.25-.75-2-3.25-3.75-2.25-6.5 11.5-12 16.5-20.5 21.25-6 3.5 0-10 4.75-16.25 0 0-2.75-4.25-4.5-3-2.5 2-8.25 14-8.5 17.25-1 12 15 2.75 22.75-5.5-6 16.5 10.5 15 31.5-2.75.25-.25-.5-1.25-1-1zm39.613-1c-15.5 12.25-45.25 22-38.75 7.25 5.5-1.25 10.25-2.75 14.75-6.25 8.5-6.5 2-9.5.75-9.75-1.25-.5-2.5-.5-3.75-.5-2.75.5-5 1.5-7 2.5-4 2.5-7 6-9.5 9.75-6.75 12.75 2 15 5.25 15.25 7.75.25 21.25-4 39.25-17.25.25-.25-.75-1.25-1-1zm-31-2.5c1.5-1.25 3-2.25 4.5-2.75 3-1 6.25-.25.75 4.25-1.5 1.5-6 4.25-11.75 5.75 2-2.5 4.25-5 6.5-7.25z"
        fill="none"
        stroke="#A75B41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </svg>
  );
}

export default Avenue;