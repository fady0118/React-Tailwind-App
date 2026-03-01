import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/codeExamples.js";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  // hover style
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const tabsStyles = {
    basicStyle: `px-3 py-2 backdrop-blur-sm text-xs sm:text-xm rounded-t-lg border transition-all duration-200 hover:cursor-pointer`,
    activeStyle: `bg-blue-500/30 text-white border-blue-400/20`,
    inActiveStyle: `bg-white/5 text-gray-300 border-white/10 hover:bg-white/10`,
  };

  function handleTabClick(e) {
    setActiveTab(e.target.textContent);
  }

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
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1 sm:space-x-2 items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-300">CodeFlow</span>
              </div>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </div>
            <div className="p-3 sm:p-4 relative h-full">
              {/* file tabs */}
              <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                <button className={`${tabsStyles.basicStyle} ${activeTab === "App.jsx" ? tabsStyles.activeStyle : tabsStyles.inActiveStyle}`} onClick={(e) => handleTabClick(e)}>
                  App.jsx
                </button>
                <button className={`${tabsStyles.basicStyle} ${activeTab === "Hero.jsx" ? tabsStyles.activeStyle : tabsStyles.inActiveStyle}`} onClick={(e) => handleTabClick(e)}>
                  Hero.jsx
                </button>
                <button className={`${tabsStyles.basicStyle} ${activeTab === "Navbar.jsx" ? tabsStyles.activeStyle : tabsStyles.inActiveStyle}`} onClick={(e) => handleTabClick(e)}>
                  Navbar.jsx
                </button>
              </div>
              {/* code content  */}
              <div className="relative overflow-hidden h-[70%] sm:h-[62.5%]  lg:h-[78%]">
                <SyntaxHighlighter
                  language="javascript"
                  style={nightOwl}
                  wrapLongLines={true}
                  customStyle={{ margin: 0, padding: "0.75rem", borderRadius: "8px", fontSize: "0.75rem", lineHeight: "1.3", border: "1px solid #3c3c3c", overflowY: "auto", maxHeight: "calc(100%)" }}
                >
                  {codeExamples[activeTab]}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* Floating Cards */}

          <div className={`hidden sm:block absolute -bottom-4 -right-4 p-4 rounded-lg w-72 h-24 z-10 text-sm ${floatingCards[activeTab].bgColor} ${floatingCards[activeTab].textColor}`}>
            <div className="flex space-x-2 space-y-2 px-1">
              <span className={floatingCards[activeTab].iconColor}>{floatingCards[activeTab].icon}</span>
              <p className="font-semibold">{floatingCards[activeTab].title}</p>
            </div>
            <span>{floatingCards[activeTab].content}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
