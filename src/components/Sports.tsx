
import { InfoIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const Sports = () => {
  const { t } = useTranslation();
  
  const sports = [
    {
      icon: "/lovable-uploads/2bf2332d-2dc4-4bc3-bf4d-a94ef09b00d3.png",
      name: "Soccer",
      status: t('sports.active'),
      statusClass: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    },
    {
      icon: "/lovable-uploads/2a0602a7-84c4-409f-9cb5-f20160776471.png",
      name: "Basketball",
      status: t('sports.comingSoon'),
      statusClass: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      icon: "/lovable-uploads/85bee935-342a-4f7b-8c9e-f6c6f7e35cb4.png",
      name: "Hockey",
      status: t('sports.comingSoon'),
      statusClass: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      icon: "/lovable-uploads/e6bf3dac-c074-4484-8dcb-2a7267697243.png",
      name: "Volleyball",
      status: t('sports.comingSoon'),
      statusClass: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      icon: "/lovable-uploads/72e38585-d9b9-4032-9b81-0fdf47918105.png",
      name: "American Football",
      status: t('sports.comingSoon'),
      statusClass: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      icon: "/lovable-uploads/e695e586-b667-44f4-9526-cc4d1b855975.png",
      name: "Baseball",
      status: t('sports.comingSoon'),
      statusClass: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      icon: "/lovable-uploads/7389daa2-515a-46bd-997f-b0f942c0c1d5.png",
      name: "Cricket",
      status: t('sports.comingSoon'),
      statusClass: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      icon: "/lovable-uploads/6d368769-2467-4db9-a27b-ff3d287ef243.png",
      name: "Tennis",
      status: t('sports.comingSoon'),
      statusClass: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    }
  ];

  return (
    <section id="sports" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('sports.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t('sports.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 p-6 rounded-xl bg-gray-50"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-lg">
                <img
                  src={sport.icon}
                  alt={`${sport.name} icon`}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{sport.name}</h3>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${sport.statusClass}`}>
                {sport.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 flex items-center gap-2 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
          <InfoIcon className="h-4 w-4" />
          {t('sports.futureUpdate')}
        </div>
      </div>
    </section>
  );
};

export default Sports;
