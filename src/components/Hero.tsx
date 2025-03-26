
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative overflow-hidden bg-accent pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            {t('hero.title')}
            <br />
            <span className="text-primary">{t('hero.subtitle')}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t('hero.description')}
          </p>
          <button className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all transform hover:scale-105 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="mt-16 animate-fade-up flex justify-center" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full max-w-[130%] max-w-4xl">
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/sign/playerhub/Flux_Dev_A_highly_detailed_photorealistic_image_of_a_mens_socc_1.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJodWIvRmx1eF9EZXZfQV9oaWdobHlfZGV0YWlsZWRfcGhvdG9yZWFsaXN0aWNfaW1hZ2Vfb2ZfYV9tZW5zX3NvY2NfMS5qcGVnIiwiaWF0IjoxNzQzMDIzMDM1LCJleHAiOjE3NzQ1NTkwMzV9.8oKr3cLBv_MsLBksANy5K8siFqqBmjdZ0RgGo2Qtr6A"
              alt="PlayerHub Platform Preview"
              className="w-full rounded-lg scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
