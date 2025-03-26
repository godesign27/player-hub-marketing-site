
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  LockKeyhole, 
  MessageSquare, 
  ClipboardList, 
  FolderArchive, 
  Users
} from "lucide-react";

const Recruiters = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      
      {/* Hero Section with split layout and image */}
      <section className="overflow-hidden relative bg-accent">
        <div className="gap-8 pt-32 pb-20 px-4 mx-auto max-w-7xl lg:py-16 xl:grid xl:grid-cols-12">
          <div className="col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
              Discover Top Talent, <span className="text-primary">Instantly.</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Every player profile on PlayerHub includes highlight reels, performance data, and player goals—everything you need to scout smarter.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/get-started">
                <Button className="px-6 py-6 rounded-full text-base">
                  Get Your Free Recruiter Account
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden absolute top-0 right-0 w-1/3 h-full xl:block">
            <img 
              className="object-cover w-full h-full" 
              src="/lovable-uploads/ad921ee8-0906-4d20-98b0-d92a23322b43.png" 
              alt="Youth soccer player in action"
            />
          </div>
        </div>
      </section>

      {/* Key Feature: Player Profiles */}
      <section className="py-16 px-6 bg-accent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">🎥 All the Right Details. All in One Place.</h2>
          <p className="mb-8 text-lg text-gray-700">Each PlayerHub profile is packed with rich, recruiter-ready data:</p>
          <ul className="text-left max-w-xl mx-auto space-y-4 bg-white p-8 rounded-xl shadow-sm">
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
