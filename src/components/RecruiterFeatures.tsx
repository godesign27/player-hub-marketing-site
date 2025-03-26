import { MessageSquare, Users, Search, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RecruiterFeatures = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('recruiterFeatures.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('recruiterFeatures.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Search className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('recruiterFeatures.customBoards.title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t('recruiterFeatures.customBoards.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <MessageSquare className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('recruiterFeatures.directMessaging.title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t('recruiterFeatures.directMessaging.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('recruiterFeatures.teamAccess.title')}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t('recruiterFeatures.teamAccess.description')}
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/recruiters">
            <Button className="flex items-center gap-2">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecruiterFeatures;
