import { useEffect, useState } from "react";

export default function HoverEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // hover style
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="fixed inset-0 opacity-30" style={{ background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,245,0.15) , transparent 40%)` }} />;
}
