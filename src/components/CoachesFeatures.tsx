
import { ClipboardCheck, MessageSquare, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CoachesFeatures = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Coaches: Build Smarter Teams. Manage with Precision.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From evaluating talent to finalizing your roster, PlayerHub helps coaches organize, track, and develop players like never before.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <ClipboardCheck className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Rich Player Profiles
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Each player profile gives you a full-picture view of the athlete—not just their stats. Get videos, history, stats, and playing philosophy.
            </p>
          </div>

          <div className="bg-accent p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Organize by Teams & Pools
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Move players through the evaluation process with flexible board types for recruiting, player pools, and finalized team rosters.
            </p>
          </div>

          <div className="bg-accent p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <MessageSquare className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Direct Communication
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Send direct messages and get email notifications when players reply. Keep your coach profile private by default.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/coaches">
            <Button className="flex items-center gap-2">
              Learn More
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachesFeatures;
