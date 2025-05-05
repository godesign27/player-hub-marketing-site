
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HubspotContactForm from "@/components/HubspotContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex flex-col items-center px-4 py-16 bg-gray-50">
        <div className="w-full max-w-3xl mx-auto text-center mb-12 mt-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or need assistance? We're here to help.
            Whether you're a player, coach, recruiter, or just curious about our
            platform, don't hesitate to reach out. Our team is dedicated to
            providing you with the support and information you need to make the
            most of your experience.
          </p>
        </div>

        <HubspotContactForm />
      </main>
      <Footer activePage="contact" />
    </div>
  );
};

export default Contact;
