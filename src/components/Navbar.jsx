import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer" onClick={()=>{scrollTo(0,0)}}>
            <div>
              <img src="/logo.png" alt="logo image" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-lg sm::text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>
          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-gary-300 hover:text-white text-small lg:text-base">
              Features
            </a>
            <a href="#pricing" className="text-gary-300 hover:text-white text-small lg:text-base">
              Pricing
            </a>
            <a href="#testimonials" className="text-gary-300 hover:text-white text-small lg:text-base">
              Testimonials
            </a>
          </div>
          <button className="md:hidden p-2 text-gray-300 hover:text-white">
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 hover:cursor-pointer" onClick={() => setMobileMenuOpen(false)}/> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 hover:cursor-pointer" onClick={() => setMobileMenuOpen((prev) => !prev)} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-linear-to-r from-slate-900 to-70% to-slate-900/25 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 ">
            <a href="#features" className="block text-gary-300 hover:text-white text-small lg:text-base">
              Features
            </a>
            <a href="#pricing" className="block text-gary-300 hover:text-white text-small lg:text-base">
              Pricing
            </a>
            <a href="#testimonials" className="block text-gary-300 hover:text-white text-small lg:text-base">
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
