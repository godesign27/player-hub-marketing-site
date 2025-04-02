
import { Dumbbell, Calendar, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TrainersFeatures = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('trainersFeatures.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('trainersFeatures.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Dumbbell className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('trainersFeatures.profile.title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t('trainersFeatures.profile.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('trainersFeatures.schedule.title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t('trainersFeatures.schedule.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CreditCard className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('trainersFeatures.payments.title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t('trainersFeatures.payments.description')}
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/trainers">
            <Button className="flex items-center gap-2">
              {t('trainersFeatures.learnMore')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainersFeatures;
