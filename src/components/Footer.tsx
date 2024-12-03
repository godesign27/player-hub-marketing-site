import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
          <Link to="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link>
          <Link to="/following" className="text-gray-600 hover:text-gray-900">Following</Link>
          <Link to="/players" className="text-gray-600 hover:text-gray-900">Players</Link>
          <Link to="/support" className="text-gray-600 hover:text-gray-900">Support</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Use</Link>
          <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <Globe className="h-4 w-4" />
            <span>English</span>
          </button>
        </nav>
        <div className="text-center mt-8 text-gray-500">
          © 2024 PlayerHub and GO Design, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;