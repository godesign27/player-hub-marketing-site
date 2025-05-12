
import { Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { playersPageUrl } from "@/constants";

interface FooterProps {
  activePage?: string;
}

const Footer = ({ activePage }: FooterProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/f62f7f05-47c4-4538-be19-6d431147e810.png"
              alt="Player Hub Logo"
              className="h-8"
            />
            <span className="text-xl font-bold text-gray-900">PlayerHub</span>
          </div>
        </div>

        {/* Top row with primary links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-6">
          <Link
            to="/"
            className={activePage === "home" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            {t('navigation.home')}
          </Link>
          <Link
            to={playersPageUrl}
            className={location.pathname === "/players" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            {t('navigation.players')}
          </Link>
          <Link
            to="/recruiters"
            className={location.pathname === "/recruiters" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Recruiters
          </Link>
          <Link
            to="/coaches"
            className={location.pathname === "/coaches" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Coaches
          </Link>
          <Link
            to="/trainers"
            className={location.pathname === "/trainers" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Trainers
          </Link>
          <Link
            to="/get-started"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t('navigation.getStarted')}
          </Link>
        </nav>

        {/* Separator line between rows */}
        <div className="border-t border-gray-200 my-6 w-full max-w-4xl mx-auto"></div>

        {/* Bottom row with secondary links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <Link
            to="/get-started"
            className={activePage === "pricing" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            {t('navigation.pricing')}
          </Link>
          <Link
            to="/contact"
            className={activePage === "contact" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            {t('navigation.contact')}
          </Link>
          <Link
            to="/terms"
            className={activePage === "terms" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            {t('footer.termsOfUse')}
          </Link>
          <Link
            to="/privacy"
            className={activePage === "privacy" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            {t('footer.privacyPolicy')}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              <Globe className="h-4 w-4 mr-2" />
              <span>{t('languages.' + i18n.language)}</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage('en')}>{t('languages.en')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('nl')}>{t('languages.nl')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('fr')}>{t('languages.fr')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('de')}>{t('languages.de')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('it')}>{t('languages.it')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('pt')}>{t('languages.pt')}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('es')}>{t('languages.es')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="text-center mt-8 text-gray-500">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
