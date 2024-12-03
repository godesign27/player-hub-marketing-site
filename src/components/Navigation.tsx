import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">PlayerHub</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8 ml-52">
              <a href="/" className="text-[#000000] font-bold transition-colors">Home</a>
              <a href="/players" className="text-gray-600 hover:text-gray-900 transition-colors">Players</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4 ml-8">
              <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                Log In
              </button>
              <button className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="/" className="block px-3 py-2 text-[#000000] font-bold">Home</a>
            <a href="/players" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Players</a>
            <a href="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <button className="w-full mt-4 bg-white text-[#1A56DB] border border-[#1A56DB] px-4 py-2 rounded-lg hover:bg-secondary hover:text-[#111928] transition-colors">
              Log In
            </button>
            <button className="w-full mt-4 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;