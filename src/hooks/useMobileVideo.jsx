import { useEffect } from "react";

const useMobileVideo = (videoRef) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    //IMPORTANT: wait until video is ready
    video.addEventListener("loadeddata", playVideo);

    // fallback for iOS interaction
    const handleTouch = () => playVideo();
    window.addEventListener("touchstart", handleTouch, { once: true });

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [videoRef]);
};

export default useMobileVideo;