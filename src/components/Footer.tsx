import { Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/6746630b-9c98-4ba7-8c5a-bc0d28548c6f.png" 
            alt="PlayerHub Logo" 
            className="h-8"
          />
        </div>
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <Link to="/" className="text-[#000000] font-bold">Home</Link>
          <Link to="/players" className="text-gray-600 hover:text-gray-900">Players</Link>
          <Link to="/get-started" className="text-gray-600 hover:text-gray-900">Get Started</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Use</Link>
          <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
          <Link 
            to="/login" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg transition-colors"
          >
            Log In
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              <Globe className="h-4 w-4 mr-2" />
              <span>English</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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