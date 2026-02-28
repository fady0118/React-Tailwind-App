import React, { useEffect, useState } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,245,0.15) , transparent 40%)` }} />
    
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative order-2 w-full">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-3 shadow-2xl border border-white/10">
          <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:h-[450px] border border-white/5">
            {/* IDE header */}
            <div className="flex items-center justify-between px-4 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10 ">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
