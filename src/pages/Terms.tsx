import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: December, 2024</p>
            
            <p className="mb-6">Welcome to PlayerHub! These Terms of Use ("Terms") govern your use of the PlayerHub.com website and related mobile applications (collectively, the "Services") operated by Player Hub, Inc. ("we," "us," or "our"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Services.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Eligibility</h2>
            <p className="mb-6">By using the Services, you represent that you are at least 13 years of age. If you are under 18, you may only use the Services with the involvement of a parent or guardian. You must also have the legal capacity to enter into these Terms.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Account Registration</h2>
            <p className="mb-6">To access certain features of the Services, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information as needed. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Use of the Services</h2>
            <p className="mb-4">You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use the Services in any way that violates any applicable law or regulation.</li>
              <li>Use the Services for any unauthorized or fraudulent purpose.</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            </ul>
            <p className="mb-6">We reserve the right to investigate and take appropriate legal action against anyone who, in our sole discretion, violates this provision.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Subscription and Fees</h2>
            <p className="mb-6">PlayerHub offers both free and paid subscription options. Users may choose between monthly or yearly billing cycles for paid subscriptions. By selecting a paid subscription, you agree to pay the applicable fees in accordance with the billing terms in effect at the time of your subscription. All fees are non-refundable except as required by law.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Content Ownership and Rights</h2>
            <p className="mb-4">User Content: By posting or submitting content through the Services, you grant us a non-exclusive, worldwide, royalty-free, fully paid-up, transferable, sublicensable license to use, reproduce, distribute, prepare derivative works of, display, and perform your content in connection with the operation of the Services and our business.</p>
            <p className="mb-6">PlayerHub Content: All content available on the Services, including text, graphics, logos, images, and software, is the property of Player Hub, Inc. or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any PlayerHub content without our prior written permission.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Privacy</h2>
            <p className="mb-6">Your use of the Services is also governed by our Privacy Policy, which explains how we collect, use, and disclose information about you. By using the Services, you consent to our collection and use of your information as described in the Privacy Policy.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Third-Party Services</h2>
            <p className="mb-6">The Services may contain links to third-party websites or services that are not owned or controlled by PlayerHub. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that PlayerHub shall not be liable for any damage or loss caused by or in connection with the use of any such third-party websites or services.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Termination</h2>
            <p className="mb-6">We may terminate or suspend your account and access to the Services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or the Services. You may terminate your account at any time by contacting us or using the account settings provided within the Services. Upon termination, your right to use the Services will immediately cease.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Disclaimers and Limitation of Liability</h2>
            <p className="mb-6">The Services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. PlayerHub does not warrant that the Services will be uninterrupted, error-free, or secure. To the fullest extent permitted by law, PlayerHub disclaims all warranties, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Indemnification</h2>
            <p className="mb-6">You agree to defend, indemnify, and hold harmless PlayerHub, its affiliates, licensors, and service providers, and their respective officers, directors, employees, contractors, agents, licensors, and suppliers, from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to any violation of these Terms or your use of the Services.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p className="mb-6">These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. You agree to submit to the personal and exclusive jurisdiction of the courts located within California for the resolution of any disputes arising out of or relating to these Terms or the Services.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">12. Changes to the Terms</h2>
            <p className="mb-6">We may revise these Terms from time to time in our sole discretion. We will notify you of any material changes by posting the new Terms on the Services. You are encouraged to review these Terms periodically. Your continued use of the Services after any changes constitutes your acceptance of the revised Terms.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">13. Contact Information</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
            <p className="mb-6">Email: help@playerhub.com</p>
          </div>
        </div>
      </main>
      <Footer activePage="terms" />
    </div>
  );
};

export default Terms;