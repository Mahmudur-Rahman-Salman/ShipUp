import React from "react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-6">
      <h2 className="text-center text-4xl font-extrabold mb-12 text-[#1A1A2E]">
        Simple Pricing
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl text-center shadow-lg border-2 border-[#F8F9FA] transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-[#1A1A2E]">
            Package Delivery
          </h3>
          <p className="text-5xl font-black text-[#FF6B00] my-6">৳500</p>
          <p className="text-gray-500">
            From ৳500
            <br />
            Based on distance
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl text-center shadow-lg border-2 border-[#FF6B00] transition-transform scale-105">
          <h3 className="text-2xl font-bold mb-4 text-[#1A1A2E]">
            Passenger Ride
          </h3>
          <p className="text-5xl font-black text-[#FF6B00] my-6">৳300</p>
          <p className="text-gray-500">
            From ৳300
            <br />
            Per seat, shared ride
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl text-center shadow-lg border-2 border-[#F8F9FA] transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-[#1A1A2E]">
            Combo Booking
          </h3>
          <p className="text-5xl font-black text-[#FF6B00] my-6">15% OFF</p>
          <p className="text-gray-500">
            Discount
            <br />
            When you book both!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
