import React from "react";

const HowItWorkSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#1A1A2E] text-white">
      <h2 className="text-center text-4xl font-extrabold mb-12">
        How SholaAde Works
      </h2>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4">
        <div className="text-center p-6 bg-[#16213E] rounded-3xl min-w-50 flex-1 max-w-55">
          <div className="w-12 h-12 bg-[#FF6B00] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold">
            1
          </div>
          <h3 className="text-xl font-bold mb-2">Book Online</h3>
          <p className="text-gray-300 text-sm">
            Request a delivery or ride through our web app
          </p>
        </div>

        <div className="text-4xl text-[#FF6B00] hidden md:block">→</div>
        <div className="text-4xl text-[#FF6B00] md:hidden rotate-90">→</div>

        <div className="text-center p-6 bg-[#16213E] rounded-3xl min-w-50 flex-1 max-w-55">
          <div className="w-12 h-12 bg-[#FF6B00] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold">
            2
          </div>
          <h3 className="text-xl font-bold mb-2">We Pick Up</h3>
          <p className="text-gray-300 text-sm">
            Our driver picks up passengers at Point A
          </p>
        </div>

        <div className="text-4xl text-[#FF6B00] hidden md:block">→</div>
        <div className="text-4xl text-[#FF6B00] md:hidden rotate-90">→</div>

        <div className="text-center p-6 bg-[#16213E] rounded-3xl min-w-50 flex-1 max-w-55">
          <div className="w-12 h-12 bg-[#FF6B00] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold">
            3
          </div>
          <h3 className="text-xl font-bold mb-2">Drop & Collect</h3>
          <p className="text-gray-300 text-sm">
            Drop passengers, pick up packages at Point B
          </p>
        </div>

        <div className="text-4xl text-[#FF6B00] hidden md:block">→</div>
        <div className="text-4xl text-[#FF6B00] md:hidden rotate-90">→</div>

        <div className="text-center p-6 bg-[#16213E] rounded-3xl min-w-50 flex-1 max-w-55">
          <div className="w-12 h-12 bg-[#FF6B00] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold">
            4
          </div>
          <h3 className="text-xl font-bold mb-2">Final Delivery</h3>
          <p className="text-gray-300 text-sm">
            Deliver packages with remaining passengers
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
