import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const LaunchPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2024-02-14T00:00:00');
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotify = () => {
    toast({
      title: "Notification Set",
      description: "We'll notify you when we launch!",
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 animate-fade-up">
            Coming Soon
            <br />
            <span className="text-primary">PlayerHub Launch</span>
          </h1>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
              <div className="text-gray-600">Days</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
              <div className="text-gray-600">Hours</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
              <div className="text-gray-600">Minutes</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
              <div className="text-gray-600">Seconds</div>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're working hard to bring you the ultimate player profile platform. Stay tuned for our launch!
          </p>

          <Button
            onClick={handleNotify}
            className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            Notify Me
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LaunchPage;