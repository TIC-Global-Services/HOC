import LogoLoop from '../hooks/LogoLoop';
import emImage from '../assets/Em-image.png';
import arralyze from '../assets/arralyze.png';
import modento from '../assets/modento.png';
import denise from '../assets/denise.png';
import mp from '../assets/mp.png';
import nookees from '../assets/nookees.png';

const imageLogos = [
  { src: emImage,  alt: "Company 1" },
  { src: arralyze, alt: "Company 2" },
  { src: modento,  alt: "Company 3" },
  { src: denise,   alt: "Company 4" },
  { src: mp,       alt: "Company 5" },
  { src: nookees,  alt: "Company 6" },
];

const LogosLoop = () => {
  return (
    <div className='h-[200px] md:h-[250px] relative overflow-hidden mt-20 md:mt-10 lg:mt-10 xl:-mt-10'>
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={70}
        hoverSpeed={0}
        scaleOnHover
        fadeOut={false}
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogosLoop;