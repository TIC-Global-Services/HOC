import LogoLoop from '../hooks/LogoLoop';


//image sources
const imageLogos = [
  { src: "/src/assets/Em-image.png", alt: "Company 1" },
  { src: "/src/assets/arralyze.png", alt: "Company 2" },
  { src: "/src/assets/modento.png", alt: "Company 3" },
  { src: "/src/assets/denise.png", alt: "Company 4" },
  { src: "/src/assets/mp.png", alt: "Company 5" },
  { src: "/src/assets/nookees.png", alt: "Company 6" },
];

const LogosLoop = () => {
  return (
    <div className='h-[200px] md:h-[300px] relative overflow-hidden mt-20 md:mt-0'>
      {/* Basic horizontal loop */}
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