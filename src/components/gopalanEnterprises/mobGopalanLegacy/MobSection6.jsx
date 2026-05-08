import { useRef } from "react";

import centerVideo from "../../../assets/client/gopalan/GE_Visual Identity 1_Animation.mp4";

import useMobileVideoFix from "../../../hooks/useMobileVideo";
import GridOverlay from "../../GridOverlay";

const MobSection6 = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >

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
      <div className="relative z-10">

        {/* VIDEO */}
        <div className="w-full overflow-hidden">

          <video
            ref={videoRef}
            src={centerVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            webkit-playsinline="true"
            className="
              w-full
              h-full
              object-contain
            "
          />

        </div>

        {/* HEADING */}
        <div
          className="
            w-full
            flex
            items-center
            justify-center
            px-5
            py-16
          "
        >
          <h1
            className="
              salo
              uppercase
              text-start
              text-[#E96428]
              text-[50px]
              leading-[90%]
            "
          >
            Urban
            <br />
            Legacy
            <br />
            Build
          </h1>
        </div>

      </div>
    </section>
  );
};

export default MobSection6;