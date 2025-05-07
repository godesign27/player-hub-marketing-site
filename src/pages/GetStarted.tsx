
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PLAYER_FREE_PLAN_LINK, PLAYER_MONTHLY_PLAN_LINK, PLAYER_YEARLY_PLAN_LINK } from "@/constants";

const GetStarted = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t } = useTranslation();

  const getFeatures = (key: string): string[] => {
    const features = t(`getStarted.pricing.${key}.features`, { returnObjects: true });
    return Array.isArray(features) ? features : [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Banner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {t('getStarted.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('getStarted.description')}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="sm:hidden w-full max-w-xs">
            <label htmlFor="billing-tabs" className="sr-only">Select billing period</label>
            <select
              id="billing-tabs"
              value={isYearly ? "yearly" : "monthly"}
              onChange={(e) => setIsYearly(e.target.value === "yearly")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="monthly">{t('getStarted.pricing.monthly')}</option>
              <option value="yearly">{t('getStarted.pricing.yearly')}</option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex">
            <li className="w-32 focus-within:z-10">
              <button
                onClick={() => setIsYearly(false)}
                className={`inline-block w-full p-4 ${!isYearly
                  ? 'text-white bg-gray-900 hover:bg-gray-800'
                  : 'bg-white hover:text-gray-700 hover:bg-gray-50'}
                  border-r border-gray-200 rounded-s-lg focus:ring-4 focus:ring-gray-300 focus:outline-none`}
                aria-current={!isYearly ? "page" : undefined}
              >
                {t('getStarted.pricing.monthly')}
              </button>
            </li>
            <li className="w-32 focus-within:z-10">
              <button
                onClick={() => setIsYearly(true)}
                className={`inline-block w-full p-4 ${isYearly
                  ? 'text-white bg-gray-900 hover:bg-gray-800'
                  : 'bg-white hover:text-gray-700 hover:bg-gray-50'}
                  rounded-e-lg focus:ring-4 focus:ring-gray-300 focus:outline-none`}
                aria-current={isYearly ? "page" : undefined}
              >
                {t('getStarted.pricing.yearly')}
              </button>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">{t('getStarted.pricing.freePlan.title')}</h2>
              <p className="text-gray-600 mb-4">{t('getStarted.pricing.freePlan.description')}</p>
              <div className="flex items-baseline text-gray-900 mb-6">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{t('getStarted.pricing.freePlan.price')}</span>
                <span className="ml-1 text-xl text-gray-500">{isYearly ? '/year' : '/month'}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {getFeatures('freePlan').map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to={PLAYER_FREE_PLAN_LINK} className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto text-center">
              {t('hero.cta')}
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">{t('getStarted.pricing.proPlan.title')}</h2>
              <p className="text-gray-600 mb-4">{t('getStarted.pricing.proPlan.description')}</p>
              <div className="flex items-baseline text-gray-900 mb-6">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  {isYearly ? t('getStarted.pricing.proPlan.yearlyPrice') : t('getStarted.pricing.proPlan.monthlyPrice')}
                </span>
                <span className="ml-1 text-xl text-gray-500">{isYearly ? '/year' : '/month'}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {getFeatures('proPlan').map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to={isYearly ? PLAYER_YEARLY_PLAN_LINK : PLAYER_MONTHLY_PLAN_LINK} className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto text-center">
              {t('hero.cta')}
            </Link>
          </div>

          {/* Recruiter/Coach Plan */}
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2">{t('getStarted.pricing.recruiterPlan.title')}</h2>
              <p className="text-gray-600 mb-4">{t('getStarted.pricing.recruiterPlan.description')}</p>
              <div className="flex items-baseline text-gray-900 mb-6">
                <span className="text-5xl font-extrabold tracking-tight">{t('getStarted.pricing.recruiterPlan.price')}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {getFeatures('recruiterPlan').map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/" style={{ pointerEvents: "none", opacity: 0.5 }} className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-auto text-center">
              {t('hero.comingSoon')}
            </Link>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer activePage="get-started" />
    </div>
  );
};

export default GetStarted;
