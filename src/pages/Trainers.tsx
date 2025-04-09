
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  ArrowRight, 
  Dumbbell, 
  Calendar, 
  CreditCard, 
  Video,
  Image as ImageIcon,
  Layers,
  BadgePercent,
  Users
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Newsletter from "@/components/Newsletter";

const Trainers = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                {t('trainers.hero.badge')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                {t('trainers.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                {t('trainers.hero.description')}
              </p>
              <Button size="lg" className="font-medium">
                {t('trainers.hero.cta')}
              </Button>
            </div>
            <div className="animate-fade-in md:flex justify-end hidden">
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/sign/playerhub/trainer-sessions.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJodWIvdHJhaW5lci1zZXNzaW9ucy5wbmciLCJpYXQiOjE3NDQyMjU5MDIsImV4cCI6MTc3NTc2MTkwMn0.oX56ITjl-I2GDEZlGBiYNl2NCOFVXtNZsLZCAdXGxs4"
                alt="Trainer dashboard"
                className="rounded-lg shadow-xl max-w-full md:max-w-[125%] lg:max-w-[125%] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Profile Feature Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('trainers.profile.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('trainers.profile.description')}
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <Users className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{t('trainers.profile.features.bios')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Video className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{t('trainers.profile.features.videos')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <ImageIcon className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{t('trainers.profile.features.testimonials')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Layers className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{t('trainers.profile.features.customize')}</span>
                </li>
              </ul>
              
              <p className="mt-6 text-gray-600">
                {t('trainers.profile.conclusion')}
              </p>
            </div>
            <div className="md:order-1">
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/sign/playerhub/trainer-sessions.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJodWIvdHJhaW5lci1zZXNzaW9ucy5wbmciLCJpYXQiOjE3NDQyMjU0MzQsImV4cCI6MTc3NTc2MTQzNH0.7yQEX3exfvScl-IcwmqwS1Vygrid8EnBrQ9LOFMZ5ek" 
                alt="Trainer profile example"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Sessions Feature Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('trainers.sessions.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('trainers.sessions.description')}
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <Calendar className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{t('trainers.sessions.features.create')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <ArrowRight className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{t('trainers.sessions.features.urls')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <ImageIcon className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{t('trainers.sessions.features.photos')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Users className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{t('trainers.sessions.features.discover')}</span>
                </li>
              </ul>
              
              <p className="mt-6 text-gray-600">
                {t('trainers.sessions.conclusion')}
              </p>
            </div>
            <div className="flex justify-end">
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/sign/playerhub/Image%20Placeholder.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJodWIvSW1hZ2UgUGxhY2Vob2xkZXIucG5nIiwiaWF0IjoxNzQzNjA5MzEwLCJleHAiOjE3NzUxNDUzMTB9.4qX5MYoCDuI0sVObV111kMXtssoPPecYfT00JIZiAig" 
                alt="Session management"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('trainers.features.title')}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <CreditCard className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('trainers.features.payments.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('trainers.features.payments.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <BadgePercent className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('trainers.features.pricing.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('trainers.features.pricing.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('trainers.features.trainers.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('trainers.features.trainers.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Video className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('trainers.features.videos.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('trainers.features.videos.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <ImageIcon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('trainers.features.portfolio.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('trainers.features.portfolio.description')}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('trainers.why.title')}</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('trainers.why.description')}</p>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-medium italic mb-6 text-gray-800">
            "{t('trainers.testimonial.quote')}"
          </h2>
          <p className="text-gray-600 font-medium">
            {t('trainers.testimonial.author')}
          </p>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {t('trainers.faq.title')}
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('trainers.faq.questions.payments.question')}
              </h3>
              <p className="text-gray-600">
                {t('trainers.faq.questions.payments.answer')}
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('trainers.faq.questions.booking.question')}
              </h3>
              <p className="text-gray-600">
                {t('trainers.faq.questions.booking.answer')}
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('trainers.faq.questions.multiple.question')}
              </h3>
              <p className="text-gray-600">
                {t('trainers.faq.questions.multiple.answer')}
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('trainers.faq.questions.find.question')}
              </h3>
              <p className="text-gray-600">
                {t('trainers.faq.questions.find.answer')}
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('trainers.faq.questions.cost.question')}
              </h3>
              <p className="text-gray-600">
                {t('trainers.faq.questions.cost.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('trainers.finalCta.title')}
          </h2>
          <Button size="lg" className="font-medium">
            {t('trainers.finalCta.button')}
          </Button>
        </div>
      </section>
      
      <Newsletter />
      <Footer activePage="trainers" />
    </div>
  );
};

export default Trainers;
