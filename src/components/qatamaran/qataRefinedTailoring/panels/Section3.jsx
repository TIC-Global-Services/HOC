


const refinedImg3 = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/block3Img.png";

const Section3 = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/client/padlr/img/checkBg.png)',
        backgroundSize: "cover",
        backgroundColor: "#8FC4E9",
      }}
    >
      {/* IMAGE */}
      <img
        src={refinedImg3}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover",  
          objectPosition: "center", 
        }}
      />
    </section>
  );
};

export default Section3;