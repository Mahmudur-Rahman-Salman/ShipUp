import React from "react";
import { Link } from "react-router";

const CtaSection = () => {
  return (
    <section className="py-20 px-6 bg-linear-to-br from-[#FF6B00] to-[#FFD700] text-white text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Ready to Get Started?
      </h2>
      <p className="text-xl mb-8 opacity-95">
        We're launching soon! Be the first to book when we go live.
      </p>
      <Link
        to="/book"
        className="inline-block bg-white text-[#FF6B00] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition"
      >
        Book Your First Trip
      </Link>
    </section>
  );
};

export default CtaSection;
