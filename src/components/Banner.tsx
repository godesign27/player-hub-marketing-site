import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-[#1E429F] py-8 px-4 text-white" style={{ marginTop: '64px' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-normal mb-2">
          Your Story. Your Sport. Your Future. Launching February 14th, 2025
        </h2>
        <p className="text-lg md:text-xl">
          PlayerHub launches to help youth athletes showcase their journey and connect with recruiters, coaches and trainers.
        </p>
      </div>
    </div>
  );
};

export default Banner;