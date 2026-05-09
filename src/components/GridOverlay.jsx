const GridOverlay = ({
  color = "255,255,255",
  opacity = 0.06,
  size = 100,
  position = "0px 0px",
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="w-full h-full"
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

          /* SHIFT GRID */
          backgroundPosition: `-1px -1.5px`,

          /* REMOVE RIGHT + TOP CLOSING */
          width: "calc(100% - 2px)",
          height: "calc(100% - 2px)",
        }}
      />
    </div>
  );
};

export default GridOverlay;