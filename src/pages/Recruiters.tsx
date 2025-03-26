
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  LockKeyhole, 
  MessageSquare, 
  ClipboardList, 
  FolderArchive, 
  Users,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Recruiters = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      
      {/* Hero Section with flex layout and carousel */}
      <section className="bg-accent pt-24 pb-12 antialiased">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-12">
          <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
            <div className="lg:max-w-xl">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-fade-up">
                  Discover Top Talent, <span className="text-primary">Instantly.</span>
                </h1>
                <p className="mt-5 text-base text-gray-600 sm:text-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  Every player profile on PlayerHub includes highlight reels, performance data, and player goals—everything you need to scout smarter.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-8 sm:flex-row animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <Link to="/get-started">
                  <Button className="w-full sm:w-auto px-6 py-6 rounded-lg text-base">
                    Get Your Free Recruiter Account
                  </Button>
                </Link>
                
                <Link to="#features">
                  <Button variant="outline" className="w-full sm:w-auto px-6 py-6 rounded-lg text-base flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    See How It Works
                  </Button>
                </Link>
              </div>

              <div className="mt-4 sm:border-t sm:border-gray-100 sm:mt-8 sm:pt-8">
                <p className="hidden text-base font-medium text-gray-500 sm:block">
                  Trusted by leading programs:
                </p>

                <div className="flex items-center mt-3">
                  <img className="w-auto h-8 md:h-10 mr-6" src="/lovable-uploads/6746630b-9c98-4ba7-8c5a-bc0d28548c6f.png" alt="University logo" />
                  <img className="w-auto h-8 md:h-10 mr-6" src="/lovable-uploads/20778281-954a-4cac-9ac5-392134c008e6.png" alt="Club logo" />
                  <img className="w-auto h-8 md:h-10" src="/lovable-uploads/4a7ad64b-21a1-47ac-a31f-de89e45864e9.png" alt="Academy logo" />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:max-w-lg xl:max-w-xl">
              <Carousel className="w-full rounded-lg overflow-hidden">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/ad921ee8-0906-4d20-98b0-d92a23322b43.png" 
                      alt="Youth soccer player in action"
                      className="w-full h-56 md:h-96 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/6e90d890-58e5-4716-bfe0-7b7137a15d2d.png" 
                      alt="Young athlete with soccer ball"
                      className="w-full h-56 md:h-96 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/5f259a50-4c80-4797-958d-2c652fc93ccf.png" 
                      alt="Player at training session"
                      className="w-full h-56 md:h-96 object-cover rounded-lg"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Key Feature: Player Profiles */}
      <section className="py-16 px-6 bg-white" id="features">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">🎥 All the Right Details. All in One Place.</h2>
          <p className="mb-8 text-lg text-gray-700">Each PlayerHub profile is packed with rich, recruiter-ready data:</p>
          <ul className="text-left max-w-xl mx-auto space-y-4 bg-accent p-8 rounded-xl shadow-sm">
            <li className="flex items-center gap-2 text-gray-700">• Match + highlight videos</li>
            <li className="flex items-center gap-2 text-gray-700">• Club and academy history</li>
            <li className="flex items-center gap-2 text-gray-700">• Stats, positions, & physical data</li>
            <li className="flex items-center gap-2 text-gray-700">• Player-written goals and mindset</li>
            <li className="flex items-center gap-2 text-gray-700">• Playing philosophy & training insights</li>
          </ul>
        </div>
      </section>

      {/* Supporting Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Powerful Tools for Recruiters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <LockKeyhole className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private Recruiter Profile</h3>
              <p className="text-gray-600">Only visible to players you message—your privacy, your strategy.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FolderArchive className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Player Boards</h3>
              <p className="text-gray-600">Create and organize boards by age, position, or recruiting class.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <MessageSquare className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Built-in Messaging</h3>
              <p className="text-gray-600">Directly message players and get email alerts when they respond.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <ClipboardList className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recruiter Notes</h3>
              <p className="text-gray-600">Keep personalized scouting notes right on each player's profile.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Share Boards</h3>
              <p className="text-gray-600">Securely share boards with your staff for collaborative scouting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Quote */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <blockquote className="text-xl italic max-w-3xl mx-auto text-gray-700">
          "We found two players through PlayerHub that we would've missed. The profile format is exactly what I wish every kid had."
          <span className="block mt-4 font-semibold">— Regional Club Scout</span>
        </blockquote>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
          <div className="space-y-6 bg-gray-50 p-8 rounded-xl">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Q: What kind of information is in a player profile?</h4>
              <p className="text-gray-600 mt-1">A: Video highlights, stats, goals, club background, and more.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Q: Is PlayerHub really free for recruiters?</h4>
              <p className="text-gray-600 mt-1">A: Yes, 100% free. No credit card required.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Q: Can players message me first?</h4>
              <p className="text-gray-600 mt-1">A: No, only players you message can see your profile and reply.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Q: Can I collaborate with other recruiters?</h4>
              <p className="text-gray-600 mt-1">A: Absolutely! Share boards securely with coaching staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Start scouting smarter, faster, and more confidently.</h2>
          <Link to="/get-started">
            <Button variant="secondary" className="px-6 py-6 rounded-full text-primary font-semibold hover:bg-gray-200">
              Create Your Free Recruiter Account
            </Button>
          </Link>
        </div>
      </section>

      <Footer activePage="recruiters" />
    </div>
  );
};

export default Recruiters;
