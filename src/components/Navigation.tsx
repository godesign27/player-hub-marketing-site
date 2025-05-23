
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { playersPageUrl } from "@/constants";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4 md:space-x-12">
            {/* Mobile menu button - moved to the left */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/f62f7f05-47c4-4538-be19-6d431147e810.png"
                alt="Player Hub Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">PlayerHub</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={location.pathname === "/" ?
                "border-b-4 font-medium border-gray-100 py-[18px] dark:border-gray-700 md:border-teal-500 md:dark:border-teal-500 text-teal-500 dark:text-teal-500 bg-transparent md:text-cyan-700" :
                "text-gray-600 hover:text-gray-900 transition-colors"
              }>
                {t('navigation.home')}
              </Link>

              <Link to={playersPageUrl} className={location.pathname === "/players" ?
                "border-b-4 font-medium border-gray-100 py-[18px] dark:border-gray-700 md:border-teal-500 md:dark:border-teal-500 text-teal-500 dark:text-teal-500 bg-transparent md:text-cyan-700" :
                "py-5 text-gray-600 hover:text-gray-900 transition-colors"
                }>
                  {t('navigation.players')}
              </Link>

              <Link to="/get-started" className={location.pathname === "/get-started" ?
                "border-b-4 font-medium border-gray-100 py-[18px] dark:border-gray-700 md:border-teal-500 md:dark:border-teal-500 text-teal-500 dark:text-teal-500 bg-transparent md:text-cyan-700" :
                "text-gray-600 hover:text-gray-900 transition-colors"
              }>
                {t('navigation.pricing')}
              </Link>

              <Link to="/contact" className={location.pathname === "/contact" ?
                "border-b-4 font-medium border-gray-100 py-[18px] dark:border-gray-700 md:border-teal-500 md:dark:border-teal-500 text-teal-500 dark:text-teal-500 bg-transparent md:text-cyan-700" :
                "text-gray-600 hover:text-gray-900 transition-colors"
              }>
                {t('navigation.contact')}
              </Link>
            </div>
          </div>


          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app.playerhub.co/en/auth/login"
              className="px-4 py-2.5 transition-colors text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Log In
            </a>

            <Link to="/get-started"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {t('navigation.getStarted')}
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link to="/" className={location.pathname === "/" ? "block px-3 py-2 text-[#000000] font-bold" : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.home')}</Link>
            <Link to={playersPageUrl} className={location.pathname === "/players" ? "block px-3 py-2 text-[#000000] font-bold" : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.players')}</Link>
            <Link to="/get-started" className={location.pathname === "/pricing" ? "block px-3 py-2 text-[#000000] font-bold" : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.pricing')}</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "block px-3 py-2 text-[#000000] font-bold" : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"}>{t('navigation.contact')}</Link>

            <a href="https://app.playerhub.co/en/auth/login" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              Log In
            </a>

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
