import LogoLoop from '../hooks/LogoLoop';

import padlr from '../assets/client/page/clientsLogo/padlr.png';
import syed from '../assets/client/page/clientsLogo/syedLogo.png';
import raks from '../assets/client/page/clientsLogo/raks.jpg';
import qatamaran from '../assets/client/page/clientsLogo/qata.jpg';
import gopalan from '../assets/client/page/clientsLogo/GE.jpg';

const imageLogos = [
  {
    src: qatamaran,
    alt: "Company 1",
    width: 250,
    height: 250,
  },
  {
    src: padlr,
    alt: "Company 2",
    width: 140,
    height: 140,
  },
  {
    src: gopalan,
    alt: "Company 3",
    width: 220,
    height: 100,
  },
  {
    src: syed,
    alt: "Company 4",
    width: 250,
    height: 250,
  },
  {
    src: raks,
    alt: "Company 5",
    width: 120,
    height: 120,
  },
];

const LogosLoop = () => {
  return (
    <div className='h-[200px] md:h-[200px] relative place-items-center overflow-hidden mt-20 md:mt-10 lg:mt-10 xl:-mt-10'>
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        gap={70}
        hoverSpeed={0}
        scaleOnHover
        fadeOut={false}
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default LogosLoop;