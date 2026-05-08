import React from "react";

import GridOverlay from "../../GridOverlay";

const Section12 = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-white">

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        <div className="w-[50%]">

          <h2
            className="
              salo
              uppercase
              text-[#E96428]
              text-start
              leading-none
              tracking-tight
              text-[clamp(50px,20vh,140px)]
            "
          >
            Urban
            <br />
            Legacy
            <br />
            Build
          </h2>

        </div>

      </div>
    </section>
  );
};

export default Section12;