
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardList, MessageSquare, Users, UserCircle, Bell, FileText, FolderOpen, Share2, ArrowRight, CheckCircle2 } from "lucide-react";
import FAQ from "@/components/FAQ";

const Coaches = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      
      {/* Hero Section with flex layout */}
      <section className="bg-accent pt-24 pb-12 antialiased">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-12">
          <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
            <div className="lg:max-w-xl">
              <div>
                <Badge variant="success" className="mb-4">Coaches</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-fade-up">
                  Build Smarter Teams. <span className="text-primary">Manage with Precision.</span>
                </h1>
                
                <p className="mt-4 text-lg text-gray-600 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  From evaluating talent to finalizing your roster, PlayerHub helps coaches organize, track, and develop players like never before.
                </p>
                
                <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <Button size="lg" className="flex items-center gap-2">
                    <span>Create Your Free Coach Account</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/sign/playerhub/player-profile-recruiter.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJodWIvcGxheWVyLXByb2ZpbGUtcmVjcnVpdGVyLnBuZyIsImlhdCI6MTc0MzAyMjk2MCwiZXhwIjoxNzc0NTU4OTYwfQ.1qaEB9v9xU9ZB98ZDFLv83F6Xy49iGzwsr_hA9xY_Hw" 
                  alt="Coach Dashboard" 
                  className="w-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Player Profiles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/sign/playerhub/player-profile-recruiter.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJodWIvcGxheWVyLXByb2ZpbGUtcmVjcnVpdGVyLnBuZyIsImlhdCI6MTc0Mjk5NDEzMCwiZXhwIjoxNzc0NTMwMTMwfQ.r_3Ds6Xsc7fdOKgRY1omwdStknsmlDquCni3zm3GCt0" 
                  alt="Player Profile Dashboard" 
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">All the Right Details. All in One Place.</h2>
              <p className="text-lg text-gray-700 mb-6">
                Each player profile gives you a full-picture view of the athlete—not just their stats.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Match + highlight videos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Academy and club history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Stats, positions, & physical attributes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Player-written goals & mindset</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Methodology, playing philosophy & training insights</span>
                </li>
              </ul>
              
              <p className="mt-6 text-lg italic text-gray-700">
                No fluff. Just the intel you need to assess fit, development needs, and growth potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organize by Recruiting, Pools & Teams */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Coach Boards That Match How You Actually Work</h2>
              <p className="text-lg text-gray-700 mb-6">
                Move players through the evaluation process with three flexible board types:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold">Recruiting Boards</h3>
                  <p>Track athletes you're interested in scouting.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold">Player Pools</h3>
                  <p>Organize tryout groups or evaluate potential team fits.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold">Team Boards</h3>
                  <p>Finalize your rosters when you're ready to commit.</p>
                </div>
              </div>
              
              <p className="mt-6 text-lg italic text-gray-700">
                Drag and drop between boards as your decisions evolve. Think of it as your digital war room.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/107115a9-1724-4d7a-8e27-e5c8a1eaab98.png" 
                  alt="Coach Boards" 
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Everything You Need as a Coach</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-accent p-6 rounded-xl shadow-sm">
              <UserCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private Coach Profile</h3>
              <p>Only visible to players you contact. No distractions or unwanted messages.</p>
            </div>
            
            <div className="bg-accent p-6 rounded-xl shadow-sm">
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">In-App Messaging with Alerts</h3>
              <p>Send direct messages and get email notifications when players reply.</p>
            </div>
            
            <div className="bg-accent p-6 rounded-xl shadow-sm">
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Player Notes</h3>
              <p>Add coaching insights, development plans, or feedback for each player.</p>
            </div>
            
            <div className="bg-accent p-6 rounded-xl shadow-sm">
              <FolderOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unlimited Boards</h3>
              <p>Run multiple age groups or programs at once—without limits.</p>
            </div>
            
            <div className="bg-accent p-6 rounded-xl shadow-sm">
              <Share2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Share Boards with Staff</h3>
              <p>Loop in your assistants or directors with secure board-sharing.</p>
            </div>
            
            <div className="bg-accent p-6 rounded-xl shadow-sm">
              <Bell className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Why Coaches Love Us</h3>
              <p>Private profiles, organize tryouts, track development, communicate with purpose—all free!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Bring structure to your chaos.</h2>
          <Button size="lg" className="flex items-center gap-2 mx-auto">
            <span>Start building smarter teams—free for coaches</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer activePage="coaches" />
    </div>
  );
};

export default Coaches;
