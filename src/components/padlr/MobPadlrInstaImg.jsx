import padlrInstaImg from "../../assets/client/padlr/img/padlrSecImg.png";

const MobPadlrInstaImg = () => {
  return (
    <section className="w-full h-[60vh] overflow-hidden">
      <img
        src={padlrInstaImg}
        alt="Raks"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default MobPadlrInstaImg;
