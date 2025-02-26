
import { UserCircle, Upload, Users, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <UserCircle className="h-8 w-8 text-primary" />,
      title: t('features.personalizedProfile.title'),
      description: t('features.personalizedProfile.description')
    },
    {
      icon: <Upload className="h-8 w-8 text-primary" />,
      title: t('features.uploadMedia.title'),
      description: t('features.uploadMedia.description')
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('features.expandNetwork.title'),
      description: t('features.expandNetwork.description')
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: t('features.messageRecruiters.title'),
      description: t('features.messageRecruiters.description')
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
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
              <p className="text-sm sm:text-base text-gray-600">
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
