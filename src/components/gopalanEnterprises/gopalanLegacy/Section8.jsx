const gopalanGroupImg = "https://ik.imagekit.io/hoc01/assets/client/gopalan/Gopalan_groups.png";

export default function Section8() {
  return (
    <section
      className="h-screen w-full overflow-hidden"
    >
      <div className="relative w-full h-full">
        <img
          src={gopalanGroupImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}