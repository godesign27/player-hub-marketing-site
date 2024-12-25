import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Banner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Your Future, Your Profile, Your Way
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a player profile that truly reflects your passion and skills. In just a few minutes, 
            you can join PlayerHub and start telling your story. Ready to get started? Let's go!
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="sm:hidden w-full max-w-xs">
            <label htmlFor="billing-tabs" className="sr-only">Select billing period</label>
            <select 
              id="billing-tabs" 
              value={isYearly ? "yearly" : "monthly"}
              onChange={(e) => setIsYearly(e.target.value === "yearly")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex">
            <li className="w-32 focus-within:z-10">
              <button
                onClick={() => setIsYearly(false)}
                className={`inline-block w-full p-4 ${!isYearly 
                  ? 'text-white bg-gray-900 hover:bg-gray-800' 
                  : 'bg-white hover:text-gray-700 hover:bg-gray-50'} 
                  border-r border-gray-200 rounded-s-lg focus:ring-4 focus:ring-gray-300 focus:outline-none`}
                aria-current={!isYearly ? "page" : undefined}
              >
                Monthly
              </button>
            </li>
            <li className="w-32 focus-within:z-10">
              <button
                onClick={() => setIsYearly(true)}
                className={`inline-block w-full p-4 ${isYearly 
                  ? 'text-white bg-gray-900 hover:bg-gray-800' 
                  : 'bg-white hover:text-gray-700 hover:bg-gray-50'} 
                  rounded-e-lg focus:ring-4 focus:ring-gray-300 focus:outline-none`}
                aria-current={isYearly ? "page" : undefined}
              >
                Yearly
              </button>
            </li>
          </ul>
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
                <span className="ml-1 text-xl text-gray-500">{isYearly ? '/year' : '/month'}</span>
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
            <Link to="/get-started" className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto text-center">
              Sign Up and Create Profile
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">Pro</h2>
              <p className="text-gray-600 mb-4">Best if you want to showcase your story and communicate with Recruiters and Coaches.</p>
              <div className="flex items-baseline text-gray-900 mb-6">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{isYearly ? '50' : '6'}</span>
                <span className="ml-1 text-xl text-gray-500">{isYearly ? '/year' : '/month'}</span>
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
            <Link to="/get-started" className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto text-center">
              Sign Up and Create Profile
            </Link>
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
            <Link to="/get-started" className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto text-center">
              Sign Up and Create Profile
            </Link>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer activePage="get-started" />
    </div>
  );
};

export default GetStarted;