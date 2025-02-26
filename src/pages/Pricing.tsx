
import React from "react";
import FAQ from "@/components/FAQ";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 text-blue-600">Your Story. Your Sport. Your Future. Launching March 21st, 2025</h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose the right plan for&nbsp;you
            </p>
          </div>
          
          {/* Pricing cards will go here */}
          <div className="mt-16 flex justify-center">
            {/* Add your pricing cards here */}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Pricing;
