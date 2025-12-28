import React from "react";

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 px-6">
      <h2 className="text-center text-4xl font-extrabold mb-12 text-[#1A1A2E]">
        Our Services
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-[#FF6B00]">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-2xl font-bold mb-3 text-[#1A1A2E]">
            Package Delivery
          </h3>
          <p className="text-gray-600 mb-4">
            Send documents, food, groceries, and parcels across town quickly.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-[#00C853]">✅</span>
              <span className="font-semibold text-gray-500">
                Real-time tracking
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#00C853]">✅</span>
              <span className="font-semibold text-gray-500">
                Proof of delivery
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#00C853]">✅</span>
              <span className="font-semibold text-gray-500">
                Same-day delivery
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-[#FF6B00]">
          <div className="text-6xl mb-4">👥</div>
          <h3 className="text-2xl font-bold mb-3 text-[#1A1A2E]">
            Passenger Pickup
          </h3>
          <p className="text-gray-600 mb-4">
            Safe and affordable rides to your destination.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-[#00C853]">✅</span>
              <span className="font-semibold text-gray-500">
                Verified drivers
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#00C853]">✅</span>
              <span className="font-semibold text-gray-500">GPS tracking</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#00C853]">✅</span>
              <span className="font-semibold text-gray-500">
                Cash/Card payment
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-linear-to-br from-[#FF6B00] to-[#FFD700] p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl text-white">
          <div className="text-6xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold mb-3">Combo Service</h3>
          <p className="mb-4 opacity-95">
            Our signature service - passengers AND deliveries on one trip!
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>✅</span>
              <span className="font-semibold">Maximum efficiency</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✅</span>
              <span className="font-semibold">Lower costs for all</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✅</span>
              <span className="font-semibold">Eco-friendly</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
