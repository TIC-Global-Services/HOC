import qataImg from "../../assets/client/qatamaran/qataSecImg.png";

const QataImageSec = () => {
  return (
    <section className="w-full h-auto md:min-h-screen flex">

      <img
        src={qataImg}
        alt="Padlr"
        className="w-full h-screen object-cover"
      />

    </section>
  );
};

export default QataImageSec;