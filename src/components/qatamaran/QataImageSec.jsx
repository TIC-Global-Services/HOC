import qataImg from "../../assets/client/qatamaran/qataSecImg.png";

const QataImageSec = () => {
  return (
    <section className="w-full flex">
      
      <img
        src={qataImg}
        alt="Qatamaran"
        className="
          w-full 
          h-[50vh]       
          md:h-screen     
          object-cover object-[40%_80%]
        "
      />

    </section>
  );
};

export default QataImageSec;