// components/reusable/Panel.jsx

export default function Panel({ left, right, leftBg, rightBg, full, children, bg, style }) {

  if (full) {
    return (
      <div className={`panel w-screen h-full flex-shrink-0 ${bg ?? "bg-white"}${style}`} >
        {children}
      </div>
    );
  }

  return (
    <div className="panel w-screen h-full flex-shrink-0 flex">
      <div className={`w-1/2 h-full ${leftBg ?? "bg-white"}`}>
        {left}
      </div>
      <div className={`w-1/2 h-full ${rightBg ?? "bg-black"}`}>
        {right}
      </div>
    </div>
  );
}