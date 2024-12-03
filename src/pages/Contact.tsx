import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex flex-col items-center px-4 py-16 bg-white">
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

        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Let us know how we can help you"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Send message
          </button>
        </form>
      </main>
      <Footer activePage="contact" />
    </div>
  );
};

export default Contact;