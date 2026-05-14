import LogoLoop from '../hooks/LogoLoop';

import padlr from '../assets/client/page/clientsLogo/Padlr_Logo.png';
import syed from '../assets/client/page/clientsLogo/syedLogo.png';
import raks from '../assets/client/page/clientsLogo/raksLogo.png';
import qatamaran from '../assets/client/page/clientsLogo/qatamaranLogo.png';
import gopalan from '../assets/client/page/clientsLogo/Gopalan Group_Logo.png';


const imageLogos = [
  {
    src: qatamaran,
    alt: "Company 1",
    width: 180,
    height: 180,
  },
  {
    src: padlr,
    alt: "Company 2",
    width: 120,
    height: 120,
  },
  {
    src: gopalan,
    alt: "Company 3",
    width: 150,
    height: 150,
  },
  {
    src: syed,
    alt: "Company 4",
    width: 150,
    height: 150,
  },
  {
    src: raks,
    alt: "Company 5",
    width: 150,
    height: 150,
  },
];

const LogosLoop = () => {
  return (
    <div className='h-[200px] md:h-[250px] relative place-items-center overflow-hidden mt-20 md:mt-10 lg:mt-10 xl:-mt-10'>
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