import ImageTrail from "../hooks/ImageTrail";

const ImagesTrail = ({ image }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <ImageTrail
        items={[image, image, image, image, image, image]} 
        variant={1}
      />
    </div>
  );
};

export default ImagesTrail;