
import { useState } from "react";
import { Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('newsletter.success'),
      description: t('newsletter.successMessage'),
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Bell className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('newsletter.description')}
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              {t('newsletter.button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
