import raksInstaImg from "../../assets/client/raks/img/raksInstaImg.png";

const RaksInstaImg = () => {
  return (
    <section className="w-full h-auto md:min-h-screen flex items-center justify-center">

      <img
        src={raksInstaImg}
        alt="Padlr"
        className="w-full h-full  object-cover"
      />

    </section>
  );
};

export default RaksInstaImg;