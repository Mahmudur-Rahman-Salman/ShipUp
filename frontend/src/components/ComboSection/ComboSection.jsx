import React from "react";

const ComboSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <div className="p-1 rounded-[40px] shadow-2xl bg-linear-to-br from-[#FF6B00] to-[#FFD700]">
        <div className="bg-white rounded-[38px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="bg-orange-100 text-[#FF6B00] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              Signature Service
            </span>
            <h2 className="text-3xl font-bold mt-4 text-[#1A1A2E]">
              The ShipUp Combo
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our most popular option. Perfect for business owners who need to
              deliver products and get to their destination simultaneously.{" "}
              <strong>Save up to 40%</strong> on fare costs.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 font-semibold text-[#00C853]">
                ✓ Priority Pickup
              </li>
              <li className="flex items-center gap-3 font-semibold text-[#00C853]">
                ✓ Real-time multi-tracking
              </li>
            </ul>
          </div>
          <div className="bg-[#F8F9FA] rounded-3xl p-6 border-2 border-dashed border-orange-200">
            <p className="text-sm font-bold text-gray-400 mb-2 uppercase">
              Estimate
            </p>
            <div className="text-5xl font-black text-[#1A1A2E]">৳3,500</div>
            <p className="text-xs text-gray-400 mt-2 italic">
              Lekki Phase 1 → Ikeja
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;
