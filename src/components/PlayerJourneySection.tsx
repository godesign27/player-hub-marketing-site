
import { useTranslation } from "react-i18next";

const PlayerJourneySection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <img
              src="/lovable-uploads/296e0bf0-5170-4c47-b8e3-195544473e1e.png"
              alt="Soccer player"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t('playerJourney.section1.title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              {t('playerJourney.section1.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerJourneySection;
