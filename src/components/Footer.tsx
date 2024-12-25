import { Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FooterProps {
  activePage?: string;
}

const Footer = ({ activePage }: FooterProps) => {
  // Function to check if the launch date has passed
  const isLaunched = () => {
    const launchDate = new Date('2025-02-14T00:00:00');
    return new Date() >= launchDate;
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
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <Link 
            to="/" 
            className={activePage === "home" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Home
          </Link>
          {isLaunched() && (
            <Link 
              to="/players" 
              className={location.pathname === "/players" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
            >
              Players
            </Link>
          )}
          <Link 
            to="/get-started" 
            className={activePage === "get-started" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Get Started
          </Link>
          <Link 
            to="/get-started" 
            className={activePage === "pricing" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Pricing
          </Link>
          <Link 
            to="/contact" 
            className={activePage === "contact" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Contact
          </Link>
          <Link 
            to="/terms" 
            className={activePage === "terms" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Terms of Use
          </Link>
          <Link 
            to="/privacy" 
            className={activePage === "privacy" ? "text-[#000000] font-bold" : "text-gray-600 hover:text-gray-900"}
          >
            Privacy Policy
          </Link>
          {isLaunched() && (
            <a 
              href="https://dev.playerhub.co/en/auth/login"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Log In
            </a>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              <Globe className="h-4 w-4 mr-2" />
              <span>English</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">English</DropdownMenuItem>
              <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Dutch</DropdownMenuItem>
              <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">French</DropdownMenuItem>
              <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">German</DropdownMenuItem>
              <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Italian</DropdownMenuItem>
              <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Portuguese</DropdownMenuItem>
              <DropdownMenuItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="text-center mt-8 text-gray-500">
          © 2024 PlayerHub, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;