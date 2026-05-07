const GridOverlay = ({
  color = "255,255,255",
  opacity = 0.06,
  size = 64,
  position = "0px 0px",
}) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(${color}, ${opacity}) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(${color}, ${opacity}) 1px,
            transparent 1px
          )
        `,
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: position,
      }}
    />
  );
};

export default GridOverlay;