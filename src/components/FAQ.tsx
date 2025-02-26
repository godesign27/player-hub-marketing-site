
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12">
          {t('faq.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {/* General Use and Features */}
          <Accordion type="single" collapsible className="bg-white rounded-lg">
            <AccordionItem value="section-1" className="border-none">
              <AccordionTrigger className="text-xl font-semibold text-left px-4">
                {t('faq.sections.general.title')}
              </AccordionTrigger>
              <AccordionContent className="px-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold">{t('faq.sections.general.questions.security.question')}</h3>
                  <p className="text-gray-600">
                    {t('faq.sections.general.questions.security.answer')}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">{t('faq.sections.general.questions.dataProtection.question')}</h3>
                  <p className="text-gray-600">
                    {t('faq.sections.general.questions.dataProtection.answer')}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">{t('faq.sections.general.questions.cancellation.question')}</h3>
                  <p className="text-gray-600">
                    {t('faq.sections.general.questions.cancellation.answer')}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Technical and Support */}
          <Accordion type="single" collapsible className="bg-white rounded-lg">
            <AccordionItem value="section-2" className="border-none">
              <AccordionTrigger className="text-xl font-semibold text-left px-4">
                Technical and Support
              </AccordionTrigger>
              <AccordionContent className="px-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold">What do I do if I forget my password?</h3>
                  <p className="text-gray-600">
                    Click "Forgot Password" on the login page and follow the instructions to reset your password via email.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">How do I report a bug or technical issue?</h3>
                  <p className="text-gray-600">
                    Please contact our support team via the "Contact" page in the footer or email us at help@playerhub.com.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Does PlayerHub work on all devices?</h3>
                  <p className="text-gray-600">
                    PlayerHub is optimized for web use on desktop and mobile browsers. Our mobile app is set to launch by the end of 2025.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Billing and Payments */}
          <Accordion type="single" collapsible className="bg-white rounded-lg">
            <AccordionItem value="section-3" className="border-none">
              <AccordionTrigger className="text-xl font-semibold text-left px-4">
                Billing and Payments
              </AccordionTrigger>
              <AccordionContent className="px-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold">What is your refund policy?</h3>
                  <p className="text-gray-600">
                    We do not offer refunds. If you cancel your plan before the next renewal cycle, you will retain access to paid features until the end of your subscription period. After expiration, paid features and data will no longer be accessible.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Will I be charged sales tax?</h3>
                  <p className="text-gray-600">
                    Yes. State and local sales tax will be applied based on your billing address.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Can I switch between monthly and annual billing?</h3>
                  <p className="text-gray-600">
                    Yes. You can change your billing cycle anytime in your player profile's billing area. Changes take effect on your next billing date.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Future Updates and Features */}
          <Accordion type="single" collapsible className="bg-white rounded-lg">
            <AccordionItem value="section-4" className="border-none">
              <AccordionTrigger className="text-xl font-semibold text-left px-4">
                Future Updates and Features
              </AccordionTrigger>
              <AccordionContent className="px-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold">Do we have a mobile app?</h3>
                  <p className="text-gray-600">
                    Not yet. We plan to launch our mobile app by the end of 2025.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">When will other sports launch?</h3>
                  <p className="text-gray-600">
                    We are planning to launch Football and Basketball by the summer of 2025. Additional sports will follow in the Fall of 2025.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Will PlayerHub be available in other languages?</h3>
                  <p className="text-gray-600">
                    Yes! We aim to support eight languages by the end of 2025 to make PlayerHub accessible worldwide.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
