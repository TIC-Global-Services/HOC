import { useEffect } from "react";

const useMobileVideo = (videoRef) => {
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Required for iOS Safari
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    // Safari fix
    const handleCanPlay = () => {
      setTimeout(() => {
        playVideo();
      }, 100);
    };

    video.addEventListener("canplay", handleCanPlay);

    // Fallback after first touch
    const handleTouch = () => {
      playVideo();
    };

    window.addEventListener("touchstart", handleTouch, {
      once: true,
    });

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [videoRef]);
};

export default useMobileVideo;