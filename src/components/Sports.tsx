import { CircleDot, Dumbbell, Bike } from "lucide-react";
import { InfoIcon } from "lucide-react";

const sports = [
  {
    icon: <CircleDot className="h-6 w-6" />,
    name: "Soccer",
    active: true
  },
  {
    icon: <CircleDot className="h-6 w-6" />,
    name: "Basketball"
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    name: "Hockey"
  },
  {
    icon: <Bike className="h-6 w-6" />,
    name: "Volleyball"
  }
];

const Sports = () => {
  return (
    <section id="sports" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            For Soccer players.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We currently support soccer players across the globe. More sports coming soon!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sports.map((sport, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl text-center transition-all ${
                sport.active
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-center mb-2">
                {sport.icon}
              </div>
              <span className="font-medium">{sport.name}</span>
            </div>
          ))}
        </div>

        <div className="p-4 mt-8 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <span className="flex items-center gap-2">
            <InfoIcon className="h-4 w-4" />
            Coming soon. More sports will be added in 2025-2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default Sports;