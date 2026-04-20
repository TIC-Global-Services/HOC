import img from "../../assets/client/padlr/img/padlrSecImg.png";

const PadlrImageSec = () => {
  return (
    <section className="w-full h-auto md:min-h-screen flex items-center justify-center">

      <img
        src={img}
        alt="Padlr"
        className="w-full h-full  object-cover"
      />

    </section>
  );
};

export default PadlrImageSec;