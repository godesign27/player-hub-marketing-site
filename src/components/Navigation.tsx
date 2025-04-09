
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/f62f7f05-47c4-4538-be19-6d431147e810.png" 
                alt="Player Hub Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">PlayerHub</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={location.pathname === "/" ? "text-[#000000] font-bold transition-colors" : "text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.home')}</Link>
              <Link to="/players" className={location.pathname === "/players" ? "text-[#000000] font-bold transition-colors" : "text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.players')}</Link>
              <Link to="/get-started" className={location.pathname === "/pricing" ? "text-[#000000] font-bold transition-colors" : "text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.pricing')}</Link>
              <Link to="/contact" className={location.pathname === "/contact" ? "text-[#000000] font-bold transition-colors" : "text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.contact')}</Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/get-started" className={`${location.pathname === "/get-started" ? "bg-[#000000]" : "bg-primary"} px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-colors`}>
              {t('navigation.getStarted')}
            </Link>
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
            <Link to="/" className={location.pathname === "/" ? "block px-3 py-2 text-[#000000] font-bold" : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.home')}</Link>
            <Link to="/players" className={location.pathname === "/players" ? "block px-3 py-2 text-[#000000] font-bold" : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.players')}</Link>
            <Link to="/get-started" className={location.pathname === "/pricing" ? "block px-3 py-2 text-[#000000] font-bold" : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.pricing')}</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "block px-3 py-2 text-[#000000] font-bold" : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.contact')}</Link>
            <Link to="/get-started" className="block w-full mt-4">
              <button className={`w-full ${location.pathname === "/get-started" ? "bg-[#000000]" : "bg-primary"} px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-colors`}>
                {t('navigation.getStarted')}
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
