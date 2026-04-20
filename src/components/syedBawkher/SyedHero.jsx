import img1 from "../../assets/client/syedBawkher/img/heroImg1.png";
import img2 from "../../assets/client/syedBawkher/img/heroImg2.png";
import img3 from "../../assets/client/syedBawkher/img/heroImg3.png";
import img4 from "../../assets/client/syedBawkher/img/heroImg4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const SyedHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">

      {/* LEFT SIDE */}
      <div
        className="relative w-full h-[500px] md:h-screen md:max-w-[700px] flex-shrink-0 overflow-hidden"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
        }}
      >
        {/* Floating images — positioned relative to this box */}
        <img src={img1} className="absolute top-[10%] left-[10%] w-[60px] md:w-[100px]" />
        <img src={img2} className="absolute top-[15%] right-[15%] w-[80px] md:w-[120px]" />
        <img src={img3} className="absolute bottom-[10%] left-[10%] w-[120px] md:w-[180px]" />
        <img src={img4} className="absolute bottom-[10%] right-[10%] w-[120px] md:w-[180px]" />

        {/* Center content with flexbox, no inner absolute */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <h1 className="font-[1000] alinsa text-[#060EBB] text-start text-[80px] md:text-[120px] lg:text-[160px] leading-none tracking-tight">
            SYED BAWKHER
          </h1>

          <button
            className="w-[220px] h-[70px] rounded-full border-2 bg-[#060EBB]
              text-white flex items-center justify-center
              text-sm md:text-base font-medium"
          >
            FASHION
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full flex items-center text-start px-6 md:px-10 py-10 md:py-0">
        <p className="jost capitalize text-[14px] md:text-[26px] md:leading-[140%] font-[500] tracking-tight text-black max-w-[656px]">
          Since 1904, Syed Bawkher & Co. has been a mainstay of the sartorial scene in Madras, and remains one of the oldest continual bespoke tailoring houses in the world. 
          Marrying the custodial heritage of five generations with refined <span className="text-[#262666] text-[40px] salo">craftsmanship and contemporary</span> technique, 
          they epitomise the cardinal values of transparency, quality, and excellence in the service of the impeccable gentleman.
        <br /><br />
        Haus of Chaos created an analogue brochure for Syed Bawkher & Co.,
        as a piece of literature to be remembered for its textual and textural richness. 
        A philosophy of <span className="text-[#262666] salo text-[40px]">“experience and encounter”</span>  informed Haus of Chaos’ process towards an object that materially imparts the sophistication intrinsic to Syed Bawkher.
        </p>
      </div>

    </section>
  );
};

export default SyedHero;
