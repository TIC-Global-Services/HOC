import React from "react";
import Video from '../../../assets/client/gopalan/patternGif.mp4'

const Section10 = () => {
  return (
    <div className="w-[100%] h-screen overflow-hidden relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen object-cover"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
  );
};

export default Section10;
