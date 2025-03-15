
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  // Skip cookie consent on the home page
  const isHomePage = location.pathname === "/" || location.pathname === "/index";

  useEffect(() => {
    // Don't show cookies on the home page
    if (isHomePage) {
      return;
    }
    
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      // Small delay to ensure animation works on first load
      setTimeout(() => setIsVisible(true), 500);
    }
  }, [isHomePage]);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  // Don't render anything on the home page
  if (isHomePage || !isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. Read our{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Use
            </Link>{" "}
            to learn more.
          </div>
          <Button 
            onClick={handleAccept}
            className="whitespace-nowrap"
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
