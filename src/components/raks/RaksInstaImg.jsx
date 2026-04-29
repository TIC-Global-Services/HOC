import raksInstaImg from "../../assets/client/raks/img/raksInstaImg.png";

const RaksInstaImg = () => {
  return (
    <section className="w-full h-[60vh] overflow-hidden">
      
      <img
        src={raksInstaImg}
        alt="Raks"
        className="w-full h-full object-cover"
      />

    </section>
  );
};

export default RaksInstaImg;