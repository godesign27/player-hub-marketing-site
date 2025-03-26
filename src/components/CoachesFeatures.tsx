
import { Book, MessageSquareText, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CoachesFeatures = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Book className="h-7 w-7 text-primary" />,
      title: t('recruiterFeatures.customBoards.title'),
      description: t('recruiterFeatures.customBoards.description')
    },
    {
      icon: <MessageSquareText className="h-7 w-7 text-primary" />,
      title: t('recruiterFeatures.directMessaging.title'),
      description: t('recruiterFeatures.directMessaging.description')
    },
    {
      icon: <Layers3 className="h-7 w-7 text-primary" />,
      title: t('recruiterFeatures.teamAccess.title'),
      description: t('recruiterFeatures.teamAccess.description')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Coaches: {t('recruiterFeatures.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('recruiterFeatures.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 inline-flex p-3 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/coaches"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Learn More About Coach Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachesFeatures;
