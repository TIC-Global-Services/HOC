import { useEffect } from "react";

const useMobileVideo = (videoRef) => {
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log(err);
      }
    };

    const onReady = () => {
      playVideo();
    };

    video.addEventListener("loadedmetadata", onReady);

    const touchStart = () => {
      playVideo();
    };

    document.addEventListener("touchstart", touchStart, {
      once: true,
    });

    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      document.removeEventListener("touchstart", touchStart);
    };
  }, [videoRef]);
};

export default useMobileVideo;