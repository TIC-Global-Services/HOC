export default function Panel({ children }) {
  return (
    <section className="w-screen h-screen flex-shrink-0">
      {children}
    </section>
  );
}