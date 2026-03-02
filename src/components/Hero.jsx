import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
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
  const currentFloatingCard = floatingCards[activeTab];
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="fixed inset-0 opacity-30" style={{ background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,245,0.15) , transparent 40%)` }} />

      <div className="fixed top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div className="lg:flex lg:flex-col lg:items-start">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">Introducting CodeFlow AI</span>
            </div>
            <h1 className="text-center lg:text-start text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100">
              <span className="block bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:mb-2">Code Faster</span>
              <span className="block bg-linear-to-b from-blue-400 via-cyan-400 to-blue-400  bg-clip-text text-transparent mb-1 sm:mb-2">Build Better</span>
              <span className="block bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:mb-2">With CodeFlow AI</span>
            </h1>
            <p className="text-center lg:text-start text-md md:text-base lg:text-lg text-gray-400 mx-auto lg:mx-0 mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              Accelerate your development workflow with intelligent code completion, automated testing, and smart debugging. Ship production-ready code 10x faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                <span>Start Coding Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="relative order-2 w-full sm:w-3/4 lg:w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-3 shadow-2xl border border-white/10">
              <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-75 sm:h-100 lg:h-125 border border-white/5">
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
                      customStyle={{
                        margin: 0,
                        padding: "0.75rem",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        lineHeight: "1.3",
                        border: "1px solid #3c3c3c",
                        overflowY: "auto",
                        maxHeight: "calc(100%)",
                        textAlign: "left",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 translate-8 w-72 rounded-lg p-4 backdrop-blur-3xl border border-white/10 shadow-2xl ${currentFloatingCard.bgColor} ${currentFloatingCard.textColor}`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-6 h-6 flex items-center justify-center text-sm font-bold ${currentFloatingCard.iconColor}`}>{currentFloatingCard.icon}</div>
                  <span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>{currentFloatingCard.title}</span>
                </div>
                <div className={`text-sm text-left ${currentFloatingCard.contentColor}`}>{currentFloatingCard.content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
