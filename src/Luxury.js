import React, { useEffect } from "react";
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

function Luxury() {
  gsap.registerPlugin(ScrollTrigger);

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
    <svg viewBox="0 0 319.5 209.33" className="luxury">
      <path
        className="draw-me"
        fontFamily="Beatlys"
        d="M52.246 101.731c.991-.779 1.982-1.558 3.622-3.398s3.93-4.743 6.785-8.448 6.277-8.212 8.896-11.681c2.62-3.469 4.436-5.9 6.372-8.625a274.704 274.704 0 005.616-8.236c1.628-2.49 2.832-4.448 4.023-6.371 1.192-1.923 2.372-3.811 3.269-5.239.896-1.428 1.51-2.395 2.135-3.445a35.996 35.996 0 001.888-3.552c.625-1.368 1.239-2.973 1.888-4.72.649-1.745 1.333-3.633 1.71-4.907.378-1.274.45-1.935.426-2.537-.024-.601-.142-1.144-.4-1.569-.26-.425-.661-.732-1.133-.956-.472-.225-1.015-.366-1.499-.355-.484.012-.909.177-1.499.413-.59.236-1.345.543-2.065.956-.72.413-1.404.932-2.277 1.687a41.39 41.39 0 00-3.044 2.926 52.344 52.344 0 00-3.41 4.048c-1.145 1.498-2.278 3.126-3.528 4.873-1.251 1.746-2.62 3.61-4.496 6.442a232.106 232.106 0 00-6.536 10.525 216.393 216.393 0 00-6.16 11.268c-1.71 3.386-2.961 6.17-4.082 8.944a147.117 147.117 0 00-2.89 7.834c-.78 2.301-1.346 4.142-2.238 7.146-.892 3.004-2.11 7.17-2.876 10.345-.767 3.174-1.083 5.354-1.312 7.778-.23 2.424-.37 5.09-.347 6.978.024 1.888.212 2.997.472 4.095.26 1.097.59 2.183 1.05 3.162.46.98 1.05 1.852 1.759 2.501.708.649 1.534 1.073 2.478 1.392.944.318 2.006.53 3.008.519 1.003-.012 1.947-.248 3.009-.555a35.304 35.304 0 003.74-1.298 46.336 46.336 0 004.85-2.325c1.533-.86 2.784-1.734 4.866-3.28 2.083-1.545 4.997-3.763 7.581-5.905 2.584-2.141 4.838-4.206 6.985-6.183 2.147-1.976 4.189-3.864 5.777-5.325 1.588-1.462 2.722-2.497 4.037-4.297 1.314-1.8 2.809-4.367 2.503-4.012-.306.354-2.412 3.63-3.635 6.04-1.223 2.41-1.562 3.955-1.77 5.006-.208 1.05-.285 1.611-.31 2.138-.025.526.002 1.015.216 1.352.215.337.615.52 1.232.596a5.79 5.79 0 002.327-.226c.876-.267 1.794-.768 2.895-1.469 1.101-.7 2.386-1.601 4.146-3.053 1.76-1.452 3.997-3.454 5.999-5.907s3.77-5.356 4.672-6.874c.9-1.518.934-1.652 1.001-1.518.067.134.167.534-.066 1.118-.234.583-.802 1.35-1.544 2.794-.743 1.444-1.66 3.563-2.27 5.223a26.333 26.333 0 00-1.142 3.997c-.234 1.134-.4 2.202-.35 3.054.05.85.317 1.485.676 2.002.359.517.81.918 1.252 1.15.442.234.876.3 1.518.276a10.829 10.829 0 002.37-.384c.875-.242 1.776-.61 3.224-1.27 1.447-.661 3.441-1.615 5.235-2.627 1.793-1.01 3.386-2.079 5.062-3.297a146.884 146.884 0 004.318-3.286c.884-.698.895-.728 1.101-.426.207.303.607.937-.094 1.87-.7.934-2.503 2.17-4.873 4.864-2.37 2.695-5.306 6.85-6.582 9.137-1.276 2.286-.892 2.703-.534 2.811.359.108.692-.092 1.326-.718.634-.626 1.569-1.677 2.445-2.611.876-.935 1.693-1.752 2.578-2.703.884-.952 1.835-2.036 3.437-3.705 1.602-1.669 3.855-3.921 5.857-5.748 2.003-1.828 3.755-3.23 5.865-4.856 2.111-1.627 4.58-3.48 6.608-4.78 2.028-1.302 3.613-2.053 5.499-2.637 1.886-.584 4.071-1.001 5.122-1.46 1.051-.458.968-.958.142-1.526-.825-.568-2.394-1.202-5.013-1.778-2.62-.576-6.291-1.093-9.704-.726-3.412.367-6.566 1.619-8.444 2.595-1.877.976-2.478 1.677-2.477 2.629.001.951.603 2.153 1.67 4.405 1.069 2.253 2.603 5.557 3.904 8.185 1.3 2.628 2.369 4.58 3.437 6.09 1.068 1.51 2.136 2.578 3.154 3.312 1.018.734 1.985 1.135 3.17 1.326 1.185.192 2.586.175 3.78.025 1.192-.15 2.177-.434 3.403-.901a40.115 40.115 0 003.888-1.736c1.193-.617 2.11-1.201 3.3-1.977a273.156 273.156 0 004.505-3.008c1.856-1.264 4.109-2.824 6.215-4.426 2.107-1.601 4.067-3.245 5.285-4.246 1.219-1.001 1.694-1.36 1.99-1.935.296-.576.413-1.368.36-1.81-.054-.443-.28-.535-.622-.51-.342.025-.8.166-1.248.467-.446.3-.88.76-1.502 2.124-.621 1.364-1.43 3.633-2.173 5.626-.743 1.993-1.419 3.71-1.807 4.928-.387 1.218-.488 1.938-.362 2.56.126.624.476 1.15.94 1.416.462.266 1.038.274 1.864.032.825-.242 1.902-.734 3.332-1.535 1.431-.8 3.217-1.91 5.227-3.479 2.01-1.568 4.247-3.596 6.12-5.978 1.873-2.381 3.383-5.118 4.192-6.566.81-1.447.918-1.606.943-1.555.025.05-.034.309-.467 1.276-.434.968-1.244 2.645-1.974 4.472-.73 1.827-1.38 3.805-1.923 5.64-.542 1.836-.976 3.53-1.05 4.706-.075 1.177.208 1.836.626 2.432.417.597.968 1.13 1.468 1.343.5.212.951.104 1.719-.067.767-.172 1.852-.405 3.2-.889 1.347-.484 2.957-1.218 4.288-1.869a41.58 41.58 0 003.533-1.919 87.243 87.243 0 003.591-2.344 95.168 95.168 0 003.647-2.59c1.331-.996 2.868-2.205 4.202-3.534 1.335-1.33 2.467-2.781 3.34-3.955.874-1.174 1.487-2.071 1.888-3.044.402-.973.59-2.023.485-2.69-.106-.667-.507-.95-1.062-.986-.555-.036-1.262.177-1.876.436-.614.26-1.133.567-1.605 1.05-.472.485-.897 1.145-1.233 1.67-.337.525-.585.915-.815 1.381-.23.466-.442 1.009-.63 1.422-.19.413-.355.696-.39 1.156-.035.461.06 1.098.237 1.529.177.43.437.654.755.778.319.123.696.147 1.204.17.507.024 1.144.048 1.622.113.478.065.797.171 1.428.407.631.236 1.575.602 2.478 1.009.902.407 1.764.856 2.282 1.216.52.36.696.631.85.944.153.313.283.667.371.997.088.33.136.637-.012 1.02-.148.383-.49.843-.885 1.657-.396.815-.844 1.983-1.192 2.891-.348.909-.596 1.56-.702 2.118-.105.559-.07 1.03.085 1.378.154.349.423.573.69.686.265.113.524.113.902.16.377.047.873.142 1.528.2.655.06 1.469.083 2.737-.188 1.268-.272 2.99-.838 4.961-1.629a90.292 90.292 0 005.958-2.678c1.77-.873 3.092-1.605 4.702-2.52 1.61-.914 3.51-2.011 5.316-3.19 1.805-1.18 3.516-2.443 4.59-3.534 1.073-1.092 1.51-2.012 1.58-2.784.072-.773-.223-1.398-.53-1.635-.307-.236-.626-.083-.962.165-.337.248-.69.59-1.05 1.534-.36.944-.727 2.491-.995 3.562-.268 1.07-.44 1.668-.71 2.441-.272.774-.644 1.72-.96 2.709-.315.988-.574 2.014-.704 3.035-.13 1.02-.13 2.035.042 2.643.172.607.514.808 1.01 1.008.495.2 1.144.401 1.792.377.649-.024 1.298-.271 2.023-.631.726-.36 1.528-.832 2.773-1.623 1.245-.79 2.932-1.9 4.49-3.05 1.557-1.15 2.985-2.342 4.365-3.551a58.823 58.823 0 004.43-4.265c1.717-1.83 3.817-4.26 4.968-5.404 1.151-1.144 1.352-1.002 1.363-.72.011.284-.166.708-.437 1.995-.271 1.286-.637 3.433-1.392 6.648-.756 3.216-1.9 7.499-3.385 12.584a512.443 512.443 0 01-4.803 15.504 184.497 184.497 0 01-4.383 12.023c-1.73 4.318-4.03 9.781-5.737 13.564-1.706 3.783-2.817 5.886-3.824 7.806-1.006 1.919-1.907 3.654-2.925 5.423a56.844 56.844 0 01-3.788 5.773c-1.635 2.203-3.77 4.806-5.64 6.608-1.868 1.802-3.47 2.803-4.755 3.654-1.285.851-2.253 1.552-3.52 2.036-1.268.484-2.837.75-4.188.75-1.352.001-2.486-.266-3.37-.95-.885-.683-1.52-1.785-1.937-3.27-.417-1.485-.618-3.354-.184-5.64.434-2.286 1.502-4.99 3.07-8.06 1.569-3.07 3.638-6.508 6.04-10.029 2.404-3.52 5.14-7.125 7.11-9.51 1.968-2.387 3.17-3.555 4.721-5.24 1.552-1.686 3.454-3.888 5.273-5.807a70.547 70.547 0 015.323-5.073c1.77-1.519 3.571-2.92 6.024-4.872 2.453-1.953 5.557-4.456 8.66-6.875 3.104-2.42 6.208-4.756 8.542-6.52 2.334-1.765 3.899-2.958 5.507-4.156a211.128 211.128 0 014.723-3.429c1.463-1.026 2.738-1.876 3.988-2.737 1.25-.861 2.478-1.734 3.516-2.52 1.039-.784 1.888-1.48 2.737-2.176"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </svg>
  );
}

export default Luxury;
