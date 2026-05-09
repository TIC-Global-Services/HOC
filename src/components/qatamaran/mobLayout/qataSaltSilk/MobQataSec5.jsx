import centerVideo from "../../../../assets/client/qatamaran/Qatamaran_HOC_Website.mov";
import useMobileVideoFix from "../../../../hooks/useMobileVideo";
import { useRef } from "react";

import GridOverlay from "../../../GridOverlay";

const MobQataSec5 = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef);

  return (
    <section className="w-full relative overflow-hidden bg-white">

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* VIDEO */}
      <div className="w-full h-[40vh] overflow-hidden relative z-10">
        <video
          ref={videoRef}
          src={centerVideo}
          autoPlay
          loop
          webkit-playsinline="true"
          controls={false}
          preload="auto"
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* HEADING */}
      <div className="w-full flex items-center justify-center px-5 py-12 relative z-10">
        <h1 className="salo uppercase text-start text-[#1E382D] text-[50px] leading-[90%]">
          Tidal <br /> Salt <br /> Stitch
        </h1>
      </div>

    </section>
  );
};

export default MobQataSec5;