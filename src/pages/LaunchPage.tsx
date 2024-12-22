import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LaunchPage = () => {
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2025-02-14T00:00:00');
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const handleNotifyMe = () => {
    toast({
      title: "Notification Set!",
      description: "We'll notify you when PlayerHub launches.",
    });
  };

  return (
    <div className="min-h-screen bg-[#2226AA] text-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Story. Your Sport. Your Future.
            <br />
            <span className="text-2xl md:text-4xl font-normal">
              Launching February 14th, 2025
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200">
            PlayerHub launches to help youth athletes showcase their journey and connect with recruiters, coaches and trainers.
          </p>

          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/b284e2dd-cb2e-45e0-9f71-50ecc9952ac8.png" 
              alt="Launch Illustration" 
              className="w-full max-w-md"
            />
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>

          <Button
            onClick={handleNotifyMe}
            className="bg-white text-[#2226AA] hover:bg-gray-100"
          >
            <Bell className="mr-2 h-4 w-4" />
            Notify me when we launch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;