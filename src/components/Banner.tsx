
import React from "react";
import WaitlistForm from "./WaitlistForm";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full bg-[#1E429F] py-8 px-4 text-white" style={{ marginTop: '64px' }}>
      <div className="max-w-7xl mx-auto text-center">
        <img 
          src="/lovable-uploads/f97efc51-6f9a-4aa2-a426-4e61fd8bb014.png" 
          alt="Rocket launch illustration" 
          className="mx-auto h-32 md:h-40 mb-8"
        />
        <h2 className="text-2xl md:text-3xl font-normal mb-2">
          {t('banner.title')}
        </h2>
        <p className="text-lg md:text-xl mb-8">
          {t('banner.description')}
        </p>
        <WaitlistForm />
      </div>
    </div>
  );
};

export default Banner;
