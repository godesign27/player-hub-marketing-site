import { UserCircle, Upload, Users, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <UserCircle className="h-8 w-8 text-primary" />,
    title: "Personalized Player Profile",
    description: "Create your unique digital identity showcasing your achievements, skills, and journey."
  },
  {
    icon: <Upload className="h-8 w-8 text-primary" />,
    title: "Upload photos and videos",
    description: "Share your best moments, training sessions, and match highlights with the community."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expand your Network",
    description: "Connect with coaches, recruiters, and fellow athletes to grow your opportunities."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Message with Recruiters",
    description: "Direct communication with scouts and coaches interested in your talent."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The first ever athlete managed player profile.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take control of your sporting journey with our comprehensive platform designed for athletes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg group"
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;