import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Future, Your Profile, Your Way</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a player profile that truly reflects your passion and skills. In just a few minutes, 
            you can join PlayerHub and start telling your story. Ready to get started? Let's go!
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-[#111928] text-white px-6 py-2 rounded-lg">Monthly</button>
          <button className="bg-gray-100 text-gray-900 px-6 py-2 rounded-lg">Yearly</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">Starter (Free)</h2>
              <p className="text-gray-600 mb-4">Great to get you seen by recruiters, trainers, coaches, peers and more.</p>
              <div className="flex items-baseline text-gray-900 mb-6">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">0</span>
                <span className="ml-1 text-xl text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Player Profile</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Player Handle</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Manage your Profile: 1 Video and 2 Images</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto">
              Get started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">Pro</h2>
              <p className="text-gray-600 mb-4">Best if you want to showcase your story and communicate with Recruiters and Coaches.</p>
              <div className="flex items-baseline text-gray-900 mb-6">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">4</span>
                <span className="ml-1 text-xl text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Player Profile</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Player Handle</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Manage your Profile: 8 Videos and 40 Images</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Unlimited Recruiter messages</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">No Ad banners</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto">
              Get started
            </button>
          </div>

          {/* Recruiter/Coach Plan */}
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">Recruiter/Coach</h2>
              <p className="text-gray-600 mb-4">Everything you need to find and communicate with players.</p>
              <div className="flex items-baseline text-gray-900 mb-6">
                <span className="text-5xl font-extrabold tracking-tight">Free</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Personalized Recruiter Dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Player Board Lists</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Unlimited Player messages</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Coach/Recruiter profile</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto">
              Get started
            </button>
          </div>
        </div>
      </div>
      <Footer activePage="get-started" />
    </div>
  );
};

export default GetStarted;