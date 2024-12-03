import { MessageSquare, Users, Search } from "lucide-react";

const RecruiterFeatures = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recruiters and Coaches Tailored Talent Management at Your Fingertips
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Efficiently manage your recruitment process with our comprehensive tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Search className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Custom Boards for Seamless Recruit Management
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Create custom boards to organize and track your recruitment pipeline effectively.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <MessageSquare className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Direct Messaging for Instant Connections
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Connect directly with athletes through our secure messaging system.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Collaborative Team Access
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Share profiles and notes with your coaching staff and team members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterFeatures;