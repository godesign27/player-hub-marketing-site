import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "@/pages/Index";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import GetStarted from "@/pages/GetStarted";
import Players from "@/pages/Players";
import LaunchPage from "@/pages/LaunchPage";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add HubSpot tracking script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = '//js.hs-scripts.com/48483794.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.getElementById('hs-script-loader');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const isLaunchDate = new Date() >= new Date('2024-02-14T00:00:00');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route 
              path="/" 
              element={isLaunchDate ? <Index /> : <LaunchPage />} 
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route 
              path="/get-started" 
              element={isLaunchDate ? <GetStarted /> : <Navigate to="/" replace />} 
            />
            <Route 
              path="/players" 
              element={isLaunchDate ? <Players /> : <Navigate to="/" replace />} 
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;