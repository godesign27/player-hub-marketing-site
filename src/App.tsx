
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "@/pages/Index";
import Contact from "@/pages/Contact";
import GetStarted from "@/pages/GetStarted";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Players from "@/pages/Players";
import Pricing from "@/pages/Pricing";
import Recruiters from "@/pages/Recruiters";
import Coaches from "@/pages/Coaches";
import Trainers from "@/pages/Trainers"; // Add import for new page
import ScrollToTop from "@/components/ScrollToTop";
import HubspotTracking from "@/components/HubspotTracking";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HubspotTracking />
        <GoogleAnalytics />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/players" element={<Players />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/recruiters" element={<Recruiters />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/trainers" element={<Trainers />} /> {/* Add new route */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
